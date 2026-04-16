"use client";

import { useKanban } from "../../hooks/useKanban";
import { TagManager } from "./TagManager";
import { KanbanCard } from "../../types/kanban";
import { FolderPlus, Share2, LayoutDashboard, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface ElementKanbanPanelProps {
    elementRef: string;
    elementTitle: string;
    elementDescription?: string;
}

export function ElementKanbanPanel({ elementRef, elementTitle, elementDescription }: ElementKanbanPanelProps) {
    const { addToKanban, cards } = useKanban();
    
    const isAdded = cards.some((c: KanbanCard) => c.elementRef === elementRef);

    return (
        <div className="flex flex-col bg-[#252526] h-full overflow-y-auto custom-scrollbar">
            {/* Header */}
            <div className="h-9 bg-[#3c3c3c] flex items-center px-3 border-b border-[#1e1e1e] flex-shrink-0">
                <LayoutDashboard className="w-3.5 h-3.5 mr-2 text-primary" />
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Project & Tags</span>
            </div>

            <div className="p-4 flex flex-col gap-6">
                {/* Board Integration */}
                <section className="flex flex-col gap-3">
                    <h4 className="text-[10px] font-black text-[#ff6b00] uppercase tracking-widest px-1">Board Status</h4>
                    
                    {isAdded ? (
                        <div className="group glass-panel p-3 rounded-xl border border-primary/20 bg-primary/5 flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <span className="text-[11px] font-bold text-primary flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                    Active on Board
                                </span>
                                <Share2 className="w-3.5 h-3.5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
                            </div>
                            <p className="text-[10px] text-gray-400 leading-relaxed font-light">
                                This element is currently tracked on your Project Board.
                            </p>
                        </div>
                    ) : (
                        <button
                            onClick={() => addToKanban(elementRef, elementTitle, elementDescription)}
                            className="w-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-xl p-4 flex items-center justify-between group transition-all"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/20 rounded-lg text-primary group-hover:scale-110 transition-transform">
                                    <FolderPlus className="w-4 h-4" />
                                </div>
                                <div className="text-left">
                                    <div className="text-[11px] font-bold text-white tracking-tight">Add to Board</div>
                                    <div className="text-[9px] text-gray-500 font-medium">Track in Kanban</div>
                                </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-700 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                        </button>
                    )}
                </section>

                {/* Tagging */}
                <section className="flex flex-col gap-3">
                    <h4 className="text-[10px] font-black text-[#ff6b00] uppercase tracking-widest px-1">Classification</h4>
                    <TagManager elementRef={elementRef} />
                </section>

                {/* Info Box */}
                <section className="mt-4 p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                    <p className="text-[9px] text-gray-600 leading-relaxed italic">
                        Tags and project status are synced across all Chainvas tools via SpacetimeDB.
                    </p>
                </section>
            </div>
        </div>
    );
}
