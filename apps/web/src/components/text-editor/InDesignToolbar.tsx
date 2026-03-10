"use client";

import { useState, useRef, useEffect } from "react";
import { TextToolType, ToolGroup } from "@/app/text/types";
import {
    MousePointer2,
    Type,
    Minus,
    Square,
    Hand,
    ZoomIn,
    Plus,
    ChevronRight,
    MousePointer,
    TypeOutline,
    Stamp,
    Frame,
    Circle,
    Hexagon
} from "lucide-react";

interface InDesignToolbarProps {
    activeTool: TextToolType;
    onToolSelect: (tool: TextToolType) => void;
}

export default function InDesignToolbar({ activeTool, onToolSelect }: InDesignToolbarProps) {
    const [openGroupId, setOpenGroupId] = useState<TextToolType | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [isLongPress, setIsLongPress] = useState(false);

    const toolGroups: ToolGroup[] = [
        {
            id: "SELECT",
            icon: MousePointer2,
            label: "Selection Tool (V)",
            subTools: [
                { id: "SELECT", label: "Selection Tool (V)", icon: MousePointer2 },
                { id: "DIRECT_SELECT", label: "Direct Selection Tool (A)", icon: MousePointer },
            ]
        },
        {
            id: "TEXT",
            icon: Type,
            label: "Type Tool (T)",
            subTools: [
                { id: "TEXT", label: "Type Tool (T)", icon: Type },
                { id: "TEXT_ON_PATH", label: "Type on Path Tool (Shift+T)", icon: TypeOutline },
            ]
        },
        { id: "LINE", icon: Minus, label: "Line Tool (L)" },
        {
            id: "RECTANGLE_FRAME",
            icon: Frame,
            label: "Rectangle Frame Tool (F)",
            subTools: [
                { id: "RECTANGLE_FRAME", label: "Rectangle Frame Tool (F)", icon: Frame },
                { id: "ELLIPSE_FRAME", label: "Ellipse Frame Tool", icon: Circle },
                { id: "POLYGON_FRAME", label: "Polygon Frame Tool", icon: Hexagon },
            ]
        },
        {
            id: "RECTANGLE",
            icon: Square,
            label: "Rectangle Tool (M)",
            subTools: [
                { id: "RECTANGLE", label: "Rectangle Tool (M)", icon: Square },
                { id: "ELLIPSE", label: "Ellipse Tool (L)", icon: Circle },
                { id: "POLYGON", label: "Polygon Tool", icon: Hexagon },
            ]
        },
        { id: "HAND", icon: Hand, label: "Hand Tool (H)" },
        { id: "ZOOM", icon: ZoomIn, label: "Zoom Tool (Z)" },
        { id: "SIGNATURE", icon: Stamp, label: "Signature Tool (J)" },
    ];

    const handleMouseDown = (id: TextToolType, e: React.MouseEvent) => {
        if (e.button !== 0) return; // Only trigger long press on left click
        setIsLongPress(false);
        timeoutRef.current = setTimeout(() => {
            setIsLongPress(true);
            setOpenGroupId(id);
        }, 300); // 300ms for long press
    };

    const handleMouseUp = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    const handleContextMenu = (e: React.MouseEvent, id: TextToolType) => {
        e.preventDefault();
        setOpenGroupId(id);
    };

    const isSubToolActive = (group: ToolGroup) => {
        if (activeTool === group.id) return true;
        return group.subTools?.some(st => st.id === activeTool);
    };

    const getActiveIcon = (group: ToolGroup) => {
        if (activeTool === group.id) return group.icon;
        const sub = group.subTools?.find(st => st.id === activeTool);
        return sub ? sub.icon : group.icon;
    };

    return (
        <div className="w-[50px] bg-[#252526] border-r border-[#333] flex flex-col items-center py-2 gap-1 z-50 h-full relative">
            {toolGroups.map((group) => {
                const Icon = getActiveIcon(group);
                const isActive = isSubToolActive(group);
                const hasSub = group.subTools && group.subTools.length > 0;

                return (
                    <div key={group.id} className="relative group/item">
                        <button
                            onMouseDown={(e) => handleMouseDown(group.id, e)}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                            onContextMenu={(e) => handleContextMenu(e, group.id)}
                            onClick={() => {
                                if (!isLongPress) {
                                    onToolSelect(group.id);
                                    if (hasSub) {
                                        setOpenGroupId(group.id);
                                    }
                                }
                                setIsLongPress(false);
                            }}
                            className={`p-2.5 rounded transition-colors group relative ${isActive ? "bg-[#37373d] text-[#ff6b00]" : "text-gray-400 hover:bg-[#2a2d2e] hover:text-white"
                                }`}
                        >
                            <Icon className="w-5 h-5" />

                            {hasSub && (
                                <div className="absolute bottom-1 right-1 w-0 h-0 border-t-[4px] border-t-transparent border-r-[4px] border-r-gray-500 group-hover/item:border-r-white transition-colors" />
                            )}

                            {/* Tooltip */}
                            <span className="absolute left-full ml-3 px-2 py-1 bg-[#1e1e1e] border border-[#454545] text-[10px] text-white rounded opacity-0 group-hover/item:opacity-100 pointer-events-none whitespace-nowrap z-[100] shadow-xl">
                                {group.label}
                            </span>
                        </button>

                        {/* Sub-tools Menu */}
                        {openGroupId === group.id && hasSub && (
                            <div
                                className="absolute left-full top-0 ml-1 bg-[#252526] border border-[#454545] rounded shadow-2xl z-[200] flex flex-col py-1 min-w-[180px]"
                                onMouseLeave={() => setOpenGroupId(null)}
                            >
                                {group.subTools?.map((sub) => (
                                    <button
                                        key={sub.id}
                                        onClick={() => {
                                            onToolSelect(sub.id);
                                            setOpenGroupId(null);
                                        }}
                                        className={`flex items-center gap-3 px-3 py-2 text-[11px] transition-colors ${activeTool === sub.id ? "bg-[#37373d] text-[#ff6b00]" : "text-gray-300 hover:bg-[#3e3e42] hover:text-white"
                                            }`}
                                    >
                                        <sub.icon className="w-4 h-4" />
                                        <span className="font-medium">{sub.label}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}

            <div className="w-6 h-px bg-[#333] my-2" />
            <button className="p-2.5 text-gray-500 hover:text-white transition-colors" title="Edit Toolbar">
                <Plus className="w-4 h-4" />
            </button>
        </div>
    );
}
