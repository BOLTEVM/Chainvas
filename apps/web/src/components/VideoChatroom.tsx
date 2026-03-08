"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Video, VideoOff, Mic, MicOff, Radio, StopCircle, User, Phone, X } from "lucide-react";
import { useWebRTC } from "@/hooks/useWebRTC";
import { useSpacetimeDB } from "@/hooks/useSpacetimeDB";

export function VideoChatroom({ onClose }: { onClose: () => void }) {
    const {
        localStream,
        remoteStream,
        initLocalStream,
        startCall,
        startRecording,
        stopRecording,
        isRecording
    } = useWebRTC();

    const { addVideoAssetBlob, isConnected } = useSpacetimeDB();
    const localVideoRef = useRef<HTMLVideoElement>(null);
    const remoteVideoRef = useRef<HTMLVideoElement>(null);

    const [isMuted, setIsMuted] = useState(false);
    const [isVideoOff, setIsVideoOff] = useState(false);
    const [hasJoined, setHasJoined] = useState(false);

    useEffect(() => {
        if (localVideoRef.current && localStream) {
            localVideoRef.current.srcObject = localStream;
        }
    }, [localStream]);

    useEffect(() => {
        if (remoteVideoRef.current && remoteStream) {
            remoteVideoRef.current.srcObject = remoteStream;
        }
    }, [remoteStream]);

    const handleJoin = async () => {
        const stream = await initLocalStream();
        if (stream) {
            setHasJoined(true);
            // In a real app we might wait for a peer to exist, 
            // but for this demo we'll just enable the "Call" trigger.
        }
    };

    const handleRecordToggle = async () => {
        if (isRecording) {
            const blob = await stopRecording();
            if (blob) {
                const buffer = await blob.arrayBuffer();
                const bytes = new Uint8Array(buffer);
                const filename = `recording_${new Date().toISOString()}.webm`;
                addVideoAssetBlob(bytes, filename);
                console.log("Recording saved to SpacetimeDB Assets");
            }
        } else {
            startRecording();
        }
    };

    const toggleMic = () => {
        if (localStream) {
            localStream.getAudioTracks().forEach(track => track.enabled = !track.enabled);
            setIsMuted(!isMuted);
        }
    };

    const toggleVideo = () => {
        if (localStream) {
            localStream.getVideoTracks().forEach(track => track.enabled = !track.enabled);
            setIsVideoOff(!isVideoOff);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-24 right-6 bottom-24 w-96 glass-panel rounded-3xl border border-white/10 flex flex-col overflow-hidden z-[100] shadow-2xl"
        >
            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/5">
                <div className="flex items-center gap-2">
                    <Radio className={`w-4 h-4 ${hasJoined ? "text-red-500 animate-pulse" : "text-gray-500"}`} />
                    <h3 className="text-white font-semibold text-sm">Collaboration Room</h3>
                </div>
                <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
                    <X className="w-4 h-4 text-gray-400" />
                </button>
            </div>

            <div className="flex-grow p-4 flex flex-col gap-4 overflow-y-auto">
                {/* Remote Video (Primary) */}
                <div className="aspect-video bg-black rounded-2xl relative overflow-hidden border border-white/5 ring-1 ring-white/10">
                    {remoteStream ? (
                        <video ref={remoteVideoRef} autoPlay playsInline className="w-full h-full object-cover" />
                    ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600">
                            <User className="w-12 h-12 mb-2 opacity-20" />
                            <p className="text-xs font-medium">Waiting for peer...</p>
                        </div>
                    )}

                    {/* Local Video (PIP) */}
                    <div className="absolute bottom-3 right-3 w-28 aspect-video bg-[#111] rounded-lg overflow-hidden border border-white/20 shadow-xl">
                        {localStream ? (
                            <video ref={localVideoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <VideoOff className="w-4 h-4 text-gray-800" />
                            </div>
                        )}
                    </div>
                </div>

                {!hasJoined ? (
                    <div className="flex-grow flex flex-col items-center justify-center gap-6 text-center px-4">
                        <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-500/30">
                            <Video className="w-10 h-10 text-purple-400" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-1">Enter Chatroom</h4>
                            <p className="text-xs text-gray-400">Collaborate via live video while you edit. Record the session to use as a clip.</p>
                        </div>
                        <button
                            onClick={handleJoin}
                            className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-purple-500/20"
                        >
                            Start Camera
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4">
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                onClick={startCall}
                                className="flex items-center justify-center gap-2 py-2.5 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 text-green-400 rounded-xl text-xs font-bold transition-colors"
                            >
                                <Phone className="w-4 h-4" /> Call Peer
                            </button>
                            <button
                                onClick={handleRecordToggle}
                                className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all ${isRecording
                                        ? "bg-red-500 text-white animate-pulse"
                                        : "bg-white/5 hover:bg-white/10 border border-white/10 text-white"
                                    }`}
                            >
                                {isRecording ? <StopCircle className="w-4 h-4" /> : <Radio className="w-4 h-4" />}
                                {isRecording ? "Stop Recording" : "Record Chat"}
                            </button>
                        </div>

                        <div className="bg-[#111] rounded-2xl p-4 flex items-center justify-center gap-6 border border-white/5">
                            <button onClick={toggleMic} className={`p-3 rounded-full transition-colors ${isMuted ? "bg-red-500/20 text-red-400" : "bg-white/5 text-gray-400 hover:text-white"}`}>
                                {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                            </button>
                            <button onClick={toggleVideo} className={`p-3 rounded-full transition-colors ${isVideoOff ? "bg-red-500/20 text-red-400" : "bg-white/5 text-gray-400 hover:text-white"}`}>
                                {isVideoOff ? <VideoOff className="w-5 h-5" /> : <Video className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="p-4 bg-purple-600/10 border-t border-purple-500/20">
                <p className="text-[10px] text-purple-300/80 leading-tight">
                    Signaling powered by SpaceTimeDB. Data streams are encrypted and Peer-to-Peer.
                </p>
            </div>
        </motion.div>
    );
}
