"use client";

import { TypographyOptions } from "@/app/text/types";
import { AlignLeft, AlignCenter, AlignRight, AlignJustify, LetterText, List, IndentIncrease, IndentDecrease, ArrowUpToLine, ArrowDownToLine, Baseline } from "lucide-react";

interface ParagraphPanelProps {
    options: TypographyOptions;
    onOptionsChange: (options: Partial<TypographyOptions>) => void;
}

export default function ParagraphPanel({ options, onOptionsChange }: ParagraphPanelProps) {
    return (
        <div className="flex flex-col bg-[#252526] h-full overflow-y-auto custom-scrollbar">
            {/* Header */}
            <div className="h-9 bg-[#3c3c3c] flex items-center px-3 border-b border-[#1e1e1e] flex-shrink-0">
                <LetterText className="w-3.5 h-3.5 mr-2 text-gray-400" />
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Paragraph</span>
            </div>

            <div className="p-4 flex flex-col gap-5">
                {/* Alignment Grid */}
                <div className="grid grid-cols-4 gap-1 p-1 bg-[#1e1e1e] rounded">
                    {[
                        { id: "left", icon: AlignLeft },
                        { id: "center", icon: AlignCenter },
                        { id: "right", icon: AlignRight },
                        { id: "justify", icon: AlignJustify }
                    ].map((align) => (
                        <button
                            key={align.id}
                            onClick={() => onOptionsChange({ textAlign: align.id as "left" | "center" | "right" | "justify" })}
                            className={`p-1.5 rounded flex justify-center hover:bg-[#3c3c3c] transition-colors ${options.textAlign === align.id ? "bg-[#3c3c3c] text-[#ff6b00]" : "text-gray-500"}`}
                        >
                            <align.icon className="w-3.5 h-3.5" />
                        </button>
                    ))}
                </div>

                {/* Indents & Spacing */}
                <section className="flex flex-col gap-3">
                    <div className="grid grid-cols-2 gap-2">
                        <ParagraphInput label={<IndentDecrease className="w-3 h-3 text-gray-500" />} defaultValue={0} />
                        <ParagraphInput label={<IndentIncrease className="w-3 h-3 text-gray-500" />} defaultValue={0} />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <ParagraphInput label={<ArrowUpToLine className="w-3 h-3 text-gray-500" />} defaultValue={0} />
                        <ParagraphInput label={<ArrowDownToLine className="w-3 h-3 text-gray-500" />} defaultValue={0} />
                    </div>
                </section>

                <div className="w-full h-px bg-white/5 my-1" />

                {/* Lists & Bullets */}
                <section className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                        <ListButton active={false}>
                            <List className="w-3.5 h-3.5" />
                        </ListButton>
                        <ListButton active={false}>
                            <span className="text-[9px] font-bold">1.</span>
                        </ListButton>
                    </div>
                </section>

                {/* Hyphenation */}
                <div className="flex items-center justify-between bg-[#1e1e1e] p-2 rounded border border-white/5">
                    <label htmlFor="hyphenate" className="text-[10px] text-gray-400 font-black uppercase tracking-widest cursor-pointer select-none">Hyphenate</label>
                    <input type="checkbox" className="accent-[#ff6b00] w-3.5 h-3.5" id="hyphenate" defaultChecked />
                </div>
            </div>
        </div>
    );
}

function ListButton({ children, active }: { children: React.ReactNode, active: boolean }) {
    return (
        <button className={`p-1.5 rounded transition-colors border ${active ? "bg-[#3c3c3c] text-[#ff6b00] border-transparent" : "text-gray-500 hover:text-white border-transparent hover:bg-[#3c3c3c]"}`}>
            {children}
        </button>
    );
}

function ParagraphInput({ label, defaultValue }: { label: React.ReactNode, defaultValue: number }) {
    return (
        <div className="flex items-center bg-[#1e1e1e] border border-white/5 focus-within:border-[#ff6b00]/50 rounded px-2 py-1 gap-2 transition-all">
            <span className="w-4 flex justify-center flex-shrink-0">{label}</span>
            <input
                type="number"
                defaultValue={defaultValue}
                className="bg-transparent border-none outline-none text-[11px] text-gray-200 w-full text-right font-mono"
            />
            <span className="text-[9px] text-gray-600 font-medium w-4 flex-shrink-0">pt</span>
        </div>
    );
}
