"use client";

import { useState } from "react";
import VideoModal from "./VideoModal";
import { CompositionSettings, RenderOptions } from "@/app/video/types";

export type VideoModalType = "NEW_PROJECT" | "COMP_SETTINGS" | "PREFERENCES" | "RENDER" | "HELP" | null;

export interface VideoModalConfig {
    isOpen: boolean;
    type: VideoModalType;
    title: string;
}

export interface EditorPreferences {
    /** Preview quality: 1 = full, 0.5 = half, 0.25 = quarter. */
    previewScale: number;
    snapToGrid: boolean;
    loopPlayback: boolean;
}

interface VideoEditorModalsProps {
    modalConfig: VideoModalConfig;
    composition: CompositionSettings;
    preferences: EditorPreferences;
    renderOptions: RenderOptions;
    layerCount: number;
    onClose: () => void;
    onApplyComposition: (settings: CompositionSettings) => void;
    onApplyPreferences: (prefs: EditorPreferences) => void;
    onStartRender: (options: RenderOptions) => void;
    onNewProject: () => void;
}

const FPS_OPTIONS = [23.976, 24, 25, 29.97, 30, 50, 59.94, 60];

const PRESETS: { label: string; width: number; height: number }[] = [
    { label: "1080p · 1920×1080", width: 1920, height: 1080 },
    { label: "4K UHD · 3840×2160", width: 3840, height: 2160 },
    { label: "720p · 1280×720", width: 1280, height: 720 },
    { label: "Square · 1080×1080", width: 1080, height: 1080 },
    { label: "Vertical · 1080×1920", width: 1080, height: 1920 },
];

const parseTimecode = (value: string, fps: number): number | null => {
    const v = value.trim();
    if (/^\d+(\.\d+)?$/.test(v)) return parseFloat(v);
    const parts = v.split(":").map((p) => parseInt(p, 10));
    if (parts.some((n) => Number.isNaN(n))) return null;
    // Accept h:mm:ss:ff, mm:ss:ff, mm:ss
    while (parts.length < 4) parts.unshift(0);
    const [h, m, s, f] = parts;
    return h * 3600 + m * 60 + s + f / fps;
};

const toTimecode = (seconds: number, fps: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    const f = Math.round((seconds % 1) * fps);
    const pad = (n: number) => n.toString().padStart(2, "0");
    return `${h}:${pad(m)}:${pad(s)}:${pad(f)}`;
};

export default function VideoEditorModals(props: VideoEditorModalsProps) {
    const { modalConfig, onClose } = props;
    return (
        <VideoModal isOpen={modalConfig.isOpen} onClose={onClose} title={modalConfig.title}>
            {/* VideoModal unmounts its children while closed, so the body's draft
                state is created fresh on every open – no effect-driven resets. */}
            <ModalBody {...props} />
        </VideoModal>
    );
}

