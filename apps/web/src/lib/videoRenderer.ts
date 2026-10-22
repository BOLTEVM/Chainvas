"use client";

import type { FFmpeg } from "@ffmpeg/ffmpeg";
import {
    CompositionSettings,
    Layer,
    RenderOptions,
    isLayerActiveAt,
    layerMediaTime,
    visibleLayers,
} from "@/app/video/types";

/**
 * Offline renderer for the video editor.
 *
 * Every frame is drawn to a 2D canvas at composition resolution, so video
 * layers are captured frame-accurately (DOM screenshots via html-to-image
 * cannot see <video> contents and were capturing the wrong element). The
 * frames are then muxed – together with the audio of every unmuted
 * VIDEO/AUDIO layer – by ffmpeg.wasm.
 */

export interface RenderProgress {
    phase: "preparing" | "frames" | "audio" | "encoding" | "done";
    /** 0 – 100 */
    percent: number;
    frame?: number;
    totalFrames?: number;
}

export interface RenderJob {
    layers: Layer[];
    composition: CompositionSettings;
    options: RenderOptions;
    onProgress?: (p: RenderProgress) => void;
    signal?: AbortSignal;
    /** Supplied by the caller so the (large) WASM core is only downloaded once per session. */
    getFFmpeg: () => Promise<FFmpeg>;
}

export interface RenderResult {
    blob: Blob;
    fileName: string;
    mimeType: string;
}

type MediaSource =
    | { kind: "video"; el: HTMLVideoElement }
    | { kind: "image"; el: HTMLImageElement };

const FFMPEG_CORE_URL = process.env.NEXT_PUBLIC_FFMPEG_CORE_URL ?? "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";

export const ffmpegCoreBaseUrl = () => FFMPEG_CORE_URL;

const throwIfAborted = (signal?: AbortSignal) => {
    if (signal?.aborted) throw new DOMException("Render cancelled", "AbortError");
};

const hexWithAlpha = (hex: string, opacityPercent: number) => {
    const a = Math.round(Math.max(0, Math.min(100, opacityPercent)) * 2.55)
        .toString(16)
        .padStart(2, "0");
    return `${hex}${a}`;
};

/** Load a <video> element for a layer and wait until metadata is available. */
const loadVideo = (url: string, signal?: AbortSignal) =>
    new Promise<HTMLVideoElement>((resolve, reject) => {
        const el = document.createElement("video");
        el.muted = true;
        el.playsInline = true;
        el.preload = "auto";
        el.crossOrigin = "anonymous";
        el.src = url;
        const onAbort = () => reject(new DOMException("Render cancelled", "AbortError"));
        signal?.addEventListener("abort", onAbort, { once: true });
        el.onloadeddata = () => {
            signal?.removeEventListener("abort", onAbort);
            resolve(el);
        };
        el.onerror = () => {
            signal?.removeEventListener("abort", onAbort);
            reject(new Error(`Could not decode video "${url.slice(0, 48)}…"`));
        };
        el.load();
    });

const loadImage = (url: string) =>
    new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error("Could not decode image"));
        img.src = url;
    });

/** Seek a video element and resolve once the new frame is decoded. */
const seekVideo = (el: HTMLVideoElement, time: number) =>
    new Promise<void>((resolve) => {
        const target = Math.min(Math.max(0, time), Math.max(0, (el.duration || time) - 0.001));
        if (Math.abs(el.currentTime - target) < 1 / 240 && el.readyState >= 2) {
            resolve();
            return;
        }
        let settled = false;
        const finish = () => {
            if (settled) return;
            settled = true;
            el.removeEventListener("seeked", finish);
            resolve();
        };
        el.addEventListener("seeked", finish, { once: true });
        // Safety net: some browsers skip "seeked" when the time is unchanged.
        setTimeout(finish, 1500);
        el.currentTime = target;
    });

/**
 * Draw the composition at time `t` on `ctx`. Shared by the exporter and the
 * "Save Frame As" command so both produce identical pixels.
 */
