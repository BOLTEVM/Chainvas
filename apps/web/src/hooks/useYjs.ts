"use client";

import { useEffect, useState } from "react";
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";

// Generate a random color for the user's cursor
const cursorColors = ["#f97316", "#00e0ff", "#a855f7", "#ec4899", "#22c55e", "#eab308"];
const randomColor = cursorColors[Math.floor(Math.random() * cursorColors.length)];

export function useYjs(roomName: string) {
    const [synced, setSynced] = useState(false);
    const [provider, setProvider] = useState<WebrtcProvider | null>(null);

    // Lazy initial state keeps the identical Y.Doc instance across re-renders.
    const [ydoc] = useState(() => new Y.Doc());

    useEffect(() => {
        // Initialize WebRTC Provider
        // Connects to public signaling servers. In production, you'd host your own.
        // Override with NEXT_PUBLIC_YJS_SIGNALING="wss://a,wss://b" to use your own
        // signaling servers – the public ones are best-effort and often offline.
        const signaling = (process.env.NEXT_PUBLIC_YJS_SIGNALING ?? "wss://signaling.yjs.dev")
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean);
        const webrtcProvider = new WebrtcProvider(`chainvas-${roomName}`, ydoc, { signaling });

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
            // The Y.Doc itself is owned by the component (lazy useState) and is
            // intentionally not destroyed here: React StrictMode re-runs effects,
            // and a destroyed doc would then be handed to the new provider.
        };
    }, [roomName, ydoc]);

    return { ydoc, provider, synced };
}
