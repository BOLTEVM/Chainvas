"use client";

import VideoModal from "./VideoModal";

interface VideoEditorModalsProps {
    modalConfig: {
        isOpen: boolean;
        type: "NEW_PROJECT" | "COMP_SETTINGS" | "PREFERENCES" | "RENDER" | "HELP" | null;
        title: string;
    };
    onClose: () => void;
}

export default function VideoEditorModals({ modalConfig, onClose }: VideoEditorModalsProps) {
    const footer = (
        <div className="flex gap-3">
            <button
                onClick={onClose}
                className="px-4 py-1.5 text-xs font-bold text-gray-500 hover:text-white transition-colors"
            >
                Cancel
            </button>
            <button
                onClick={onClose}
                className="bg-[#d391fc] px-6 py-1.5 rounded-sm text-xs font-bold text-[#1e1e1e] hover:bg-[#d391fc]/90 shadow-[0_0_20px_rgba(211,145,252,0.3)]"
            >
                OK
            </button>
        </div>
    );

    return (
        <VideoModal
            isOpen={modalConfig.isOpen}
            onClose={onClose}
            title={modalConfig.title}
            footer={footer}
        >
            {modalConfig.type === "COMP_SETTINGS" && (
                <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Composition Name</label>
                            <input type="text" defaultValue="Comp 1" className="w-full bg-[#1a1a1a] border border-white/5 rounded px-3 py-2 text-white italic outline-none focus:border-[#d391fc]/50" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Frame Rate</label>
                            <select className="w-full bg-[#1a1a1a] border border-white/5 rounded px-3 py-2 text-white outline-none focus:border-[#d391fc]/50">
                                <option>24 fps</option>
                                <option selected>30 fps</option>
                                <option>60 fps</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Resolution</label>
                            <div className="flex items-center gap-2">
                                <input type="number" defaultValue={1920} className="w-full bg-[#1a1a1a] border border-white/5 rounded px-2 py-1.5 text-white outline-none" />
                                <span className="text-gray-600">x</span>
                                <input type="number" defaultValue={1080} className="w-full bg-[#1a1a1a] border border-white/5 rounded px-2 py-1.5 text-white outline-none" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Duration</label>
                            <input type="text" defaultValue="0:00:10:00" className="w-full bg-[#1a1a1a] border border-white/5 rounded px-3 py-2 text-[#d391fc] font-mono outline-none" />
                        </div>
                    </div>
                </div>
            )}

            {modalConfig.type === "PREFERENCES" && (
                <div className="space-y-8">
                    <div className="space-y-3">
                        <h4 className="text-[10px] uppercase tracking-widest font-black text-[#d391fc]">Previews</h4>
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/5">
                            <span className="text-xs">Adaptive Resolution</span>
                            <div className="w-8 h-4 bg-[#d391fc] rounded-full relative">
                                <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-[#1e1e1e] rounded-full" />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-[10px] uppercase tracking-widest font-black text-[#d391fc]">Media & Disk Cache</h4>
                        <div className="p-4 bg-black/40 rounded border border-white/5 space-y-2">
                            <div className="flex justify-between text-[11px]">
                                <span className="text-gray-500">Maximum Cache Size:</span>
                                <span className="text-white">46.0 GB</span>
                            </div>
                            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-[#d391fc] w-[65%]" />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {modalConfig.type === "RENDER" && (
                <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 bg-[#d391fc]/10 rounded-full flex items-center justify-center mx-auto border border-[#d391fc]/20">
                        <div className="w-8 h-8 border-2 border-[#d391fc] border-t-transparent rounded-full animate-spin" />
                    </div>
                    <div className="space-y-1">
                        <h4 className="text-lg font-bold text-white italic">Preparing Render Engine</h4>
                        <p className="text-gray-500 text-xs">Allocating virtual memory for BOLTChain sequence export...</p>
                    </div>
                </div>
            )}

            {modalConfig.type === "HELP" && (
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-[11px]">
                        <div className="flex justify-between border-b border-white/5 py-1">
                            <span className="text-[#d391fc] font-bold">F1</span>
                            <span className="text-gray-300">Help Center</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 py-1">
                            <span className="text-[#d391fc] font-bold">Space</span>
                            <span className="text-gray-300">Play / Pause</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 py-1">
                            <span className="text-[#d391fc] font-bold">Ctrl + D</span>
                            <span className="text-gray-300">Duplicate Layer</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 py-1">
                            <span className="text-[#d391fc] font-bold">Ctrl + Shift + D</span>
                            <span className="text-gray-300">Split Layer</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 py-1">
                            <span className="text-[#d391fc] font-bold">Ctrl + K</span>
                            <span className="text-gray-300">Comp Settings</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 py-1">
                            <span className="text-[#d391fc] font-bold">Ctrl + M / F5</span>
                            <span className="text-gray-300">Render Queue</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 py-1">
                            <span className="text-[#d391fc] font-bold">Ctrl + N / Alt+N</span>
                            <span className="text-gray-300">New Comp / Project</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 py-1">
                            <span className="text-[#d391fc] font-bold">Ctrl + A / Shift+A</span>
                            <span className="text-gray-300">Select / Deselect</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 py-1">
                            <span className="text-[#d391fc] font-bold">Ctrl + / -</span>
                            <span className="text-gray-300">Zoom In / Out</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 py-1">
                            <span className="text-[#d391fc] font-bold">Ctrl + 0</span>
                            <span className="text-gray-300">Fit in Window</span>
                        </div>
                    </div>
                    <div className="p-3 bg-[#d391fc]/10 border border-[#d391fc]/20 rounded-md text-[10px] text-[#d391fc] font-medium leading-relaxed">
                        Pro Tip: Use industry-standard After Effects shortcuts for maximum velocity. Press F11 for an immersive fullscreen experience.
                    </div>
                </div>
            )}
        </VideoModal>
    );
}
