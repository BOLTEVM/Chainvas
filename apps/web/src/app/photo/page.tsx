"use client";

import dynamic from "next/dynamic";

// fabric.js evaluates a Node/jsdom code path whenever it is loaded without a
// DOM, which crashes server rendering (and the static export) on the native
// `canvas` binding. The editor is a browser-only canvas app, so load it on the
// client and let the page prerender as the shell below.
const PhotoEditor = dynamic(() => import("./PhotoEditor"), {
    ssr: false,
    loading: () => (
        <div className="flex flex-col h-[calc(100vh-5rem)] items-center justify-center bg-[#1e1e1e] text-gray-500 gap-4">
            <div className="w-10 h-10 border-2 border-[#00e0ff] border-t-transparent rounded-full animate-spin" />
            <span className="text-[10px] font-black uppercase tracking-widest">Loading Photo Engine…</span>
        </div>
    ),
});

export default function PhotoEditorPage() {
    return <PhotoEditor />;
}
