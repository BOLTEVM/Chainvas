"use client";

import { useState, useEffect, useRef, useCallback } from "react";

import {
    PlaybackState,
    Layer,
    CompositionSettings,
    isLayerActiveAt,
    layerMediaTime,
    visibleLayers,
} from "@/app/video/types";
import { Play, Pause, SkipBack, SkipForward, Maximize, Volume2, VolumeX, Settings, Lock, Type, Image as ImageIcon } from "lucide-react";

export const COMPOSITION_STAGE_ID = "bolt-composition-stage";

interface CompositionViewProps {
    playback: PlaybackState;
    composition: CompositionSettings;
    layers: Layer[];
    activeLayerId: string | null;
    onSelectLayer: (id: string | null) => void;
    onTogglePlayback: () => void;
    onSeek: (time: number) => void;
    onStepFrames: (frames: number) => void;
    onFilesDrop: (files: FileList) => void;
    onUpdateLayer: (id: string, updates: Partial<Layer>, transient?: boolean) => void;
    onCommitGesture: () => void;
    onOpenSettings: () => void;
    zoom?: number;
}

export const formatTimecode = (seconds: number, fps: number) => {
    const total = Math.max(0, seconds);
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = Math.floor(total % 60);
    const f = Math.min(fps - 1, Math.floor((total % 1) * fps + 1e-6));
    const pad = (n: number) => n.toString().padStart(2, "0");
    return `${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`;
};

const hexWithAlpha = (hex: string, opacityPercent: number) =>
    `${hex}${Math.round(Math.max(0, Math.min(100, opacityPercent)) * 2.55).toString(16).padStart(2, "0")}`;