export function drawCompositionFrame(
    ctx: CanvasRenderingContext2D,
    layers: Layer[],
    composition: CompositionSettings,
    t: number,
    media: Map<string, MediaSource>,
    scale = 1,
) {
    const W = composition.width * scale;
    const H = composition.height * scale;

    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;
    ctx.filter = "none";
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, W, H);
    ctx.restore();

    // Timeline row 0 is the front-most layer → paint back-to-front.
    for (const layer of [...visibleLayers(layers)].reverse()) {
        if (!isLayerActiveAt(layer, t)) continue;
        if (layer.type === "AUDIO") continue;

        const cx = (layer.position.x / 100) * W;
        const cy = (layer.position.y / 100) * H;
        const width = (layer.scale / 100) * W;

        let height: number;
        const src = media.get(layer.id);
        if ((layer.type === "VIDEO" || layer.type === "IMAGE") && (layer.mediaWidth || src)) {
            const mw = layer.mediaWidth || (src?.kind === "video" ? src.el.videoWidth : src?.el.naturalWidth) || 16;
            const mh = layer.mediaHeight || (src?.kind === "video" ? src.el.videoHeight : src?.el.naturalHeight) || 9;
            height = width * (mh / mw);
        } else if (layer.type === "TEXT") {
            height = ((layer.fontSize ?? 8) / 100) * H * 1.3;
        } else {
            // SOLID / ADJUSTMENT: a rectangle that fills the comp at 100 %.
            height = (layer.scale / 100) * H;
        }

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate((layer.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, Math.min(1, layer.opacity / 100));

        const filters: string[] = [];
        if (layer.styles?.blur.enabled && layer.styles.blur.amount > 0) {
            filters.push(`blur(${layer.styles.blur.amount * scale}px)`);
        }
        ctx.filter = filters.length ? filters.join(" ") : "none";

        if (layer.styles?.dropShadow.enabled) {
            const ds = layer.styles.dropShadow;
            const rad = (ds.angle * Math.PI) / 180;
            ctx.shadowColor = hexWithAlpha(ds.color, ds.opacity);
            ctx.shadowBlur = ds.blur * scale;
            ctx.shadowOffsetX = Math.cos(rad) * ds.distance * scale;
            ctx.shadowOffsetY = Math.sin(rad) * ds.distance * scale;
        }

        const x = -width / 2;
        const y = -height / 2;

        switch (layer.type) {
            case "VIDEO":
            case "IMAGE": {
                if (src) {
                    try {
                        ctx.drawImage(src.el, x, y, width, height);
                    } catch {
                        ctx.fillStyle = layer.color;
                        ctx.fillRect(x, y, width, height);
                    }
                } else {
                    ctx.fillStyle = layer.color;
                    ctx.fillRect(x, y, width, height);
                }
                break;
            }
            case "TEXT": {
                const px = ((layer.fontSize ?? 8) / 100) * H;
                ctx.font = `700 ${px}px ${layer.fontFamily ?? "Inter, system-ui, sans-serif"}`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillStyle = layer.color;
                ctx.fillText(layer.text ?? layer.name, 0, 0, width);
                break;
            }
            case "ADJUSTMENT":
            case "SOLID":
            default: {
                ctx.fillStyle = layer.color;
                ctx.fillRect(x, y, width, height);
                break;
            }
        }
        ctx.restore();
    }
}

/** Pre-decode every piece of media the render needs. */
export async function prepareMedia(layers: Layer[], signal?: AbortSignal): Promise<Map<string, MediaSource>> {
    const media = new Map<string, MediaSource>();
    await Promise.all(
        layers.map(async (layer) => {
            if (!layer.url) return;
            try {
                if (layer.type === "VIDEO") {
                    media.set(layer.id, { kind: "video", el: await loadVideo(layer.url, signal) });
                } else if (layer.type === "IMAGE") {
                    media.set(layer.id, { kind: "image", el: await loadImage(layer.url) });
                }
            } catch (err) {
                if ((err as DOMException)?.name === "AbortError") throw err;
                console.warn(`Skipping media for layer "${layer.name}":`, err);
            }
        }),
    );
    return media;
}

