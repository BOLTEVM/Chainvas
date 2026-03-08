"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useSpacetimeDB, Signal } from "./useSpacetimeDB";

const ICE_CONFIG = {
    iceServers: [
        { urls: "stun:stun.l.google.com:19302" },
        { urls: "stun:stun1.l.google.com:19302" },
    ],
};

export function useWebRTC() {
    const { identity, sendSignal, onSignal } = useSpacetimeDB();
    const [localStream, setLocalStream] = useState<MediaStream | null>(null);
    const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
    const peerConnection = useRef<RTCPeerConnection | null>(null);
    const [isRecording, setIsRecording] = useState(false);
    const mediaRecorder = useRef<MediaRecorder | null>(null);
    const recordedChunks = useRef<Blob[]>([]);

    const createPeerConnection = useCallback(() => {
        const pc = new RTCPeerConnection(ICE_CONFIG);

        pc.onicecandidate = (event) => {
            if (event.candidate) {
                sendSignal("candidate", JSON.stringify(event.candidate));
            }
        };

        pc.ontrack = (event) => {
            setRemoteStream(event.streams[0]);
        };

        if (localStream) {
            localStream.getTracks().forEach((track) => {
                pc.addTrack(track, localStream);
            });
        }

        peerConnection.current = pc;
        return pc;
    }, [localStream, sendSignal]);

    const startCall = useCallback(async () => {
        const pc = createPeerConnection();
        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);
        sendSignal("offer", JSON.stringify(offer));
    }, [createPeerConnection, sendSignal]);

    useEffect(() => {
        const cleanup = onSignal(async (signal: Signal) => {
            if (signal.senderId === identity?.__identity__) return;

            if (signal.type === "offer") {
                const pc = createPeerConnection();
                await pc.setRemoteDescription(new RTCSessionDescription(JSON.parse(signal.data)));
                const answer = await pc.createAnswer();
                await pc.setLocalDescription(answer);
                sendSignal("answer", JSON.stringify(answer));
            } else if (signal.type === "answer") {
                await peerConnection.current?.setRemoteDescription(
                    new RTCSessionDescription(JSON.parse(signal.data))
                );
            } else if (signal.type === "candidate") {
                try {
                    await peerConnection.current?.addIceCandidate(
                        new RTCIceCandidate(JSON.parse(signal.data))
                    );
                } catch (e) {
                    console.error("Error adding ice candidate", e);
                }
            }
        });

        return cleanup;
    }, [identity, onSignal, createPeerConnection, sendSignal]);

    const initLocalStream = useCallback(async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            setLocalStream(stream);
            return stream;
        } catch (e) {
            console.error("Error accessing media devices.", e);
            return null;
        }
    }, []);

    // Recording Logic
    const startRecording = useCallback(() => {
        if (!remoteStream && !localStream) return;

        // Use a combined stream or prioritize remote
        const streamToRecord = remoteStream || localStream;
        if (!streamToRecord) return;

        recordedChunks.current = [];
        const recorder = new MediaRecorder(streamToRecord, { mimeType: "video/webm" });

        recorder.ondataavailable = (e) => {
            if (e.data.size > 0) recordedChunks.current.push(e.data);
        };

        recorder.onstop = () => {
            setIsRecording(false);
        };

        recorder.start();
        mediaRecorder.current = recorder;
        setIsRecording(true);
    }, [remoteStream, localStream]);

    const stopRecording = useCallback((): Promise<Blob | null> => {
        return new Promise((resolve) => {
            if (!mediaRecorder.current) {
                resolve(null);
                return;
            }

            mediaRecorder.current.onstop = () => {
                const blob = new Blob(recordedChunks.current, { type: "video/webm" });
                setIsRecording(false);
                resolve(blob);
            };

            mediaRecorder.current.stop();
        });
    }, []);

    return {
        localStream,
        remoteStream,
        initLocalStream,
        startCall,
        startRecording,
        stopRecording,
        isRecording
    };
}
