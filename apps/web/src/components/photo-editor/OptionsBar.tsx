"use client";

import { ToolType, ToolOptions } from "@/app/photo/types";
import { Sliders, Palette, Type, Square, Pencil } from "lucide-react";

interface OptionsBarProps {
    activeTool: ToolType;
    options: ToolOptions;
    onOptionsChange: (options: Partial<ToolOptions>) => void;
    canvasWidth: number;
    canvasHeight: number;
    onDimensionsChange: (w: number, h: number) => void;
}

export default function OptionsBar({
    activeTool,
    options,
    onOptionsChange,
    canvasWidth,
    canvasHeight,
    onDimensionsChange
}: OptionsBarProps) {
    return (
        <div className="h-[40px] bg-[#2d2d2d] border-b border-[#1e1e1e] flex items-center px-4 gap-6 z-10 text-[11px] text-gray-300">
            {/* Common Dimensions Section */}
            <div className="flex items-center gap-2 border-r border-white/10 pr-4">
                <span className="text-gray-500 uppercase font-bold tracking-tighter">Canvas:</span>
                <div className="flex items-center gap-1">
                    <input
                        type="number"
                        value={canvasWidth}
                        onChange={(e) => onDimensionsChange(parseInt(e.target.value) || 800, canvasHeight)}
                        className="w-12 bg-[#3c3c3c] border border-transparent focus:border-[#00e0ff] outline-none px-1 py-0.5 rounded"
                    />
                    <span>×</span>
                    <input
                        type="number"
                        value={canvasHeight}
                        onChange={(e) => onDimensionsChange(canvasWidth, parseInt(e.target.value) || 600)}
                        className="w-12 bg-[#3c3c3c] border border-transparent focus:border-[#00e0ff] outline-none px-1 py-0.5 rounded"
                    />
                </div>
            </div>

            {/* Tool Specific Options */}
            {activeTool === "BRUSH" && (
                <div className="flex items-center gap-4 animate-in fade-in slide-in-from-left-2 duration-200">
                    <div className="flex items-center gap-2">
                        <Pencil className="w-3.5 h-3.5 text-gray-500" />
                        <span>Size:</span>
                        <input
                            type="range" min="1" max="100"
                            value={options.brushSize}
                            onChange={(e) => onOptionsChange({ brushSize: parseInt(e.target.value) })}
                            className="w-24 accent-[#00e0ff]"
                        />
                        <span className="w-6">{options.brushSize}px</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Palette className="w-3.5 h-3.5 text-gray-500" />
                        <span>Color:</span>
                        <input
                            type="color"
                            value={options.brushColor}
                            onChange={(e) => onOptionsChange({ brushColor: e.target.value })}
                            className="w-6 h-4 bg-transparent border-none p-0 overflow-hidden rounded cursor-pointer"
                        />
                    </div>
                </div>
            )}

            {activeTool === "TEXT" && (
                <div className="flex items-center gap-4 animate-in fade-in slide-in-from-left-2 duration-200">
                    <div className="flex items-center gap-2">
                        <Type className="w-3.5 h-3.5 text-gray-500" />
                        <span>Font Size:</span>
                        <input
                            type="number"
                            value={options.fontSize}
                            onChange={(e) => onOptionsChange({ fontSize: parseInt(e.target.value) || 24 })}
                            className="w-12 bg-[#3c3c3c] border-none outline-none px-1 py-0.5 rounded"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Palette className="w-3.5 h-3.5 text-gray-500" />
                        <input
                            type="color"
                            value={options.fontColor}
                            onChange={(e) => onOptionsChange({ fontColor: e.target.value })}
                            className="w-6 h-4 bg-transparent border-none p-0 cursor-pointer"
                        />
                    </div>
                </div>
            )}

            {activeTool === "SHAPE" && (
                <div className="flex items-center gap-4 animate-in fade-in slide-in-from-left-2 duration-200">
                    <div className="flex items-center gap-2">
                        <Square className="w-3.5 h-3.5 text-gray-500" />
                        <span>Fill:</span>
                        <input
                            type="color"
                            value={options.shapeFill}
                            onChange={(e) => onOptionsChange({ shapeFill: e.target.value })}
                            className="w-6 h-4 bg-transparent border-none p-0 cursor-pointer"
                        />
                    </div>
                    <div className="flex items-center gap-2 border-l border-white/10 pl-4">
                        <span>Stroke:</span>
                        <input
                            type="number"
                            value={options.shapeStrokeWidth}
                            onChange={(e) => onOptionsChange({ shapeStrokeWidth: parseInt(e.target.value) || 1 })}
                            className="w-10 bg-[#3c3c3c] border-none outline-none px-1 py-0.5 rounded"
                        />
                        <input
                            type="color"
                            value={options.shapeStroke}
                            onChange={(e) => onOptionsChange({ shapeStroke: e.target.value })}
                            className="w-6 h-4 bg-transparent border-none p-0 cursor-pointer"
                        />
                    </div>
                </div>
            )}

            {/* Selector info */}
            {(activeTool === "MOVE" || activeTool === "SELECT") && (
                <div className="flex items-center gap-2 text-gray-500">
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Auto-Select Layer: <input type="checkbox" defaultChecked className="accent-[#00e0ff]" /></span>
                </div>
            )}
        </div>
    );
}
