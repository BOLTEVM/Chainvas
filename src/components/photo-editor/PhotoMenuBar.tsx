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

interface PhotoMenuBarProps {
    onAction?: (actionId: string) => void;
}

export default function PhotoMenuBar({ onAction }: PhotoMenuBarProps) {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const menus: MenuSection[] = [
        {
            label: "File",
            items: [
                { label: "New...", shortcut: "Ctrl+N", action: () => onAction?.("FILE_NEW") },
                { label: "Open...", shortcut: "Ctrl+O", action: () => onAction?.("FILE_OPEN") },
                { separator: true },
                { label: "Close", shortcut: "Ctrl+W", action: () => onAction?.("FILE_CLOSE") },
                { label: "Save", shortcut: "Ctrl+S", action: () => onAction?.("FILE_SAVE") },
                { label: "Save As...", shortcut: "Shift+Ctrl+S", action: () => onAction?.("FILE_SAVE_AS") },
                { separator: true },
                { label: "Export As...", shortcut: "Alt+Shift+Ctrl+W", action: () => onAction?.("FILE_EXPORT") },
                { label: "Quick Export as PNG", action: () => onAction?.("FILE_EXPORT_PNG") },
                { separator: true },
                { label: "Exit", shortcut: "Ctrl+Q" },
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
                { label: "Free Transform", shortcut: "Ctrl+T", action: () => onAction?.("EDIT_TRANSFORM") },
                { separator: true },
                { label: "Preferences", shortcut: "Ctrl+K", action: () => onAction?.("EDIT_PREFERENCES") },
            ]
        },
        {
            label: "Image",
            items: [
                { label: "Mode" },
                { label: "Adjustments" },
                { separator: true },
                { label: "Image Size...", shortcut: "Alt+Ctrl+I" },
                { label: "Canvas Size...", shortcut: "Alt+Ctrl+C" },
                { label: "Image Rotation" },
                { separator: true },
                { label: "Duplicate..." },
            ]
        },
        {
            label: "Layer",
            items: [
                { label: "New Layer", shortcut: "Shift+Ctrl+N" },
                { label: "Duplicate Layer...", shortcut: "Ctrl+J" },
                { label: "Delete Layer" },
                { separator: true },
                { label: "Quick Mask Mode" },
                { separator: true },
                { label: "Group Layers", shortcut: "Ctrl+G" },
                { label: "Ungroup Layers", shortcut: "Shift+Ctrl+G" },
                { separator: true },
                { label: "Merge Layers", shortcut: "Ctrl+E" },
                { label: "Flatten Image" },
            ]
        },
        {
            label: "Filter",
            items: [
                { label: "Last Filter", shortcut: "Alt+Ctrl+F" },
                { separator: true },
                { label: "Blur" },
                { label: "Distort" },
                { label: "Noise" },
                { label: "Pixelate" },
                { label: "Render" },
                { label: "Sharpen" },
                { label: "Stylize" },
            ]
        },
        {
            label: "View",
            items: [
                { label: "Zoom In", shortcut: "Ctrl++" },
                { label: "Zoom Out", shortcut: "Ctrl+-" },
                { label: "Fit on Screen", shortcut: "Ctrl+0" },
                { separator: true },
                { label: "Rulers", shortcut: "Ctrl+R" },
                { label: "Guides" },
            ]
        },
        {
            label: "Window",
            items: [
                { label: "Workspace" },
                { separator: true },
                { label: "Layers", shortcut: "F7" },
                { label: "Properties" },
                { label: "History" },
                { label: "Navigator" },
                { label: "Toolbar" },
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
        <div ref={containerRef} className="h-full flex items-center bg-[#2d2d2d] select-none z-50 px-2">
            {menus.map((menu) => (
                <div key={menu.label} className="relative h-full flex items-center">
                    <button
                        onMouseEnter={() => activeMenu && setActiveMenu(menu.label)}
                        onClick={() => setActiveMenu(activeMenu === menu.label ? null : menu.label)}
                        className={`px-3 py-1 text-[11px] font-medium transition-colors rounded-sm mx-0.5 ${activeMenu === menu.label ? "bg-[#3c3c3c] text-white" : "text-gray-400 hover:text-white hover:bg-[#3c3c3c]"
                            }`}
                    >
                        {menu.label}
                    </button>

                    <AnimatePresence>
                        {activeMenu === menu.label && (
                            <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 5 }}
                                transition={{ duration: 0.1 }}
                                className="absolute top-full left-0 mt-0.5 w-56 bg-[#2d2d2d] border border-black shadow-2xl py-1 rounded-sm z-[100]"
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
                                            className="w-full text-left px-3 py-1.5 hover:bg-[#0078d4] group flex justify-between items-center transition-colors disabled:opacity-30 disabled:hover:bg-transparent"
                                        >
                                            <span className="text-[11px] text-gray-300 group-hover:text-white">{item.label}</span>
                                            {item.shortcut && (
                                                <span className="text-[10px] text-gray-500 group-hover:text-white/70 ml-4 font-mono">
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