export function releaseMedia(media: Map<string, MediaSource>) {
    media.forEach((m) => {
        if (m.kind === "video") {
            m.el.pause();
            m.el.removeAttribute("src");
            m.el.load();
        }
    });
    media.clear();
}

/** Render a single still of the composition (used by "Save Frame As"). */
export async function renderStill(layers: Layer[], composition: CompositionSettings, t: number): Promise<Blob> {
    const media = await prepareMedia(layers);
    try {
        for (const layer of layers) {
            const m = media.get(layer.id);
            if (m?.kind === "video" && isLayerActiveAt(layer, t)) {
                await seekVideo(m.el, layerMediaTime(layer, t));
            }
        }
        const canvas = document.createElement("canvas");
        canvas.width = composition.width;
        canvas.height = composition.height;
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Canvas 2D context unavailable");
        drawCompositionFrame(ctx, layers, composition, t, media);
        return await new Promise<Blob>((resolve, reject) =>
            canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("Could not encode frame"))), "image/png"),
        );
    } finally {
        releaseMedia(media);
    }
}

const canvasToBytes = (canvas: HTMLCanvasElement, type: string, quality?: number) =>
    new Promise<Uint8Array>((resolve, reject) => {
        canvas.toBlob(
            async (b) => {
                if (!b) return reject(new Error("Could not encode frame"));
                resolve(new Uint8Array(await b.arrayBuffer()));
            },
            type,
            quality,
        );
    });

const extFromMime = (mime: string) => {
    if (mime.includes("mp4") || mime.includes("m4a")) return "m4a";
    if (mime.includes("webm")) return "webm";
    if (mime.includes("ogg")) return "ogg";
    if (mime.includes("wav")) return "wav";
    if (mime.includes("aac")) return "aac";
    if (mime.includes("flac")) return "flac";
    if (mime.includes("mpeg") || mime.includes("mp3")) return "mp3";
    if (mime.includes("quicktime")) return "mov";
    if (mime.includes("matroska")) return "mkv";
    return "bin";
};

/**
 * Render the composition.
 *
 * Resolves with the encoded file. Rejects with an `AbortError` DOMException if
 * `signal` is aborted part-way through.
 */