function ModalBody({
    modalConfig,
    composition,
    preferences,
    renderOptions,
    layerCount,
    onClose,
    onApplyComposition,
    onApplyPreferences,
    onStartRender,
    onNewProject,
}: VideoEditorModalsProps) {
    const [compDraft, setCompDraft] = useState(composition);
    const [durationText, setDurationText] = useState(toTimecode(composition.duration, composition.fps));
    const [prefDraft, setPrefDraft] = useState(preferences);
    const [renderDraft, setRenderDraft] = useState(renderOptions);
    const [error, setError] = useState<string | null>(null);

    const handleOk = () => {
        switch (modalConfig.type) {
            case "COMP_SETTINGS": {
                const duration = parseTimecode(durationText, compDraft.fps);
                if (duration === null || duration <= 0) {
                    setError("Duration must be a positive number of seconds or a h:mm:ss:ff timecode.");
                    return;
                }
                const width = Math.round(compDraft.width);
                const height = Math.round(compDraft.height);
                if (width < 16 || height < 16 || width > 7680 || height > 7680) {
                    setError("Resolution must be between 16 and 7680 pixels.");
                    return;
                }
                onApplyComposition({ ...compDraft, width, height, duration, name: compDraft.name.trim() || composition.name });
                onClose();
                return;
            }
            case "PREFERENCES":
                onApplyPreferences(prefDraft);
                onClose();
                return;
            case "RENDER":
                onStartRender(renderDraft);
                onClose();
                return;
            case "NEW_PROJECT":
                onNewProject();
                onClose();
                return;
            default:
                onClose();
        }
    };

    const okLabel =
        modalConfig.type === "RENDER" ? "Start Render"
            : modalConfig.type === "NEW_PROJECT" ? "Create"
                : modalConfig.type === "HELP" ? "Close"
                    : "OK";

    const estimatedFrames = Math.round(compDraft.duration * compDraft.fps);

    const footer = (
        <div className="-mx-8 -mb-8 mt-8 px-6 py-4 bg-[#1a1a1a] border-t border-black flex justify-end gap-3 items-center">
            {error && <span className="text-[10px] text-red-400 mr-auto">{error}</span>}
            {modalConfig.type !== "HELP" && (
                <button onClick={onClose} className="px-4 py-1.5 text-xs font-bold text-gray-500 hover:text-white transition-colors">
                    Cancel
                </button>
            )}
            <button
                onClick={handleOk}
                disabled={modalConfig.type === "RENDER" && layerCount === 0}
                className="bg-[#d391fc] px-6 py-1.5 rounded-sm text-xs font-bold text-[#1e1e1e] hover:bg-[#d391fc]/90 shadow-[0_0_20px_rgba(211,145,252,0.3)] disabled:opacity-40 disabled:cursor-not-allowed"
            >
                {okLabel}
            </button>
        </div>
    );

    const inputCls = "w-full bg-[#1a1a1a] border border-white/5 rounded px-3 py-2 text-white outline-none focus:border-[#d391fc]/50 text-sm";
    const labelCls = "text-[10px] uppercase tracking-widest text-gray-500 font-black";

    return (
        <>
            {modalConfig.type === "NEW_PROJECT" && (
                <div className="space-y-4 text-sm text-gray-300">
                    <p>Start a new, empty project? The current timeline ({layerCount} layer{layerCount === 1 ? "" : "s"}) will be cleared.</p>
                    <p className="text-[11px] text-gray-500">Use <span className="text-[#d391fc] font-mono">File ▸ Save</span> first if you want to keep it.</p>
                </div>
            )}

            {modalConfig.type === "COMP_SETTINGS" && (
                <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                        <div className="space-y-2">
                            <label className={labelCls}>Composition Name</label>
                            <input type="text" value={compDraft.name} onChange={(e) => setCompDraft({ ...compDraft, name: e.target.value })} className={`${inputCls} italic`} />
                        </div>
                        <div className="space-y-2">
                            <label className={labelCls}>Frame Rate</label>
                            <select value={compDraft.fps} onChange={(e) => setCompDraft({ ...compDraft, fps: parseFloat(e.target.value) })} className={inputCls}>
                                {FPS_OPTIONS.map((f) => (
                                    <option key={f} value={f}>{f} fps</option>
                                ))}
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className={labelCls}>Preset</label>
                            <select
                                value={PRESETS.find((p) => p.width === compDraft.width && p.height === compDraft.height)?.label ?? "custom"}
                                onChange={(e) => {
                                    const p = PRESETS.find((x) => x.label === e.target.value);
                                    if (p) setCompDraft({ ...compDraft, width: p.width, height: p.height });
                                }}
                                className={inputCls}
                            >
                                <option value="custom">Custom</option>
                                {PRESETS.map((p) => (
                                    <option key={p.label} value={p.label}>{p.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className={labelCls}>Resolution</label>
                            <div className="flex items-center gap-2">
                                <input type="number" min={16} max={7680} value={compDraft.width} onChange={(e) => setCompDraft({ ...compDraft, width: parseInt(e.target.value || "0", 10) })} className={inputCls} />
                                <span className="text-gray-600">x</span>
                                <input type="number" min={16} max={7680} value={compDraft.height} onChange={(e) => setCompDraft({ ...compDraft, height: parseInt(e.target.value || "0", 10) })} className={inputCls} />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className={labelCls}>Duration (h:mm:ss:ff or seconds)</label>
                            <input
                                type="text"
                                value={durationText}
                                onChange={(e) => {
                                    setDurationText(e.target.value);
                                    const d = parseTimecode(e.target.value, compDraft.fps);
                                    if (d !== null && d > 0) setCompDraft((c) => ({ ...c, duration: d }));
                                }}
                                className={`${inputCls} text-[#d391fc] font-mono`}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className={labelCls}>Summary</label>
                            <div className="text-[11px] text-gray-400 font-mono leading-relaxed">
                                {compDraft.width}×{compDraft.height} · {compDraft.fps} fps<br />
                                {compDraft.duration.toFixed(2)} s · {estimatedFrames} frames
                            </div>
                        </div>
                    </div>
                    <p className="text-[10px] text-gray-500">
                        Shortening the composition hides layers beyond the new end point without deleting them.
                    </p>
                </div>
            )}

            {modalConfig.type === "PREFERENCES" && (
                <div className="space-y-8">
                    <div className="space-y-3">
                        <h4 className="text-[10px] uppercase tracking-widest font-black text-[#d391fc]">Previews</h4>
                        <label className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/5 cursor-pointer">
                            <span className="text-xs">Loop playback at composition end</span>
                            <input type="checkbox" checked={prefDraft.loopPlayback} onChange={(e) => setPrefDraft({ ...prefDraft, loopPlayback: e.target.checked })} className="accent-[#d391fc]" />
                        </label>
                        <label className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/5 cursor-pointer">
                            <span className="text-xs">Snap layers while dragging</span>
                            <input type="checkbox" checked={prefDraft.snapToGrid} onChange={(e) => setPrefDraft({ ...prefDraft, snapToGrid: e.target.checked })} className="accent-[#d391fc]" />
                        </label>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-[10px] uppercase tracking-widest font-black text-[#d391fc]">Default Render Quality</h4>
                        <select value={prefDraft.previewScale} onChange={(e) => setPrefDraft({ ...prefDraft, previewScale: parseFloat(e.target.value) })} className={inputCls}>
                            <option value={1}>Full resolution</option>
                            <option value={0.5}>Half resolution (faster)</option>
                            <option value={0.25}>Quarter resolution (draft)</option>
                        </select>
                    </div>
                </div>
            )}

            {modalConfig.type === "RENDER" && (
                <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                        <div className="space-y-2">
                            <label className={labelCls}>Format</label>
                            <select value={renderDraft.format} onChange={(e) => setRenderDraft({ ...renderDraft, format: e.target.value as RenderOptions["format"] })} className={inputCls}>
                                <option value="mp4">MP4 (H.264 + AAC)</option>
                                <option value="gif">Animated GIF</option>
                                <option value="png-sequence">PNG sprite sheet (no ffmpeg)</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className={labelCls}>Resolution</label>
                            <select value={renderDraft.resolutionScale} onChange={(e) => setRenderDraft({ ...renderDraft, resolutionScale: parseFloat(e.target.value) })} className={inputCls}>
                                <option value={1}>Full · {composition.width}×{composition.height}</option>
                                <option value={0.5}>Half · {Math.round(composition.width / 2)}×{Math.round(composition.height / 2)}</option>
                                <option value={0.25}>Quarter · {Math.round(composition.width / 4)}×{Math.round(composition.height / 4)}</option>
                            </select>
                        </div>
                        {renderDraft.format === "mp4" && (
                            <>
                                <div className="space-y-2">
                                    <label className={labelCls}>Quality (CRF {renderDraft.quality})</label>
                                    <input type="range" min={14} max={32} value={renderDraft.quality} onChange={(e) => setRenderDraft({ ...renderDraft, quality: parseInt(e.target.value, 10) })} className="w-full accent-[#d391fc]" />
                                    <div className="flex justify-between text-[9px] text-gray-600 uppercase tracking-widest"><span>Best</span><span>Smallest</span></div>
                                </div>
                                <label className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/5 cursor-pointer self-end">
                                    <span className="text-xs">Include audio tracks</span>
                                    <input type="checkbox" checked={renderDraft.includeAudio} onChange={(e) => setRenderDraft({ ...renderDraft, includeAudio: e.target.checked })} className="accent-[#d391fc]" />
                                </label>
                            </>
                        )}
                    </div>
                    <div className="p-3 bg-black/40 rounded border border-white/5 text-[11px] text-gray-400 font-mono leading-relaxed">
                        {Math.round(composition.duration * composition.fps)} frames · {composition.duration.toFixed(2)} s · {composition.fps} fps<br />
                        Rendering happens in your browser with ffmpeg.wasm – the first run downloads the ~30 MB encoder.
                    </div>
                    {layerCount === 0 && <p className="text-[10px] text-yellow-500">Add at least one layer before rendering.</p>}
                </div>
            )}

            {modalConfig.type === "HELP" && (
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-[11px]">
                        {([
                            ["Space", "Play / Pause"],
                            ["← / →", "Step 1 frame (Shift: 10)"],
                            ["Home / End", "Go to start / end"],
                            ["I / O", "Trim layer in / out to playhead"],
                            ["Ctrl + I", "Import media"],
                            ["Ctrl + S / O", "Save / Open project (.json)"],
                            ["Ctrl + Z / Y", "Undo / Redo"],
                            ["Ctrl + D", "Duplicate layer"],
                            ["Ctrl + Shift + D", "Split layer at playhead"],
                            ["Ctrl + C / V / X", "Copy / Paste / Cut layer"],
                            ["Ctrl + [ / ]", "Move layer down / up"],
                            ["Del / F4", "Delete layer"],
                            ["Ctrl + K", "Composition settings"],
                            ["Ctrl + M / F5", "Render…"],
                            ["Ctrl + Shift + S", "Save current frame as PNG"],
                            ["Ctrl + N / Alt+N", "New comp / project"],
                            ["Ctrl + A / Shift+Ctrl+A", "Select / Deselect"],
                            ["Ctrl + / −", "Zoom viewer (Shift: timeline)"],
                            ["Ctrl + 0", "Fit viewer"],
                            ["F6 / F7 / F8", "Toggle Project / Timeline / Effects"],
                            ["F11 / F12", "Fullscreen / Mint asset"],
                            ["Alt + wheel on layer", "Scale layer in viewer"],
                        ] as const).map(([k, v]) => (
                            <div key={k} className="flex justify-between border-b border-white/5 py-1 gap-4">
                                <span className="text-[#d391fc] font-bold whitespace-nowrap">{k}</span>
                                <span className="text-gray-300 text-right">{v}</span>
                            </div>
                        ))}
                    </div>
                    <div className="p-3 bg-[#d391fc]/10 border border-[#d391fc]/20 rounded-md text-[10px] text-[#d391fc] font-medium leading-relaxed">
                        Drag a layer in the viewer to move it (Shift constrains the axis). Drag the edges of a clip in the timeline to trim; hold Alt to disable snapping.
                    </div>
                </div>
            )}
            {footer}
        </>
    );
}
