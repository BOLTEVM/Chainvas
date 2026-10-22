"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { PlaybackState, Layer, TrackType } from "@/app/video/types";
import { Eye, Lock, Volume2, Plus, Scissors, Timer, Star, Type, Square, Film, Music, Image as ImageIcon, SlidersHorizontal, ChevronUp, ChevronDown, Trash2 } from "lucide-react";

interface AETimelineProps {
    playback: PlaybackState;
    layers: Layer[];
    activeLayerId: string | null;
    onSelectLayer: (id: string | null) => void;
    onToggleLayerProp: (id: string, prop: "visible" | "muted" | "locked" | "solo") => void;
    onAddLayer: (type: Extract<TrackType, "SOLID" | "TEXT" | "ADJUSTMENT">) => void;
    onSplit: () => void;
    onSeek: (time: number) => void;
    onUpdateLayer: (id: string, updates: Partial<Layer>, transient?: boolean) => void;
    onCommitGesture: () => void;
    onReorderLayer: (id: string, direction: -1 | 1) => void;
    onDeleteLayer: (id: string) => void;
    zoom?: number;
}

type DragMode = "move" | "trim-start" | "trim-end";

interface DragState {
    id: string;
    mode: DragMode;
    startX: number;
    origin: Layer;
}

const SNAP_PX = 6;
const ROW_H = 32; // px – keep in sync with h-8

const typeIcon: Record<TrackType, React.ReactNode> = {
    VIDEO: <Film className="w-3 h-3" />,
    AUDIO: <Music className="w-3 h-3" />,
    IMAGE: <ImageIcon className="w-3 h-3" />,
    SOLID: <Square className="w-3 h-3" />,
    ADJUSTMENT: <SlidersHorizontal className="w-3 h-3" />,
    TEXT: <Type className="w-3 h-3" />,
};

/** Pick a ruler tick spacing (seconds) that keeps labels ≥ 60 px apart. */
const tickStep = (pixelsPerSecond: number) => {
    const candidates = [0.1, 0.25, 0.5, 1, 2, 5, 10, 15, 30, 60];
    return candidates.find((c) => c * pixelsPerSecond >= 60) ?? 60;
};