export default function CompositionView({
    playback,
    composition,
    layers,
    activeLayerId,
    onSelectLayer,
    onTogglePlayback,
    onSeek,
    onStepFrames,
    onFilesDrop,
    onUpdateLayer,
    onCommitGesture,
    onOpenSettings,
    zoom = 100,
}: CompositionViewProps) {
    const [isDragging, setIsDragging] = useState(false);
    const [masterVolume, setMasterVolume] = useState(0.8);
    const [masterMuted, setMasterMuted] = useState(false);
    const compositionRef = useRef<HTMLDivElement>(null);
    const mediaRefs = useRef(new Map<string, HTMLMediaElement>());

    const registerMedia = useCallback((id: string) => (el: HTMLMediaElement | null) => {
        if (el) mediaRefs.current.set(id, el);
        else mediaRefs.current.delete(id);
    }, []);

    /**
     * Keep every <video>/<audio> in step with the global playhead, offset by
     * the layer's own start time and in-point. Runs on every time change, so
     * scrubbing while paused updates the frame as well.
     */
    useEffect(() => {
        const t = playback.currentTime;
        for (const layer of layers) {
            const el = mediaRefs.current.get(layer.id);
            if (!el) continue;

            const active = isLayerActiveAt(layer, t);
            const target = layerMediaTime(layer, t);
            const effectiveVolume = masterMuted || layer.muted ? 0 : Math.max(0, Math.min(1, (layer.volume / 100) * masterVolume));
            el.volume = effectiveVolume;
            el.muted = effectiveVolume === 0;

            if (!active) {
                if (!el.paused) el.pause();
                continue;
            }

            if (playback.isPlaying) {
                if (Math.abs(el.currentTime - target) > 0.12) el.currentTime = target;
                if (el.paused) el.play().catch(() => { /* autoplay blocked until user gesture */ });
            } else {
                if (!el.paused) el.pause();
                if (Math.abs(el.currentTime - target) > 1 / 240) el.currentTime = target;
            }
        }
    }, [playback.currentTime, playback.isPlaying, layers, masterVolume, masterMuted]);

    // ── Drag & drop import ───────────────────────────────────────────────
    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };
    const handleDragLeave = () => setIsDragging(false);
    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files.length > 0) onFilesDrop(e.dataTransfer.files);
    };

    // ── Direct manipulation of layers on the stage ───────────────────────
    const dragState = useRef<{ id: string; startX: number; startY: number; origin: { x: number; y: number } } | null>(null);

    const handleLayerMouseDown = (e: React.MouseEvent, layer: Layer) => {
        if (layer.locked) return;
        e.stopPropagation();
        onSelectLayer(layer.id);
        dragState.current = { id: layer.id, startX: e.clientX, startY: e.clientY, origin: { ...layer.position } };

        const stage = compositionRef.current;
        if (!stage) return;
        const rect = stage.getBoundingClientRect();

        const onMove = (ev: MouseEvent) => {
            const d = dragState.current;
            if (!d) return;
            const dx = ((ev.clientX - d.startX) / rect.width) * 100;
            const dy = ((ev.clientY - d.startY) / rect.height) * 100;
            let x = d.origin.x + dx;
            let y = d.origin.y + dy;
            if (ev.shiftKey) {
                // Constrain to the dominant axis.
                if (Math.abs(dx) > Math.abs(dy)) y = d.origin.y;
                else x = d.origin.x;
            }
            onUpdateLayer(d.id, { position: { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 } }, true);
        };
        const onUp = () => {
            dragState.current = null;
            onCommitGesture();
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup", onUp);
        };
        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);
    };

    const handleWheel = (e: React.WheelEvent, layer: Layer) => {
        if (!e.altKey || layer.locked) return;
        e.preventDefault();
        const next = Math.max(1, Math.min(500, layer.scale - Math.sign(e.deltaY) * 2));
        onUpdateLayer(layer.id, { scale: Math.round(next * 10) / 10 }, true);
    };

    const stageAspect = composition.width / composition.height;
    const activeLayers = visibleLayers(layers).filter((l) => isLayerActiveAt(l, playback.currentTime));

    return (
        <div
            className="flex flex-col flex-grow bg-[#161616] relative overflow-hidden"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            {/* Header / Info */}
            <div className="h-8 bg-[#2d2d2d] border-b border-black flex items-center justify-between px-4 text-[11px] text-gray-400">
                <div className="flex items-center gap-4">
                    <span className="font-bold text-white uppercase tracking-widest truncate max-w-[220px]">{composition.name}</span>
                    <span>{composition.width} x {composition.height} · {composition.fps} fps</span>
                    <span className="text-gray-600">{zoom}%</span>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={onOpenSettings} title="Composition settings (Ctrl+K)">
                        <Settings className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                    </button>
                    <button
                        title="Fullscreen (F11)"
                        onClick={() => {
                            if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => { });
                            else document.exitFullscreen().catch(() => { });
                        }}
                    >
                        <Maximize className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                    </button>
                </div>
            </div>

            {/* Preview Canvas Workspace */}
            <div
                className="flex-grow relative flex items-center justify-center bg-[#0e0e0e] overflow-hidden group"
                onMouseDown={() => onSelectLayer(null)}
            >
                <div className="absolute inset-0 opacity-10 workspace-grid pointer-events-none" />

                {/* Stage – the element whose contents equal the rendered output */}
                <div
                    id={COMPOSITION_STAGE_ID}
                    ref={compositionRef}
                    className="relative bg-black shadow-2xl overflow-hidden border border-white/5 w-[80%] max-w-[1200px] transition-transform duration-200 ease-out [container-type:size]"
                    style={{
                        aspectRatio: `${composition.width} / ${composition.height}`,
                        maxHeight: "90%",
                        transform: `scale(${zoom / 100})`,
                    }}
                >
                    {/* Row 0 of the timeline is the front-most layer, so paint in reverse order. */}
                    {[...activeLayers].reverse().map((layer) => {
                        const isActive = activeLayerId === layer.id;
                        const mediaAspect = layer.mediaWidth && layer.mediaHeight ? layer.mediaWidth / layer.mediaHeight : stageAspect;
                        let height: string;
                        if (layer.type === "VIDEO" || layer.type === "IMAGE") {
                            // width is % of stage width → height expressed via cqw so aspect is kept
                            height = `calc(${layer.scale}cqw / ${mediaAspect})`;
                        } else if (layer.type === "TEXT") {
                            height = "auto";
                        } else {
                            height = `${layer.scale}%`;
                        }
                        const ds = layer.styles?.dropShadow;
                        const shadow = ds?.enabled
                            ? `${Math.cos((ds.angle * Math.PI) / 180) * ds.distance}px ${Math.sin((ds.angle * Math.PI) / 180) * ds.distance}px ${ds.blur}px ${hexWithAlpha(ds.color, ds.opacity)}`
                            : "none";
                        const blur = layer.styles?.blur.enabled && layer.styles.blur.amount > 0 ? `blur(${layer.styles.blur.amount}px)` : "none";

                        return (
                            <div
                                key={layer.id}
                                onMouseDown={(e) => handleLayerMouseDown(e, layer)}
                                onWheel={(e) => handleWheel(e, layer)}
                                className={`absolute flex items-center justify-center ${isActive ? "ring-2 ring-[#d391fc] shadow-[0_0_20px_rgba(211,145,252,0.4)] z-50" : ""} ${layer.locked ? "cursor-not-allowed" : "cursor-move"}`}
                                style={{
                                    left: `${layer.position.x}%`,
                                    top: `${layer.position.y}%`,
                                    width: `${layer.scale}%`,
                                    height,
                                    transform: `translate(-50%, -50%) rotate(${layer.rotation}deg)`,
                                    opacity: layer.opacity / 100,
                                    backgroundColor: layer.type === "SOLID" || layer.type === "ADJUSTMENT" ? layer.color : "transparent",
                                    boxShadow: shadow,
                                    filter: blur,
                                    mixBlendMode: layer.type === "ADJUSTMENT" ? "overlay" : "normal",
                                }}
                            >
                                {layer.url && layer.type === "VIDEO" && (
                                    <video
                                        ref={registerMedia(layer.id)}
                                        src={layer.url}
                                        className="w-full h-full object-fill pointer-events-none"
                                        preload="auto"
                                        playsInline
                                    />
                                )}
                                {layer.url && layer.type === "AUDIO" && (
                                    <audio ref={registerMedia(layer.id)} src={layer.url} preload="auto" />
                                )}
                                {layer.url && layer.type === "IMAGE" && (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img src={layer.url} alt={layer.name} className="w-full h-full object-fill pointer-events-none" draggable={false} />
                                )}
                                {!layer.url && (layer.type === "VIDEO" || layer.type === "IMAGE") && (
                                    <div className="w-full h-full bg-[#2d2d2d] border border-dashed border-white/20 flex flex-col items-center justify-center text-gray-500 gap-1">
                                        <ImageIcon className="w-5 h-5" />
                                        <span className="text-[9px] uppercase tracking-widest">Media missing – re-import {layer.fileName ?? "file"}</span>
                                    </div>
                                )}
                                {layer.type === "TEXT" && (
                                    <span
                                        className="font-bold text-center whitespace-pre-wrap leading-tight pointer-events-none"
                                        style={{
                                            color: layer.color,
                                            fontSize: `${layer.fontSize ?? 8}cqh`,
                                            fontFamily: layer.fontFamily ?? "Inter, system-ui, sans-serif",
                                        }}
                                    >
                                        {layer.text ?? layer.name}
                                    </span>
                                )}
                                {layer.locked && (
                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none">
                                        <Lock className="w-4 h-4 text-white/50" />
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {/* Audio layers are inaudible-only, show a small indicator */}
                    {activeLayers.some((l) => l.type === "AUDIO") && (
                        <div className="absolute bottom-2 left-2 flex items-center gap-1 text-[#10b981] text-[9px] uppercase tracking-widest bg-black/40 px-2 py-0.5 rounded pointer-events-none">
                            <Volume2 className="w-3 h-3" /> {activeLayers.filter((l) => l.type === "AUDIO").length} audio
                        </div>
                    )}
                    {layers.length === 0 && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600 gap-2 pointer-events-none">
                            <Type className="w-6 h-6 opacity-30" />
                            <span className="text-[10px] uppercase tracking-widest opacity-50">Drop media here or press Ctrl+I to import</span>
                        </div>
                    )}
                </div>

                {/* Drag Overlay */}
                {isDragging && (
                    <div className="absolute inset-0 z-50 bg-[#d391fc]/20 backdrop-blur-sm flex items-center justify-center border-4 border-dashed border-[#d391fc]/50 pointer-events-none">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#d391fc] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(211,145,252,0.4)]">
                                <Maximize className="w-8 h-8 text-[#1e1e1e]" />
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-tighter italic">Drop to Import to BOLTChain</h3>
                        </div>
                    </div>
                )}

                {/* Safe-area overlay */}
                <div className="absolute inset-0 pointer-events-none border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-[90%] h-[90%] border border-dashed border-white/10" />
                </div>
            </div>

            {/* Transport Bar */}
            <div className="h-12 bg-[#2d2d2d] border-t border-black flex items-center justify-between px-6">
                <div className="flex items-center gap-4">
                    <span className="text-xl font-mono text-[#00e0ff] font-bold tabular-nums" title="hh:mm:ss:ff">
                        {formatTimecode(playback.currentTime, playback.fps)}
                    </span>
                    <span className="text-[10px] font-mono text-gray-600">/ {formatTimecode(playback.duration, playback.fps)}</span>
                </div>

                <div className="flex items-center gap-4">
                    <button onClick={() => onSeek(0)} className="text-gray-400 hover:text-white transition-colors" title="Go to start (Home)">
                        <SkipBack className="w-5 h-5 fill-current" />
                    </button>
                    <button onClick={() => onStepFrames(-1)} className="text-gray-400 hover:text-white text-[10px] font-mono" title="Previous frame (←)">
                        −1f
                    </button>
                    <button
                        onClick={onTogglePlayback}
                        className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10 shadow-lg"
                        title="Play / Pause (Space)"
                    >
                        {playback.isPlaying ? (
                            <Pause className="w-5 h-5 fill-current text-white" />
                        ) : (
                            <Play className="w-5 h-5 fill-current text-white ml-1" />
                        )}
                    </button>
                    <button onClick={() => onStepFrames(1)} className="text-gray-400 hover:text-white text-[10px] font-mono" title="Next frame (→)">
                        +1f
                    </button>
                    <button onClick={() => onSeek(playback.duration)} className="text-gray-400 hover:text-white transition-colors" title="Go to end (End)">
                        <SkipForward className="w-5 h-5 fill-current" />
                    </button>
                </div>

                <div className="flex items-center gap-3">
                    <button onClick={() => setMasterMuted((m) => !m)} className="text-gray-400 hover:text-white" title="Mute preview">
                        {masterMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                        value={masterVolume}
                        onChange={(e) => setMasterVolume(parseFloat(e.target.value))}
                        className="w-20 accent-[#00e0ff]"
                        title="Preview volume"
                    />
                </div>
            </div>
        </div>
    );
}