export async function renderComposition(job: RenderJob): Promise<RenderResult> {
    const { layers, composition, options, onProgress, signal, getFFmpeg } = job;
    const fps = composition.fps;
    const totalFrames = Math.max(1, Math.round(composition.duration * fps));
    const scale = Math.max(0.1, Math.min(1, options.resolutionScale));
    // H.264 needs even dimensions.
    const outW = Math.max(2, Math.round((composition.width * scale) / 2) * 2);
    const outH = Math.max(2, Math.round((composition.height * scale) / 2) * 2);
    const sx = outW / composition.width;
    const sy = outH / composition.height;

    onProgress?.({ phase: "preparing", percent: 0 });
    const ffmpegPromise = options.format === "png-sequence" ? null : getFFmpeg();
    const media = await prepareMedia(layers, signal);
    const ffmpeg = ffmpegPromise ? await ffmpegPromise : null;
    throwIfAborted(signal);

    const canvas = document.createElement("canvas");
    canvas.width = outW;
    canvas.height = outH;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) throw new Error("Canvas 2D context unavailable");

    const writtenFiles: string[] = [];
    const frameExt = options.format === "png-sequence" || options.format === "gif" ? "png" : "jpg";
    const pngFrames: Uint8Array[] = [];

    try {
        // ── 1. Frames ───────────────────────────────────────────────────────
        for (let i = 0; i < totalFrames; i++) {
            throwIfAborted(signal);
            const t = i / fps;

            // Seek every active video to its media time before drawing.
            for (const layer of layers) {
                const m = media.get(layer.id);
                if (m?.kind === "video" && isLayerActiveAt(layer, t) && layer.visible) {
                    await seekVideo(m.el, layerMediaTime(layer, t));
                }
            }

            ctx.save();
            ctx.setTransform(sx, 0, 0, sy, 0, 0);
            drawCompositionFrame(ctx, layers, composition, t, media, 1);
            ctx.restore();

            const bytes = frameExt === "png"
                ? await canvasToBytes(canvas, "image/png")
                : await canvasToBytes(canvas, "image/jpeg", 0.95);

            if (ffmpeg) {
                const name = `frame${i.toString().padStart(5, "0")}.${frameExt}`;
                await ffmpeg.writeFile(name, bytes);
                writtenFiles.push(name);
            } else {
                pngFrames.push(bytes);
            }

            onProgress?.({
                phase: "frames",
                percent: Math.round(((i + 1) / totalFrames) * (ffmpeg ? 80 : 100)),
                frame: i + 1,
                totalFrames,
            });
        }

        // ── PNG sequence: zip-less fallback – return the first frame & list ─
        if (!ffmpeg) {
            // Without a zip library we deliver a single PNG strip of frames
            // concatenated vertically. Still useful for sprite sheets.
            const strip = document.createElement("canvas");
            strip.width = outW;
            strip.height = outH * totalFrames;
            const sctx = strip.getContext("2d")!;
            for (let i = 0; i < pngFrames.length; i++) {
                const blob = new Blob([pngFrames[i] as BlobPart], { type: "image/png" });
                const img = await loadImage(URL.createObjectURL(blob));
                sctx.drawImage(img, 0, i * outH);
                URL.revokeObjectURL(img.src);
            }
            const blob = await new Promise<Blob>((res, rej) =>
                strip.toBlob((b) => (b ? res(b) : rej(new Error("Could not encode sprite sheet"))), "image/png"),
            );
            onProgress?.({ phase: "done", percent: 100 });
            return { blob, fileName: `${safeName(composition.name)}-frames.png`, mimeType: "image/png" };
        }

        // ── 2. Audio inputs ────────────────────────────────────────────────
        const audioInputs: { file: string; layer: Layer }[] = [];
        if (options.includeAudio && options.format === "mp4") {
            onProgress?.({ phase: "audio", percent: 82 });
            const anySolo = layers.some((l) => l.solo);
            for (const layer of layers) {
                if (!layer.url || layer.muted || layer.volume <= 0) continue;
                if (layer.type !== "VIDEO" && layer.type !== "AUDIO") continue;
                if (anySolo && !layer.solo) continue;
                if (layer.type === "VIDEO" && !layer.visible) continue;
                try {
                    const res = await fetch(layer.url, { signal });
                    const buf = new Uint8Array(await res.arrayBuffer());
                    const name = `aud${audioInputs.length}.${extFromMime(res.headers.get("content-type") ?? layer.fileName ?? "")}`;
                    await ffmpeg.writeFile(name, buf);
                    writtenFiles.push(name);
                    audioInputs.push({ file: name, layer });
                } catch (err) {
                    if ((err as DOMException)?.name === "AbortError") throw err;
                    console.warn(`Audio for "${layer.name}" skipped:`, err);
                }
            }
        }

        // ── 3. Encode ──────────────────────────────────────────────────────
        throwIfAborted(signal);
        onProgress?.({ phase: "encoding", percent: 85 });

        const onLog = ({ message }: { message: string }) => {
            // ffmpeg reports "frame=  123" while encoding – map onto the last 15 %.
            const m = /frame=\s*(\d+)/.exec(message);
            if (m) {
                const f = Math.min(totalFrames, parseInt(m[1], 10));
                onProgress?.({ phase: "encoding", percent: 85 + Math.round((f / totalFrames) * 14), frame: f, totalFrames });
            }
        };
        ffmpeg.on("log", onLog);

        const outName = options.format === "gif" ? "out.gif" : "out.mp4";
        const crf = String(Math.round(Math.max(0, Math.min(51, options.quality))));

        const runMux = async (withAudio: boolean) => {
            const args: string[] = ["-y", "-framerate", String(fps), "-i", `frame%05d.${frameExt}`];
            if (options.format === "gif") {
                args.push(
                    "-vf",
                    `fps=${Math.min(fps, 30)},split[s0][s1];[s0]palettegen=stats_mode=diff[p];[s1][p]paletteuse=dither=bayer:bayer_scale=5:diff_mode=rectangle`,
                    "-loop", "0",
                    outName,
                );
                await ffmpeg.exec(args);
                return;
            }

            if (withAudio && audioInputs.length) {
                audioInputs.forEach(({ file }) => args.push("-i", file));
                const chains: string[] = [];
                const labels: string[] = [];
                audioInputs.forEach(({ layer }, idx) => {
                    const start = Math.max(0, layer.inPoint ?? 0);
                    const end = start + layer.duration;
                    const delayMs = Math.round(layer.startTime * 1000);
                    const gain = Math.max(0, Math.min(2, layer.volume / 100));
                    chains.push(
                        `[${idx + 1}:a]atrim=start=${start.toFixed(3)}:end=${end.toFixed(3)},asetpts=PTS-STARTPTS,volume=${gain.toFixed(3)},adelay=${delayMs}|${delayMs}[a${idx}]`,
                    );
                    labels.push(`[a${idx}]`);
                });
                chains.push(`${labels.join("")}amix=inputs=${labels.length}:duration=longest:dropout_transition=0:normalize=0,apad[aout]`);
                args.push("-filter_complex", chains.join(";"), "-map", "0:v", "-map", "[aout]", "-c:a", "aac", "-b:a", "192k", "-shortest");
            } else {
                args.push("-an");
            }

            args.push(
                "-c:v", "libx264",
                "-preset", "veryfast",
                "-crf", crf,
                "-pix_fmt", "yuv420p",
                "-movflags", "+faststart",
                "-t", composition.duration.toFixed(3),
                outName,
            );
            const code = await ffmpeg.exec(args);
            if (code !== 0) throw new Error(`ffmpeg exited with code ${code}`);
        };

        try {
            await runMux(true);
        } catch (err) {
            if (!audioInputs.length) throw err;
            console.warn("Audio mux failed, retrying video-only:", err);
            await runMux(false);
        } finally {
            ffmpeg.off("log", onLog);
        }

        const data = await ffmpeg.readFile(outName);
        writtenFiles.push(outName);
        const bytes = typeof data === "string" ? new TextEncoder().encode(data) : data;
        const mimeType = options.format === "gif" ? "image/gif" : "video/mp4";
        const blob = new Blob([bytes as BlobPart], { type: mimeType });

        onProgress?.({ phase: "done", percent: 100 });
        return { blob, fileName: `${safeName(composition.name)}.${options.format === "gif" ? "gif" : "mp4"}`, mimeType };
    } finally {
        releaseMedia(media);
        if (ffmpeg) {
            for (const f of writtenFiles) {
                try {
                    await ffmpeg.deleteFile(f);
                } catch {
                    /* already gone */
                }
            }
        }
    }
}

