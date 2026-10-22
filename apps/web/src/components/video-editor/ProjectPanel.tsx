"use client";

import { Folder, Film, Image as ImageIcon, Music, Plus, Search, Type, Square, SlidersHorizontal } from "lucide-react";

import { Layer, TrackType } from "@/app/video/types";
import { useMemo, useState } from "react";

interface ProjectPanelProps {
    layers: Layer[];
    activeLayerId: string | null;
    onSelectLayer: (id: string) => void;
    onFilesDrop: (files: FileList) => void;
    onImport: () => void;
}

const icon: Record<TrackType, React.ReactNode> = {
    VIDEO: <Film className="w-3.5 h-3.5 text-blue-400" />,
    AUDIO: <Music className="w-3.5 h-3.5 text-emerald-400" />,
    IMAGE: <ImageIcon className="w-3.5 h-3.5 text-amber-400" />,
    SOLID: <Square className="w-3.5 h-3.5 text-[#d391fc]" />,
    ADJUSTMENT: <SlidersHorizontal className="w-3.5 h-3.5 text-purple-400" />,
    TEXT: <Type className="w-3.5 h-3.5 text-[#00e0ff]" />,
};

export default function ProjectPanel({ layers, activeLayerId, onSelectLayer, onFilesDrop, onImport }: ProjectPanelProps) {
    const [isDragging, setIsDragging] = useState(false);
    const [query, setQuery] = useState("");

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return q ? layers.filter((l) => l.name.toLowerCase().includes(q) || l.type.toLowerCase().includes(q)) : layers;
    }, [layers, query]);

    const active = layers.find((l) => l.id === activeLayerId) ?? null;

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

    return (
        <div
            className={`flex flex-col h-full bg-[#252526] border-r border-black overflow-hidden transition-colors ${isDragging ? "bg-[#d391fc]/10" : ""}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            {/* Header */}
            <div className="h-9 bg-[#3c3c3c] flex items-center px-3 border-b border-black justify-between shrink-0">
                <div className="flex items-center gap-2">
                    <Folder className="w-3.5 h-3.5 text-[#00e0ff]" />
                    <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Project</span>
                </div>
                <button onClick={onImport} title="Import media (Ctrl+I)" className="text-gray-400 hover:text-white">
                    <Plus className="w-3.5 h-3.5" />
                </button>
            </div>

            {/* Search */}
            <div className="p-2 border-b border-black flex items-center gap-2 shrink-0">
                <div className="flex-grow flex items-center bg-[#1e1e1e] rounded px-2 py-1 gap-2">
                    <Search className="w-3 h-3 text-gray-500" />
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search layers..."
                        className="bg-transparent border-none outline-none text-[10px] text-gray-400 w-full"
                    />
                </div>
            </div>

            {/* Assets List */}
            <div className="flex-grow overflow-y-auto custom-scrollbar">
                <table className="w-full text-left text-[11px] border-separate border-spacing-0">
                    <thead className="sticky top-0 bg-[#252526] text-gray-500 font-bold uppercase text-[9px]">
                        <tr>
                            <th className="px-3 py-2 border-b border-black">Name</th>
                            <th className="px-3 py-2 border-b border-black text-right">Length</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((layer) => (
                            <tr
                                key={layer.id}
                                onClick={() => onSelectLayer(layer.id)}
                                className={`transition-colors cursor-pointer group ${activeLayerId === layer.id ? "bg-[#37373d]" : "hover:bg-[#37373d]"}`}
                            >
                                <td className="px-3 py-2 flex items-center gap-3 text-gray-300">
                                    {icon[layer.type]}
                                    <span className="truncate max-w-[150px]" title={layer.fileName ?? layer.name}>{layer.name}</span>
                                </td>
                                <td className="px-3 py-2 text-right text-gray-500 font-mono whitespace-nowrap">
                                    {(layer.sourceDuration ?? layer.duration).toFixed(1)}s
                                </td>
                            </tr>
                        ))}
                        {filtered.length === 0 && (
                            <tr>
                                <td colSpan={2} className="px-3 py-8 text-center text-gray-600 italic">
                                    {layers.length === 0 ? "Drag and drop video, audio or images here" : "No matches"}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Asset Preview */}
            <div className="h-[150px] border-t border-black bg-black/20 flex flex-col p-3 gap-2 shrink-0">
                <div className="aspect-video bg-black flex items-center justify-center rounded border border-white/5 overflow-hidden" data-preview="true">
                    {active?.url && active.type === "IMAGE" ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={active.url} alt={active.name} className="w-full h-full object-contain" />
                    ) : active?.url && active.type === "VIDEO" ? (
                        <video src={active.url} muted preload="metadata" className="w-full h-full object-contain" />
                    ) : (
                        <div className="opacity-20">{active ? icon[active.type] : <Film className="w-8 h-8 text-white" />}</div>
                    )}
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                    <span className="text-[10px] text-white font-bold truncate">{active ? active.name : "No Layer Selected"}</span>
                    <span className="text-[9px] text-gray-500 font-mono">
                        {active
                            ? `${active.type}${active.mediaWidth ? ` · ${active.mediaWidth}×${active.mediaHeight}` : ""} · ${active.startTime.toFixed(2)}s → ${(active.startTime + active.duration).toFixed(2)}s`
                            : "Select a layer to inspect it"}
                    </span>
                </div>
            </div>
        </div>
    );
}
