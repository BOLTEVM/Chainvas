"use client";

import { useState, useRef, useEffect } from "react";
import { PlaybackState, Layer } from "@/app/video/types";
import { Eye, Lock, Volume2, Plus, Scissors, Timer } from "lucide-react";

interface AETimelineProps {
    playback: PlaybackState;
    layers: Layer[];
    activeLayerId: string | null;
    onSelectLayer: (id: string) => void;
    onToggleLayerProp: (id: string, prop: keyof Layer) => void;
    onAddLayer: () => void;
    onSplit: () => void;
    onSeek: (time: number) => void;
    onUpdateLayer: (id: string, updates: Partial<Layer>) => void;
    zoom?: number;
}

export default function AETimeline({ playback, layers, activeLayerId, onSelectLayer, onToggleLayerProp, onAddLayer, onSplit, onSeek, onUpdateLayer, zoom = 100 }: AETimelineProps) {
    const pixelsPerSecond = 100 * (zoom / 100);
    const [draggingLayerId, setDraggingLayerId] = useState<string | null>(null);
    const dragStartX = useRef(0);
    const dragStartStartTime = useRef(0);

    const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (draggingLayerId) return; // Don't seek while dragging
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const time = x / pixelsPerSecond;
        onSeek(Math.max(0, Math.min(time, playback.duration)));
    };

    const handleLayerMouseDown = (e: React.MouseEvent, layer: Layer) => {
        e.stopPropagation();
        onSelectLayer(layer.id);
        setDraggingLayerId(layer.id);
        dragStartX.current = e.clientX;
        dragStartStartTime.current = layer.startTime;
    };

    useEffect(() => {
        if (!draggingLayerId) return;

        const handleMouseMove = (e: MouseEvent) => {
            const deltaX = e.clientX - dragStartX.current;
            const deltaTime = deltaX / pixelsPerSecond;
            const newStartTime = Math.max(0, dragStartStartTime.current + deltaTime);
            onUpdateLayer(draggingLayerId, { startTime: newStartTime });
        };

        const handleMouseUp = () => {
            setDraggingLayerId(null);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [draggingLayerId, pixelsPerSecond]);

    return (
        <div className="h-[300px] bg-[#2d2d2d] flex flex-col border-t border-black select-none">
            {/* Toolbar Area */}
            <div className="h-8 bg-[#3c3c3c] border-b border-black flex items-center px-4 gap-6 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                <div className="flex items-center gap-4">
                    <button
                        onClick={onAddLayer}
                        className="flex items-center gap-1 hover:text-white transition-colors"
                    >
                        <Plus className="w-3 h-3" /> New Layer
                    </button>
                    <button
                        onClick={onSplit}
                        className="flex items-center gap-1 hover:text-white transition-colors"
                    >
                        <Scissors className="w-3 h-3" /> Split
                    </button>
                </div>
                <div className="w-px h-4 bg-white/10" />
                <div className="flex items-center gap-2 text-[#00e0ff]">
                    <Timer className="w-3.5 h-3.5" />
                    <span>Active Compositon</span>
                </div>
            </div>

            <div className="flex flex-grow overflow-hidden">
                {/* Layer Headers (Left) */}
                <div className="w-[300px] bg-[#252526] border-r border-black flex flex-col overflow-hidden">
                    <div className="h-8 bg-[#333333] border-b border-black flex items-center px-2 gap-4 text-[9px] text-gray-500 font-black">
                        <div className="w-12 flex justify-center gap-2">
                            <Eye className="w-3 h-3" />
                            <Volume2 className="w-3 h-3" />
                            <Lock className="w-3 h-3" />
                        </div>
                        <div className="flex-grow">LAYER NAME</div>
                        <div className="w-12">PARENT</div>
                    </div>

                    <div className="flex-grow overflow-y-auto custom-scrollbar">
                        {layers.map((layer, index) => (
                            <div
                                key={layer.id}
                                onClick={() => onSelectLayer(layer.id)}
                                className={`h-8 flex items-center px-2 gap-4 border-b border-black/20 hover:bg-[#37373d] cursor-pointer transition-colors group ${activeLayerId === layer.id ? "bg-[#37373d] ring-1 ring-inset ring-[#d391fc]/30" : index % 2 === 0 ? "bg-[#2d2d2d]/30" : "bg-transparent"}`}
                            >
                                <div className="w-12 flex justify-center gap-2 opacity-100">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); onToggleLayerProp(layer.id, "visible"); }}
                                        className={layer.visible ? "text-[#00e0ff]" : "text-gray-600"}
                                    >
                                        <Eye className="w-3 h-3" />
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); onToggleLayerProp(layer.id, "muted"); }}
                                        className={!layer.muted ? "text-[#00e0ff]" : "text-gray-600"}
                                    >
                                        <Volume2 className="w-3 h-3" />
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); onToggleLayerProp(layer.id, "locked"); }}
                                        className={layer.locked ? "text-red-500" : "text-gray-600"}
                                    >
                                        <Lock className="w-3 h-3" />
                                    </button>
                                </div>
                                <div className="flex-grow text-[11px] text-gray-300 font-medium truncate flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: layer.color }} />
                                    {layer.name}
                                </div>
                                <div className="w-12 text-[9px] text-gray-600">None</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Timeline Tracks (Right) */}
                <div className="flex-grow flex flex-col overflow-hidden relative">
                    {/* Time Ruler */}
                    <div
                        className="h-8 bg-[#333333] border-b border-black relative cursor-crosshair overflow-hidden"
                        onClick={handleTimelineClick}
                    >
                        {Array.from({ length: Math.ceil(playback.duration) + 1 }).map((_, i) => (
                            <div
                                key={i}
                                className="absolute border-l border-white/10 h-full flex items-end pb-1 pl-1 text-[8px] text-gray-500 font-mono"
                                style={{ left: `${i * pixelsPerSecond}px` }}
                            >
                                {i}s
                            </div>
                        ))}
                    </div>

                    {/* Tracks Area */}
                    <div
                        className="flex-grow relative overflow-auto custom-scrollbar"
                        style={{ width: `${playback.duration * pixelsPerSecond}px` }}
                        onClick={handleTimelineClick}
                    >
                        {/* Playhead Line */}
                        <div
                            className="absolute top-0 bottom-0 w-px bg-[#00e0ff] z-10 pointer-events-none"
                            style={{ left: `${playback.currentTime * pixelsPerSecond}px` }}
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#00e0ff] playhead-tip" />
                        </div>

                        {layers.map((layer, index) => (
                            <div
                                key={layer.id}
                                className={`h-8 border-b border-black/10 relative cursor-pointer transition-colors ${activeLayerId === layer.id ? "bg-[#d391fc]/5" : index % 2 === 0 ? "bg-[#2d2d2d]/10" : "bg-transparent"}`}
                            >
                                <div
                                    onMouseDown={(e) => handleLayerMouseDown(e, layer)}
                                    className={`absolute top-1 bottom-1 rounded shadow-lg border-x-2 border-white/20 flex items-center px-2 cursor-move group ${activeLayerId === layer.id ? "ring-2 ring-white ring-offset-1 ring-offset-black/50 overflow-visible z-20" : ""}`}
                                    style={{
                                        left: `${layer.startTime * pixelsPerSecond}px`,
                                        width: `${layer.duration * pixelsPerSecond}px`,
                                        backgroundColor: layer.color,
                                        opacity: activeLayerId === layer.id ? 1 : 0.8
                                    }}
                                >
                                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span className="text-[10px] font-bold text-white uppercase tracking-tighter truncate drop-shadow-md">{layer.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
