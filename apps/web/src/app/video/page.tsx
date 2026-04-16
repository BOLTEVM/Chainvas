"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useYjs } from "@/hooks/useYjs";
import { useHistory } from "@/hooks/useHistory";

// Modular Components
import ProjectPanel from "@/components/video-editor/ProjectPanel";
import EffectsControl from "@/components/video-editor/EffectsControl";
import CompositionView from "@/components/video-editor/CompositionView";
import AETimeline from "@/components/video-editor/AETimeline";
import VideoMenuBar from "@/components/video-editor/VideoMenuBar";
import VideoModal from "@/components/video-editor/VideoModal";
import VideoEditorModals from "@/components/video-editor/VideoEditorModals";
import MintingModal, { TokenType } from "@/components/profile/MintingModal";
import { ElementKanbanPanel } from "@/components/shared/ElementKanbanPanel";
import { useMinting } from "@/hooks/useMinting";

import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";
import { toPng } from "html-to-image";
import { useToast } from "@/components/shared/ToastProvider";

// Types
import { Layer, PlaybackState } from "./types";

export default function AEVideoEditor() {
    const { synced } = useYjs("bolt-ae-video-v1");

    // Playback Engine Refs
    const requestRef = useRef<number>(null);
    const startTimeRef = useRef<number>(0);
    const ffmpegRef = useRef<FFmpeg | null>(null);

    // Minting State
    const { mintAsset, isMinting } = useMinting();
    const { addToast } = useToast();
    const [isMintModalOpen, setIsMintModalOpen] = useState(false);
    const [isRendering, setIsRendering] = useState(false);
    const [renderProgress, setRenderProgress] = useState(0);

    const loadFFmpeg = async () => {
        if (ffmpegRef.current) return ffmpegRef.current;
        const ffmpeg = new FFmpeg();
        const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";
        await ffmpeg.load({
            coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
            wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, "application/wasm"),
        });
        ffmpegRef.current = ffmpeg;
        return ffmpeg;
    };

    const handleMint = async (type: TokenType, config: { name: string; symbol: string; amount?: number; mediaType?: number }) => {
        if (isRendering) return;
        
        try {
            setIsRendering(true);
            setRenderProgress(0);
            addToast({ type: "info", title: "Initializing Renderer...", message: "Loading FFmpeg WASM and Preparing Assets." });

            const ffmpeg = await loadFFmpeg();
            const fps = playback.fps;
            const totalFrames = Math.floor(playback.duration * fps);
            const compositionEl = document.querySelector('.aspect-video') as HTMLElement;

            if (!compositionEl) throw new Error("Composition view not found");

            // Pause playback
            setPlayback(prev => ({ ...prev, isPlaying: false }));

            // Frame Capture Loop
            for (let i = 0; i < totalFrames; i++) {
                const time = i / fps;
                setPlayback(prev => ({ ...prev, currentTime: time }));
                
                // Allow DOM to update for frame capture
                await new Promise(resolve => setTimeout(resolve, 150)); 

                const dataUrl = await toPng(compositionEl, { pixelRatio: 1 });
                const fileName = `frame${i.toString().padStart(5, '0')}.png`;
                await ffmpeg.writeFile(fileName, await fetchFile(dataUrl));
                
                setRenderProgress(Math.floor(((i + 1) / totalFrames) * 100));
            }

            addToast({ type: "info", title: "Muxing Video...", message: "Compiling frames into high-quality MP4." });

            // Run FFmpeg Muxer
            await ffmpeg.exec([
                '-framerate', `${fps}`,
                '-i', 'frame%05d.png',
                '-c:v', 'libx264',
                '-pix_fmt', 'yuv420p',
                'out.mp4'
            ]);

            const data = await ffmpeg.readFile('out.mp4');
            const blob = new Blob([data as any], { type: 'video/mp4' });
            
            // Clean up FFmpeg FS
            for (let i = 0; i < totalFrames; i++) {
                await ffmpeg.deleteFile(`frame${i.toString().padStart(5, '0')}.png`);
            }

            const success = await mintAsset(type, config, blob);
            if (success) setIsMintModalOpen(false);
        } catch (error: any) {
            console.error("Rendering failed:", error);
            addToast({ type: "error", title: "Rendering Failed", message: error.message });
        } finally {
            setIsRendering(false);
            setRenderProgress(0);
        }
    };

    // UI Visibility State
    const [showProject, setShowProject] = useState(true);
    const [showEffects, setShowEffects] = useState(true);
    const [showTimeline, setShowTimeline] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // State
    const [playback, setPlayback] = useState<PlaybackState>({
        currentTime: 0,
        duration: 10, // 10 seconds default composition
        isPlaying: false,
        fps: 30
    });
    const [zoom, setZoom] = useState(100);
    const [timelineZoom, setTimelineZoom] = useState(100);

    // Modal State
    const [modalConfig, setModalConfig] = useState<{
        isOpen: boolean;
        type: "NEW_PROJECT" | "COMP_SETTINGS" | "PREFERENCES" | "RENDER" | "HELP" | null;
        title: string;
    }>({ isOpen: false, type: null, title: "" });

    const [layers, setLayers, history] = useHistory<Layer[]>([]);
    const [activeLayerId, setActiveLayerId] = useState<string | null>(null);

    // AECore Playback Loop - Optimized for stability
    useEffect(() => {
        if (!playback.isPlaying) {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            return;
        }

        // Calculate offset when starting/resuming
        startTimeRef.current = performance.now() - (playback.currentTime * 1000);

        const animate = () => {
            const now = performance.now();
            const elapsed = (now - startTimeRef.current) / 1000;

            setPlayback(prev => {
                let nextTime = elapsed;
                if (nextTime >= prev.duration) {
                    nextTime = 0;
                    startTimeRef.current = performance.now(); // Loop
                }
                return { ...prev, currentTime: nextTime };
            });

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [playback.isPlaying, playback.duration]);

    const handleTogglePlayback = () => {
        setPlayback(prev => ({ ...prev, isPlaying: !prev.isPlaying }));
    };

    const handleSeek = (time: number) => {
        setPlayback(prev => ({ ...prev, currentTime: time }));
    };

    const defaultStyles = {
        dropShadow: { enabled: false, color: "#000000", blur: 10, distance: 5, angle: 45, opacity: 50 },
        blur: { enabled: false, amount: 0 }
    };

    const handleUpdateLayer = (id: string, updates: Partial<Layer>) => {
        setLayers(prev => prev.map(l => l.id === id ? { ...l, ...updates } : l));
    };

    const handleToggleLayerProp = (id: string, prop: keyof Layer) => {
        setLayers(prev => prev.map(l => {
            if (l.id !== id) return l;
            return { ...l, [prop]: !l[prop] };
        }));
    };

    const handleAddLayer = () => {
        const newLayer: Layer = {
            id: Math.random().toString(36).substr(2, 9),
            name: `Adjustment Layer ${layers.length + 1}`,
            type: "ADJUSTMENT",
            visible: true,
            muted: false,
            locked: false,
            solo: false,
            startTime: playback.currentTime,
            duration: 5,
            opacity: 100,
            position: { x: 50, y: 50 },
            scale: 100,
            rotation: 0,
            color: "#d391fc",
            styles: defaultStyles
        };
        setLayers(prev => [...prev, newLayer]);
        setActiveLayerId(newLayer.id);
    };

    const handleSplitLayer = () => {
        if (!activeLayerId) return;

        const layerToSplit = layers.find(l => l.id === activeLayerId);
        if (!layerToSplit) return;

        const splitTime = playback.currentTime;

        // Check if playhead is within the layer duration
        if (splitTime <= layerToSplit.startTime || splitTime >= layerToSplit.startTime + layerToSplit.duration) {
            // If not in range, maybe the user wants to split audio/video if it's a video layer
            if (layerToSplit.type === "VIDEO" && layerToSplit.url) {
                const audioLayer: Layer = {
                    ...layerToSplit,
                    id: Math.random().toString(36).substr(2, 9),
                    name: `${layerToSplit.name} (Audio)`,
                    type: "AUDIO",
                    color: "#10b981",
                };
                setLayers(prev => [...prev, audioLayer]);
            }
            return;
        }

        // Split the clip into two
        const firstPartDuration = splitTime - layerToSplit.startTime;
        const secondPartDuration = layerToSplit.duration - firstPartDuration;

        const secondPart: Layer = {
            ...layerToSplit,
            id: Math.random().toString(36).substr(2, 9),
            name: `${layerToSplit.name} (Split)`,
            startTime: splitTime,
            duration: secondPartDuration,
        };

        setLayers(prev => {
            const index = prev.findIndex(l => l.id === layerToSplit.id);
            const newLayers = [...prev];
            // Update first part
            newLayers[index] = { ...layerToSplit, duration: firstPartDuration };
            // Add second part
            newLayers.splice(index, 0, secondPart);
            return newLayers;
        });

        setActiveLayerId(secondPart.id);
    };

    const handleFiles = (files: FileList) => {
        Array.from(files).forEach(file => {
            const isVideo = file.type.startsWith("video/");
            const isAudio = file.type.startsWith("audio/");

            if (!isVideo && !isAudio) return;

            const url = URL.createObjectURL(file);
            const newLayer: Layer = {
                id: Math.random().toString(36).substr(2, 9),
                name: file.name,
                type: isVideo ? "VIDEO" : "AUDIO",
                visible: true,
                muted: false,
                locked: false,
                solo: false,
                startTime: playback.currentTime,
                duration: 5, // Default 5s, in a real app we'd get metadata
                opacity: 100,
                position: { x: 50, y: 50 },
                scale: 100,
                rotation: 0,
                color: isVideo ? "#4f46e5" : "#10b981",
                url,
                styles: defaultStyles
            };

            setLayers(prev => [...prev, newLayer]);
        });
    };

    const activeLayer = layers.find(l => l.id === activeLayerId) || null;

    const handleMenuAction = (id: string) => {
        switch (id) {
            case "FILE_NEW":
                setModalConfig({ isOpen: true, type: "NEW_PROJECT", title: "New Project" });
                break;
            case "COMP_SETTINGS":
                setModalConfig({ isOpen: true, type: "COMP_SETTINGS", title: "Composition Settings" });
                break;
            case "EDIT_PREFERENCES":
                setModalConfig({ isOpen: true, type: "PREFERENCES", title: "Preferences" });
                break;
            case "COMP_RENDER":
                setModalConfig({ isOpen: true, type: "RENDER", title: "Render Queue" });
                break;
            case "FILE_SAVE":
                alert("Project structure saved to BOLTChain");
                break;
            case "EDIT_UNDO":
                history.undo();
                break;
            case "EDIT_REDO":
                history.redo();
                break;
            case "EDIT_DUPLICATE":
                if (activeLayerId) {
                    const layer = layers.find(l => l.id === activeLayerId);
                    if (layer) {
                        const newLayer = { ...layer, id: Math.random().toString(36).substr(2, 9), name: `${layer.name} Copy` };
                        setLayers(prev => [...prev, newLayer]);
                        setActiveLayerId(newLayer.id);
                    }
                }
                break;
            case "EDIT_DELETE":
                if (activeLayerId) {
                    setLayers(prev => prev.filter(l => l.id !== activeLayerId));
                    setActiveLayerId(null);
                }
                break;
            case "EDIT_SPLIT":
                handleSplitLayer();
                break;
            case "WINDOW_PROJECT": setShowProject(prev => !prev); break;
            case "WINDOW_EFFECTS": setShowEffects(prev => !prev); break;
            case "WINDOW_TIMELINE": setShowTimeline(prev => !prev); break;
            case "FILE_MINT": setIsMintModalOpen(true); break;
            case "FILE_HELP":
                setModalConfig({ isOpen: true, type: "HELP", title: "Bolt Video Editor - Help" });
                break;
            case "COMP_NEW":
                setModalConfig({ isOpen: true, type: "COMP_SETTINGS", title: "New Composition" });
                break;
            case "EDIT_SELECT_ALL":
                if (layers.length > 0) {
                    setActiveLayerId(layers[layers.length - 1].id);
                }
                break;
            case "EDIT_DESELECT":
                setActiveLayerId(null);
                break;
            case "VIEW_ZOOM_IN": setZoom(prev => Math.min(prev + 10, 400)); break;
            case "VIEW_ZOOM_OUT": setZoom(prev => Math.max(prev - 10, 10)); break;
            case "VIEW_FIT": setZoom(100); break;
            case "FILE_IMPORT":
                const input = document.createElement("input");
                input.type = "file";
                input.multiple = true;
                input.accept = "video/*,audio/*,image/*";
                input.onchange = (e: any) => {
                    if (e.target.files) handleFiles(e.target.files);
                };
                input.click();
                break;
            default:
                console.log("Action not implemented:", id);
        }
    };

    // Keyboard Shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // CTRL/META Shortcuts
            if (e.ctrlKey || e.metaKey) {
                const key = e.key.toLowerCase();

                // Special case for Split (Ctrl+Shift+D)
                if (e.shiftKey && key === "d") {
                    e.preventDefault();
                    handleMenuAction("EDIT_SPLIT");
                    return;
                }

                switch (key) {
                    case "z":
                        e.preventDefault();
                        if (e.shiftKey) history.redo();
                        else history.undo();
                        break;
                    case "y":
                        e.preventDefault();
                        history.redo();
                        break;
                    case "n":
                        e.preventDefault();
                        if (e.altKey) handleMenuAction("FILE_NEW");
                        else handleMenuAction("COMP_NEW");
                        break;
                    case "s":
                        e.preventDefault();
                        handleMenuAction("FILE_SAVE");
                        break;
                    case "d":
                        e.preventDefault();
                        handleMenuAction("EDIT_DUPLICATE");
                        break;
                    case "k":
                        e.preventDefault();
                        handleMenuAction("COMP_SETTINGS");
                        break;
                    case "m":
                        e.preventDefault();
                        handleMenuAction("COMP_RENDER");
                        break;
                    case "i":
                        e.preventDefault();
                        handleMenuAction("FILE_IMPORT");
                        break;
                    case "a":
                        e.preventDefault();
                        handleMenuAction("EDIT_SELECT_ALL");
                        break;
                    case "0":
                        e.preventDefault();
                        handleMenuAction("VIEW_FIT");
                        break;
                    case "=":
                    case "+":
                        e.preventDefault();
                        if (e.shiftKey) setTimelineZoom(prev => Math.min(prev + 10, 400));
                        else handleMenuAction("VIEW_ZOOM_IN");
                        break;
                    case "-":
                        e.preventDefault();
                        if (e.shiftKey) setTimelineZoom(prev => Math.max(prev - 10, 10));
                        else handleMenuAction("VIEW_ZOOM_OUT");
                        break;
                }
            }

            // F1-F12 Keybinds
            switch (e.key) {
                case "F1":
                    e.preventDefault();
                    setModalConfig({ isOpen: true, type: "HELP", title: "Bolt Video Editor - Help" });
                    break;
                case "F3":
                    e.preventDefault();
                    handleMenuAction("EDIT_DUPLICATE");
                    break;
                case "F4":
                    e.preventDefault();
                    handleMenuAction("EDIT_DELETE");
                    break;
                case "F5":
                    e.preventDefault();
                    setModalConfig({ isOpen: true, type: "RENDER", title: "Render Queue" });
                    break;
                case "F6":
                    e.preventDefault();
                    setShowProject(prev => !prev);
                    break;
                case "F7":
                    e.preventDefault();
                    setShowTimeline(prev => !prev);
                    break;
                case "F8":
                    e.preventDefault();
                    setShowEffects(prev => !prev);
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
                case " ":
                    // Space for playback
                    if (document.activeElement?.tagName !== "INPUT") {
                        e.preventDefault();
                        handleTogglePlayback();
                    }
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [history, handleMenuAction, handleTogglePlayback]);

    return (
        <>
            <div className="flex flex-col h-screen bg-[#1e1e1e] overflow-hidden select-none text-white font-sans">
                {/* Top Menu Bar */}
                <div className="h-9 bg-[#2d2d2d] border-b border-black flex items-center justify-between">
                    <div className="flex items-center h-full">
                        <div className="px-3 h-full flex items-center bg-[#d391fc]/10 border-r border-black/20">
                            <div className="w-5 h-5 bg-[#d391fc] flex items-center justify-center rounded-sm">
                                <span className="text-[12px] font-black text-[#1e1e1e]">Ae</span>
                            </div>
                        </div>
                        <VideoMenuBar onAction={handleMenuAction} />
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full border border-white/5">
                            <div className={`w-1.5 h-1.5 rounded-full ${synced ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" : "bg-red-500 animate-pulse"}`} />
                            <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">
                                {synced ? "Live Link Active" : "Searching Peers"}
                            </span>
                        </div>
                        <button onClick={() => setIsMintModalOpen(true)} className="bg-[#00ffa3] hover:bg-[#00ffa3]/90 px-4 py-1 rounded text-[10px] font-black text-black uppercase tracking-widest transition-all shadow-[0_0_10px_rgba(0,255,163,0.2)] ml-2">Mint Asset</button>
                        <button className="bg-white/5 hover:bg-white/10 px-4 py-1 rounded text-[10px] font-black text-white uppercase tracking-widest transition-all border border-white/10 ml-2">Render</button>
                    </div>
                </div>

                {/* Main Application Area */}
                <div className="flex flex-grow overflow-hidden">
                    {/* Left Sidebar (Project & Effects) */}
                    {(showProject || showEffects) && (
                        <div className="w-[320px] flex flex-col border-r border-black shrink-0 z-30">
                            {activeLayer ? (
                                <div className="flex-grow overflow-hidden">
                                    <ElementKanbanPanel 
                                        elementRef={`VIDEO:${activeLayer.id}`}
                                        elementTitle={activeLayer.name}
                                        elementDescription={`Layer: ${activeLayer.type} starting at ${activeLayer.startTime.toFixed(2)}s`}
                                    />
                                </div>
                            ) : (
                                showProject && (
                                    <div className={showEffects ? "h-1/2" : "h-full"}>
                                        <ProjectPanel layers={layers} onFilesDrop={handleFiles} />
                                    </div>
                                )
                            )}
                            {showEffects && (
                                <div className={activeLayer ? "h-1/2 border-t border-black/50" : (showProject ? "h-1/2 border-t border-black/50" : "h-full")}>
                                    <EffectsControl activeLayer={activeLayer} onUpdateLayer={handleUpdateLayer} />
                                </div>
                            )}
                        </div>
                    )}

                    {/* Right Area (Composition & Timeline) */}
                    <div className="flex flex-col flex-grow relative">
                        {/* Upper: Composition Preview */}
                        <div className="flex-grow flex flex-col bg-[#161616] relative">
                            <CompositionView
                                playback={playback}
                                layers={layers}
                                activeLayerId={activeLayerId}
                                onSelectLayer={setActiveLayerId}
                                onTogglePlayback={handleTogglePlayback}
                                onSeek={handleSeek}
                                onFilesDrop={handleFiles}
                                zoom={zoom}
                            />
                        </div>

                        {/* Lower: Professional Timeline */}
                        {showTimeline && (
                            <div className="h-[400px] border-t border-black z-20">
                                <AETimeline
                                    playback={playback}
                                    layers={layers}
                                    activeLayerId={activeLayerId}
                                    onSelectLayer={setActiveLayerId}
                                    onToggleLayerProp={handleToggleLayerProp}
                                    onAddLayer={handleAddLayer}
                                    onSplit={handleSplitLayer}
                                    onSeek={handleSeek}
                                    onUpdateLayer={handleUpdateLayer}
                                    zoom={timelineZoom}
                                />
                            </div>
                        )}
                    </div>
                </div>

            </div>

            {/* Dynamic Modals */}
            <VideoEditorModals 
                modalConfig={modalConfig}
                onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
            />

            <MintingModal
                isOpen={isMintModalOpen}
                onClose={() => !isMinting && setIsMintModalOpen(false)}
                asset={{ id: "video-project-1", name: "Video Composition", previewUrl: "" }}
                onMint={handleMint}
                isMinting={isMinting}
                defaultMediaType={2}
            />

            {isRendering && (
                <div className="absolute inset-0 bg-black/80 z-[100] flex flex-col items-center justify-center backdrop-blur-sm">
                    <div className="w-16 h-16 border-4 border-[#00ffa3] border-t-transparent rounded-full animate-spin mb-6" />
                    <h2 className="text-2xl font-black uppercase tracking-widest italic mb-2">Rendering Project</h2>
                    <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                        <div className="h-full bg-[#00ffa3] transition-all duration-300" style={{ width: `${renderProgress}%` }} />
                    </div>
                    <span className="text-gray-400 text-xs font-mono">{renderProgress}% Complete</span>
                    <p className="mt-8 text-[10px] text-gray-500 uppercase tracking-widest animate-pulse">Encoding high-fidelity MP1 via BOLT-AE Renderer</p>
                </div>
            )}
        </>
    );
}
