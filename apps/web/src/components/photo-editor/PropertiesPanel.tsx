"use client";

import { FabricObject } from "@/app/photo/types";
import { Info, Maximize2, Move, Type } from "lucide-react";

interface PropertiesPanelProps {
    activeObject: FabricObject | null;
    onPropertyChange: (prop: string, value: string | number) => void;
}

export default function PropertiesPanel({ activeObject, onPropertyChange }: PropertiesPanelProps) {
    if (!activeObject) {
        return (
            <div className="flex flex-col h-full bg-[#252526] text-gray-500 items-center justify-center p-6 text-center">
                <Info className="w-8 h-8 mb-3 opacity-20" />
                <p className="text-[10px] uppercase font-black tracking-widest opacity-40">No Selection</p>
                <p className="text-[10px] mt-2 leading-relaxed">Select a layer to view and edit its properties.</p>
            </div>
        );
    }

    const pos = {
        x: Math.round(activeObject.left || 0),
        y: Math.round(activeObject.top || 0),
        w: Math.round((activeObject.width || 0) * (activeObject.scaleX || 1)),
        h: Math.round((activeObject.height || 0) * (activeObject.scaleY || 1)),
        angle: Math.round(activeObject.angle || 0),
        opacity: Math.round((activeObject.opacity || 1) * 100)
    };

    return (
        <div className="flex flex-col h-full bg-[#252526]">
            {/* Header */}
            <div className="h-9 bg-[#3c3c3c] flex items-center px-3 border-b border-[#1e1e1e]">
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Properties</span>
            </div>

            <div className="p-4 flex flex-col gap-6 overflow-y-auto">
                {/* Transform Section */}
                <section>
                    <div className="flex items-center gap-2 mb-3">
                        <Move className="w-3.5 h-3.5 text-[#00e0ff]" />
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">Transform</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <PropertyInput label="X" value={pos.x} onChange={(v) => onPropertyChange("left", v)} />
                        <PropertyInput label="Y" value={pos.y} onChange={(v) => onPropertyChange("top", v)} />
                        <PropertyInput label="W" value={pos.w} onChange={(v) => onPropertyChange("width", v / (activeObject.scaleX || 1))} />
                        <PropertyInput label="H" value={pos.h} onChange={(v) => onPropertyChange("height", v / (activeObject.scaleY || 1))} />
                    </div>
                </section>

                {/* Appearance Section */}
                <section>
                    <div className="flex items-center gap-2 mb-3">
                        <Maximize2 className="w-3.5 h-3.5 text-[#00e0ff]" />
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">Appearance</h4>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between text-[11px]">
                            <span className="text-gray-500">Opacity</span>
                            <div className="flex items-center gap-2">
                                <input
                                    type="range" min="0" max="100"
                                    value={pos.opacity}
                                    onChange={(e) => onPropertyChange("opacity", parseInt(e.target.value) / 100)}
                                    className="w-24 accent-[#00e0ff]"
                                />
                                <span className="w-8 text-right">{pos.opacity}%</span>
                            </div>
                        </div>
                        <PropertyInput label="Angle" value={pos.angle} suffix="°" onChange={(v) => onPropertyChange("angle", v)} />
                    </div>
                </section>

                {/* Tool Specific (Text) */}
                {(activeObject.type === "i-text" || activeObject.type === "textbox" || activeObject.type === "text") && (
                    <section className="animate-in fade-in slide-in-from-top-2">
                        <div className="flex items-center gap-2 mb-3">
                            <Type className="w-3.5 h-3.5 text-[#00e0ff]" />
                            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">Character</h4>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between text-[11px]">
                                <span className="text-gray-500">Fill Color</span>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="color"
                                        value={typeof activeObject.fill === "string" ? activeObject.fill : "#ffffff"}
                                        onChange={(e) => onPropertyChange("fill", e.target.value)}
                                        className="w-10 h-5 bg-transparent border-none p-0 cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}

function PropertyInput({ label, value, onChange, suffix = "px" }: { label: string, value: number, onChange: (v: number) => void, suffix?: string }) {
    return (
        <div className="flex items-center bg-[#3c3c3c] border border-transparent focus-within:border-[#00e0ff]/50 rounded px-2 py-1 gap-2 transition-colors">
            <span className="text-[10px] text-gray-500 font-bold w-3">{label}</span>
            <input
                type="number"
                value={value}
                onChange={(e) => onChange(parseInt(e.target.value) || 0)}
                className="bg-transparent border-none outline-none text-[11px] text-gray-200 w-full text-right"
            />
            {suffix && <span className="text-[9px] text-gray-600 font-medium">{suffix}</span>}
        </div>
    );
}
