"use client";

import { ZoomIn, ZoomOut, Maximize } from "lucide-react";

interface NavigatorPanelProps {
    zoom: number;
    onZoomChange: (z: number) => void;
}

export default function NavigatorPanel({ zoom, onZoomChange }: NavigatorPanelProps) {
    return (
        <div className="flex flex-col bg-[#252526] border-b border-[#1e1e1e]">
            {/* Header */}
            <div className="h-9 bg-[#3c3c3c] flex items-center px-3 border-b border-[#1e1e1e]">
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Navigator</span>
            </div>

            <div className="p-4 flex flex-col gap-4">
                {/* Mock Preview Area */}
                <div className="aspect-video bg-black border border-[#454545] rounded-sm relative overflow-hidden flex items-center justify-center group cursor-pointer">
                    <div className="w-12 h-12 border border-[#00e0ff] bg-[#00e0ff]/10" />
                    <div className="absolute inset-0 bg-transparent group-hover:bg-white/5 transition-colors" />
                    <Maximize className="absolute top-1 right-1 w-3 h-3 text-gray-600 opacity-0 group-hover:opacity-100" />
                </div>

                {/* Zoom Controls */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => onZoomChange(Math.max(10, zoom - 10))}
                        className="p-1.5 text-gray-500 hover:text-white hover:bg-[#3c3c3c] rounded-sm"
                    >
                        <ZoomOut className="w-3.5 h-3.5" />
                    </button>
                    <input
                        type="range" min="10" max="400"
                        value={zoom}
                        onChange={(e) => onZoomChange(parseInt(e.target.value))}
                        className="flex-grow accent-[#00e0ff] h-1"
                    />
                    <button
                        onClick={() => onZoomChange(Math.min(400, zoom + 10))}
                        className="p-1.5 text-gray-500 hover:text-white hover:bg-[#3c3c3c] rounded-sm"
                    >
                        <ZoomIn className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] font-mono text-gray-400 w-8 text-right">{zoom}%</span>
                </div>
            </div>
        </div>
    );
}
