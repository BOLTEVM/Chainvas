"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useYjs } from "@/hooks/useYjs";
import { useHistory } from "@/hooks/useHistory";

// Modular Components
import ProjectPanel from "@/components/video-editor/ProjectPanel";
import EffectsControl from "@/components/video-editor/EffectsControl";
import CompositionView from "@/components/video-editor/CompositionView";
import AETimeline from "@/components/video-editor/AETimeline";
import VideoMenuBar from "@/components/video-editor/VideoMenuBar";
import VideoEditorModals, { EditorPreferences, VideoModalConfig } from "@/components/video-editor/VideoEditorModals";
import MintingModal, { TokenType } from "@/components/profile/MintingModal";
import { ElementKanbanPanel } from "@/components/shared/ElementKanbanPanel";
import { useMinting } from "@/hooks/useMinting";

import { FFmpeg } from "@ffmpeg/ffmpeg";
import { toBlobURL } from "@ffmpeg/util";
import { useToast } from "@/components/shared/ToastProvider";
import {
    renderComposition,
    renderStill,
    downloadBlob,
    probeMedia,
    ffmpegCoreBaseUrl,
    RenderProgress,
} from "@/lib/videoRenderer";

// Types
import {
    Layer,
    PlaybackState,
    CompositionSettings,
    RenderOptions,
    TrackType,
    VideoProjectFile,
    DEFAULT_COMPOSITION,
    DEFAULT_LAYER_STYLES,
    LAYER_COLORS,
    uid,
    normalizeLayer,
} from "./types";

const AUTOSAVE_KEY = "bolt-video-editor:autosave:v1";
const YJS_ORIGIN = "local-video-editor";

const DEFAULT_RENDER_OPTIONS: RenderOptions = { format: "mp4", resolutionScale: 1, quality: 20, includeAudio: true };
const DEFAULT_PREFERENCES: EditorPreferences = { previewScale: 1, snapToGrid: true, loopPlayback: true };

/** True when the keyboard focus is inside something that accepts typing. */
const isTypingTarget = (target: EventTarget | null) => {
    const el = target as HTMLElement | null;
    if (!el) return false;
    const tag = el.tagName;
    return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || el.isContentEditable;
};

