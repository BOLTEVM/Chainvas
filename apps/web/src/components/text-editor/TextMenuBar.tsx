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

interface TextMenuBarProps {
    onAction?: (actionId: string) => void;
}

export default function TextMenuBar({ onAction }: TextMenuBarProps) {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const menus: MenuSection[] = [
        {
            label: "File",
            items: [
                { label: "New document...", shortcut: "Ctrl+N", action: () => onAction?.("FILE_NEW") },
                { label: "Open...", shortcut: "Ctrl+O", action: () => onAction?.("FILE_OPEN") },
                { separator: true },
                { label: "Close", shortcut: "Ctrl+W", action: () => onAction?.("FILE_CLOSE") },
                { label: "Save", shortcut: "Ctrl+S", action: () => onAction?.("FILE_SAVE") },
                { label: "Save As...", shortcut: "Shift+Ctrl+S", action: () => onAction?.("FILE_SAVE_AS") },
                { label: "Check In..." },
                { separator: true },
                { label: "Place...", shortcut: "Ctrl+D", action: () => onAction?.("FILE_PLACE") },
                { separator: true },
                { label: "Export...", shortcut: "Ctrl+E", action: () => onAction?.("FILE_EXPORT") },
                { label: "Document Setup...", shortcut: "Alt+Ctrl+P", action: () => onAction?.("FILE_SETUP") },
                { separator: true },
                { label: "Print...", shortcut: "Ctrl+P", action: () => onAction?.("FILE_PRINT") },
            ]
        },
        {
            label: "Edit",
            items: [
                { label: "Undo", shortcut: "Ctrl+Z", action: () => onAction?.("EDIT_UNDO") },
                { label: "Redo", shortcut: "Shift+Ctrl+Z", action: () => onAction?.("EDIT_REDO") },
                { separator: true },
                { label: "Cut", shortcut: "Ctrl+X", action: () => onAction?.("EDIT_CUT") },
                { label: "Copy", shortcut: "Ctrl+C", action: () => onAction?.("EDIT_COPY") },
                { label: "Paste", shortcut: "Ctrl+V", action: () => onAction?.("EDIT_PASTE") },
                { label: "Paste in Place", shortcut: "Alt+Shift+Ctrl+V", action: () => onAction?.("EDIT_PASTE_IN_PLACE") },
                { separator: true },
                { label: "Find/Change...", shortcut: "Ctrl+F", action: () => onAction?.("EDIT_FIND") },
                { label: "Spelling" },
                { separator: true },
                { label: "Preferences", shortcut: "Ctrl+K", action: () => onAction?.("EDIT_PREFERENCES") },
            ]
        },
        {
            label: "Layout",
            items: [
                { label: "Pages" },
                { label: "Margins and Columns..." },
                { label: "Ruler Guides..." },
                { separator: true },
                { label: "Create Guides..." },
                { separator: true },
                { label: "First Page", shortcut: "Shift+Ctrl+PageUp" },
                { label: "Previous Page" },
                { label: "Next Page" },
                { label: "Last Page", shortcut: "Shift+Ctrl+PageDown" },
            ]
        },
        {
            label: "Type",
            items: [
                { label: "Font" },
                { label: "Size" },
                { separator: true },
                { label: "Character", shortcut: "Ctrl+T" },
                { label: "Paragraph", shortcut: "Alt+Ctrl+T" },
                { label: "Tabs", shortcut: "Shift+Ctrl+T" },
                { label: "Glyphs" },
                { separator: true },
                { label: "Create Outlines", shortcut: "Shift+Ctrl+O" },
                { separator: true },
                { label: "Fill with Placeholder Text" },
            ]
        },
        {
            label: "Object",
            items: [
                { label: "Transform" },
                { label: "Arrange" },
                { label: "Select" },
                { separator: true },
                { label: "Group", shortcut: "Ctrl+G" },
                { label: "Ungroup", shortcut: "Shift+Ctrl+G" },
                { label: "Lock", shortcut: "Ctrl+L" },
                { label: "Unlock All on Spread" },
                { separator: true },
                { label: "Text Frame Options...", shortcut: "Ctrl+B" },
            ]
        },
        {
            label: "Table",
            items: [
                { label: "Insert Table..." },
                { label: "Convert Text to Table..." },
                { separator: true },
                { label: "Table Options" },
                { label: "Cell Options" },
            ]
        },
        {
            label: "View",
            items: [
                { label: "Overprint Preview", shortcut: "Alt+Shift+Ctrl+Y" },
                { separator: true },
                { label: "Zoom In", shortcut: "Ctrl++" },
                { label: "Zoom Out", shortcut: "Ctrl+-" },
                { label: "Fit Page in Window", shortcut: "Ctrl+0" },
                { separator: true },
                { label: "Screen Mode" },
                { label: "Grids & Guides" },
            ]
        },
        {
            label: "Window",
            items: [
                { label: "Control", shortcut: "Alt+Ctrl+6" },
                { separator: true },
                { label: "Pages", shortcut: "F12" },
                { label: "Layers", shortcut: "F7" },
                { label: "Links", shortcut: "Shift+Ctrl+D" },
                { separator: true },
                { label: "Type & Tables" },
                { label: "Styles" },
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
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.05 }}
                                className="absolute top-full left-0 mt-0.5 w-64 bg-[#2d2d2d] border border-black shadow-2xl py-1 rounded-sm z-[100]"
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
                                            className="w-full text-left px-3 py-1.5 hover:bg-[#ff6b00] group flex justify-between items-center transition-colors disabled:opacity-30 disabled:hover:bg-transparent"
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
