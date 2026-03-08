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
import MintingModal, { TokenType } from "@/components/profile/MintingModal";
import { useMinting } from "@/hooks/useMinting";

// Types
import { Layer, PlaybackState } from "./types";

export default function AEVideoEditor() {
    const { synced } = useYjs("bolt-ae-video-v1");

    // Playback Engine Refs
    const requestRef = useRef<number>(null);
    const lastTimeRef = useRef<number>(null);

    // Minting State
    const { mintAsset, isMinting } = useMinting();
    const [isMintModalOpen, setIsMintModalOpen] = useState(false);

    const handleMint = async (type: TokenType, config: { name: string; symbol: string; amount?: number }) => {
        const dummyUri = "ipfs://video-project-data";
        const success = await mintAsset(type, config, dummyUri);
        if (success) setIsMintModalOpen(false);
    };

    // State
    const [playback, setPlayback] = useState<PlaybackState>({
        currentTime: 0,
        duration: 10, // 30 seconds default composition
        isPlaying: false,
        fps: 30
    });

    // Modal State
    const [modalConfig, setModalConfig] = useState<{
        isOpen: boolean;
        type: "NEW_PROJECT" | "COMP_SETTINGS" | "PREFERENCES" | "RENDER" | null;
        title: string;
    }>({ isOpen: false, type: null, title: "" });

    const [layers, setLayers, history] = useHistory<Layer[]>([]);
    const [activeLayerId, setActiveLayerId] = useState<string | null>(null);

    // AECore Playback Loop
    useEffect(() => {
        const animate = (time: number) => {
            if (lastTimeRef.current !== null && playback.isPlaying) {
                const deltaTime = (time - lastTimeRef.current) / 1000;
                setPlayback(prev => {
                    let nextTime = prev.currentTime + deltaTime;
                    if (nextTime >= prev.duration) {
                        nextTime = 0; // Loop or stop
                    }
                    return { ...prev, currentTime: nextTime };
                });
            }
            lastTimeRef.current = time;
            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [playback.isPlaying]);

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
            default:
                console.log("Action not implemented:", id);
        }
    };

    // Keyboard Shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") {
                if (e.shiftKey) {
                    history.redo();
                } else {
                    history.undo();
                }
                e.preventDefault();
            } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "y") {
                history.redo();
                e.preventDefault();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [history]);

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
                    <div className="w-[320px] flex flex-col border-r border-black shrink-0">
                        <div className="h-1/2">
                            <ProjectPanel layers={layers} onFilesDrop={handleFiles} />
                        </div>
                        <div className="h-1/2">
                            <EffectsControl activeLayer={activeLayer} onUpdateLayer={handleUpdateLayer} />
                        </div>
                    </div>

                    {/* Right Area (Composition & Timeline) */}
                    <div className="flex flex-col flex-grow">
                        {/* Upper: Composition Preview */}
                        <div className="flex-grow flex flex-col bg-[#161616]">
                            <CompositionView
                                playback={playback}
                                layers={layers}
                                activeLayerId={activeLayerId}
                                onSelectLayer={setActiveLayerId}
                                onTogglePlayback={handleTogglePlayback}
                                onSeek={handleSeek}
                                onFilesDrop={handleFiles}
                            />
                        </div>

                        {/* Lower: Professional Timeline */}
                        <AETimeline
                            playback={playback}
                            layers={layers}
                            activeLayerId={activeLayerId}
                            onSelectLayer={setActiveLayerId}
                            onToggleLayerProp={handleToggleLayerProp}
                            onAddLayer={handleAddLayer}
                            onSplit={handleSplitLayer}
                            onSeek={handleSeek}
                        />
                    </div>
                </div>

            </div>

            {/* Dynamic Modals */}
            <VideoModal
                isOpen={modalConfig.isOpen}
                onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
                title={modalConfig.title}
                footer={
                    <div className="flex gap-3">
                        <button
                            onClick={() => setModalConfig({ ...modalConfig, isOpen: false })}
                            className="px-4 py-1.5 text-xs font-bold text-gray-500 hover:text-white transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => setModalConfig({ ...modalConfig, isOpen: false })}
                            className="bg-[#d391fc] px-6 py-1.5 rounded-sm text-xs font-bold text-[#1e1e1e] hover:bg-[#d391fc]/90 shadow-[0_0_20px_rgba(211,145,252,0.3)]"
                        >
                            OK
                        </button>
                    </div>
                }
            >
                {modalConfig.type === "COMP_SETTINGS" && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Composition Name</label>
                                <input type="text" defaultValue="Comp 1" className="w-full bg-[#1a1a1a] border border-white/5 rounded px-3 py-2 text-white italic outline-none focus:border-[#d391fc]/50" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Frame Rate</label>
                                <select className="w-full bg-[#1a1a1a] border border-white/5 rounded px-3 py-2 text-white outline-none focus:border-[#d391fc]/50">
                                    <option>24 fps</option>
                                    <option selected>30 fps</option>
                                    <option>60 fps</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Resolution</label>
                                <div className="flex items-center gap-2">
                                    <input type="number" defaultValue={1920} className="w-full bg-[#1a1a1a] border border-white/5 rounded px-2 py-1.5 text-white outline-none" />
                                    <span className="text-gray-600">x</span>
                                    <input type="number" defaultValue={1080} className="w-full bg-[#1a1a1a] border border-white/5 rounded px-2 py-1.5 text-white outline-none" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Duration</label>
                                <input type="text" defaultValue="0:00:10:00" className="w-full bg-[#1a1a1a] border border-white/5 rounded px-3 py-2 text-[#d391fc] font-mono outline-none" />
                            </div>
                        </div>
                    </div>
                )}

                {modalConfig.type === "PREFERENCES" && (
                    <div className="space-y-8">
                        <div className="space-y-3">
                            <h4 className="text-[10px] uppercase tracking-widest font-black text-[#d391fc]">Previews</h4>
                            <div className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/5">
                                <span className="text-xs">Adaptive Resolution</span>
                                <div className="w-8 h-4 bg-[#d391fc] rounded-full relative">
                                    <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-[#1e1e1e] rounded-full" />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-[10px] uppercase tracking-widest font-black text-[#d391fc]">Media & Disk Cache</h4>
                            <div className="p-4 bg-black/40 rounded border border-white/5 space-y-2">
                                <div className="flex justify-between text-[11px]">
                                    <span className="text-gray-500">Maximum Cache Size:</span>
                                    <span className="text-white">46.0 GB</span>
                                </div>
                                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#d391fc] w-[65%]" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {modalConfig.type === "RENDER" && (
                    <div className="text-center py-8 space-y-4">
                        <div className="w-16 h-16 bg-[#d391fc]/10 rounded-full flex items-center justify-center mx-auto border border-[#d391fc]/20">
                            <div className="w-8 h-8 border-2 border-[#d391fc] border-t-transparent rounded-full animate-spin" />
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-lg font-bold text-white italic">Preparing Render Engine</h4>
                            <p className="text-gray-500 text-xs">Allocating virtual memory for BOLTChain sequence export...</p>
                        </div>
                    </div>
                )}
            </VideoModal>

            <MintingModal
                isOpen={isMintModalOpen}
                onClose={() => !isMinting && setIsMintModalOpen(false)}
                asset={{ id: "video-project-1", name: "Video Composition", previewUrl: "" }}
                onMint={handleMint}
                isMinting={isMinting}
            />
        </>
    );
}
