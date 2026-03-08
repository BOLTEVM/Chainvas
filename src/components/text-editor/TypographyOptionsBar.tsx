"use client";

import { TypographyOptions } from "@/app/text/types";
import {
    Bold,
    Italic,
    Underline,
    AlignLeft,
    AlignCenter,
    AlignRight,
    AlignJustify,
    Type
} from "lucide-react";

interface TypographyOptionsBarProps {
    options: TypographyOptions;
    onOptionsChange: (options: Partial<TypographyOptions>) => void;
}

export default function TypographyOptionsBar({ options, onOptionsChange }: TypographyOptionsBarProps) {
    const fontFamilies = ["Inter", "Roboto", "Outfit", "Times New Roman", "Helvetica"];

    return (
        <div className="h-[40px] bg-[#2d2d2d] border-b border-[#1e1e1e] flex items-center px-4 gap-6 z-10 text-[11px] text-gray-300">
            {/* Font Family */}
            <div className="flex items-center gap-2 border-r border-white/10 pr-4">
                <select
                    value={options.fontFamily}
                    onChange={(e) => onOptionsChange({ fontFamily: e.target.value })}
                    className="bg-[#3c3c3c] border border-transparent focus:border-[#ff6b00] outline-none px-2 py-0.5 rounded text-white"
                >
                    {fontFamilies.map(font => <option key={font} value={font}>{font}</option>)}
                </select>
                <select className="bg-[#3c3c3c] border border-transparent focus:border-[#ff6b00] outline-none px-2 py-0.5 rounded text-white font-bold w-20">
                    <option>Regular</option>
                    <option>Bold</option>
                    <option>Italic</option>
                </select>
            </div>

            {/* Font Size */}
            <div className="flex items-center gap-2 border-r border-white/10 pr-4">
                <Type className="w-3.5 h-3.5 text-gray-500" />
                <input
                    type="number"
                    value={options.fontSize}
                    onChange={(e) => onOptionsChange({ fontSize: parseInt(e.target.value) || 12 })}
                    className="w-12 bg-[#3c3c3c] border-none outline-none px-1 py-0.5 rounded text-white text-center"
                />
                <span>pt</span>
            </div>

            {/* Styling */}
            <div className="flex items-center gap-1 border-r border-white/10 pr-4">
                <button className={`p-1 rounded hover:bg-[#3c3c3c] transition-colors ${options.fontWeight === "bold" ? "bg-[#3c3c3c] text-[#ff6b00]" : ""}`}>
                    <Bold className="w-3.5 h-3.5" />
                </button>
                <button className="p-1 rounded hover:bg-[#3c3c3c] transition-colors">
                    <Italic className="w-3.5 h-3.5" />
                </button>
                <button className="p-1 rounded hover:bg-[#3c3c3c] transition-colors">
                    <Underline className="w-3.5 h-3.5" />
                </button>
            </div>

            {/* Alignment */}
            <div className="flex items-center gap-1">
                <button
                    onClick={() => onOptionsChange({ textAlign: "left" })}
                    className={`p-1 rounded hover:bg-[#3c3c3c] transition-colors ${options.textAlign === "left" ? "bg-[#3c3c3c] text-[#ff6b00]" : ""}`}
                >
                    <AlignLeft className="w-3.5 h-3.5" />
                </button>
                <button
                    onClick={() => onOptionsChange({ textAlign: "center" })}
                    className={`p-1 rounded hover:bg-[#3c3c3c] transition-colors ${options.textAlign === "center" ? "bg-[#3c3c3c] text-[#ff6b00]" : ""}`}
                >
                    <AlignCenter className="w-3.5 h-3.5" />
                </button>
                <button
                    onClick={() => onOptionsChange({ textAlign: "right" })}
                    className={`p-1 rounded hover:bg-[#3c3c3c] transition-colors ${options.textAlign === "right" ? "bg-[#3c3c3c] text-[#ff6b00]" : ""}`}
                >
                    <AlignRight className="w-3.5 h-3.5" />
                </button>
                <button
                    onClick={() => onOptionsChange({ textAlign: "justify" })}
                    className={`p-1 rounded hover:bg-[#3c3c3c] transition-colors ${options.textAlign === "justify" ? "bg-[#3c3c3c] text-[#ff6b00]" : ""}`}
                >
                    <AlignJustify className="w-3.5 h-3.5" />
                </button>
            </div>

            <div className="flex-grow" />

            {/* Performance Mode / Sync Indicator */}
            <div className="flex items-center gap-2 px-3 py-1 bg-black/20 rounded-full border border-white/5">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">Live Engine</span>
            </div>
        </div>
    );
}
