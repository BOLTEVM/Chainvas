"use client";

import { Folder, Film, Image as ImageIcon, Music, Plus, Search } from "lucide-react";

import { PlaybackState, Layer } from "@/app/video/types";
import { useState } from "react";

interface ProjectPanelProps {
    layers: Layer[];
    onFilesDrop: (files: FileList) => void;
}

export default function ProjectPanel({ layers, onFilesDrop }: ProjectPanelProps) {
    const [isDragging, setIsDragging] = useState(false);

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
            className={`flex flex-col h-full bg-[#252526] border-r border-black overflow-hidden transition-colors ${isDragging ? "bg-[#d391fc]/10" : ""}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            {/* Header */}
            <div className="h-9 bg-[#3c3c3c] flex items-center px-3 border-b border-black justify-between">
                <div className="flex items-center gap-2">
                    <Folder className="w-3.5 h-3.5 text-[#00e0ff]" />
                    <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Project</span>
                </div>
                <div className="flex items-center gap-2">
                    <Plus className="w-3.5 h-3.5 text-gray-400 hover:text-white cursor-pointer" />
                </div>
            </div>

            {/* Sub-Header / Search */}
            <div className="p-2 border-b border-black flex items-center gap-2">
                <div className="flex-grow flex items-center bg-[#1e1e1e] rounded px-2 py-1 gap-2">
                    <Search className="w-3 h-3 text-gray-500" />
                    <input
                        placeholder="Search assets..."
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
                            <th className="px-3 py-2 border-b border-black text-right">Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        {layers.map((layer, i) => (
                            <tr key={layer.id} className="hover:bg-[#37373d] transition-colors cursor-pointer group">
                                <td className="px-3 py-2 flex items-center gap-3 text-gray-300">
                                    {layer.type === "VIDEO" && <Film className="w-3.5 h-3.5 text-blue-400" />}
                                    {layer.type === "AUDIO" && <Music className="w-3.5 h-3.5 text-purple-400" />}
                                    <span className="truncate max-w-[120px]">{layer.name}</span>
                                </td>
                                <td className="px-3 py-2 text-right text-gray-500 font-mono">--</td>
                            </tr>
                        ))}
                        {layers.length === 0 && (
                            <tr>
                                <td colSpan={2} className="px-3 py-8 text-center text-gray-600 italic">
                                    Drag and drop assets here
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Asset Preview Placeholder */}
            <div className="h-[150px] border-t border-black bg-black/20 flex flex-col p-3 gap-2">
                <div className="aspect-video bg-black flex items-center justify-center rounded border border-white/5">
                    <Film className="w-8 h-8 text-white/10" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-white font-bold truncate">No Asset Selected</span>
                    <span className="text-[9px] text-gray-500">1920x1080 (1.0)</span>
                </div>
            </div>
        </div>
    );
}
