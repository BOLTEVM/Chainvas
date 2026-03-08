"use client";

import { useEffect, useState, useRef } from "react";
import * as Y from "yjs";
// @ts-ignore - y-webrtc lacks robust typescript definitions sometimes
import { WebrtcProvider } from "y-webrtc";

// Generate a random color for the user's cursor
const cursorColors = ["#f97316", "#00e0ff", "#a855f7", "#ec4899", "#22c55e", "#eab308"];
const randomColor = cursorColors[Math.floor(Math.random() * cursorColors.length)];

export function useYjs(roomName: string) {
    const [synced, setSynced] = useState(false);
    const [provider, setProvider] = useState<WebrtcProvider | null>(null);

    // We use refs to keep the identical Y.Doc instance across re-renders
    const ydocRef = useRef<Y.Doc | null>(null);
    if (!ydocRef.current) {
        ydocRef.current = new Y.Doc();
    }
    const ydoc = ydocRef.current;

    useEffect(() => {
        // Initialize WebRTC Provider
        // Connects to public signaling servers. In production, you'd host your own.
        const webrtcProvider = new WebrtcProvider(`chainvas-${roomName}`, ydoc, {
            signaling: [
                "wss://signaling.yjs.dev",
                "wss://y-webrtc-signaling-eu.herokuapp.com"
            ]
        });

        // Set awareness (user cursor profile)
        webrtcProvider.awareness.setLocalStateField("user", {
            name: "Anonymous Builder",
            color: randomColor,
        });

        setProvider(webrtcProvider);

        webrtcProvider.on("synced", (isSynced: { synced: boolean }) => {
            setSynced(isSynced.synced);
        });

        return () => {
            webrtcProvider.disconnect();
            webrtcProvider.destroy();
            ydoc.destroy();
        };
    }, [roomName, ydoc]);

    return { ydoc, provider, synced };
}