export default function AETimeline({
    playback,
    layers,
    activeLayerId,
    onSelectLayer,
    onToggleLayerProp,
    onAddLayer,
    onSplit,
    onSeek,
    onUpdateLayer,
    onCommitGesture,
    onReorderLayer,
    onDeleteLayer,
    zoom = 100,
}: AETimelineProps) {
    const pixelsPerSecond = 100 * (zoom / 100);
    const [drag, setDrag] = useState<DragState | null>(null);
    const [scrubbing, setScrubbing] = useState(false);
    const [renamingId, setRenamingId] = useState<string | null>(null);
    const [showAddMenu, setShowAddMenu] = useState(false);
    const tracksRef = useRef<HTMLDivElement>(null);
    const headersRef = useRef<HTMLDivElement>(null);
    const trackWidth = Math.max(playback.duration * pixelsPerSecond, 400);

    // Snap targets: comp start/end, playhead, every other layer's in/out.
    const snapPoints = useMemo(() => {
        const pts = new Set<number>([0, playback.duration, playback.currentTime]);
        layers.forEach((l) => {
            pts.add(l.startTime);
            pts.add(l.startTime + l.duration);
        });
        return Array.from(pts);
    }, [layers, playback.duration, playback.currentTime]);

    const snap = (time: number) => {
        let best = time;
        let bestDist = SNAP_PX / pixelsPerSecond;
        for (const p of snapPoints) {
            const d = Math.abs(p - time);
            if (d < bestDist) {
                bestDist = d;
                best = p;
            }
        }
        return best;
    };

    const timeFromClientX = (clientX: number) => {
        const el = tracksRef.current;
        if (!el) return 0;
        const rect = el.getBoundingClientRect();
        const x = clientX - rect.left + el.scrollLeft;
        return Math.max(0, Math.min(x / pixelsPerSecond, playback.duration));
    };

    // ── Playhead scrubbing (ruler + empty track area) ───────────────────
    const startScrub = (e: React.MouseEvent) => {
        if (e.button !== 0) return;
        e.preventDefault();
        setScrubbing(true);
        onSeek(timeFromClientX(e.clientX));
    };

    useEffect(() => {
        if (!scrubbing) return;
        const onMove = (e: MouseEvent) => onSeek(timeFromClientX(e.clientX));
        const onUp = () => setScrubbing(false);
        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);
        return () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup", onUp);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrubbing, pixelsPerSecond, playback.duration]);

    // ── Layer move / trim ────────────────────────────────────────────────
    const beginDrag = (e: React.MouseEvent, layer: Layer, mode: DragMode) => {
        if (e.button !== 0) return;
        e.stopPropagation();
        e.preventDefault();
        onSelectLayer(layer.id);
        if (layer.locked) return;
        setDrag({ id: layer.id, mode, startX: e.clientX, origin: layer });
    };

    useEffect(() => {
        if (!drag) return;
        const minDuration = 1 / playback.fps;

        const onMove = (e: MouseEvent) => {
            const delta = (e.clientX - drag.startX) / pixelsPerSecond;
            const o = drag.origin;
            const noSnap = e.altKey;

            if (drag.mode === "move") {
                let start = o.startTime + delta;
                if (!noSnap) {
                    const sStart = snap(start);
                    const sEnd = snap(start + o.duration);
                    if (sStart !== start) start = sStart;
                    else if (sEnd !== start + o.duration) start = sEnd - o.duration;
                }
                start = Math.max(0, Math.min(start, playback.duration - minDuration));
                onUpdateLayer(drag.id, { startTime: round(start) }, true);
                return;
            }

            if (drag.mode === "trim-start") {
                let start = o.startTime + delta;
                if (!noSnap) start = snap(start);
                const maxStart = o.startTime + o.duration - minDuration;
                start = Math.max(0, Math.min(start, maxStart));
                const shift = start - o.startTime;
                const updates: Partial<Layer> = { startTime: round(start), duration: round(o.duration - shift) };
                if (o.sourceDuration !== undefined) {
                    // Trimming the head of media moves its in-point too, keeping content in place.
                    updates.inPoint = round(Math.max(0, Math.min(o.inPoint + shift, o.sourceDuration - minDuration)));
                }
                onUpdateLayer(drag.id, updates, true);
                return;
            }

            // trim-end
            let end = o.startTime + o.duration + delta;
            if (!noSnap) end = snap(end);
            let duration = end - o.startTime;
            if (o.sourceDuration !== undefined && o.type !== "IMAGE") {
                duration = Math.min(duration, o.sourceDuration - o.inPoint);
            }
            duration = Math.max(minDuration, Math.min(duration, playback.duration - o.startTime));
            onUpdateLayer(drag.id, { duration: round(duration) }, true);
        };

        const onUp = () => {
            setDrag(null);
            onCommitGesture();
        };

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);
        return () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup", onUp);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [drag, pixelsPerSecond, playback.duration, playback.fps, snapPoints]);

    // Keep the header list and the tracks vertically in sync.
    const syncScroll = (source: "headers" | "tracks") => (e: React.UIEvent<HTMLDivElement>) => {
        const other = source === "headers" ? tracksRef.current : headersRef.current;
        if (other && other.scrollTop !== e.currentTarget.scrollTop) other.scrollTop = e.currentTarget.scrollTop;
    };

    // Auto-follow the playhead while playing.
    useEffect(() => {
        const el = tracksRef.current;
        if (!el || !playback.isPlaying) return;
        const x = playback.currentTime * pixelsPerSecond;
        if (x < el.scrollLeft || x > el.scrollLeft + el.clientWidth - 40) {
            el.scrollLeft = Math.max(0, x - 40);
        }
    }, [playback.currentTime, playback.isPlaying, pixelsPerSecond]);

    const step = tickStep(pixelsPerSecond);
    const ticks = useMemo(() => {
        const out: number[] = [];
        for (let t = 0; t <= playback.duration + 1e-6; t += step) out.push(Math.round(t * 1000) / 1000);
        return out;
    }, [playback.duration, step]);

    const activeLayer = layers.find((l) => l.id === activeLayerId) ?? null;

    return (
        <div className="h-full bg-[#2d2d2d] flex flex-col border-t border-black select-none">
            {/* Toolbar */}
            <div className="h-8 bg-[#3c3c3c] border-b border-black flex items-center px-4 gap-6 text-[10px] text-gray-400 font-bold uppercase tracking-widest shrink-0">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <button onClick={() => setShowAddMenu((s) => !s)} className="flex items-center gap-1 hover:text-white transition-colors">
                            <Plus className="w-3 h-3" /> New Layer
                        </button>
                        {showAddMenu && (
                            <div className="absolute top-full left-0 mt-1 bg-[#2d2d2d] border border-black shadow-2xl rounded-sm py-1 z-[60] w-44 normal-case tracking-normal font-medium" onMouseLeave={() => setShowAddMenu(false)}>
                                {([
                                    ["SOLID", "Solid", <Square key="s" className="w-3 h-3" />],
                                    ["TEXT", "Text", <Type key="t" className="w-3 h-3" />],
                                    ["ADJUSTMENT", "Adjustment", <SlidersHorizontal key="a" className="w-3 h-3" />],
                                ] as const).map(([type, label, icon]) => (
                                    <button
                                        key={type}
                                        onClick={() => { onAddLayer(type); setShowAddMenu(false); }}
                                        className="w-full text-left px-3 py-1.5 text-[11px] text-gray-300 hover:bg-[#d391fc]/20 hover:text-[#d391fc] flex items-center gap-2"
                                    >
                                        {icon} {label} Layer
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <button onClick={onSplit} className="flex items-center gap-1 hover:text-white transition-colors disabled:opacity-30" disabled={!activeLayer} title="Split at playhead (Ctrl+Shift+D)">
                        <Scissors className="w-3 h-3" /> Split
                    </button>
                    <button onClick={() => activeLayer && onReorderLayer(activeLayer.id, -1)} disabled={!activeLayer} className="hover:text-white disabled:opacity-30" title="Move layer up (Ctrl+])">
                        <ChevronUp className="w-3.5 h-3.5" />
                    </button>
                    <button onClick={() => activeLayer && onReorderLayer(activeLayer.id, 1)} disabled={!activeLayer} className="hover:text-white disabled:opacity-30" title="Move layer down (Ctrl+[)">
                        <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                    <button onClick={() => activeLayer && onDeleteLayer(activeLayer.id)} disabled={!activeLayer} className="hover:text-red-400 disabled:opacity-30" title="Delete layer (Del)">
                        <Trash2 className="w-3.5 h-3.5" />
                    </button>
                </div>
                <div className="w-px h-4 bg-white/10" />
                <div className="flex items-center gap-2 text-[#00e0ff]">
                    <Timer className="w-3.5 h-3.5" />
                    <span>{layers.length} layer{layers.length === 1 ? "" : "s"}</span>
                </div>
                <div className="ml-auto text-gray-600 normal-case tracking-normal font-medium">
                    Drag edges to trim · Alt-drag to disable snapping · Double-click a name to rename
                </div>
            </div>

            <div className="flex flex-grow overflow-hidden">
                {/* Layer Headers (Left) */}
                <div className="w-[300px] bg-[#252526] border-r border-black flex flex-col overflow-hidden shrink-0">
                    <div className="h-8 bg-[#333333] border-b border-black flex items-center px-2 gap-3 text-[9px] text-gray-500 font-black shrink-0">
                        <div className="w-16 flex justify-center gap-2">
                            <Eye className="w-3 h-3" />
                            <Volume2 className="w-3 h-3" />
                            <Star className="w-3 h-3" />
                            <Lock className="w-3 h-3" />
                        </div>
                        <div className="flex-grow">LAYER NAME</div>
                        <div className="w-14 text-right">IN / OUT</div>
                    </div>

                    <div ref={headersRef} onScroll={syncScroll("headers")} className="flex-grow overflow-y-auto overflow-x-hidden custom-scrollbar">
                        {layers.map((layer, index) => (
                            <div
                                key={layer.id}
                                onClick={() => onSelectLayer(layer.id)}
                                onDoubleClick={() => setRenamingId(layer.id)}
                                style={{ height: ROW_H }}
                                className={`flex items-center px-2 gap-3 border-b border-black/20 hover:bg-[#37373d] cursor-pointer transition-colors group ${activeLayerId === layer.id ? "bg-[#37373d] ring-1 ring-inset ring-[#d391fc]/30" : index % 2 === 0 ? "bg-[#2d2d2d]/30" : "bg-transparent"}`}
                            >
                                <div className="w-16 flex justify-center gap-2">
                                    <button onClick={(e) => { e.stopPropagation(); onToggleLayerProp(layer.id, "visible"); }} className={layer.visible ? "text-[#00e0ff]" : "text-gray-600"} title="Toggle visibility">
                                        <Eye className="w-3 h-3" />
                                    </button>
                                    <button onClick={(e) => { e.stopPropagation(); onToggleLayerProp(layer.id, "muted"); }} className={!layer.muted ? "text-[#00e0ff]" : "text-gray-600"} title="Toggle audio">
                                        <Volume2 className="w-3 h-3" />
                                    </button>
                                    <button onClick={(e) => { e.stopPropagation(); onToggleLayerProp(layer.id, "solo"); }} className={layer.solo ? "text-yellow-400" : "text-gray-600"} title="Solo">
                                        <Star className="w-3 h-3" />
                                    </button>
                                    <button onClick={(e) => { e.stopPropagation(); onToggleLayerProp(layer.id, "locked"); }} className={layer.locked ? "text-red-500" : "text-gray-600"} title="Lock">
                                        <Lock className="w-3 h-3" />
                                    </button>
                                </div>
                                <div className="flex-grow text-[11px] text-gray-300 font-medium truncate flex items-center gap-2 min-w-0">
                                    <div className="w-3 h-3 rounded-sm shrink-0 flex items-center justify-center text-black/60" style={{ backgroundColor: layer.color }}>{typeIcon[layer.type]}</div>
                                    {renamingId === layer.id ? (
                                        <input
                                            autoFocus
                                            defaultValue={layer.name}
                                            onClick={(e) => e.stopPropagation()}
                                            onBlur={(e) => { onUpdateLayer(layer.id, { name: e.target.value.trim() || layer.name }); setRenamingId(null); }}
                                            onKeyDown={(e) => {
                                                e.stopPropagation();
                                                if (e.key === "Enter") (e.target as HTMLInputElement).blur();
                                                if (e.key === "Escape") setRenamingId(null);
                                            }}
                                            className="bg-[#1e1e1e] border border-[#d391fc]/50 rounded px-1 text-[11px] text-white outline-none w-full"
                                        />
                                    ) : (
                                        <span className="truncate">{layer.name}</span>
                                    )}
                                </div>
                                <div className="w-14 text-[9px] text-gray-500 font-mono text-right leading-tight">
                                    {layer.startTime.toFixed(2)}<br />{(layer.startTime + layer.duration).toFixed(2)}
                                </div>
                            </div>
                        ))}
                        {layers.length === 0 && (
                            <div className="p-6 text-center text-[10px] text-gray-600 uppercase tracking-widest">No layers yet</div>
                        )}
                    </div>
                </div>

                {/* Tracks (Right) – one scroll container so the ruler stays aligned */}
                <div
                    ref={tracksRef}
                    onScroll={syncScroll("tracks")}
                    className="flex-grow relative overflow-auto custom-scrollbar"
                >
                    <div style={{ width: trackWidth, minHeight: "100%" }} className="relative">
                        {/* Ruler */}
                        <div
                            className="sticky top-0 h-8 bg-[#333333] border-b border-black relative cursor-crosshair z-30"
                            onMouseDown={startScrub}
                        >
                            {ticks.map((t) => (
                                <div
                                    key={t}
                                    className="absolute border-l border-white/10 h-full flex items-end pb-1 pl-1 text-[8px] text-gray-500 font-mono pointer-events-none"
                                    style={{ left: `${t * pixelsPerSecond}px` }}
                                >
                                    {step >= 1 ? `${t}s` : `${t.toFixed(2)}s`}
                                </div>
                            ))}
                            {/* Playhead head */}
                            <div className="absolute top-0 bottom-0 w-px bg-[#00e0ff] pointer-events-none" style={{ left: `${playback.currentTime * pixelsPerSecond}px` }}>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#00e0ff] playhead-tip" />
                            </div>
                        </div>

                        {/* Rows */}
                        <div className="relative" onMouseDown={startScrub}>
                            {/* Playhead line */}
                            <div className="absolute top-0 bottom-0 w-px bg-[#00e0ff] z-20 pointer-events-none" style={{ left: `${playback.currentTime * pixelsPerSecond}px` }} />

                            {/* Composition end shading */}
                            <div className="absolute top-0 bottom-0 right-0 bg-black/40 pointer-events-none" style={{ left: `${playback.duration * pixelsPerSecond}px` }} />

                            {layers.map((layer, index) => {
                                const isActive = activeLayerId === layer.id;
                                return (
                                    <div
                                        key={layer.id}
                                        style={{ height: ROW_H }}
                                        className={`border-b border-black/10 relative transition-colors ${isActive ? "bg-[#d391fc]/5" : index % 2 === 0 ? "bg-[#2d2d2d]/10" : "bg-transparent"}`}
                                    >
                                        <div
                                            onMouseDown={(e) => beginDrag(e, layer, "move")}
                                            className={`absolute top-1 bottom-1 rounded shadow-lg flex items-center px-2 group ${layer.locked ? "cursor-not-allowed" : "cursor-move"} ${isActive ? "ring-2 ring-white ring-offset-1 ring-offset-black/50 z-10" : ""}`}
                                            style={{
                                                left: `${layer.startTime * pixelsPerSecond}px`,
                                                width: `${Math.max(2, layer.duration * pixelsPerSecond)}px`,
                                                backgroundColor: layer.color,
                                                opacity: !layer.visible ? 0.35 : isActive ? 1 : 0.8,
                                            }}
                                            title={`${layer.name} · ${layer.startTime.toFixed(2)}s → ${(layer.startTime + layer.duration).toFixed(2)}s`}
                                        >
                                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded" />
                                            {/* Trim handles */}
                                            {!layer.locked && (
                                                <>
                                                    <div onMouseDown={(e) => beginDrag(e, layer, "trim-start")} className="absolute left-0 top-0 bottom-0 w-2 cursor-ew-resize bg-white/0 hover:bg-white/40 rounded-l" />
                                                    <div onMouseDown={(e) => beginDrag(e, layer, "trim-end")} className="absolute right-0 top-0 bottom-0 w-2 cursor-ew-resize bg-white/0 hover:bg-white/40 rounded-r" />
                                                </>
                                            )}
                                            <span className="text-[10px] font-bold text-white uppercase tracking-tighter truncate drop-shadow-md pointer-events-none">
                                                {layer.name}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                            {layers.length === 0 && <div style={{ height: ROW_H * 3 }} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const round = (n: number) => Math.round(n * 1000) / 1000;
