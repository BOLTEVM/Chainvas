"use client";

import { TypographyOptions } from "@/app/text/types";
import { CaseSensitive, Baseline, Type, MoveVertical, MoveHorizontal, Italic, Bold, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify } from "lucide-react";

interface CharacterPanelProps {
    options: TypographyOptions;
    onOptionsChange: (options: Partial<TypographyOptions>) => void;
}

const FONTS = ["Inter", "Roboto", "Outfit", "Playfair Display", "Fira Code"];
const WEIGHTS = ["Light", "Normal", "Medium", "SemiBold", "Bold", "Black"];

export default function CharacterPanel({ options, onOptionsChange }: CharacterPanelProps) {
    return (
        <div className="flex flex-col bg-[#252526] h-full overflow-y-auto custom-scrollbar">
            {/* Header */}
            <div className="h-9 bg-[#3c3c3c] flex items-center px-3 border-b border-[#1e1e1e] flex-shrink-0">
                <CaseSensitive className="w-3.5 h-3.5 mr-2 text-gray-400" />
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Character</span>
            </div>

            <div className="p-4 flex flex-col gap-5">
                {/* Font Selection */}
                <section className="flex flex-col gap-2">
                    <select
                        value={options.fontFamily}
                        onChange={(e) => onOptionsChange({ fontFamily: e.target.value })}
                        className="w-full bg-[#1e1e1e] border border-white/5 rounded px-2 py-1.5 text-[11px] text-gray-200 outline-none focus:border-[#ff6b00]/50"
                    >
                        {FONTS.map(f => <option key={f} value={f}>{f}</option>)}
                    </select>
                    <select
                        value={options.fontWeight}
                        onChange={(e) => onOptionsChange({ fontWeight: e.target.value })}
                        className="w-full bg-[#1e1e1e] border border-white/5 rounded px-2 py-1.5 text-[11px] text-gray-400 outline-none focus:border-[#ff6b00]/50"
                    >
                        {WEIGHTS.map(w => <option key={w} value={w.toLowerCase()}>{w}</option>)}
                    </select>
                </section>

                {/* Font & Size Grid */}
                <section className="flex flex-col gap-3">
                    <div className="grid grid-cols-2 gap-2">
                        <InDesignInput
                            label={<Type className="w-3 h-3 text-gray-500" />}
                            value={options.fontSize}
                            suffix="pt"
                            onChange={(v) => onOptionsChange({ fontSize: v })}
                        />
                        <InDesignInput
                            label={<MoveVertical className="w-3 h-3 text-gray-500" />}
                            value={options.lineHeight}
                            suffix="x"
                            onChange={(v) => onOptionsChange({ lineHeight: v })}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <InDesignInput
                            label={<MoveHorizontal className="w-3 h-3 text-gray-500" />}
                            value={options.letterSpacing}
                            suffix="va"
                            onChange={(v) => onOptionsChange({ letterSpacing: v })}
                        />
                        <InDesignInput
                            label={<Baseline className="w-3 h-3 text-gray-500" />}
                            value={options.baselineShift || 0}
                            suffix="pt"
                            onChange={(v) => onOptionsChange({ baselineShift: v })}
                        />
                    </div>
                </section>

                {/* Style Toggles */}
                <section className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-[11px] text-gray-400 mb-1">
                        <span>Fill Color</span>
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono text-gray-500 uppercase">{options.color}</span>
                            <input
                                type="color"
                                value={options.color}
                                onChange={(e) => onOptionsChange({ color: e.target.value })}
                                className="w-6 h-6 bg-transparent border-none p-0 cursor-pointer overflow-hidden rounded-sm"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-6 gap-1">
                        <StyleButton
                            active={options.bold || options.fontWeight === "bold"}
                            onClick={() => onOptionsChange({ bold: !options.bold, fontWeight: options.fontWeight === "bold" ? "normal" : "bold" })}
                        >
                            <Bold className="w-3 h-3" />
                        </StyleButton>
                        <StyleButton
                            active={options.italic}
                            onClick={() => onOptionsChange({ italic: !options.italic })}
                        >
                            <Italic className="w-3 h-3" />
                        </StyleButton>
                        <StyleButton
                            active={options.underline}
                            onClick={() => onOptionsChange({ underline: !options.underline })}
                        >
                            <Underline className="w-3 h-3" />
                        </StyleButton>
                        <StyleButton active={false} onClick={() => { }}>
                            <span className="text-[9px] font-black italic">T</span><span className="text-[7px]">T</span>
                        </StyleButton>
                        <StyleButton active={false} onClick={() => { }}>
                            <span className="text-[9px] relative">T<span className="absolute -top-1 -right-1 text-[6px]">1</span></span>
                        </StyleButton>
                        <StyleButton active={false} onClick={() => { }}>
                            <span className="text-[9px] relative">T<span className="absolute -bottom-1 -right-1 text-[6px]">1</span></span>
                        </StyleButton>
                    </div>
                </section>
            </div>
        </div>
    );
}

function StyleButton({ children, active, onClick }: { children: React.ReactNode, active: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`w-full aspect-square flex items-center justify-center rounded transition-colors border ${active
                    ? "bg-[#ff6b00] border-transparent text-white"
                    : "bg-[#3c3c3c] border-white/5 text-gray-400 hover:text-white hover:bg-[#4a4a4a]"
                }`}
        >
            {children}
        </button>
    );
}

function InDesignInput({ label, value, onChange, suffix = "" }: { label: React.ReactNode, value: number, onChange: (v: number) => void, suffix?: string }) {
    return (
        <div className="flex items-center bg-[#1e1e1e] border border-white/5 focus-within:border-[#ff6b00]/50 rounded px-2 py-1 gap-2 transition-all">
            <span className="w-4 flex justify-center flex-shrink-0">{label}</span>
            <input
                type="number"
                step="any"
                value={value}
                onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
                className="bg-transparent border-none outline-none text-[11px] text-gray-200 w-full text-right font-mono"
            />
            {suffix && <span className="text-[9px] text-gray-600 font-medium w-4 flex-shrink-0">{suffix}</span>}
        </div>
    );
}