export default function AEVideoEditor() {
    const { ydoc, synced } = useYjs("bolt-ae-video-v1");
    const { mintAsset, isMinting } = useMinting();
    const { addToast } = useToast();

    // ── Core state ──────────────────────────────────────────────────────
    const [composition, setComposition] = useState<CompositionSettings>(DEFAULT_COMPOSITION);
    const [layers, setLayers, history] = useHistory<Layer[]>([]);
    const [activeLayerId, setActiveLayerId] = useState<string | null>(null);
    const [transport, setTransport] = useState({ currentTime: 0, isPlaying: false });
    const playback: PlaybackState = {
        currentTime: transport.currentTime,
        isPlaying: transport.isPlaying,
        duration: composition.duration,
        fps: composition.fps,
    };

    const [zoom, setZoom] = useState(100);
    const [timelineZoom, setTimelineZoom] = useState(100);
    const [preferences, setPreferences] = useState<EditorPreferences>(DEFAULT_PREFERENCES);
    const [renderOptions, setRenderOptions] = useState<RenderOptions>(DEFAULT_RENDER_OPTIONS);

    // UI visibility
    const [showProject, setShowProject] = useState(true);
    const [showEffects, setShowEffects] = useState(true);
    const [showTimeline, setShowTimeline] = useState(true);
    const [modalConfig, setModalConfig] = useState<VideoModalConfig>({ isOpen: false, type: null, title: "" });
    const [isMintModalOpen, setIsMintModalOpen] = useState(false);

    // Rendering
    const ffmpegRef = useRef<FFmpeg | null>(null);
    const [renderState, setRenderState] = useState<(RenderProgress & { label: string }) | null>(null);
    const renderAbortRef = useRef<AbortController | null>(null);

    // Playback engine
    const requestRef = useRef<number | null>(null);
    const startTimeRef = useRef(0);
    const clipboardRef = useRef<Layer | null>(null);
    const objectUrlsRef = useRef(new Set<string>());

    const activeLayer = layers.find((l) => l.id === activeLayerId) ?? null;

    // Latest values for callbacks that must not go stale (keyboard handler, rAF loop).
    const modalOpen = modalConfig.isOpen || isMintModalOpen;
    const latest = useRef({ layers, composition, transport, activeLayerId, preferences, modalOpen });
    useEffect(() => {
        latest.current = { layers, composition, transport, activeLayerId, preferences, modalOpen };
    });

    // ── FFmpeg (lazy, shared) ───────────────────────────────────────────
    const loadFFmpeg = useCallback(async () => {
        if (ffmpegRef.current) return ffmpegRef.current;
        const ffmpeg = new FFmpeg();
        const baseURL = ffmpegCoreBaseUrl();
        await ffmpeg.load({
            coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
            wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, "application/wasm"),
        });
        ffmpegRef.current = ffmpeg;
        return ffmpeg;
    }, []);

    // ── Playback loop ───────────────────────────────────────────────────
    useEffect(() => {
        if (!transport.isPlaying) {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            requestRef.current = null;
            return;
        }

        startTimeRef.current = performance.now() - transport.currentTime * 1000;

        const animate = () => {
            const { composition: comp, preferences: prefs } = latest.current;
            const elapsed = (performance.now() - startTimeRef.current) / 1000;
            if (elapsed >= comp.duration) {
                if (prefs.loopPlayback) {
                    startTimeRef.current = performance.now();
                    setTransport((p) => ({ ...p, currentTime: 0 }));
                } else {
                    setTransport({ currentTime: comp.duration, isPlaying: false });
                    return;
                }
            } else {
                setTransport((p) => ({ ...p, currentTime: elapsed }));
            }
            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
        // Only (re)start the loop when play state flips – seeking adjusts startTimeRef directly.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [transport.isPlaying]);

    const handleTogglePlayback = useCallback(() => {
        setTransport((p) => {
            // Restart from the beginning when the playhead is parked at the end.
            const atEnd = p.currentTime >= latest.current.composition.duration - 1e-6;
            return { currentTime: !p.isPlaying && atEnd ? 0 : p.currentTime, isPlaying: !p.isPlaying };
        });
    }, []);

    const handleSeek = useCallback((time: number) => {
        const clamped = Math.max(0, Math.min(time, latest.current.composition.duration));
        startTimeRef.current = performance.now() - clamped * 1000;
        setTransport((p) => ({ ...p, currentTime: clamped }));
    }, []);

    const handleStepFrames = useCallback((frames: number) => {
        const { composition: comp, transport: t } = latest.current;
        const frame = Math.round(t.currentTime * comp.fps) + frames;
        handleSeek(frame / comp.fps);
    }, [handleSeek]);

    // ── Layer helpers ───────────────────────────────────────────────────
    const handleUpdateLayer = useCallback((id: string, updates: Partial<Layer>, transient = false) => {
        setLayers((prev) => prev.map((l) => (l.id === id ? { ...l, ...updates } : l)), { transient });
    }, [setLayers]);

    const handleToggleLayerProp = useCallback((id: string, prop: "visible" | "muted" | "locked" | "solo") => {
        setLayers((prev) => prev.map((l) => (l.id === id ? { ...l, [prop]: !l[prop] } : l)));
    }, [setLayers]);

    const makeLayer = useCallback((type: TrackType, overrides: Partial<Layer> = {}): Layer => {
        const { composition: comp, transport: t, layers: current } = latest.current;
        const start = Math.min(t.currentTime, Math.max(0, comp.duration - 1 / comp.fps));
        const count = current.filter((l) => l.type === type).length + 1;
        const names: Record<TrackType, string> = {
            VIDEO: "Video", AUDIO: "Audio", IMAGE: "Image", SOLID: "Solid", ADJUSTMENT: "Adjustment Layer", TEXT: "Text",
        };
        return normalizeLayer({
            id: uid(),
            name: `${names[type]} ${count}`,
            type,
            startTime: start,
            duration: Math.max(1 / comp.fps, Math.min(5, comp.duration - start)),
            color: LAYER_COLORS[type],
            styles: DEFAULT_LAYER_STYLES,
            ...(type === "TEXT" ? { text: "Your text here", fontSize: 8, scale: 80 } : {}),
            ...(type === "ADJUSTMENT" ? { opacity: 50 } : {}),
            ...overrides,
        });
    }, []);

    const handleAddLayer = useCallback((type: Extract<TrackType, "SOLID" | "TEXT" | "ADJUSTMENT">) => {
        const layer = makeLayer(type);
        setLayers((prev) => [layer, ...prev]);
        setActiveLayerId(layer.id);
    }, [makeLayer, setLayers]);

    const handleDeleteLayer = useCallback((id: string) => {
        setLayers((prev) => prev.filter((l) => l.id !== id));
        setActiveLayerId((cur) => (cur === id ? null : cur));
    }, [setLayers]);

    const handleReorderLayer = useCallback((id: string, direction: -1 | 1) => {
        // Index 0 is the top-most layer (drawn last). -1 = up = towards the viewer.
        setLayers((prev) => {
            const index = prev.findIndex((l) => l.id === id);
            const target = index + direction;
            if (index < 0 || target < 0 || target >= prev.length) return prev;
            const next = [...prev];
            [next[index], next[target]] = [next[target], next[index]];
            return next;
        });
    }, [setLayers]);

    const handleSplitLayer = useCallback(() => {
        const { layers: current, activeLayerId: id, transport: t, composition: comp } = latest.current;
        const layer = current.find((l) => l.id === id);
        if (!layer) return;
        const splitTime = t.currentTime;
        const minDur = 1 / comp.fps;
        if (splitTime <= layer.startTime + minDur / 2 || splitTime >= layer.startTime + layer.duration - minDur / 2) {
            addToast({ type: "warning", title: "Nothing to split", message: "Move the playhead inside the layer first." });
            return;
        }
        const firstDuration = splitTime - layer.startTime;
        const second: Layer = {
            ...layer,
            id: uid(),
            name: `${layer.name} (2)`,
            startTime: splitTime,
            duration: layer.duration - firstDuration,
            inPoint: layer.inPoint + firstDuration,
        };
        setLayers((prev) => {
            const index = prev.findIndex((l) => l.id === layer.id);
            if (index < 0) return prev;
            const next = [...prev];
            next[index] = { ...layer, duration: firstDuration };
            next.splice(index, 0, second); // second half sits above the first (later in time → higher)
            return next;
        });
        setActiveLayerId(second.id);
    }, [addToast, setLayers]);

    const handleDetachAudio = useCallback(() => {
        const { layers: current, activeLayerId: id } = latest.current;
        const layer = current.find((l) => l.id === id);
        if (!layer || layer.type !== "VIDEO" || !layer.url) {
            addToast({ type: "warning", title: "Select a video layer", message: "Only video layers have audio to detach." });
            return;
        }
        const audio: Layer = { ...layer, id: uid(), name: `${layer.name} (Audio)`, type: "AUDIO", color: LAYER_COLORS.AUDIO, muted: false };
        setLayers((prev) => {
            const index = prev.findIndex((l) => l.id === layer.id);
            const next = prev.map((l) => (l.id === layer.id ? { ...l, muted: true } : l));
            next.splice(index + 1, 0, audio);
            return next;
        });
        setActiveLayerId(audio.id);
    }, [addToast, setLayers]);

    // ── Import ──────────────────────────────────────────────────────────
    const handleFiles = useCallback(async (files: FileList | File[]) => {
        const list = Array.from(files);
        const accepted = list.filter((f) => /^(video|audio|image)\//.test(f.type));
        if (accepted.length !== list.length) {
            addToast({ type: "warning", title: "Some files skipped", message: "Only video, audio and image files can be imported." });
        }
        if (!accepted.length) return;

        const { composition: comp, transport: t, layers: current } = latest.current;
        const newLayers: Layer[] = [];
        const relinked: { fileName: string; url: string; info: Awaited<ReturnType<typeof probeMedia>> }[] = [];

        for (const file of accepted) {
            const info = await probeMedia(file);
            const url = URL.createObjectURL(file);
            objectUrlsRef.current.add(url);

            // Re-link media for layers restored from a saved project.
            const orphan = current.find((l) => !l.url && l.fileName === file.name);
            if (orphan) {
                relinked.push({ fileName: file.name, url, info });
                continue;
            }

            const type: TrackType = file.type.startsWith("video/") ? "VIDEO" : file.type.startsWith("audio/") ? "AUDIO" : "IMAGE";
            const start = Math.min(t.currentTime, Math.max(0, comp.duration - 1 / comp.fps));
            const sourceDuration = info.duration;
            const duration = Math.max(1 / comp.fps, Math.min(sourceDuration ?? 5, comp.duration - start));

            // Fit visual media inside the composition.
            let scale = 100;
            if (info.width && info.height) {
                const mediaAspect = info.width / info.height;
                const compAspect = comp.width / comp.height;
                scale = mediaAspect >= compAspect ? 100 : Math.round((mediaAspect / compAspect) * 1000) / 10;
            }

            newLayers.push(
                makeLayer(type, {
                    name: file.name,
                    fileName: file.name,
                    url,
                    startTime: start,
                    duration,
                    sourceDuration,
                    mediaWidth: info.width,
                    mediaHeight: info.height,
                    scale,
                }),
            );
        }

        setLayers((prev) => {
            let next = prev;
            if (relinked.length) {
                next = next.map((l) => {
                    const r = !l.url ? relinked.find((x) => x.fileName === l.fileName) : undefined;
                    return r
                        ? { ...l, url: r.url, sourceDuration: r.info.duration ?? l.sourceDuration, mediaWidth: r.info.width ?? l.mediaWidth, mediaHeight: r.info.height ?? l.mediaHeight }
                        : l;
                });
            }
            return [...newLayers.reverse(), ...next];
        });
        if (newLayers.length) setActiveLayerId(newLayers[0].id);
        if (relinked.length) addToast({ type: "success", title: "Media re-linked", message: `${relinked.length} file(s) attached to existing layers.` });
    }, [addToast, makeLayer, setLayers]);

    const openImportDialog = useCallback(() => {
        const input = document.createElement("input");
        input.type = "file";
        input.multiple = true;
        input.accept = "video/*,audio/*,image/*";
        input.onchange = () => {
            if (input.files) void handleFiles(input.files);
        };
        input.click();
    }, [handleFiles]);

    // Release object URLs when the editor unmounts.
    useEffect(() => {
        const urls = objectUrlsRef.current;
        return () => {
            urls.forEach((u) => URL.revokeObjectURL(u));
            urls.clear();
        };
    }, []);

    // ── Project save / open / autosave ──────────────────────────────────
    const serializeProject = useCallback((): VideoProjectFile => {
        const { layers: current, composition: comp } = latest.current;
        return {
            version: 1,
            app: "bolt-chainvas-video",
            savedAt: new Date().toISOString(),
            composition: comp,
            // Object URLs die with the tab; keep the file name so media can be re-linked on import.
            layers: current.map((l) => ({ ...l, url: l.url && !l.url.startsWith("blob:") ? l.url : undefined })),
        };
    }, []);

    const loadProject = useCallback((data: unknown, source: string) => {
        const file = data as Partial<VideoProjectFile>;
        if (!file || file.app !== "bolt-chainvas-video" || !Array.isArray(file.layers)) {
            addToast({ type: "error", title: "Not a Chainvas video project", message: `${source} is not a project saved by this editor.` });
            return false;
        }
        const comp = { ...DEFAULT_COMPOSITION, ...(file.composition ?? {}) };
        const loaded = file.layers.filter((l) => l && typeof l.id === "string").map((l) => normalizeLayer(l));
        setComposition(comp);
        history.reset(loaded);
        setActiveLayerId(null);
        setTransport({ currentTime: 0, isPlaying: false });
        const missing = loaded.filter((l) => !l.url && (l.type === "VIDEO" || l.type === "AUDIO" || l.type === "IMAGE")).length;
        if (missing) {
            addToast({ type: "info", title: "Re-link media", message: `${missing} layer(s) need their media re-imported (File ▸ Import). Files are matched by name.` });
        }
        return true;
    }, [addToast, history]);

    const saveProject = useCallback(() => {
        const project = serializeProject();
        const blob = new Blob([JSON.stringify(project, null, 2)], { type: "application/json" });
        downloadBlob(blob, `${project.composition.name.replace(/[^\w\-]+/g, "_") || "composition"}.chainvas.json`);
        addToast({ type: "success", title: "Project saved", message: "Downloaded as JSON. Media files are referenced by name." });
    }, [addToast, serializeProject]);

    const openProjectDialog = useCallback(() => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "application/json,.json";
        input.onchange = async () => {
            const f = input.files?.[0];
            if (!f) return;
            try {
                loadProject(JSON.parse(await f.text()), f.name);
            } catch {
                addToast({ type: "error", title: "Could not open project", message: "The file is not valid JSON." });
            }
        };
        input.click();
    }, [addToast, loadProject]);

    // Restore the autosaved session once, then autosave on every change (debounced).
    const restoredRef = useRef(false);
    useEffect(() => {
        if (restoredRef.current) return;
        restoredRef.current = true;
        try {
            const raw = localStorage.getItem(AUTOSAVE_KEY);
            if (!raw) return;
            const data = JSON.parse(raw) as VideoProjectFile;
            if (data.layers?.length) {
                loadProject(data, "Autosave");
                addToast({ type: "info", title: "Session restored", message: `Recovered ${data.layers.length} layer(s) from your last visit.` });
            }
        } catch {
            /* ignore corrupt autosave */
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const handle = setTimeout(() => {
            try {
                localStorage.setItem(AUTOSAVE_KEY, JSON.stringify(serializeProject()));
            } catch {
                /* quota exceeded or storage disabled */
            }
        }, 800);
        return () => clearTimeout(handle);
    }, [layers, composition, serializeProject]);

    // ── Peer sync (Yjs) ─────────────────────────────────────────────────
    const lastRemoteJson = useRef<string>("");
    useEffect(() => {
        const ymap = ydoc.getMap<string>("video");
        const observer = (event: { transaction: { origin: unknown } }) => {
            if (event.transaction.origin === YJS_ORIGIN) return;
            const layersJson = ymap.get("layers");
            const compJson = ymap.get("composition");
            if (layersJson && layersJson !== lastRemoteJson.current) {
                lastRemoteJson.current = layersJson;
                try {
                    const remote = (JSON.parse(layersJson) as Layer[]).map((l) => normalizeLayer(l));
                    const local = latest.current.layers;
                    // Keep our own blob URLs for media the peer can't send us.
                    const merged = remote.map((r) => {
                        const mine = local.find((l) => l.id === r.id || (l.fileName && l.fileName === r.fileName));
                        return mine?.url && !r.url ? { ...r, url: mine.url } : r;
                    });
                    history.reset(merged);
                } catch {
                    /* ignore malformed remote state */
                }
            }
            if (compJson) {
                try {
                    setComposition({ ...DEFAULT_COMPOSITION, ...(JSON.parse(compJson) as CompositionSettings) });
                } catch {
                    /* ignore */
                }
            }
        };
        ymap.observe(observer);
        return () => ymap.unobserve(observer);
    }, [ydoc, history]);

    useEffect(() => {
        if (!synced) return;
        const ymap = ydoc.getMap<string>("video");
        const json = JSON.stringify(layers.map((l) => ({ ...l, url: l.url?.startsWith("blob:") ? undefined : l.url })));
        if (ymap.get("layers") === json) return;
        lastRemoteJson.current = json;
        ydoc.transact(() => {
            ymap.set("layers", json);
            ymap.set("composition", JSON.stringify(composition));
        }, YJS_ORIGIN);
    }, [layers, composition, synced, ydoc]);

    // ── Rendering & minting ─────────────────────────────────────────────
    const runRender = useCallback(async (options: RenderOptions, label: string) => {
        const { layers: current, composition: comp } = latest.current;
        if (!current.length) {
            addToast({ type: "warning", title: "Nothing to render", message: "Add at least one layer first." });
            return null;
        }
        setTransport((p) => ({ ...p, isPlaying: false }));
        const controller = new AbortController();
        renderAbortRef.current = controller;
        setRenderState({ phase: "preparing", percent: 0, label });
        try {
            const result = await renderComposition({
                layers: current,
                composition: comp,
                options,
                signal: controller.signal,
                getFFmpeg: loadFFmpeg,
                onProgress: (p) => setRenderState({ ...p, label }),
            });
            return result;
        } catch (error) {
            const err = error as Error;
            if (err?.name === "AbortError") {
                addToast({ type: "info", title: "Render cancelled" });
            } else {
                console.error("Rendering failed:", error);
                addToast({ type: "error", title: "Rendering Failed", message: err?.message ?? String(error) });
            }
            return null;
        } finally {
            renderAbortRef.current = null;
            setRenderState(null);
        }
    }, [addToast, loadFFmpeg]);

    const handleStartRender = useCallback(async (options: RenderOptions) => {
        setRenderOptions(options);
        const result = await runRender(options, "Rendering composition");
        if (result) {
            downloadBlob(result.blob, result.fileName);
            addToast({ type: "success", title: "Render complete", message: `${result.fileName} · ${(result.blob.size / 1024 / 1024).toFixed(1)} MB` });
        }
    }, [addToast, runRender]);

    const handleSaveFrame = useCallback(async () => {
        const { layers: current, composition: comp, transport: t } = latest.current;
        try {
            const blob = await renderStill(current, comp, t.currentTime);
            downloadBlob(blob, `${comp.name.replace(/[^\w\-]+/g, "_")}_${t.currentTime.toFixed(2)}s.png`);
        } catch (error) {
            addToast({ type: "error", title: "Could not save frame", message: (error as Error).message });
        }
    }, [addToast]);

    const handleMint = useCallback(async (type: TokenType, config: { name: string; symbol: string; amount?: number; mediaType?: number }) => {
        if (renderState) return;
        const result = await runRender({ ...renderOptions, format: "mp4" }, "Rendering for mint");
        if (!result) return;
        const file = new File([result.blob], result.fileName, { type: result.mimeType });
        const success = await mintAsset(type, config, file);
        if (success) setIsMintModalOpen(false);
    }, [mintAsset, renderOptions, renderState, runRender]);

    // ── Composition settings ────────────────────────────────────────────
    const handleApplyComposition = useCallback((settings: CompositionSettings) => {
        setComposition(settings);
        setTransport((p) => ({ ...p, currentTime: Math.min(p.currentTime, settings.duration) }));
    }, []);

    const handleNewProject = useCallback(() => {
        history.reset([]);
        setComposition(DEFAULT_COMPOSITION);
        setActiveLayerId(null);
        setTransport({ currentTime: 0, isPlaying: false });
        try {
            localStorage.removeItem(AUTOSAVE_KEY);
        } catch {
            /* ignore */
        }
    }, [history]);

    // ── Menu actions ────────────────────────────────────────────────────
    const openModal = useCallback((type: VideoModalConfig["type"], title: string) => setModalConfig({ isOpen: true, type, title }), []);

    const handleMenuAction = useCallback((id: string) => {
        const { layers: current, activeLayerId: selectedId, transport: t, composition: comp } = latest.current;
        const selected = current.find((l) => l.id === selectedId) ?? null;

        switch (id) {
            case "FILE_NEW": openModal("NEW_PROJECT", "New Project"); break;
            case "FILE_OPEN": openProjectDialog(); break;
            case "FILE_SAVE": saveProject(); break;
            case "FILE_SAVE_FRAME": void handleSaveFrame(); break;
            case "FILE_IMPORT": openImportDialog(); break;
            case "FILE_MINT": setIsMintModalOpen(true); break;
            case "FILE_HELP": openModal("HELP", "Bolt Video Editor - Help"); break;

            case "COMP_NEW": openModal("COMP_SETTINGS", "New Composition"); break;
            case "COMP_SETTINGS": openModal("COMP_SETTINGS", "Composition Settings"); break;
            case "COMP_RENDER": openModal("RENDER", "Render Composition"); break;
            case "EDIT_PREFERENCES": openModal("PREFERENCES", "Preferences"); break;

            case "PLAY_TOGGLE": handleTogglePlayback(); break;
            case "PLAY_HOME": handleSeek(0); break;
            case "PLAY_END": handleSeek(comp.duration); break;

            case "EDIT_UNDO": history.undo(); break;
            case "EDIT_REDO": history.redo(); break;
            case "EDIT_SELECT_ALL": if (current.length) setActiveLayerId(current[0].id); break;
            case "EDIT_DESELECT": setActiveLayerId(null); break;
            case "EDIT_DUPLICATE":
                if (selected) {
                    const copy = { ...selected, id: uid(), name: `${selected.name} Copy` };
                    setLayers((prev) => {
                        const index = prev.findIndex((l) => l.id === selected.id);
                        const next = [...prev];
                        next.splice(Math.max(0, index), 0, copy);
                        return next;
                    });
                    setActiveLayerId(copy.id);
                }
                break;
            case "EDIT_DELETE": if (selected) handleDeleteLayer(selected.id); break;
            case "EDIT_SPLIT": handleSplitLayer(); break;
            case "EDIT_COPY": if (selected) clipboardRef.current = selected; break;
            case "EDIT_CUT":
                if (selected) {
                    clipboardRef.current = selected;
                    handleDeleteLayer(selected.id);
                }
                break;
            case "EDIT_PASTE":
                if (clipboardRef.current) {
                    const src = clipboardRef.current;
                    const pasted = { ...src, id: uid(), startTime: Math.min(t.currentTime, comp.duration - 1 / comp.fps) };
                    setLayers((prev) => [pasted, ...prev]);
                    setActiveLayerId(pasted.id);
                }
                break;

            case "LAYER_NEW_SOLID": handleAddLayer("SOLID"); break;
            case "LAYER_NEW_TEXT": handleAddLayer("TEXT"); break;
            case "LAYER_NEW_ADJUSTMENT": handleAddLayer("ADJUSTMENT"); break;
            case "LAYER_UP": if (selected) handleReorderLayer(selected.id, -1); break;
            case "LAYER_DOWN": if (selected) handleReorderLayer(selected.id, 1); break;
            case "LAYER_DETACH_AUDIO": handleDetachAudio(); break;
            case "LAYER_MOVE_TO_PLAYHEAD":
                if (selected) handleUpdateLayer(selected.id, { startTime: Math.min(t.currentTime, comp.duration - 1 / comp.fps) });
                break;
            case "LAYER_TRIM_IN":
                if (selected && t.currentTime > selected.startTime && t.currentTime < selected.startTime + selected.duration) {
                    const shift = t.currentTime - selected.startTime;
                    handleUpdateLayer(selected.id, { startTime: t.currentTime, duration: selected.duration - shift, inPoint: selected.inPoint + shift });
                }
                break;
            case "LAYER_TRIM_OUT":
                if (selected && t.currentTime > selected.startTime && t.currentTime < selected.startTime + selected.duration) {
                    handleUpdateLayer(selected.id, { duration: t.currentTime - selected.startTime });
                }
                break;

            case "EFFECT_DROP_SHADOW":
                if (selected) handleUpdateLayer(selected.id, { styles: { ...selected.styles, dropShadow: { ...selected.styles.dropShadow, enabled: !selected.styles.dropShadow.enabled } } });
                break;
            case "EFFECT_BLUR":
                if (selected) handleUpdateLayer(selected.id, { styles: { ...selected.styles, blur: { ...selected.styles.blur, enabled: !selected.styles.blur.enabled, amount: selected.styles.blur.amount || 8 } } });
                break;
            case "EFFECT_RESET_TRANSFORM":
                if (selected) handleUpdateLayer(selected.id, { position: { x: 50, y: 50 }, scale: 100, rotation: 0, opacity: 100 });
                break;
            case "EFFECT_CLEAR":
                if (selected) handleUpdateLayer(selected.id, { styles: DEFAULT_LAYER_STYLES });
                break;

            case "WINDOW_PROJECT": setShowProject((p) => !p); break;
            case "WINDOW_EFFECTS": setShowEffects((p) => !p); break;
            case "WINDOW_TIMELINE": setShowTimeline((p) => !p); break;

            case "VIEW_ZOOM_IN": setZoom((z) => Math.min(z + 10, 400)); break;
            case "VIEW_ZOOM_OUT": setZoom((z) => Math.max(z - 10, 10)); break;
            case "VIEW_FIT": setZoom(100); break;
            case "VIEW_TL_ZOOM_IN": setTimelineZoom((z) => Math.min(z * 1.25, 800)); break;
            case "VIEW_TL_ZOOM_OUT": setTimelineZoom((z) => Math.max(z / 1.25, 10)); break;
            case "VIEW_FULLSCREEN":
                if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => { });
                else document.exitFullscreen().catch(() => { });
                break;

            default:
                console.log("Action not implemented:", id);
        }
    }, [handleAddLayer, handleDeleteLayer, handleDetachAudio, handleReorderLayer, handleSaveFrame, handleSeek, handleSplitLayer, handleTogglePlayback, handleUpdateLayer, history, openImportDialog, openModal, openProjectDialog, saveProject, setLayers]);

    // ── Keyboard shortcuts (subscribed once; reads latest handler via ref) ─
    const menuActionRef = useRef(handleMenuAction);
    const stepRef = useRef(handleStepFrames);
    useEffect(() => {
        menuActionRef.current = handleMenuAction;
        stepRef.current = handleStepFrames;
    });

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Never hijack typing, and let open dialogs own the keyboard.
            if (isTypingTarget(e.target)) return;
            if (latest.current.modalOpen) return;
            const act = menuActionRef.current;
            const key = e.key.toLowerCase();

            if (e.ctrlKey || e.metaKey) {
                const handled = () => e.preventDefault();
                if (e.shiftKey) {
                    switch (key) {
                        case "d": handled(); act("EDIT_SPLIT"); return;
                        case "s": handled(); act("FILE_SAVE_FRAME"); return;
                        case "a": handled(); act("EDIT_DESELECT"); return;
                        case "z": handled(); act("EDIT_REDO"); return;
                        case "=": case "+": handled(); act("VIEW_TL_ZOOM_IN"); return;
                        case "-": case "_": handled(); act("VIEW_TL_ZOOM_OUT"); return;
                        case "t": if (e.altKey) { handled(); act("LAYER_NEW_TEXT"); } return;
                    }
                }
                switch (key) {
                    case "z": handled(); act("EDIT_UNDO"); return;
                    case "y": handled(); act(e.altKey ? "LAYER_NEW_ADJUSTMENT" : "EDIT_REDO"); return;
                    case "n": handled(); act(e.altKey ? "FILE_NEW" : "COMP_NEW"); return;
                    case "s": handled(); act("FILE_SAVE"); return;
                    case "o": handled(); act("FILE_OPEN"); return;
                    case "d": handled(); act("EDIT_DUPLICATE"); return;
                    case "k": handled(); act("COMP_SETTINGS"); return;
                    case ",": handled(); act("EDIT_PREFERENCES"); return;
                    case "m": handled(); act("COMP_RENDER"); return;
                    case "i": handled(); act("FILE_IMPORT"); return;
                    case "a": handled(); act("EDIT_SELECT_ALL"); return;
                    case "c": handled(); act("EDIT_COPY"); return;
                    case "x": handled(); act("EDIT_CUT"); return;
                    case "v": handled(); act("EDIT_PASTE"); return;
                    case "]": handled(); act("LAYER_UP"); return;
                    case "[": handled(); act("LAYER_DOWN"); return;
                    case "0": handled(); act("VIEW_FIT"); return;
                    case "=": case "+": handled(); act("VIEW_ZOOM_IN"); return;
                    case "-": handled(); act("VIEW_ZOOM_OUT"); return;
                }
                return;
            }

            switch (e.key) {
                case "F1": e.preventDefault(); act("FILE_HELP"); break;
                case "F3": e.preventDefault(); act("EDIT_DUPLICATE"); break;
                case "F4": e.preventDefault(); act("EDIT_DELETE"); break;
                case "F5": e.preventDefault(); act("COMP_RENDER"); break;
                case "F6": e.preventDefault(); act("WINDOW_PROJECT"); break;
                case "F7": e.preventDefault(); act("WINDOW_TIMELINE"); break;
                case "F8": e.preventDefault(); act("WINDOW_EFFECTS"); break;
                case "F11": e.preventDefault(); act("VIEW_FULLSCREEN"); break;
                case "F12": e.preventDefault(); act("FILE_MINT"); break;
                case "Delete":
                case "Backspace": e.preventDefault(); act("EDIT_DELETE"); break;
                case " ": e.preventDefault(); act("PLAY_TOGGLE"); break;
                case "Home": e.preventDefault(); act("PLAY_HOME"); break;
                case "End": e.preventDefault(); act("PLAY_END"); break;
                case "ArrowLeft": e.preventDefault(); stepRef.current(e.shiftKey ? -10 : -1); break;
                case "ArrowRight": e.preventDefault(); stepRef.current(e.shiftKey ? 10 : 1); break;
                case "i": case "I": act("LAYER_TRIM_IN"); break;
                case "o": case "O": act("LAYER_TRIM_OUT"); break;
                case "[": act("LAYER_MOVE_TO_PLAYHEAD"); break;
                case "Escape": act("EDIT_DESELECT"); break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // ── Render ──────────────────────────────────────────────────────────
    return (
        <>
            <div className="flex flex-col h-[calc(100vh-5rem)] bg-[#1e1e1e] overflow-hidden select-none text-white font-sans">
                {/* Top Menu Bar */}
                <div className="h-9 bg-[#2d2d2d] border-b border-black flex items-center justify-between">
                    <div className="flex items-center h-full">
                        <div className="px-3 h-full flex items-center bg-[#d391fc]/10 border-r border-black/20">
                            <div className="w-5 h-5 bg-[#d391fc] flex items-center justify-center rounded-sm">
                                <span className="text-[12px] font-black text-[#1e1e1e]">Ae</span>
                            </div>
                        </div>
                        <VideoMenuBar
                            onAction={handleMenuAction}
                            canUndo={history.canUndo}
                            canRedo={history.canRedo}
                            hasSelection={!!activeLayer}
                            canPaste={!!clipboardRef.current}
                        />
                    </div>

                    <div className="flex items-center gap-3 pr-3">
                        <div className="flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full border border-white/5" title={synced ? "Connected to collaborators" : "Looking for collaborators via WebRTC signaling"}>
                            <div className={`w-1.5 h-1.5 rounded-full ${synced ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" : "bg-red-500 animate-pulse"}`} />
                            <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">
                                {synced ? "Live Link Active" : "Searching Peers"}
                            </span>
                        </div>
                        <button onClick={() => setIsMintModalOpen(true)} className="bg-[#00ffa3] hover:bg-[#00ffa3]/90 px-4 py-1 rounded text-[10px] font-black text-black uppercase tracking-widest transition-all shadow-[0_0_10px_rgba(0,255,163,0.2)] ml-2">
                            Mint Asset
                        </button>
                        <button onClick={() => handleMenuAction("COMP_RENDER")} className="bg-white/5 hover:bg-white/10 px-4 py-1 rounded text-[10px] font-black text-white uppercase tracking-widest transition-all border border-white/10 ml-2">
                            Render
                        </button>
                    </div>
                </div>

                {/* Main Application Area */}
                <div className="flex flex-grow overflow-hidden">
                    {/* Left Sidebar (Project & Effects) */}
                    {(showProject || showEffects) && (
                        <div className="w-[320px] flex flex-col border-r border-black shrink-0 z-30">
                            {showProject && (
                                <div className={showEffects ? "h-1/2 flex flex-col min-h-0" : "h-full flex flex-col min-h-0"}>
                                    {activeLayer ? (
                                        <div className="flex-grow overflow-hidden">
                                            <ElementKanbanPanel
                                                elementRef={`VIDEO:${activeLayer.id}`}
                                                elementTitle={activeLayer.name}
                                                elementDescription={`Layer: ${activeLayer.type} starting at ${activeLayer.startTime.toFixed(2)}s`}
                                            />
                                        </div>
                                    ) : (
                                        <ProjectPanel
                                            layers={layers}
                                            activeLayerId={activeLayerId}
                                            onSelectLayer={setActiveLayerId}
                                            onFilesDrop={(f) => void handleFiles(f)}
                                            onImport={openImportDialog}
                                        />
                                    )}
                                </div>
                            )}
                            {showEffects && (
                                <div className={showProject ? "h-1/2 border-t border-black/50" : "h-full"}>
                                    <EffectsControl
                                        activeLayer={activeLayer}
                                        compositionDuration={composition.duration}
                                        fps={composition.fps}
                                        onUpdateLayer={handleUpdateLayer}
                                        onCommitGesture={history.commit}
                                    />
                                </div>
                            )}
                        </div>
                    )}

                    {/* Right Area (Composition & Timeline) */}
                    <div className="flex flex-col flex-grow relative min-w-0">
                        <div className="flex-grow flex flex-col bg-[#161616] relative min-h-0">
                            <CompositionView
                                playback={playback}
                                composition={composition}
                                layers={layers}
                                activeLayerId={activeLayerId}
                                onSelectLayer={setActiveLayerId}
                                onTogglePlayback={handleTogglePlayback}
                                onSeek={handleSeek}
                                onStepFrames={handleStepFrames}
                                onFilesDrop={(f) => void handleFiles(f)}
                                onUpdateLayer={handleUpdateLayer}
                                onCommitGesture={history.commit}
                                onOpenSettings={() => handleMenuAction("COMP_SETTINGS")}
                                zoom={zoom}
                            />
                        </div>

                        {showTimeline && (
                            <div className="h-[320px] border-t border-black z-20 shrink-0">
                                <AETimeline
                                    playback={playback}
                                    layers={layers}
                                    activeLayerId={activeLayerId}
                                    onSelectLayer={setActiveLayerId}
                                    onToggleLayerProp={handleToggleLayerProp}
                                    onAddLayer={handleAddLayer}
                                    onSplit={handleSplitLayer}
                                    onSeek={handleSeek}
                                    onUpdateLayer={handleUpdateLayer}
                                    onCommitGesture={history.commit}
                                    onReorderLayer={handleReorderLayer}
                                    onDeleteLayer={handleDeleteLayer}
                                    zoom={timelineZoom}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Dialogs */}
            <VideoEditorModals
                modalConfig={modalConfig}
                composition={composition}
                preferences={preferences}
                renderOptions={renderOptions}
                layerCount={layers.length}
                onClose={() => setModalConfig((m) => ({ ...m, isOpen: false }))}
                onApplyComposition={handleApplyComposition}
                onApplyPreferences={(p) => {
                    setPreferences(p);
                    setRenderOptions((r) => ({ ...r, resolutionScale: p.previewScale }));
                }}
                onStartRender={(o) => void handleStartRender(o)}
                onNewProject={handleNewProject}
            />

            <MintingModal
                isOpen={isMintModalOpen}
                onClose={() => !isMinting && !renderState && setIsMintModalOpen(false)}
                asset={{ id: "video-project-1", name: composition.name, previewUrl: "" }}
                onMint={handleMint}
                isMinting={isMinting || !!renderState}
                defaultMediaType={2}
            />

            {renderState && (
                <div className="fixed inset-0 bg-black/80 z-[300] flex flex-col items-center justify-center backdrop-blur-sm">
                    <div className="w-16 h-16 border-4 border-[#00ffa3] border-t-transparent rounded-full animate-spin mb-6" />
                    <h2 className="text-2xl font-black uppercase tracking-widest italic mb-2">{renderState.label}</h2>
                    <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                        <div className="h-full bg-[#00ffa3] transition-all duration-300" style={{ width: `${renderState.percent}%` }} />
                    </div>
                    <span className="text-gray-400 text-xs font-mono">
                        {renderState.percent}% · {renderState.phase}
                        {renderState.frame !== undefined && renderState.totalFrames ? ` · frame ${renderState.frame}/${renderState.totalFrames}` : ""}
                    </span>
                    <button
                        onClick={() => renderAbortRef.current?.abort()}
                        className="mt-8 px-4 py-1.5 text-[10px] uppercase tracking-widest font-black border border-white/20 rounded hover:bg-white/10"
                    >
                        Cancel
                    </button>
                    <p className="mt-4 text-[10px] text-gray-500 uppercase tracking-widest animate-pulse">Encoding with ffmpeg.wasm in your browser</p>
                </div>
            )}
        </>
    );
}
