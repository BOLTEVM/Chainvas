"use client";

import { useState, useEffect, useRef } from "react";
import { Layer } from "@/app/video/types";
import { Sliders, RotateCcw, ChevronRight, ChevronDown, Maximize, Target, Clock, Type, Volume2, Palette } from "lucide-react";

interface EffectsControlProps {
    activeLayer: Layer | null;
    compositionDuration: number;
    fps: number;
    onUpdateLayer: (id: string, updates: Partial<Layer>, transient?: boolean) => void;
    onCommitGesture: () => void;
}

export default function EffectsControl({ activeLayer, compositionDuration, fps, onUpdateLayer, onCommitGesture }: EffectsControlProps) {
    const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
    const toggle = (key: string) => setCollapsed((c) => ({ ...c, [key]: !c[key] }));

    if (!activeLayer) {
        return (
            <div className="flex flex-col h-full bg-[#252526] border-r border-black items-center justify-center text-gray-600 p-8 text-center">
                <Sliders className="w-12 h-12 mb-4 opacity-10" />
                <span className="text-xs font-bold uppercase tracking-widest opacity-30">No Layer Selected</span>
            </div>
        );
    }

    const layer = activeLayer;
    const update = (updates: Partial<Layer>, transient?: boolean) => onUpdateLayer(layer.id, updates, transient);
    const updateStyle = <K extends keyof Layer["styles"]>(group: K, patch: Partial<Layer["styles"][K]>, transient?: boolean) =>
        update({ styles: { ...layer.styles, [group]: { ...layer.styles[group], ...patch } } }, transient);

    const isMedia = layer.type === "VIDEO" || layer.type === "AUDIO";
    const hasAudio = layer.type === "VIDEO" || layer.type === "AUDIO";
    const maxDuration = layer.sourceDuration !== undefined && layer.type !== "IMAGE"
        ? Math.min(compositionDuration - layer.startTime, layer.sourceDuration - layer.inPoint)
        : compositionDuration - layer.startTime;

    return (
        <div className="flex flex-col h-full bg-[#252526] border-r border-black overflow-hidden select-none">
            {/* Header */}
            <div className="h-9 bg-[#3c3c3c] flex items-center px-3 border-b border-black shrink-0">
                <Sliders className="w-3.5 h-3.5 mr-2 text-[#d391fc]" />
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest truncate">
                    Effect Controls: {layer.name}
                </span>
                <span className="ml-auto text-[9px] text-gray-500 font-mono">{layer.type}</span>
            </div>

            <div className="flex-grow overflow-y-auto custom-scrollbar">
                <PropertyGroup id="timing" collapsed={!!collapsed["timing"]} onToggle={toggle} title="Timing">
                    <div className="grid grid-cols-2 gap-4">
                        <AEProperty
                            label="Start" icon={<Clock className="w-3 h-3" />}
                            value={layer.startTime} unit="s" precision={2}
                            min={0} max={Math.max(0, compositionDuration - 1 / fps)}
                            onChange={(v, t) => update({ startTime: v }, t)} onCommit={onCommitGesture}
                            scrub step={1 / fps}
                        />
                        <AEProperty
                            label="Duration"
                            value={layer.duration} unit="s" precision={2}
                            min={1 / fps} max={Math.max(1 / fps, maxDuration)}
                            onChange={(v, t) => update({ duration: v }, t)} onCommit={onCommitGesture}
                            scrub step={1 / fps}
                        />
                    </div>
                    {isMedia && (
                        <AEProperty
                            label="In Point (source)"
                            value={layer.inPoint} unit="s" precision={2}
                            min={0} max={Math.max(0, (layer.sourceDuration ?? layer.inPoint + layer.duration) - 1 / fps)}
                            onChange={(v, t) => {
                                const updates: Partial<Layer> = { inPoint: v };
                                if (layer.sourceDuration !== undefined) {
                                    updates.duration = Math.max(1 / fps, Math.min(layer.duration, layer.sourceDuration - v));
                                }
                                update(updates, t);
                            }}
                            onCommit={onCommitGesture}
                            scrub step={1 / fps} slider
                        />
                    )}
                    {layer.sourceDuration !== undefined && (
                        <div className="text-[9px] text-gray-600 font-mono -mt-2">
                            Source length {layer.sourceDuration.toFixed(2)}s
                            {layer.mediaWidth ? ` · ${layer.mediaWidth}×${layer.mediaHeight}` : ""}
                        </div>
                    )}
                </PropertyGroup>

                {layer.type !== "AUDIO" && (
                    <PropertyGroup id="transform" collapsed={!!collapsed["transform"]} onToggle={toggle} title="Transform">
                        <AEProperty
                            label="Anchor Point" icon={<Target className="w-3 h-3" />}
                            value={`${layer.position.x.toFixed(1)}, ${layer.position.y.toFixed(1)}`}
                        />
                        <div className="grid grid-cols-2 gap-4">
                            <AEProperty
                                label="Position X" value={layer.position.x} unit="%"
                                onChange={(v, t) => update({ position: { ...layer.position, x: v } }, t)} onCommit={onCommitGesture}
                                scrub min={-100} max={200}
                            />
                            <AEProperty
                                label="Position Y" value={layer.position.y} unit="%"
                                onChange={(v, t) => update({ position: { ...layer.position, y: v } }, t)} onCommit={onCommitGesture}
                                scrub min={-100} max={200}
                            />
                        </div>
                        <AEProperty
                            label="Scale" icon={<Maximize className="w-3 h-3" />} value={layer.scale} unit="%"
                            onChange={(v, t) => update({ scale: v }, t)} onCommit={onCommitGesture}
                            scrub min={1} max={500} slider
                        />
                        <AEProperty
                            label="Rotation" icon={<RotateCcw className="w-3 h-3" />} value={layer.rotation} unit="°"
                            onChange={(v, t) => update({ rotation: v }, t)} onCommit={onCommitGesture}
                            scrub min={-360} max={360}
                        />
                        <AEProperty
                            label="Opacity" icon={<Sliders className="w-3 h-3" />} value={layer.opacity} unit="%"
                            onChange={(v, t) => update({ opacity: v }, t)} onCommit={onCommitGesture}
                            scrub min={0} max={100} slider
                        />
                        <div className="flex gap-2">
                            <button onClick={() => update({ position: { x: 50, y: 50 } })} className="text-[9px] uppercase tracking-widest text-gray-500 hover:text-white border border-white/10 px-2 py-1 rounded">Center</button>
                            <button onClick={() => update({ scale: 100, rotation: 0, opacity: 100, position: { x: 50, y: 50 } })} className="text-[9px] uppercase tracking-widest text-gray-500 hover:text-white border border-white/10 px-2 py-1 rounded">Reset transform</button>
                        </div>
                    </PropertyGroup>
                )}

                {hasAudio && (
                    <PropertyGroup id="audio" collapsed={!!collapsed["audio"]} onToggle={toggle} title="Audio">
                        <AEProperty
                            label="Level" icon={<Volume2 className="w-3 h-3" />} value={layer.volume} unit="%"
                            onChange={(v, t) => update({ volume: v }, t)} onCommit={onCommitGesture}
                            scrub min={0} max={200} slider
                        />
                        <label className="flex items-center justify-between text-[10px] text-gray-500 uppercase tracking-tight font-black">
                            Mute
                            <input type="checkbox" checked={layer.muted} onChange={(e) => update({ muted: e.target.checked })} className="w-3 h-3 accent-[#d391fc]" />
                        </label>
                    </PropertyGroup>
                )}

                {layer.type === "TEXT" && (
                    <PropertyGroup id="text" collapsed={!!collapsed["text"]} onToggle={toggle} title="Text">
                        <div className="flex flex-col gap-1.5">
                            <span className="text-[10px] text-gray-500 uppercase tracking-tight font-black flex items-center gap-1.5"><Type className="w-3 h-3" /> Content</span>
                            <textarea
                                value={layer.text ?? ""}
                                onChange={(e) => update({ text: e.target.value }, true)}
                                onBlur={onCommitGesture}
                                rows={3}
                                className="bg-[#1a1a1a] border border-white/5 rounded px-2 py-1.5 text-[11px] text-white outline-none focus:border-[#d391fc]/50 resize-y"
                            />
                        </div>
                        <AEProperty
                            label="Font Size" value={layer.fontSize ?? 8} unit="%"
                            onChange={(v, t) => update({ fontSize: v }, t)} onCommit={onCommitGesture}
                            scrub min={1} max={60} slider
                        />
                        <div className="flex flex-col gap-1.5">
                            <span className="text-[10px] text-gray-500 uppercase tracking-tight font-black">Font Family</span>
                            <select
                                value={layer.fontFamily ?? "Inter, system-ui, sans-serif"}
                                onChange={(e) => update({ fontFamily: e.target.value })}
                                className="bg-[#1a1a1a] border border-white/5 rounded px-2 py-1.5 text-[11px] text-white outline-none"
                            >
                                <option value="Inter, system-ui, sans-serif">Inter / System</option>
                                <option value="Georgia, 'Times New Roman', serif">Serif</option>
                                <option value="'JetBrains Mono', Consolas, monospace">Monospace</option>
                                <option value="Impact, 'Arial Black', sans-serif">Impact</option>
                                <option value="'Comic Sans MS', cursive">Casual</option>
                            </select>
                        </div>
                    </PropertyGroup>
                )}

                {(layer.type === "SOLID" || layer.type === "ADJUSTMENT" || layer.type === "TEXT") && (
                    <PropertyGroup id="fill" collapsed={!!collapsed["fill"]} onToggle={toggle} title={layer.type === "TEXT" ? "Text Color" : "Fill"}>
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] text-gray-500 uppercase tracking-tight font-black flex items-center gap-1.5"><Palette className="w-3 h-3" /> Color</span>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-mono text-gray-400">{layer.color}</span>
                                <input type="color" value={layer.color} onChange={(e) => update({ color: e.target.value }, true)} onBlur={onCommitGesture} className="w-8 h-5 bg-transparent border-none cursor-pointer" />
                            </div>
                        </div>
                    </PropertyGroup>
                )}

                <PropertyGroup id="styles" collapsed={!!collapsed["styles"]} onToggle={toggle} title="Layer Styles">
                    {/* Drop Shadow */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black text-[#d391fc] uppercase tracking-widest">Drop Shadow</span>
                            <input type="checkbox" checked={layer.styles.dropShadow.enabled} onChange={(e) => updateStyle("dropShadow", { enabled: e.target.checked })} className="w-3 h-3 accent-[#d391fc]" />
                        </div>
                        {layer.styles.dropShadow.enabled && (
                            <div className="pl-4 space-y-4 border-l border-white/5">
                                <AEProperty label="Blur" value={layer.styles.dropShadow.blur} unit="px" onChange={(v, t) => updateStyle("dropShadow", { blur: v }, t)} onCommit={onCommitGesture} scrub min={0} max={100} slider />
                                <AEProperty label="Distance" value={layer.styles.dropShadow.distance} unit="px" onChange={(v, t) => updateStyle("dropShadow", { distance: v }, t)} onCommit={onCommitGesture} scrub min={0} max={100} slider />
                                <AEProperty label="Angle" value={layer.styles.dropShadow.angle} unit="°" onChange={(v, t) => updateStyle("dropShadow", { angle: v }, t)} onCommit={onCommitGesture} scrub min={0} max={360} />
                                <AEProperty label="Opacity" value={layer.styles.dropShadow.opacity} unit="%" onChange={(v, t) => updateStyle("dropShadow", { opacity: v }, t)} onCommit={onCommitGesture} scrub min={0} max={100} slider />
                                <div className="flex items-center justify-between">
                                    <span className="text-[11px] text-gray-500 uppercase tracking-tight font-medium">Color</span>
                                    <input type="color" value={layer.styles.dropShadow.color} onChange={(e) => updateStyle("dropShadow", { color: e.target.value }, true)} onBlur={onCommitGesture} className="w-8 h-4 bg-transparent border-none cursor-pointer" />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Blur */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black text-[#d391fc] uppercase tracking-widest">Gaussian Blur</span>
                            <input type="checkbox" checked={layer.styles.blur.enabled} onChange={(e) => updateStyle("blur", { enabled: e.target.checked })} className="w-3 h-3 accent-[#d391fc]" />
                        </div>
                        {layer.styles.blur.enabled && (
                            <div className="pl-4 space-y-4 border-l border-white/5">
                                <AEProperty label="Amount" value={layer.styles.blur.amount} unit="px" onChange={(v, t) => updateStyle("blur", { amount: v }, t)} onCommit={onCommitGesture} scrub min={0} max={100} slider />
                            </div>
                        )}
                    </div>
                </PropertyGroup>
            </div>
        </div>
    );
}

function PropertyGroup({ id, title, collapsed, onToggle, children }: { id: string; title: string; collapsed: boolean; onToggle: (id: string) => void; children: React.ReactNode }) {
    return (
        <div className="flex flex-col border-b border-black">
            <button onClick={() => onToggle(id)} className="h-7 px-2 flex items-center gap-2 bg-[#2d2d2d] cursor-pointer hover:bg-[#333] w-full text-left">
                {collapsed ? <ChevronRight className="w-3 h-3 text-gray-500" /> : <ChevronDown className="w-3 h-3 text-gray-500" />}
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{title}</span>
            </button>
            {!collapsed && <div className="p-4 flex flex-col gap-5">{children}</div>}
        </div>
    );
}

interface AEPropertyProps {
    label: string;
    value: number | string;
    unit?: string;
    icon?: React.ReactNode;
    scrub?: boolean;
    slider?: boolean;
    min?: number;
    max?: number;
    /** Scrub increment per pixel (defaults to 0.5 units, Shift ×4, Alt ÷5). */
    step?: number;
    precision?: number;
    onChange?: (val: number, transient: boolean) => void;
    onCommit?: () => void;
}

function AEProperty({ label, value, unit = "", icon, scrub = false, slider = false, min = 0, max = 100, step, precision = 1, onChange, onCommit }: AEPropertyProps) {
    const [isScrubbing, setIsScrubbing] = useState(false);
    const [editing, setEditing] = useState(false);
    const [draft, setDraft] = useState("");
    const startX = useRef(0);
    const startVal = useRef(0);
    const moved = useRef(false);

    const clamp = (n: number) => Math.min(max, Math.max(min, n));
    const roundTo = (n: number) => {
        const p = Math.pow(10, precision + 1);
        return Math.round(n * p) / p;
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrub || !onChange || typeof value !== "number" || e.button !== 0) return;
        setIsScrubbing(true);
        moved.current = false;
        startX.current = e.clientX;
        startVal.current = value;
        document.body.style.cursor = "ew-resize";
    };

    useEffect(() => {
        if (!isScrubbing) return;
        const perPixel = step ?? (max - min) / 400;

        const handleMouseMove = (e: MouseEvent) => {
            const delta = e.clientX - startX.current;
            if (Math.abs(delta) > 1) moved.current = true;
            const factor = e.shiftKey ? 4 : e.altKey ? 0.2 : 1;
            onChange?.(clamp(roundTo(startVal.current + delta * perPixel * factor)), true);
        };
        const handleMouseUp = () => {
            setIsScrubbing(false);
            document.body.style.cursor = "default";
            onCommit?.();
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
            document.body.style.cursor = "default";
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isScrubbing, min, max, step]);

    const beginEdit = () => {
        if (!onChange || typeof value !== "number") return;
        setDraft(String(value));
        setEditing(true);
    };

    const finishEdit = (commit: boolean) => {
        setEditing(false);
        if (!commit || !onChange) return;
        // Accept simple expressions like "+10", "-5", "*2".
        const trimmed = draft.trim();
        let next: number;
        if (/^[+\-*/]\s*-?\d+(\.\d+)?$/.test(trimmed) && typeof value === "number") {
            const op = trimmed[0];
            const n = parseFloat(trimmed.slice(1));
            next = op === "+" ? value + n : op === "-" ? value - n : op === "*" ? value * n : n === 0 ? value : value / n;
        } else {
            next = parseFloat(trimmed);
        }
        if (!Number.isNaN(next)) {
            onChange(clamp(roundTo(next)), false);
            onCommit?.();
        }
    };

    return (
        <div className="flex flex-col gap-1.5 group">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
                    {icon && <span className="w-3.5 flex justify-center opacity-60">{icon}</span>}
                    <span className="group-hover:text-gray-300 transition-colors uppercase tracking-tight font-black">{label}</span>
                </div>
                {editing ? (
                    <input
                        autoFocus
                        value={draft}
                        onChange={(e) => setDraft(e.target.value)}
                        onFocus={(e) => e.target.select()}
                        onBlur={() => finishEdit(true)}
                        onKeyDown={(e) => {
                            e.stopPropagation();
                            if (e.key === "Enter") finishEdit(true);
                            if (e.key === "Escape") finishEdit(false);
                            if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                                e.preventDefault();
                                const n = parseFloat(draft);
                                if (!Number.isNaN(n)) {
                                    const inc = (e.shiftKey ? 10 : 1) * (e.key === "ArrowUp" ? 1 : -1);
                                    const v = clamp(roundTo(n + inc));
                                    setDraft(String(v));
                                    onChange?.(v, true);
                                }
                            }
                        }}
                        className="w-20 bg-[#1a1a1a] border border-[#00e0ff]/50 rounded px-1 text-[10px] font-mono text-[#00e0ff] text-right outline-none"
                    />
                ) : (
                    <div
                        onMouseDown={handleMouseDown}
                        onClick={() => { if (!moved.current) beginEdit(); }}
                        title={scrub ? "Drag to scrub · click to type (supports +10, -5, *2)" : undefined}
                        className={`text-[10px] font-mono select-none px-1 rounded transition-colors ${scrub && onChange ? "cursor-ew-resize" : ""} ${isScrubbing ? "text-[#00e0ff] bg-[#00e0ff]/10" : "text-[#00e0ff] hover:bg-white/5 border-b border-dotted border-[#00e0ff]/30"}`}
                    >
                        {typeof value === "number" ? value.toFixed(precision) : value}{unit}
                    </div>
                )}
            </div>
            {slider && typeof value === "number" && onChange && (
                <div className="relative h-1 bg-black/40 rounded-full overflow-hidden group/slider">
                    <input
                        type="range"
                        min={min}
                        max={max}
                        step={step ?? 0.1}
                        value={value}
                        onChange={(e) => onChange(parseFloat(e.target.value), true)}
                        onMouseUp={onCommit}
                        onTouchEnd={onCommit}
                        onKeyUp={onCommit}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div
                        className="absolute top-0 left-0 h-full bg-[#00e0ff]/40 group-hover/slider:bg-[#00e0ff]/60 transition-colors"
                        style={{ width: `${Math.max(0, Math.min(100, ((value - min) / (max - min || 1)) * 100))}%` }}
                    />
                </div>
            )}
        </div>
    );
}
