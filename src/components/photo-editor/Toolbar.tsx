"use client";

import { ToolType } from "@/app/photo/types";
import {
    LucideIcon,
    MousePointer2,
    BoxSelect,
    Pencil,
    Eraser,
    Type,
    Shapes,
    Hand,
    ZoomIn,
    Plus
} from "lucide-react";

interface ToolbarProps {
    activeTool: ToolType;
    onToolSelect: (tool: ToolType) => void;
}

export default function Toolbar({ activeTool, onToolSelect }: ToolbarProps) {
    const tools: { id: ToolType; icon: LucideIcon; label: string }[] = [
        { id: "MOVE", icon: MousePointer2, label: "Move Tool (V)" },
        { id: "SELECT", icon: BoxSelect, label: "Marquee Tool (M)" },
        { id: "BRUSH", icon: Pencil, label: "Brush Tool (B)" },
        { id: "ERASER", icon: Eraser, label: "Eraser Tool (E)" },
        { id: "TEXT", icon: Type, label: "Horizontal Text Tool (T)" },
        { id: "SHAPE", icon: Shapes, label: "Rectangle Tool (U)" },
        { id: "HAND", icon: Hand, label: "Hand Tool (H)" },
        { id: "ZOOM", icon: ZoomIn, label: "Zoom Tool (Z)" },
    ];

    return (
        <div className="w-[50px] bg-[#252526] border-r border-[#333] flex flex-col items-center py-2 gap-1 z-20">
            {tools.map((tool) => (
                <button
                    key={tool.id}
                    onClick={() => onToolSelect(tool.id)}
                    className={`p-2.5 rounded transition-colors group relative ${activeTool === tool.id ? "bg-[#37373d] text-[#00e0ff]" : "text-gray-400 hover:bg-[#2a2d2e] hover:text-white"
                        }`}
                    title={tool.label}
                >
                    <tool.icon className="w-5 h-5" />
                    <span className="absolute left-full ml-2 px-2 py-1 bg-[#1e1e1e] border border-[#454545] text-[10px] text-white rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                        {tool.label}
                    </span>
                </button>
            ))}
            <div className="w-6 h-px bg-[#333] my-2" />
            <button className="p-2.5 text-gray-500 hover:text-white transition-colors" title="Edit Toolbar">
                <Plus className="w-4 h-4" />
            </button>
        </div>
    );
}
