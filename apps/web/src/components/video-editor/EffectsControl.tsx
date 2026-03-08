"use client";

import { useState, useEffect, useRef } from "react";
import { Layer } from "@/app/video/types";
import { Sliders, RotateCcw, ChevronRight, ChevronDown, Monitor, Maximize, Target, Link, Unlock, Eye, EyeOff, Volume2, VolumeX, Lock as LockIcon } from "lucide-react";

interface EffectsControlProps {
    activeLayer: Layer | null;
    onUpdateLayer: (id: string, updates: Partial<Layer>) => void;
}

export default function EffectsControl({ activeLayer, onUpdateLayer }: EffectsControlProps) {
    if (!activeLayer) return (
        <div className="flex flex-col h-full bg-[#252526] border-r border-black items-center justify-center text-gray-600 p-8 text-center">
            <Sliders className="w-12 h-12 mb-4 opacity-10" />
            <span className="text-xs font-bold uppercase tracking-widest opacity-30">No Layer Selected</span>
        </div>
    );

    return (
        <div className="flex flex-col h-full bg-[#252526] border-r border-black overflow-hidden select-none">
            {/* Header */}
            <div className="h-9 bg-[#3c3c3c] flex items-center px-3 border-b border-black shrink-0">
                <Sliders className="w-3.5 h-3.5 mr-2 text-[#d391fc]" />
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest truncate">
                    Effect Controls: {activeLayer.name}
                </span>
            </div>

            <div className="flex-grow overflow-y-auto custom-scrollbar">
                {/* Transform Category */}
                <div className="flex flex-col border-b border-black">
                    <div className="h-7 px-2 flex items-center gap-2 bg-[#2d2d2d] cursor-pointer hover:bg-[#333]">
                        <ChevronDown className="w-3 h-3 text-gray-500" />
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Transform</span>
                    </div>

                    <div className="p-4 flex flex-col gap-5">
                        <AEProperty
                            label="Anchor Point" icon={<Target className="w-3 h-3" />}
                            value={`${activeLayer.position.x}, ${activeLayer.position.y}`}
                        />
                        <div className="grid grid-cols-2 gap-4">
                            <AEProperty
                                label="Position X"
                                value={activeLayer.position.x}
                                unit="%"
                                onChange={(val) => onUpdateLayer(activeLayer.id, { position: { ...activeLayer.position, x: val } })}
                                scrub
                                min={-100}
                                max={200}
                            />
                            <AEProperty
                                label="Position Y"
                                value={activeLayer.position.y}
                                unit="%"
                                onChange={(val) => onUpdateLayer(activeLayer.id, { position: { ...activeLayer.position, y: val } })}
                                scrub
                                min={-100}
                                max={200}
                            />
                        </div>
                        <AEProperty
                            label="Scale" icon={<Maximize className="w-3 h-3" />}
                            value={activeLayer.scale}
                            unit="%"
                            onChange={(val) => onUpdateLayer(activeLayer.id, { scale: val })}
                            scrub
                            min={0}
                            max={500}
                            slider
                        />
                        <AEProperty
                            label="Rotation" icon={<RotateCcw className="w-3 h-3" />}
                            value={activeLayer.rotation}
                            unit="°"
                            onChange={(val) => onUpdateLayer(activeLayer.id, { rotation: val })}
                            scrub
                            min={-360}
                            max={360}
                        />
                        <AEProperty
                            label="Opacity" icon={<Sliders className="w-3 h-3" />}
                            value={activeLayer.opacity}
                            unit="%"
                            onChange={(val) => onUpdateLayer(activeLayer.id, { opacity: val })}
                            scrub
                            min={0}
                            max={100}
                            slider
                        />
                    </div>
                </div>

                {/* Layer Styles Category */}
                <div className="flex flex-col border-b border-black">
                    <div className="h-7 px-2 flex items-center gap-2 bg-[#2d2d2d] cursor-pointer hover:bg-[#333]">
                        <ChevronDown className="w-3 h-3 text-gray-500" />
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Layer Styles</span>
                    </div>

                    <div className="p-4 flex flex-col gap-6">
                        {/* Drop Shadow Group */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-black text-[#d391fc] uppercase tracking-widest">Drop Shadow</span>
                                <input
                                    type="checkbox"
                                    checked={activeLayer.styles?.dropShadow.enabled}
                                    onChange={(e) => onUpdateLayer(activeLayer.id, { styles: { ...activeLayer.styles, dropShadow: { ...activeLayer.styles.dropShadow, enabled: e.target.checked } } })}
                                    className="w-3 h-3 accent-[#d391fc]"
                                />
                            </div>
                            {activeLayer.styles?.dropShadow.enabled && (
                                <div className="pl-4 space-y-4 border-l border-white/5">
                                    <AEProperty
                                        label="Blur"
                                        value={activeLayer.styles.dropShadow.blur}
                                        unit="px"
                                        onChange={(val) => onUpdateLayer(activeLayer.id, { styles: { ...activeLayer.styles, dropShadow: { ...activeLayer.styles.dropShadow, blur: val } } })}
                                        scrub
                                        min={0}
                                        max={100}
                                        slider
                                    />
                                    <AEProperty
                                        label="Distance"
                                        value={activeLayer.styles.dropShadow.distance}
                                        unit="px"
                                        onChange={(val) => onUpdateLayer(activeLayer.id, { styles: { ...activeLayer.styles, dropShadow: { ...activeLayer.styles.dropShadow, distance: val } } })}
                                        scrub
                                        min={0}
                                        max={100}
                                        slider
                                    />
                                    <AEProperty
                                        label="Angle"
                                        value={activeLayer.styles.dropShadow.angle}
                                        unit="°"
                                        onChange={(val) => onUpdateLayer(activeLayer.id, { styles: { ...activeLayer.styles, dropShadow: { ...activeLayer.styles.dropShadow, angle: val } } })}
                                        scrub
                                        min={0}
                                        max={360}
                                    />
                                    <AEProperty
                                        label="Opacity"
                                        value={activeLayer.styles.dropShadow.opacity}
                                        unit="%"
                                        onChange={(val) => onUpdateLayer(activeLayer.id, { styles: { ...activeLayer.styles, dropShadow: { ...activeLayer.styles.dropShadow, opacity: val } } })}
                                        scrub
                                        min={0}
                                        max={100}
                                        slider
                                    />
                                    <div className="flex items-center justify-between group">
                                        <div className="flex items-center gap-2 text-[11px] text-gray-500">
                                            <span className="group-hover:text-gray-300 transition-colors uppercase tracking-tight font-medium">Color</span>
                                        </div>
                                        <input
                                            type="color"
                                            value={activeLayer.styles.dropShadow.color}
                                            onChange={(e) => onUpdateLayer(activeLayer.id, { styles: { ...activeLayer.styles, dropShadow: { ...activeLayer.styles.dropShadow, color: e.target.value } } })}
                                            className="w-8 h-4 bg-transparent border-none cursor-pointer"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Blur Group */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-black text-[#d391fc] uppercase tracking-widest">Gaussian Blur</span>
                                <input
                                    type="checkbox"
                                    checked={activeLayer.styles?.blur.enabled}
                                    onChange={(e) => onUpdateLayer(activeLayer.id, { styles: { ...activeLayer.styles, blur: { ...activeLayer.styles.blur, enabled: e.target.checked } } })}
                                    className="w-3 h-3 accent-[#d391fc]"
                                />
                            </div>
                            {activeLayer.styles?.blur.enabled && (
                                <div className="pl-4 space-y-4 border-l border-white/5">
                                    <AEProperty
                                        label="Amount"
                                        value={activeLayer.styles.blur.amount}
                                        unit="px"
                                        onChange={(val) => onUpdateLayer(activeLayer.id, { styles: { ...activeLayer.styles, blur: { ...activeLayer.styles.blur, amount: val } } })}
                                        scrub
                                        min={0}
                                        max={100}
                                        slider
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface AEPropertyProps {
    label: string;
    value: number | string;
    unit?: string;
    icon?: React.ReactNode;
    active?: boolean;
    scrub?: boolean;
    slider?: boolean;
    min?: number;
    max?: number;
    onChange?: (val: number) => void;
}

function AEProperty({ label, value, unit = "", icon, active = false, scrub = false, slider = false, min = 0, max = 100, onChange }: AEPropertyProps) {
    const [isScrubbing, setIsScrubbing] = useState(false);
    const startX = useRef(0);
    const startVal = useRef(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrub || !onChange || typeof value !== "number") return;
        setIsScrubbing(true);
        startX.current = e.clientX;
        startVal.current = value;
        document.body.style.cursor = "ew-resize";
    };

    useEffect(() => {
        if (!isScrubbing) return;

        const handleMouseMove = (e: MouseEvent) => {
            const delta = e.clientX - startX.current;
            const factor = e.shiftKey ? 2 : e.altKey ? 0.1 : 0.5;
            const newVal = Math.round((startVal.current + delta * factor) * 10) / 10;
            onChange?.(Math.min(max, Math.max(min, newVal)));
        };

        const handleMouseUp = () => {
            setIsScrubbing(false);
            document.body.style.cursor = "default";
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isScrubbing, min, max, onChange]);

    const handleClick = () => {
        if (!onChange || typeof value !== "number") return;
        const newVal = prompt(`Enter ${label}:`, value.toString());
        if (newVal !== null) {
            const num = parseFloat(newVal);
            if (!isNaN(num)) {
                onChange(num);
            }
        }
    };

    return (
        <div className="flex flex-col gap-1.5 group">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
                    {icon && <span className="w-3.5 flex justify-center opacity-60">{icon}</span>}
                    <span className="group-hover:text-gray-300 transition-colors uppercase tracking-tight font-black">{label}</span>
                </div>
                <div
                    onMouseDown={handleMouseDown}
                    onClick={(e) => e.detail === 2 && handleClick()}
                    title="Drag to scrub, double click to type"
                    className={`text-[10px] font-mono cursor-ew-resize select-none px-1 rounded transition-colors ${isScrubbing ? "text-[#00e0ff] bg-[#00e0ff]/10" : "text-[#00e0ff] hover:bg-white/5 border-b border-dotted border-[#00e0ff]/30"}`}
                >
                    {typeof value === "number" ? value.toFixed(1) : value}{unit}
                </div>
            </div>
            {slider && typeof value === "number" && onChange && (
                <div className="relative h-1 bg-black/40 rounded-full overflow-hidden group/slider">
                    <input
                        type="range"
                        min={min}
                        max={max}
                        step={0.1}
                        value={value}
                        onChange={(e) => onChange(parseFloat(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div
                        className="absolute top-0 left-0 h-full bg-[#00e0ff]/40 group-hover/slider:bg-[#00e0ff]/60 transition-colors"
                        style={{ width: `${((value - min) / (max - min)) * 100}%` }}
                    />
                </div>
            )}
        </div>
    );
}
