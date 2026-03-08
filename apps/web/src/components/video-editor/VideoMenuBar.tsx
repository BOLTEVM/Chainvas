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
}

export default function VideoMenuBar({ onAction }: VideoMenuBarProps) {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const menus: MenuSection[] = [
        {
            label: "File",
            items: [
                { label: "New Project", shortcut: "Ctrl+Alt+N", action: () => onAction?.("FILE_NEW") },
                { label: "Open Project...", shortcut: "Ctrl+O", action: () => onAction?.("FILE_OPEN") },
                { separator: true },
                { label: "Close", shortcut: "Ctrl+W", action: () => onAction?.("FILE_CLOSE") },
                { label: "Save", shortcut: "Ctrl+S", action: () => onAction?.("FILE_SAVE") },
                { label: "Save As...", shortcut: "Shift+Ctrl+S", action: () => onAction?.("FILE_SAVE_AS") },
                { separator: true },
                { label: "Import", shortcut: "Ctrl+I", action: () => onAction?.("FILE_IMPORT") },
                { label: "Export" },
                { separator: true },
                { label: "Project Settings...", shortcut: "Alt+Shift+Ctrl+K", action: () => onAction?.("FILE_SETTINGS") },
            ]
        },
        {
            label: "Edit",
            items: [
                { label: "Undo", shortcut: "Ctrl+Z", action: () => onAction?.("EDIT_UNDO") },
                { label: "Redo", shortcut: "Ctrl+Y", action: () => onAction?.("EDIT_REDO") },
                { separator: true },
                { label: "Cut", shortcut: "Ctrl+X", action: () => onAction?.("EDIT_CUT") },
                { label: "Copy", shortcut: "Ctrl+C", action: () => onAction?.("EDIT_COPY") },
                { label: "Paste", shortcut: "Ctrl+V", action: () => onAction?.("EDIT_PASTE") },
                { separator: true },
                { label: "Duplicate", shortcut: "Ctrl+D", action: () => onAction?.("EDIT_DUPLICATE") },
                { label: "Split Layer", shortcut: "Shift+Ctrl+D", action: () => onAction?.("EDIT_SPLIT") },
                { separator: true },
                { label: "Preferences", action: () => onAction?.("EDIT_PREFERENCES") },
            ]
        },
        {
            label: "Composition",
            items: [
                { label: "New Composition...", shortcut: "Ctrl+N", action: () => onAction?.("COMP_NEW") },
                { label: "Composition Settings...", shortcut: "Ctrl+K", action: () => onAction?.("COMP_SETTINGS") },
                { separator: true },
                { label: "Preview" },
                { label: "Save Frame As" },
                { separator: true },
                { label: "Add to Render Queue", shortcut: "Ctrl+M", action: () => onAction?.("COMP_RENDER") },
            ]
        },
        {
            label: "Layer",
            items: [
                { label: "New" },
                { label: "Layer Settings...", shortcut: "Shift+Ctrl+Y" },
                { separator: true },
                { label: "Open Layer", shortcut: "Enter" },
                { separator: true },
                { label: "Mask" },
                { label: "Transform" },
                { separator: true },
                { label: "Pre-compose...", shortcut: "Shift+Ctrl+C" },
            ]
        },
        {
            label: "Effect",
            items: [
                { label: "Last Effect", shortcut: "Alt+Ctrl+F" },
                { separator: true },
                { label: "Blur & Sharpen" },
                { label: "Color Correction" },
                { label: "Distort" },
                { label: "Generate" },
                { label: "Keying" },
                { label: "Noise & Grain" },
                { label: "Perspective" },
                { label: "Stylize" },
                { label: "Transition" },
            ]
        },
        {
            label: "Animation",
            items: [
                { label: "Save Animation Preset..." },
                { label: "Apply Animation Preset..." },
                { separator: true },
                { label: "Keyframe Assistant" },
                { label: "Keyframe Interpolation..." },
                { separator: true },
                { label: "Add Expression" },
            ]
        },
        {
            label: "View",
            items: [
                { label: "Zoom In", shortcut: "Ctrl++" },
                { label: "Zoom Out", shortcut: "Ctrl+-" },
                { separator: true },
                { label: "Show Rulers", shortcut: "Ctrl+R" },
                { label: "Show Guides", shortcut: "Ctrl+;" },
                { separator: true },
                { label: "Set Poster Time" },
            ]
        },
        {
            label: "Window",
            items: [
                { label: "Workspace" },
                { separator: true },
                { label: "Align" },
                { label: "Audio" },
                { label: "Character" },
                { label: "Effects & Presets" },
                { label: "Info" },
                { label: "Libraries" },
                { label: "Paragraph" },
                { label: "Preview" },
                { label: "Project" },
                { label: "Timeline" },
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
