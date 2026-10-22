"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MenuItem {
    label?: string;
    shortcut?: string;
    action?: () => void;
    separator?: boolean;
    disabled?: boolean;
}

interface MenuSection {
    label: string;
    items: MenuItem[];
}

interface VideoMenuBarProps {
    onAction?: (actionId: string) => void;
    canUndo?: boolean;
    canRedo?: boolean;
    hasSelection?: boolean;
    canPaste?: boolean;
}

export default function VideoMenuBar({ onAction, canUndo = true, canRedo = true, hasSelection = true, canPaste = true }: VideoMenuBarProps) {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const menus: MenuSection[] = [
        {
            label: "File",
            items: [
                { label: "New Project", shortcut: "Ctrl+Alt+N", action: () => onAction?.("FILE_NEW") },
                { label: "Open Project...", shortcut: "Ctrl+O", action: () => onAction?.("FILE_OPEN") },
                { separator: true },
                { label: "Save Project", shortcut: "Ctrl+S", action: () => onAction?.("FILE_SAVE") },
                { label: "Save Frame As PNG...", shortcut: "Ctrl+Shift+S", action: () => onAction?.("FILE_SAVE_FRAME") },
                { separator: true },
                { label: "Import File...", shortcut: "Ctrl+I", action: () => onAction?.("FILE_IMPORT") },
                { label: "Render...", shortcut: "Ctrl+M / F5", action: () => onAction?.("COMP_RENDER") },
                { separator: true },
                { label: "Mint Asset", shortcut: "F12", action: () => onAction?.("FILE_MINT") },
            ]
        },
        {
            label: "Edit",
            items: [
                { label: "Undo", shortcut: "Ctrl+Z", action: () => onAction?.("EDIT_UNDO"), disabled: !canUndo },
                { label: "Redo", shortcut: "Ctrl+Y", action: () => onAction?.("EDIT_REDO"), disabled: !canRedo },
                { separator: true },
                { label: "Cut", shortcut: "Ctrl+X", action: () => onAction?.("EDIT_CUT"), disabled: !hasSelection },
                { label: "Copy", shortcut: "Ctrl+C", action: () => onAction?.("EDIT_COPY"), disabled: !hasSelection },
                { label: "Paste", shortcut: "Ctrl+V", action: () => onAction?.("EDIT_PASTE"), disabled: !canPaste },
                { separator: true },
                { label: "Select All", shortcut: "Ctrl+A", action: () => onAction?.("EDIT_SELECT_ALL") },
                { label: "Deselect All", shortcut: "Shift+Ctrl+A", action: () => onAction?.("EDIT_DESELECT") },
                { separator: true },
                { label: "Duplicate Layer", shortcut: "Ctrl+D", action: () => onAction?.("EDIT_DUPLICATE"), disabled: !hasSelection },
                { label: "Split Layer", shortcut: "Ctrl+Shift+D", action: () => onAction?.("EDIT_SPLIT"), disabled: !hasSelection },
                { label: "Delete", shortcut: "Del / F4", action: () => onAction?.("EDIT_DELETE"), disabled: !hasSelection },
                { separator: true },
                { label: "Preferences", shortcut: "Ctrl+,", action: () => onAction?.("EDIT_PREFERENCES") },
            ]
        },
        {
            label: "Composition",
            items: [
                { label: "New Composition...", shortcut: "Ctrl+N", action: () => onAction?.("COMP_NEW") },
                { label: "Composition Settings...", shortcut: "Ctrl+K", action: () => onAction?.("COMP_SETTINGS") },
                { separator: true },
                { label: "Play / Pause", shortcut: "Space", action: () => onAction?.("PLAY_TOGGLE") },
                { label: "Go to Start", shortcut: "Home", action: () => onAction?.("PLAY_HOME") },
                { label: "Go to End", shortcut: "End", action: () => onAction?.("PLAY_END") },
                { separator: true },
                { label: "Save Frame As PNG...", shortcut: "Ctrl+Shift+S", action: () => onAction?.("FILE_SAVE_FRAME") },
                { label: "Render...", shortcut: "Ctrl+M", action: () => onAction?.("COMP_RENDER") },
            ]
        },
        {
            label: "Layer",
            items: [
                { label: "New Solid", shortcut: "Ctrl+Y", action: () => onAction?.("LAYER_NEW_SOLID") },
                { label: "New Text", shortcut: "Ctrl+Alt+Shift+T", action: () => onAction?.("LAYER_NEW_TEXT") },
                { label: "New Adjustment Layer", shortcut: "Ctrl+Alt+Y", action: () => onAction?.("LAYER_NEW_ADJUSTMENT") },
                { separator: true },
                { label: "Trim In Point to Playhead", shortcut: "I", action: () => onAction?.("LAYER_TRIM_IN"), disabled: !hasSelection },
                { label: "Trim Out Point to Playhead", shortcut: "O", action: () => onAction?.("LAYER_TRIM_OUT"), disabled: !hasSelection },
                { label: "Move to Playhead", shortcut: "[", action: () => onAction?.("LAYER_MOVE_TO_PLAYHEAD"), disabled: !hasSelection },
                { separator: true },
                { label: "Bring Forward", shortcut: "Ctrl+]", action: () => onAction?.("LAYER_UP"), disabled: !hasSelection },
                { label: "Send Backward", shortcut: "Ctrl+[", action: () => onAction?.("LAYER_DOWN"), disabled: !hasSelection },
                { separator: true },
                { label: "Duplicate", shortcut: "Ctrl+D", action: () => onAction?.("EDIT_DUPLICATE"), disabled: !hasSelection },
                { label: "Split", shortcut: "Ctrl+Shift+D", action: () => onAction?.("EDIT_SPLIT"), disabled: !hasSelection },
                { label: "Detach Audio", action: () => onAction?.("LAYER_DETACH_AUDIO"), disabled: !hasSelection },
                { label: "Delete", shortcut: "Del", action: () => onAction?.("EDIT_DELETE"), disabled: !hasSelection },
            ]
        },
        {
            label: "Effect",
            items: [
                { label: "Toggle Drop Shadow", action: () => onAction?.("EFFECT_DROP_SHADOW"), disabled: !hasSelection },
                { label: "Toggle Gaussian Blur", action: () => onAction?.("EFFECT_BLUR"), disabled: !hasSelection },
                { separator: true },
                { label: "Reset Transform", action: () => onAction?.("EFFECT_RESET_TRANSFORM"), disabled: !hasSelection },
                { label: "Remove All Effects", action: () => onAction?.("EFFECT_CLEAR"), disabled: !hasSelection },
            ]
        },
        {
            label: "View",
            items: [
                { label: "Zoom In", shortcut: "Ctrl++", action: () => onAction?.("VIEW_ZOOM_IN") },
                { label: "Zoom Out", shortcut: "Ctrl+-", action: () => onAction?.("VIEW_ZOOM_OUT") },
                { label: "Fit in Window", shortcut: "Ctrl+0", action: () => onAction?.("VIEW_FIT") },
                { separator: true },
                { label: "Timeline Zoom In", shortcut: "Ctrl+Shift++", action: () => onAction?.("VIEW_TL_ZOOM_IN") },
                { label: "Timeline Zoom Out", shortcut: "Ctrl+Shift+-", action: () => onAction?.("VIEW_TL_ZOOM_OUT") },
                { separator: true },
                { label: "Fullscreen", shortcut: "F11", action: () => onAction?.("VIEW_FULLSCREEN") },
            ]
        },
        {
            label: "Window",
            items: [
                { label: "Project Panel", shortcut: "F6", action: () => onAction?.("WINDOW_PROJECT") },
                { label: "Timeline", shortcut: "F7", action: () => onAction?.("WINDOW_TIMELINE") },
                { label: "Effects Control", shortcut: "F8", action: () => onAction?.("WINDOW_EFFECTS") },
                { separator: true },
                { label: "Help Center", shortcut: "F1", action: () => onAction?.("FILE_HELP") },
                { label: "Mint Asset", shortcut: "F12", action: () => onAction?.("FILE_MINT") },
            ]
        }
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setActiveMenu(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={containerRef} className="h-full flex items-center bg-[#2d2d2d] select-none z-50 px-2 uppercase tracking-tighter">
            {menus.map((menu) => (
                <div key={menu.label} className="relative h-full flex items-center">
                    <button
                        onMouseEnter={() => activeMenu && setActiveMenu(menu.label)}
                        onClick={() => setActiveMenu(activeMenu === menu.label ? null : menu.label)}
                        className={`px-3 py-1 text-[10px] font-bold transition-colors rounded-sm mx-0.5 ${activeMenu === menu.label ? "bg-[#3c3c3c] text-white" : "text-gray-400 hover:text-white hover:bg-[#3c3c3c]"
                            }`}
                    >
                        {menu.label}
                    </button>

                    <AnimatePresence>
                        {activeMenu === menu.label && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.05 }}
                                className="absolute top-full left-0 mt-0.5 w-64 bg-[#2d2d2d] border border-black shadow-2xl py-1 rounded-sm z-[100] normal-case tracking-normal"
                            >
                                {menu.items.map((item, idx) => (
                                    item.separator ? (
                                        <div key={idx} className="h-px bg-white/5 my-1 mx-2" />
                                    ) : (
                                        <button
                                            key={idx}
                                            disabled={item.disabled}
                                            onClick={() => {
                                                item.action?.();
                                                setActiveMenu(null);
                                            }}
                                            className="w-full text-left px-3 py-1.5 hover:bg-[#d391fc]/20 hover:text-[#d391fc] group flex justify-between items-center transition-colors disabled:opacity-30 disabled:hover:bg-transparent"
                                        >
                                            <span className="text-[11px] text-gray-300 group-hover:text-[#d391fc]">{item.label}</span>
                                            {item.shortcut && (
                                                <span className="text-[10px] text-gray-500 group-hover:text-[#d391fc]/70 ml-4 font-mono">
                                                    {item.shortcut}
                                                </span>
                                            )}
                                        </button>
                                    )
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
