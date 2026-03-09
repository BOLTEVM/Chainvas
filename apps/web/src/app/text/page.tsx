"use client";

import { useEffect, useRef, useState } from "react";
import { useYjs } from "@/hooks/useYjs";

import TextFrameEditor from "@/components/text-editor/TextFrameEditor";
import { undo, redo } from "y-prosemirror";

// Modular Components
import InDesignToolbar from "@/components/text-editor/InDesignToolbar";
import TypographyOptionsBar from "@/components/text-editor/TypographyOptionsBar";
import CharacterPanel from "@/components/text-editor/CharacterPanel";
import ParagraphPanel from "@/components/text-editor/ParagraphPanel";
import PagesPanel from "@/components/text-editor/PagesPanel";
import TextMenuBar from "@/components/text-editor/TextMenuBar";
import TextModal from "@/components/text-editor/TextModal";

// Types
import { TextToolType, TypographyOptions, PageData, CanvasObject } from "./types";
import MintingModal, { TokenType } from "@/components/profile/MintingModal";
import { useMinting } from "@/hooks/useMinting";

import "./prosemirror.css";

export default function InDesignTextEditor() {
    const [objects, setObjects] = useState<CanvasObject[]>([]);
    const pageRef = useRef<HTMLDivElement>(null);
    const { ydoc, provider, synced } = useYjs("bolt-indesign-text-v1");

    // UI State
    const [activeTool, setActiveTool] = useState<TextToolType>("TEXT");
    const [zoom, setZoom] = useState(100);
    const [typography, setTypography] = useState<TypographyOptions>({
        fontFamily: "Inter",
        fontSize: 12,
        lineHeight: 1.5,
        textAlign: "left",
        bold: false,
        italic: false,
        fontWeight: "normal", // Added back from original typographyOptions
        letterSpacing: 0, // Added back from original typographyOptions
        color: "#ffffff" // Added back from original typographyOptions
    });

    // UI Visibility State
    const [showToolbar, setShowToolbar] = useState(true);
    const [showOptions, setShowOptions] = useState(true);
    const [showSidebar, setShowSidebar] = useState(true);

    const [modalConfig, setModalConfig] = useState<{
        isOpen: boolean;
        type: "NEW" | "PREFERENCES" | "SETUP" | "HELP" | null;
        title: string;
    }>({ isOpen: false, type: null, title: "" });

    const [pages] = useState<PageData[]>([
        { id: "1", number: 1 },
        { id: "2", number: 2 }
    ]);
    const [activePageId, setActivePageId] = useState("1");

    // Minting State
    const { mintAsset, isMinting } = useMinting();
    const [isMintModalOpen, setIsMintModalOpen] = useState(false);

    const handleMint = async (type: TokenType, config: { name: string; symbol: string; amount?: number }) => {
        const dummyUri = "ipfs://text-document-data";
        const success = await mintAsset(type, config, dummyUri);
        if (success) setIsMintModalOpen(false);
    };

    // The global ProseMirror Editor has been replaced with modular floating TextFrames
    useEffect(() => {
        // Keeps connection alive context
    }, [provider, ydoc]);

    const handleWorkspaceClick = (e: React.MouseEvent) => {
        if (activeTool === "ZOOM") {
            if (e.altKey) {
                setZoom(prev => Math.max(prev - 25, 25));
            } else {
                setZoom(prev => Math.min(prev + 25, 400));
            }
        }
    };

    const [isPanning, setIsPanning] = useState(false);
    const [isDrawing, setIsDrawing] = useState(false);
    const [drawStart, setDrawStart] = useState({ x: 0, y: 0 });
    const [drawCurrent, setDrawCurrent] = useState({ x: 0, y: 0 });

    const workspaceRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (activeTool === "SELECT" || activeTool === "DIRECT_SELECT") {
            if (e.target === workspaceRef.current || (e.target as HTMLElement).closest(".workspace-pattern") === e.target) {
                setObjects(prev => prev.map(o => ({ ...o, isSelected: false })));
            }
        } else if (activeTool === "HAND") {
            setIsPanning(true);
        } else if (["TEXT", "TEXT_ON_PATH", "RECTANGLE", "RECTANGLE_FRAME", "ELLIPSE", "ELLIPSE_FRAME", "LINE", "POLYGON", "POLYGON_FRAME"].includes(activeTool)) {
            setIsDrawing(true);
            const pageRect = pageRef.current?.getBoundingClientRect();
            if (pageRect) {
                const zoomFactor = zoom / 100;
                setDrawStart({
                    x: (e.clientX - pageRect.left) / zoomFactor,
                    y: (e.clientY - pageRect.top) / zoomFactor
                });
                setDrawCurrent({
                    x: (e.clientX - pageRect.left) / zoomFactor,
                    y: (e.clientY - pageRect.top) / zoomFactor
                });
            }
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isPanning && workspaceRef.current) {
            workspaceRef.current.scrollLeft -= e.movementX;
            workspaceRef.current.scrollTop -= e.movementY;
        } else if (isDrawing && pageRef.current) {
            const pageRect = pageRef.current.getBoundingClientRect();
            const zoomFactor = zoom / 100;
            setDrawCurrent({
                x: (e.clientX - pageRect.left) / zoomFactor,
                y: (e.clientY - pageRect.top) / zoomFactor
            });
        }
    };

    const handleMouseUp = () => {
        setIsPanning(false);
        if (isDrawing) {
            setIsDrawing(false);

            const x = Math.min(drawStart.x, drawCurrent.x);
            const y = Math.min(drawStart.y, drawCurrent.y);
            let width = Math.abs(drawCurrent.x - drawStart.x);
            let height = Math.abs(drawCurrent.y - drawStart.y);

            // Minimum size constraint so it doesn't create tiny boxes from accidental clicks
            if (width < 20) width = 100;
            if (height < 20) height = 50;

            const newObj: CanvasObject = {
                id: Math.random().toString(36).substring(2, 11),
                type: activeTool as TextToolType,
                x,
                y,
                width,
                height,
                pageId: activePageId,
                contentId: `text-fragment-${Math.random().toString(36).substring(2, 11)}`,
                isSelected: true,
            };

            setObjects(prev => [...prev.map(o => ({ ...o, isSelected: false } as CanvasObject)), newObj]);

            if (activeTool === "TEXT" || activeTool === "RECTANGLE_FRAME" || activeTool === "RECTANGLE" || activeTool === "ELLIPSE" || activeTool === "ELLIPSE_FRAME") {
                setActiveTool("SELECT"); // Switch to selection tool after drawing
            }
        }
    };

    const handleOptionsChange = (newOptions: Partial<TypographyOptions>) => {
        setTypography((prev: TypographyOptions) => ({ ...prev, ...newOptions }));
        // In a complete implementation, this would also apply to the currently selected objects
    };

    const handleMenuAction = (id: string) => {
        switch (id) {
            case "FILE_NEW":
                setModalConfig({ isOpen: true, type: "NEW", title: "New Document" });
                break;
            case "EDIT_PREFERENCES":
                setModalConfig({ isOpen: true, type: "PREFERENCES", title: "Preferences" });
                break;
            case "FILE_SETUP":
                setModalConfig({ isOpen: true, type: "SETUP", title: "Document Setup" });
                break;
            case "FILE_SAVE":
                alert("Document layout saved to BOLTChain");
                break;
            case "EDIT_UNDO":
                // In a full implementation, this would trigger ProseMirror or Yjs undo
                break;
            case "EDIT_REDO":
                break;
            case "EDIT_DUPLICATE":
                const selectedObj = objects.find(o => o.isSelected);
                if (selectedObj) {
                    const newObj: CanvasObject = {
                        ...selectedObj,
                        id: Math.random().toString(36).substring(2, 11),
                        contentId: `text-fragment-${Math.random().toString(36).substring(2, 11)}`,
                        x: selectedObj.x + 20,
                        y: selectedObj.y + 20,
                        isSelected: true
                    };
                    setObjects(prev => [...prev.map(o => ({ ...o, isSelected: false })), newObj]);
                }
                break;
            case "EDIT_DELETE":
                setObjects(prev => prev.filter(o => !o.isSelected));
                break;
            case "WINDOW_TOOLBAR": setShowToolbar(prev => !prev); break;
            case "WINDOW_OPTIONS": setShowOptions(prev => !prev); break;
            case "WINDOW_SIDEBAR": setShowSidebar(prev => !prev); break;
            case "FILE_MINT": setIsMintModalOpen(true); break;
            case "FILE_HELP":
                setModalConfig({ isOpen: true, type: "HELP", title: "Bolt InDesign Editor - Help" });
                break;
            default:
                console.log("Action not implemented:", id);
        }
    };

    // Keyboard Shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Undo/Redo (Generic)
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") {
                if (e.shiftKey) handleMenuAction("EDIT_REDO");
                else handleMenuAction("EDIT_UNDO");
                e.preventDefault();
            }

            // F1-F12 Keybinds
            switch (e.key) {
                case "F1":
                    e.preventDefault();
                    setModalConfig({ isOpen: true, type: "HELP", title: "Bolt InDesign Editor - Help" });
                    break;
                case "F3":
                    e.preventDefault();
                    handleMenuAction("EDIT_DUPLICATE");
                    break;
                case "F4":
                    e.preventDefault();
                    handleMenuAction("EDIT_DELETE");
                    break;
                case "F6":
                    e.preventDefault();
                    setShowToolbar(prev => !prev);
                    break;
                case "F7":
                    e.preventDefault();
                    setShowSidebar(prev => !prev);
                    break;
                case "F8":
                    e.preventDefault();
                    setShowOptions(prev => !prev);
                    break;
                case "F11":
                    e.preventDefault();
                    if (typeof document !== 'undefined') {
                        if (!document.fullscreenElement) {
                            document.documentElement.requestFullscreen().catch(() => { });
                        } else if (document.exitFullscreen) {
                            document.exitFullscreen().catch(() => { });
                        }
                    }
                    break;
                case "F12":
                    e.preventDefault();
                    setIsMintModalOpen(true);
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [objects, handleMenuAction]);

    return (
        <>
            <div className={`flex flex-col h-screen bg-[#1e1e1e] overflow-hidden select-none tool-${activeTool.toLowerCase().replace("_", "-")}`}>
                {/* Top Bar / Menu */}
                <div className="h-9 bg-[#2d2d2d] flex items-center justify-between border-b border-[#1e1e1e]">
                    <div className="flex items-center h-full">
                        <div className="px-3 h-full flex items-center bg-[#ff6b00]/10 border-r border-black/20">
                            <div className="w-6 h-6 bg-[#ff6b00] flex items-center justify-center rounded-sm">
                                <span className="text-[12px] font-black text-white italic">Id</span>
                            </div>
                        </div>
                        <TextMenuBar onAction={handleMenuAction} />
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 bg-[#3c3c3c] px-2 py-0.5 rounded text-[10px] text-gray-400 border border-white/5 font-bold">
                            <div className={`w-1.5 h-1.5 rounded-full ${synced ? "bg-green-500" : "bg-red-500 animate-pulse"}`} />
                            {synced ? "Connected" : "Offline"}
                        </div>
                        <button onClick={() => setIsMintModalOpen(true)} className="bg-[#00ffa3] hover:bg-[#00ffa3]/90 px-3 py-1 rounded text-[11px] font-bold text-black transition-colors shadow-[0_0_10px_rgba(0,255,163,0.2)] ml-2">Mint Asset</button>
                        <button className="bg-[#ff6b00] px-3 py-1 rounded text-[11px] font-bold text-white hover:bg-[#ff8533] transition-colors border border-white/10 ml-2">Publish Spreads</button>
                    </div>
                </div>

                {/* Main Application Area */}
                <div className="flex flex-grow overflow-hidden relative">
                    {/* 1. Left Toolbar */}
                    {showToolbar && <InDesignToolbar activeTool={activeTool} onToolSelect={setActiveTool} />}

                    {/* 2. Center Column (Options Bar + Workspace) */}
                    <div className="flex flex-col flex-grow bg-[#1e1e1e] relative overflow-hidden">
                        {showOptions && <TypographyOptionsBar options={typography} onOptionsChange={handleOptionsChange} />}

                        {/* Workspace Wrapper */}
                        <div
                            ref={workspaceRef}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                            onClick={handleWorkspaceClick}
                            className="flex-grow relative bg-[#1e1e1e] overflow-auto flex items-center justify-center p-20 custom-scrollbar border-r border-[#1e1e1e] workspace-pattern"
                        >
                            {/* Artboard Page */}
                            <div
                                ref={pageRef}
                                className="bg-white shadow-[0_0_100px_rgba(0,0,0,0.5)] relative transition-transform duration-200"
                                style={{
                                    width: "210mm",
                                    height: "297mm",
                                    transform: `scale(${zoom / 100})`,
                                    transformOrigin: "center top"
                                }}
                            >
                                {/* Floating Artboard Elements */}
                                {objects
                                    .filter((obj) => obj.pageId === activePageId || !obj.pageId)
                                    .map((obj) => (
                                        <TextFrameEditor
                                            key={obj.id}
                                            object={obj}
                                            typography={typography}
                                            ydoc={ydoc}
                                            provider={provider}
                                            isActiveTool={["TEXT", "TEXT_ON_PATH", "SELECT", "DIRECT_SELECT"].includes(activeTool)}
                                            onSelect={() => {
                                                if (["SELECT", "DIRECT_SELECT"].includes(activeTool)) {
                                                    setObjects((prev) =>
                                                        prev.map((o) => ({ ...o, isSelected: o.id === obj.id }))
                                                    );
                                                }
                                            }}
                                        />
                                    ))}

                                {/* Drawing Preview Overlay */}
                                {isDrawing && (
                                    <div
                                        className="absolute border-2 border-[#ff6b00] border-dashed pointer-events-none z-[100] bg-[#ff6b00]/5"
                                        style={{
                                            left: Math.min(drawStart.x, drawCurrent.x),
                                            top: Math.min(drawStart.y, drawCurrent.y),
                                            width: Math.abs(drawCurrent.x - drawStart.x),
                                            height: Math.abs(drawCurrent.y - drawStart.y),
                                            borderRadius: (activeTool === "ELLIPSE" || activeTool === "ELLIPSE_FRAME") ? "50%" : "0"
                                        }}
                                    />
                                )}

                                {/* Page Rulers Placeholder */}
                                <div className="absolute -left-10 top-0 h-full w-px bg-white/5 border-l border-dashed border-gray-400 opacity-20 pointer-events-none" />
                                <div className="absolute top-0 -left-10 w-10 text-[8px] text-gray-400 font-mono flex flex-col items-end gap-20 pr-1 pointer-events-none">
                                    <span>0</span><span>100</span><span>200</span>
                                </div>
                            </div>
                        </div>

                        {/* Zoom / Info Footer */}
                        <div className="h-6 bg-[#2d2d2d] border-t border-[#1e1e1e] flex items-center justify-between px-3 text-[9px] text-gray-500 font-bold uppercase tracking-widest">
                            <div className="flex items-center gap-4">
                                <span>Page 1 of {pages.length}</span>
                                <span>A4 (210 x 297 mm)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>Zoom:</span>
                                <input
                                    type="range" min="25" max="200" step="5"
                                    value={zoom}
                                    onChange={(e) => setZoom(parseInt(e.target.value))}
                                    className="w-24 accent-[#ff6b00]"
                                />
                                <span className="w-6 text-right">{zoom}%</span>
                            </div>
                        </div>
                    </div>

                    {/* 3. Right Sidebar Panels */}
                    {showSidebar && (
                        <div className="w-[300px] bg-[#2d2d2d] border-l border-black flex flex-col z-30">
                            <div className="flex-grow flex flex-col">
                                <div className="flex-grow min-h-[50%]">
                                    <CharacterPanel options={typography} onOptionsChange={handleOptionsChange} />
                                </div>
                                <div className="h-[200px] border-t border-black/50">
                                    <ParagraphPanel options={typography} onOptionsChange={handleOptionsChange} />
                                </div>
                                <div className="h-[250px] border-t border-black/50">
                                    <PagesPanel
                                        pages={pages}
                                        activePageId={activePageId}
                                        onPageSelect={setActivePageId}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>

            {/* Dynamic Modals */}
            <TextModal
                isOpen={modalConfig.isOpen}
                onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
                title={modalConfig.title}
                footer={
                    <div className="flex gap-2">
                        <button
                            onClick={() => setModalConfig({ ...modalConfig, isOpen: false })}
                            className="px-4 py-1.5 text-xs font-bold text-gray-400 hover:text-white transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => setModalConfig({ ...modalConfig, isOpen: false })}
                            className="bg-[#ff6b00] px-6 py-1.5 rounded-sm text-xs font-bold text-white hover:bg-[#ff8533] shadow-lg"
                        >
                            OK
                        </button>
                    </div>
                }
            >
                {modalConfig.type === "NEW" && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#ff6b00]">Page Size</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-gray-500">Width</span>
                                        <span className="font-mono text-white">210 mm</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-gray-500">Height</span>
                                        <span className="font-mono text-white">297 mm</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-gray-500">Orientation</span>
                                        <span className="text-white">Portrait</span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#ff6b00]">Columns</h4>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <label className="text-xs text-gray-500 w-12">Count</label>
                                        <input type="number" defaultValue={2} className="bg-[#1e1e1e] border border-white/5 rounded px-2 py-1 text-white w-full outline-none focus:border-[#ff6b00]" />
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <label className="text-xs text-gray-500 w-12">Gutter</label>
                                        <input type="text" defaultValue="4 mm" className="bg-[#1e1e1e] border border-white/5 rounded px-2 py-1 text-white w-full outline-none focus:border-[#ff6b00]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {modalConfig.type === "PREFERENCES" && (
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h4 className="text-[10px] uppercase tracking-widest font-black text-[#ff6b00]">Units & Increments</h4>
                            <div className="flex items-center justify-between p-3 bg-[#1e1e1e]/50 border border-white/5 rounded hover:bg-white/5 transition-colors group">
                                <span className="text-xs">Ruler Units</span>
                                <span className="text-xs text-white">Millimeters</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h4 className="text-[10px] uppercase tracking-widest font-black text-[#ff6b00]">Type Controls</h4>
                            <div className="flex items-center justify-between p-3 bg-[#1e1e1e]/50 border border-white/5 rounded hover:bg-white/5 transition-colors">
                                <span className="text-xs">Optical Kerning</span>
                                <div className="w-8 h-4 bg-[#ff6b00] rounded-full relative">
                                    <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full transition-all" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {modalConfig.type === "HELP" && (
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-[11px]">
                            <div className="flex justify-between border-b border-white/5 py-1">
                                <span className="text-[#ff6b00] font-bold">F1</span>
                                <span className="text-gray-300">Help / Keybinds</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 py-1">
                                <span className="text-[#ff6b00] font-bold">F7</span>
                                <span className="text-gray-300">Toggle Sidebar Panels</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 py-1">
                                <span className="text-[#ff6b00] font-bold">F3</span>
                                <span className="text-gray-300">Duplicate Object</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 py-1">
                                <span className="text-[#ff6b00] font-bold">F8</span>
                                <span className="text-gray-300">Toggle Options Bar</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 py-1">
                                <span className="text-[#ff6b00] font-bold">F4</span>
                                <span className="text-gray-300">Delete Object</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 py-1">
                                <span className="text-[#ff6b00] font-bold">F11</span>
                                <span className="text-gray-300">Fullscreen</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 py-1">
                                <span className="text-[#ff6b00] font-bold">F6</span>
                                <span className="text-gray-300">Toggle Toolbar</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 py-1">
                                <span className="text-[#ff6b00] font-bold">F12</span>
                                <span className="text-gray-300">Mint Asset (On-Chain)</span>
                            </div>
                        </div>
                        <div className="p-3 bg-[#ff6b00]/10 border border-[#ff6b00]/20 rounded-md text-[10px] text-[#ff6b00] font-medium leading-relaxed">
                            Pro Tip: Use F6 to quickly toggle the toolbar for a focused layout design workspace.
                        </div>
                    </div>
                )}
            </TextModal>
            <MintingModal
                isOpen={isMintModalOpen}
                onClose={() => !isMinting && setIsMintModalOpen(false)}
                asset={{ id: ydoc.guid || "text-doc", name: "Text Document", previewUrl: "" }}
                onMint={handleMint}
                isMinting={isMinting}
            />
        </>
    );
}
