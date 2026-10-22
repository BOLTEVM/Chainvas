"use client";

import { PageData } from "@/app/text/types";
import { Files, Copy, Trash2, Plus, Layout } from "lucide-react";

interface PagesPanelProps {
    pages: PageData[];
    activePageId: string;
    onPageSelect: (id: string) => void;
    onAddPage?: () => void;
    onDeletePage?: () => void;
}

export default function PagesPanel({ pages, activePageId, onPageSelect, onAddPage, onDeletePage }: PagesPanelProps) {
    return (
        <div className="flex flex-col bg-[#252526] h-full">
            {/* Header */}
            <div className="h-9 bg-[#3c3c3c] flex items-center px-3 border-b border-[#1e1e1e] justify-between">
                <div className="flex items-center gap-2">
                    <Files className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Pages</span>
                </div>
                <Layout className="w-3.5 h-3.5 text-gray-500 cursor-pointer hover:text-white transition-colors" />
            </div>

            <div className="p-4 flex flex-col gap-6 overflow-y-auto">
                {/* Pages List */}
                <div className="grid grid-cols-2 gap-4">
                    {pages.map((page) => (
                        <div
                            key={page.id}
                            onClick={() => onPageSelect(page.id)}
                            className={`flex flex-col gap-1 cursor-pointer group`}
                        >
                            <div className={`aspect-[1/1.41] bg-white rounded-sm shadow-lg border-2 transition-all relative overflow-hidden flex items-center justify-center ${activePageId === page.id ? "border-[#ff6b00]" : "border-transparent group-hover:border-white/20"
                                }`}>
                                <div className="p-2 w-full opacity-5 flex flex-col gap-1">
                                    <div className="h-1 w-full bg-black rounded-full" />
                                    <div className="h-1 w-2/3 bg-black rounded-full" />
                                    <div className="h-1 w-full bg-black rounded-full" />
                                </div>
                                {activePageId === page.id && (
                                    <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-[#ff6b00] rounded-full" />
                                )}
                            </div>
                            <span className="text-[9px] font-bold text-gray-500 text-center uppercase">Page {page.number}</span>
                        </div>
                    ))}
                </div>

                {/* Actions Bar */}
                <div className="flex items-center justify-center gap-4 pt-4 border-t border-white/5">
                    <button title="Duplicate page (coming soon)" disabled className="text-gray-500 opacity-40 cursor-not-allowed"><Copy className="w-4 h-4" /></button>
                    <button title="Add page" onClick={onAddPage} className="text-gray-500 hover:text-white transition-colors"><Plus className="w-4 h-4" /></button>
                    <button
                        title="Delete page"
                        onClick={onDeletePage}
                        disabled={pages.length <= 1}
                        className="text-gray-500 hover:text-red-400 transition-colors disabled:opacity-40 disabled:hover:text-gray-500 disabled:cursor-not-allowed"
                    ><Trash2 className="w-4 h-4" /></button>
                </div>
            </div>
        </div>
    );
}
