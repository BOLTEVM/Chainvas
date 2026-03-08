"use client";

import { useState, useEffect } from "react";

import { PlaybackState, Layer } from "@/app/video/types";
import { Play, Pause, SkipBack, SkipForward, Maximize, Volume2, Settings, Lock } from "lucide-react";

interface CompositionViewProps {
    playback: PlaybackState;
    layers: Layer[];
    activeLayerId: string | null;
    onSelectLayer: (id: string) => void;
    onTogglePlayback: () => void;
    onSeek: (time: number) => void;
    onFilesDrop: (files: FileList) => void;
}

export default function CompositionView({ playback, layers, activeLayerId, onSelectLayer, onTogglePlayback, onSeek, onFilesDrop }: CompositionViewProps) {
    const [isDragging, setIsDragging] = useState(false);

    const formatTimecode = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = Math.floor(seconds % 60);
        const f = Math.floor((seconds % 1) * playback.fps);
        return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}:${f.toString().padStart(2, "0")}`;
    };

    // Sync individual video elements with global playback
    useEffect(() => {
        const videos = document.querySelectorAll('video');
        videos.forEach(v => {
            if (playback.isPlaying) {
                v.play().catch(() => { });
            } else {
                v.pause();
            }
        });
    }, [playback.isPlaying]);

    useEffect(() => {
        const videos = document.querySelectorAll('video');
        videos.forEach(v => {
            if (Math.abs(v.currentTime - playback.currentTime) > 0.1) {
                v.currentTime = playback.currentTime;
            }
        });
    }, [playback.currentTime]);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files.length > 0) {
            onFilesDrop(e.dataTransfer.files);
        }
    };

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
                    <span className="font-bold text-white uppercase tracking-widest">Composition 1</span>
                    <span>1920 x 1080 (1.00)</span>
                </div>
                <div className="flex items-center gap-2">
                    <Settings className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                    <Maximize className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                </div>
            </div>

            {/* Preview Canvas Workspace */}
            <div className="flex-grow relative flex items-center justify-center bg-[#0e0e0e] overflow-hidden group">
                <div className="absolute inset-0 opacity-10 workspace-grid" />

                {/* Simulated Final Canvas */}
                <div className="relative aspect-video bg-black shadow-2xl overflow-hidden border border-white/5 w-[80%] max-w-[1200px]">
                    {layers.filter(l => {
                        const anySolo = layers.some(s => s.solo);
                        if (anySolo && !l.solo) return false;
                        return l.visible;
                    }).map((layer) => (
                        <div
                            key={layer.id}
                            onClick={() => !layer.locked && onSelectLayer(layer.id)}
                            className={`absolute transition-all duration-100 overflow-hidden flex items-center justify-center group ${activeLayerId === layer.id ? "ring-2 ring-[#d391fc] shadow-[0_0_20px_rgba(211,145,252,0.4)] z-50" : ""} ${layer.locked ? "pointer-events-none opacity-50 grayscale-[0.5]" : "cursor-pointer pointer-events-auto"}`}
                            style={{
                                left: `${layer.position.x}%`,
                                top: `${layer.position.y}%`,
                                width: `${layer.scale}%`,
                                transform: `translate(-50%, -50%) rotate(${layer.rotation}deg)`,
                                backgroundColor: layer.url ? "transparent" : layer.color,
                                height: layer.type === "VIDEO" ? "auto" : "40px",
                                opacity: layer.opacity / 100,
                                boxShadow: layer.styles?.dropShadow.enabled
                                    ? `${Math.cos(layer.styles.dropShadow.angle * Math.PI / 180) * layer.styles.dropShadow.distance}px ${Math.sin(layer.styles.dropShadow.angle * Math.PI / 180) * layer.styles.dropShadow.distance}px ${layer.styles.dropShadow.blur}px ${layer.styles.dropShadow.color}${Math.floor(layer.styles.dropShadow.opacity * 2.55).toString(16).padStart(2, '0')}`
                                    : "none",
                                filter: layer.styles?.blur.enabled
                                    ? `blur(${layer.styles.blur.amount}px)`
                                    : "none",
                            }}
                        >
                            {layer.url && layer.type === "VIDEO" && (
                                <video
                                    src={layer.url}
                                    className="w-full h-full object-cover"
                                    muted={layer.muted}
                                    preload="auto"
                                    onLoadedMetadata={(e) => {
                                        // We could sync duration back to state here
                                    }}
                                />
                            )}
                            {layer.url && layer.type === "AUDIO" && (
                                <div className={`w-full h-full ${layer.muted ? "bg-gray-800" : "bg-[#10b981]/20"} flex items-center px-3 border border-[#10b981]/50 rounded`}>
                                    <Volume2 className={`w-3 h-3 ${layer.muted ? "text-gray-500" : "text-[#10b981]"} mr-2`} />
                                    <span className={`text-[8px] ${layer.muted ? "text-gray-500" : "text-[#10b981]"} truncate`}>{layer.name} {layer.muted ? "(Muted)" : ""}</span>
                                </div>
                            )}
                            {layer.locked && (
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                    <Lock className="w-4 h-4 text-white/50" />
                                </div>
                            )}
                        </div>
                    ))}
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

                {/* Overlays (Safe Areas, etc) */}
                <div className="absolute inset-0 pointer-events-none border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-[90%] h-[90%] border border-dashed border-white/10" />
                </div>
            </div>

            {/* Transport Bar */}
            <div className="h-12 bg-[#2d2d2d] border-t border-black flex items-center justify-between px-6">
                <div className="flex items-center gap-4">
                    <span className="text-xl font-mono text-[#00e0ff] font-bold tabular-nums">
                        {formatTimecode(playback.currentTime)}
                    </span>
                </div>

                <div className="flex items-center gap-4">
                    <button onClick={() => onSeek(0)} className="text-gray-400 hover:text-white transition-colors">
                        <SkipBack className="w-5 h-5 fill-current" />
                    </button>
                    <button
                        onClick={onTogglePlayback}
                        className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10 shadow-lg group"
                    >
                        {playback.isPlaying ? (
                            <Pause className="w-5 h-5 fill-current text-white" />
                        ) : (
                            <Play className="w-5 h-5 fill-current text-white ml-1" />
                        )}
                    </button>
                    <button onClick={() => onSeek(playback.duration)} className="text-gray-400 hover:text-white transition-colors">
                        <SkipForward className="w-5 h-5 fill-current" />
                    </button>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Volume2 className="w-4 h-4 text-gray-400" />
                        <div className="w-20 h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-[80%] h-full bg-[#00e0ff]" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
