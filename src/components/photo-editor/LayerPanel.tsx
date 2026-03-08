"use client";

import { LayerData } from "@/app/photo/types";
import { Eye, EyeOff, Lock, Unlock, Layers, ChevronDown, MoreHorizontal } from "lucide-react";

interface LayerPanelProps {
    layers: LayerData[];
    activeLayerId: string | null;
    onSelect: (id: string) => void;
    onToggleVisibility: (id: string) => void;
    onToggleLock: (id: string) => void;
}

export default function LayerPanel({
    layers,
    activeLayerId,
    onSelect,
    onToggleVisibility,
    onToggleLock
}: LayerPanelProps) {
    return (
        <div className="flex flex-col h-full">
            {/* Panel Header */}
            <div className="h-9 bg-[#3c3c3c] flex items-center px-3 border-b border-[#1e1e1e] justify-between">
                <div className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-[11px] font-bold text-gray-300 uppercase tracking-tight">Layers</span>
                </div>
                <div className="flex gap-2">
                    <ChevronDown className="w-4 h-4 text-gray-400 cursor-pointer" />
                    <MoreHorizontal className="w-4 h-4 text-gray-400 cursor-pointer" />
                </div>
            </div>

            {/* Content Sidebar Sections */}
            <div className="flex-grow overflow-y-auto bg-[#252526]">
                <div className="p-1 flex flex-col">
                    {layers.map((layer) => (
                        <div
                            key={layer.id}
                            onClick={() => onSelect(layer.id)}
                            className={`group flex items-center h-8 px-2 gap-2 cursor-pointer transition-colors border-b border-[#333] ${activeLayerId === layer.id ? "bg-[#37373d]" : "hover:bg-[#2a2d2e]"
                                }`}
                        >
                            {/* Visibility Toggle */}
                            <button
                                onClick={(e) => { e.stopPropagation(); onToggleVisibility(layer.id); }}
                                className="w-4 flex justify-center text-gray-500 hover:text-white"
                            >
                                {layer.visible ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5 text-red-500/50" />}
                            </button>

                            {/* Lock Toggle */}
                            <button
                                onClick={(e) => { e.stopPropagation(); onToggleLock(layer.id); }}
                                className="w-4 flex justify-center text-gray-500 hover:text-white"
                            >
                                {layer.locked ? <Lock className="w-3 h-3 text-amber-500" /> : <Unlock className="w-3 h-3 opacity-0 group-hover:opacity-40" />}
                            </button>

                            {/* Layer Icon/Type */}
                            <div className="w-6 h-6 bg-[#3c3c3c] border border-white/5 rounded-sm flex items-center justify-center">
                                <span className="text-[8px] font-bold text-gray-500 uppercase">{layer.type[0]}</span>
                            </div>

                            {/* Layer Name */}
                            <span className={`text-[11px] truncate flex-grow ${activeLayerId === layer.id ? "text-white font-medium" : "text-gray-400 font-normal"}`}>
                                {layer.name}
                            </span>
                        </div>
                    ))}

                    {layers.length === 0 && (
                        <div className="py-10 flex flex-col items-center justify-center opacity-20 pointer-events-none">
                            <Layers className="w-8 h-8 mb-2" />
                            <span className="text-[10px] uppercase font-bold">No Layers</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Panel Footer */}
            <div className="h-8 bg-[#333333] border-t border-[#1e1e1e] flex items-center justify-end px-3 gap-3">
                <button className="text-gray-400 hover:text-white text-[10px] font-bold">FX</button>
                <button className="text-gray-400 hover:text-white text-[10px] font-bold">MASK</button>
                <button className="text-gray-400 hover:text-white text-[10px] font-bold">NEW</button>
                <button className="text-gray-400 hover:text-white text-[10px] font-bold text-red-500/80">DEL</button>
            </div>
        </div>
    );
}