const safeName = (name: string) =>
    (name || "composition").trim().replace(/[^\w\-]+/g, "_").slice(0, 60) || "composition";

/** Trigger a browser download for a Blob. */
export function downloadBlob(blob: Blob, fileName: string) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10_000);
}

/** Probe a media File for duration and dimensions. */
export function probeMedia(file: File): Promise<{ duration?: number; width?: number; height?: number }> {
    return new Promise((resolve) => {
        const url = URL.createObjectURL(file);
        const done = (info: { duration?: number; width?: number; height?: number }) => {
            URL.revokeObjectURL(url);
            resolve(info);
        };
        if (file.type.startsWith("image/")) {
            const img = new Image();
            img.onload = () => done({ width: img.naturalWidth, height: img.naturalHeight });
            img.onerror = () => done({});
            img.src = url;
            return;
        }
        const el = document.createElement(file.type.startsWith("audio/") ? "audio" : "video") as HTMLVideoElement;
        el.preload = "metadata";
        const timer = setTimeout(() => done({}), 8000);
        el.onloadedmetadata = () => {
            clearTimeout(timer);
            done({
                duration: Number.isFinite(el.duration) ? el.duration : undefined,
                width: el.videoWidth || undefined,
                height: el.videoHeight || undefined,
            });
        };
        el.onerror = () => {
            clearTimeout(timer);
            done({});
        };
        el.src = url;
    });
}
