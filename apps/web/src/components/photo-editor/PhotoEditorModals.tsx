"use client";

import PhotoModal from "./PhotoModal";
import { useState } from "react";

interface PhotoEditorModalsProps {
    modalConfig: {
        isOpen: boolean;
        type: "NEW" | "PREFERENCES" | "EXPORT" | "HELP" | null;
        title: string;
    };
    onClose: () => void;
    onDimensionsChange: (width: number, height: number) => void;
    onClearCanvas: () => void;
    initialWidth: number;
    initialHeight: number;
}

export default function PhotoEditorModals({
    modalConfig,
    onClose,
    onDimensionsChange,
    onClearCanvas,
    initialWidth,
    initialHeight
}: PhotoEditorModalsProps) {
    const [dims, setDims] = useState({ width: initialWidth, height: initialHeight });

    const handleNewDoc = () => {
        onClearCanvas();
        onDimensionsChange(dims.width, dims.height);
        onClose();
    };

    const footer = (
        <div className="flex gap-3">
            <button
                onClick={onClose}
                className="px-4 py-1.5 text-xs font-bold text-gray-500 hover:text-white transition-colors"
            >
                Cancel
            </button>
            <button
                onClick={modalConfig.type === "NEW" ? handleNewDoc : onClose}
                className="bg-[#00e0ff] px-6 py-1.5 rounded-sm text-xs font-bold text-[#1e1e1e] hover:bg-[#00e0ff]/90 shadow-[0_0_20px_rgba(0,224,255,0.3)]"
            >
                {modalConfig.type === "NEW" ? "Create" : "OK"}
            </button>
        </div>
    );

    return (
        <PhotoModal
            isOpen={modalConfig.isOpen}
            onClose={onClose}
            title={modalConfig.title}
            footer={footer}
        >
            {modalConfig.type === "NEW" && (
                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Document Name</label>
                        <input type="text" defaultValue="Untitled-1" className="w-full bg-[#1a1a1a] border border-white/5 rounded px-3 py-2 text-white italic outline-none focus:border-[#00e0ff]/50" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Width (px)</label>
                            <input 
                                type="number" 
                                value={dims.width} 
                                onChange={(e) => setDims({ ...dims, width: parseInt(e.target.value) || 0 })}
                                className="w-full bg-[#1a1a1a] border border-white/5 rounded px-3 py-2 text-white outline-none focus:border-[#00e0ff]/50" 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Height (px)</label>
                            <input 
                                type="number" 
                                value={dims.height} 
                                onChange={(e) => setDims({ ...dims, height: parseInt(e.target.value) || 0 })}
                                className="w-full bg-[#1a1a1a] border border-white/5 rounded px-3 py-2 text-white outline-none focus:border-[#00e0ff]/50" 
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Background</label>
                        <select className="w-full bg-[#1a1a1a] border border-white/5 rounded px-3 py-2 text-white outline-none focus:border-[#00e0ff]/50">
                            <option>Transparent</option>
                            <option selected>White</option>
                            <option>Black</option>
                        </select>
                    </div>
                </div>
            )}

            {modalConfig.type === "HELP" && (
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-[11px]">
                        <div className="flex justify-between border-b border-white/5 py-1">
                            <span className="text-[#00e0ff] font-bold">V</span>
                            <span className="text-gray-300">Move Tool</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 py-1">
                            <span className="text-[#00e0ff] font-bold">B</span>
                            <span className="text-gray-300">Brush Tool</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 py-1">
                            <span className="text-[#00e0ff] font-bold">T</span>
                            <span className="text-gray-300">Text Tool</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 py-1">
                            <span className="text-[#00e0ff] font-bold">M</span>
                            <span className="text-gray-300">Marquee Tool</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 py-1">
                            <span className="text-[#00e0ff] font-bold">Ctrl + Z</span>
                            <span className="text-gray-300">Undo</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 py-1">
                            <span className="text-[#00e0ff] font-bold">Ctrl + S</span>
                            <span className="text-gray-300">Save to Chain</span>
                        </div>
                    </div>
                </div>
            )}
        </PhotoModal>
    );
}
