module.exports = [
"[project]/Documents/BOLTChainvas/apps/web/src/hooks/useYjs.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useYjs",
    ()=>useYjs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/yjs/dist/yjs.mjs [app-ssr] (ecmascript)");
// @ts-ignore - y-webrtc lacks robust typescript definitions sometimes
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$y$2d$webrtc$2f$src$2f$y$2d$webrtc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/y-webrtc/src/y-webrtc.js [app-ssr] (ecmascript)");
"use client";
;
;
;
// Generate a random color for the user's cursor
const cursorColors = [
    "#f97316",
    "#00e0ff",
    "#a855f7",
    "#ec4899",
    "#22c55e",
    "#eab308"
];
const randomColor = cursorColors[Math.floor(Math.random() * cursorColors.length)];
function useYjs(roomName) {
    const [synced, setSynced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [provider, setProvider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // We use refs to keep the identical Y.Doc instance across re-renders
    const ydocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (!ydocRef.current) {
        ydocRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Doc"]();
    }
    const ydoc = ydocRef.current;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Initialize WebRTC Provider
        // Connects to public signaling servers. In production, you'd host your own.
        const webrtcProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$y$2d$webrtc$2f$src$2f$y$2d$webrtc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebrtcProvider"](`chainvas-${roomName}`, ydoc, {
            signaling: [
                "wss://signaling.yjs.dev",
                "wss://y-webrtc-signaling-eu.herokuapp.com"
            ]
        });
        // Set awareness (user cursor profile)
        webrtcProvider.awareness.setLocalStateField("user", {
            name: "Anonymous Builder",
            color: randomColor
        });
        setProvider(webrtcProvider);
        webrtcProvider.on("synced", (isSynced)=>{
            setSynced(isSynced.synced);
        });
        return ()=>{
            webrtcProvider.disconnect();
            webrtcProvider.destroy();
            ydoc.destroy();
        };
    }, [
        roomName,
        ydoc
    ]);
    return {
        ydoc,
        provider,
        synced
    };
}
}),
"[project]/Documents/BOLTChainvas/apps/web/src/hooks/useHistory.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHistory",
    ()=>useHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useHistory(initialState) {
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        initialState
    ]);
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>history[index], [
        history,
        index
    ]);
    const setState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((nextState)=>{
        setHistory((prevHistory)=>{
            const current = prevHistory[index];
            const next = typeof nextState === "function" ? nextState(current) : nextState;
            // If the state hasn't changed, don't add to history
            if (JSON.stringify(next) === JSON.stringify(current)) {
                return prevHistory;
            }
            const newHistory = prevHistory.slice(0, index + 1);
            newHistory.push(next);
            // Limit history size to 50
            if (newHistory.length > 50) {
                newHistory.shift();
                setIndex(newHistory.length - 1);
            } else {
                setIndex(newHistory.length - 1);
            }
            return newHistory;
        });
    }, [
        index
    ]);
    const undo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (index > 0) {
            setIndex((prev)=>prev - 1);
        }
    }, [
        index
    ]);
    const redo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (index < history.length - 1) {
            setIndex((prev)=>prev + 1);
        }
    }, [
        index,
        history.length
    ]);
    const canUndo = index > 0;
    const canRedo = index < history.length - 1;
    return [
        state,
        setState,
        {
            undo,
            redo,
            canUndo,
            canRedo
        }
    ];
}
}),
"[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/folder.js [app-ssr] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/film.js [app-ssr] (ecmascript) <export default as Film>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/music.js [app-ssr] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function ProjectPanel({ layers, onFilesDrop }) {
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleDragOver = (e)=>{
        e.preventDefault();
        setIsDragging(true);
    };
    const handleDragLeave = ()=>{
        setIsDragging(false);
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files.length > 0) {
            onFilesDrop(e.dataTransfer.files);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-col h-full bg-[#252526] border-r border-black overflow-hidden transition-colors ${isDragging ? "bg-[#d391fc]/10" : ""}`,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-9 bg-[#3c3c3c] flex items-center px-3 border-b border-black justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                className: "w-3.5 h-3.5 text-[#00e0ff]"
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                                lineNumber: 43,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-black text-gray-300 uppercase tracking-widest",
                                children: "Project"
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: "w-3.5 h-3.5 text-gray-400 hover:text-white cursor-pointer"
                        }, void 0, false, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                            lineNumber: 47,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 border-b border-black flex items-center gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-grow flex items-center bg-[#1e1e1e] rounded px-2 py-1 gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "w-3 h-3 text-gray-500"
                        }, void 0, false, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                            lineNumber: 54,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            placeholder: "Search assets...",
                            className: "bg-transparent border-none outline-none text-[10px] text-gray-400 w-full"
                        }, void 0, false, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                            lineNumber: 55,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                    lineNumber: 53,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                lineNumber: 52,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-grow overflow-y-auto custom-scrollbar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-left text-[11px] border-separate border-spacing-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "sticky top-0 bg-[#252526] text-gray-500 font-bold uppercase text-[9px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 border-b border-black",
                                        children: "Name"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                                        lineNumber: 67,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 border-b border-black text-right",
                                        children: "Size"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                                        lineNumber: 68,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                                lineNumber: 66,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                            lineNumber: 65,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: [
                                layers.map((layer, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "hover:bg-[#37373d] transition-colors cursor-pointer group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-2 flex items-center gap-3 text-gray-300",
                                                children: [
                                                    layer.type === "VIDEO" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                                                        className: "w-3.5 h-3.5 text-blue-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 64
                                                    }, this),
                                                    layer.type === "AUDIO" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
                                                        className: "w-3.5 h-3.5 text-purple-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 64
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "truncate max-w-[120px]",
                                                        children: layer.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                                                lineNumber: 74,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-2 text-right text-gray-500 font-mono",
                                                children: "--"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                                                lineNumber: 79,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, layer.id, true, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                                        lineNumber: 73,
                                        columnNumber: 29
                                    }, this)),
                                layers.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 2,
                                        className: "px-3 py-8 text-center text-gray-600 italic",
                                        children: "Drag and drop assets here"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                                        lineNumber: 84,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                                    lineNumber: 83,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                            lineNumber: 71,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                    lineNumber: 64,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[150px] border-t border-black bg-black/20 flex flex-col p-3 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "aspect-video bg-black flex items-center justify-center rounded border border-white/5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                            className: "w-8 h-8 text-white/10"
                        }, void 0, false, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                            lineNumber: 96,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                        lineNumber: 95,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-white font-bold truncate",
                                children: "No Asset Selected"
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                                lineNumber: 99,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] text-gray-500",
                                children: "1920x1080 (1.0)"
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                                lineNumber: 100,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                        lineNumber: 98,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                lineNumber: 94,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EffectsControl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/sliders-vertical.js [app-ssr] (ecmascript) <export default as Sliders>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/maximize.js [app-ssr] (ecmascript) <export default as Maximize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
"use client";
;
;
;
function EffectsControl({ activeLayer, onUpdateLayer }) {
    if (!activeLayer) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-[#252526] border-r border-black items-center justify-center text-gray-600 p-8 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__["Sliders"], {
                className: "w-12 h-12 mb-4 opacity-10"
            }, void 0, false, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-bold uppercase tracking-widest opacity-30",
                children: "No Layer Selected"
            }, void 0, false, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-[#252526] border-r border-black overflow-hidden select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-9 bg-[#3c3c3c] flex items-center px-3 border-b border-black shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__["Sliders"], {
                        className: "w-3.5 h-3.5 mr-2 text-[#d391fc]"
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-black text-gray-300 uppercase tracking-widest truncate",
                        children: [
                            "Effect Controls: ",
                            activeLayer.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-grow overflow-y-auto custom-scrollbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col border-b border-black",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-7 px-2 flex items-center gap-2 bg-[#2d2d2d] cursor-pointer hover:bg-[#333]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: "w-3 h-3 text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                        lineNumber: 34,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold text-gray-400 uppercase tracking-tighter",
                                        children: "Transform"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                        lineNumber: 35,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                lineNumber: 33,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 flex flex-col gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AEProperty, {
                                        label: "Anchor Point",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                            lineNumber: 40,
                                            columnNumber: 56
                                        }, void 0),
                                        value: `${activeLayer.position.x}, ${activeLayer.position.y}`
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                        lineNumber: 39,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AEProperty, {
                                                label: "Position X",
                                                value: activeLayer.position.x,
                                                unit: "%",
                                                onChange: (val)=>onUpdateLayer(activeLayer.id, {
                                                        position: {
                                                            ...activeLayer.position,
                                                            x: val
                                                        }
                                                    }),
                                                scrub: true,
                                                min: -100,
                                                max: 200
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                                lineNumber: 44,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AEProperty, {
                                                label: "Position Y",
                                                value: activeLayer.position.y,
                                                unit: "%",
                                                onChange: (val)=>onUpdateLayer(activeLayer.id, {
                                                        position: {
                                                            ...activeLayer.position,
                                                            y: val
                                                        }
                                                    }),
                                                scrub: true,
                                                min: -100,
                                                max: 200
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                                lineNumber: 53,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                        lineNumber: 43,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AEProperty, {
                                        label: "Scale",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__["Maximize"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                            lineNumber: 64,
                                            columnNumber: 49
                                        }, void 0),
                                        value: activeLayer.scale,
                                        unit: "%",
                                        onChange: (val)=>onUpdateLayer(activeLayer.id, {
                                                scale: val
                                            }),
                                        scrub: true,
                                        min: 0,
                                        max: 500,
                                        slider: true
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                        lineNumber: 63,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AEProperty, {
                                        label: "Rotation",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                            lineNumber: 74,
                                            columnNumber: 52
                                        }, void 0),
                                        value: activeLayer.rotation,
                                        unit: "°",
                                        onChange: (val)=>onUpdateLayer(activeLayer.id, {
                                                rotation: val
                                            }),
                                        scrub: true,
                                        min: -360,
                                        max: 360
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                        lineNumber: 73,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AEProperty, {
                                        label: "Opacity",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__["Sliders"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                            lineNumber: 83,
                                            columnNumber: 51
                                        }, void 0),
                                        value: activeLayer.opacity,
                                        unit: "%",
                                        onChange: (val)=>onUpdateLayer(activeLayer.id, {
                                                opacity: val
                                            }),
                                        scrub: true,
                                        min: 0,
                                        max: 100,
                                        slider: true
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                        lineNumber: 82,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                lineNumber: 38,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col border-b border-black",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-7 px-2 flex items-center gap-2 bg-[#2d2d2d] cursor-pointer hover:bg-[#333]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: "w-3 h-3 text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                        lineNumber: 98,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold text-gray-400 uppercase tracking-tighter",
                                        children: "Layer Styles"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                        lineNumber: 99,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                lineNumber: 97,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 flex flex-col gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-black text-[#d391fc] uppercase tracking-widest",
                                                        children: "Drop Shadow"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: activeLayer.styles?.dropShadow.enabled,
                                                        onChange: (e)=>onUpdateLayer(activeLayer.id, {
                                                                styles: {
                                                                    ...activeLayer.styles,
                                                                    dropShadow: {
                                                                        ...activeLayer.styles.dropShadow,
                                                                        enabled: e.target.checked
                                                                    }
                                                                }
                                                            }),
                                                        className: "w-3 h-3 accent-[#d391fc]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                                lineNumber: 105,
                                                columnNumber: 29
                                            }, this),
                                            activeLayer.styles?.dropShadow.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pl-4 space-y-4 border-l border-white/5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AEProperty, {
                                                        label: "Blur",
                                                        value: activeLayer.styles.dropShadow.blur,
                                                        unit: "px",
                                                        onChange: (val)=>onUpdateLayer(activeLayer.id, {
                                                                styles: {
                                                                    ...activeLayer.styles,
                                                                    dropShadow: {
                                                                        ...activeLayer.styles.dropShadow,
                                                                        blur: val
                                                                    }
                                                                }
                                                            }),
                                                        scrub: true,
                                                        min: 0,
                                                        max: 100,
                                                        slider: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AEProperty, {
                                                        label: "Distance",
                                                        value: activeLayer.styles.dropShadow.distance,
                                                        unit: "px",
                                                        onChange: (val)=>onUpdateLayer(activeLayer.id, {
                                                                styles: {
                                                                    ...activeLayer.styles,
                                                                    dropShadow: {
                                                                        ...activeLayer.styles.dropShadow,
                                                                        distance: val
                                                                    }
                                                                }
                                                            }),
                                                        scrub: true,
                                                        min: 0,
                                                        max: 100,
                                                        slider: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AEProperty, {
                                                        label: "Angle",
                                                        value: activeLayer.styles.dropShadow.angle,
                                                        unit: "°",
                                                        onChange: (val)=>onUpdateLayer(activeLayer.id, {
                                                                styles: {
                                                                    ...activeLayer.styles,
                                                                    dropShadow: {
                                                                        ...activeLayer.styles.dropShadow,
                                                                        angle: val
                                                                    }
                                                                }
                                                            }),
                                                        scrub: true,
                                                        min: 0,
                                                        max: 360
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AEProperty, {
                                                        label: "Opacity",
                                                        value: activeLayer.styles.dropShadow.opacity,
                                                        unit: "%",
                                                        onChange: (val)=>onUpdateLayer(activeLayer.id, {
                                                                styles: {
                                                                    ...activeLayer.styles,
                                                                    dropShadow: {
                                                                        ...activeLayer.styles.dropShadow,
                                                                        opacity: val
                                                                    }
                                                                }
                                                            }),
                                                        scrub: true,
                                                        min: 0,
                                                        max: 100,
                                                        slider: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 text-[11px] text-gray-500",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "group-hover:text-gray-300 transition-colors uppercase tracking-tight font-medium",
                                                                    children: "Color"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                                                    lineNumber: 157,
                                                                    columnNumber: 45
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "color",
                                                                value: activeLayer.styles.dropShadow.color,
                                                                onChange: (e)=>onUpdateLayer(activeLayer.id, {
                                                                        styles: {
                                                                            ...activeLayer.styles,
                                                                            dropShadow: {
                                                                                ...activeLayer.styles.dropShadow,
                                                                                color: e.target.value
                                                                            }
                                                                        }
                                                                    }),
                                                                className: "w-8 h-4 bg-transparent border-none cursor-pointer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                                lineNumber: 115,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                        lineNumber: 104,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-black text-[#d391fc] uppercase tracking-widest",
                                                        children: "Gaussian Blur"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: activeLayer.styles?.blur.enabled,
                                                        onChange: (e)=>onUpdateLayer(activeLayer.id, {
                                                                styles: {
                                                                    ...activeLayer.styles,
                                                                    blur: {
                                                                        ...activeLayer.styles.blur,
                                                                        enabled: e.target.checked
                                                                    }
                                                                }
                                                            }),
                                                        className: "w-3 h-3 accent-[#d391fc]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                                lineNumber: 172,
                                                columnNumber: 29
                                            }, this),
                                            activeLayer.styles?.blur.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pl-4 space-y-4 border-l border-white/5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AEProperty, {
                                                    label: "Amount",
                                                    value: activeLayer.styles.blur.amount,
                                                    unit: "px",
                                                    onChange: (val)=>onUpdateLayer(activeLayer.id, {
                                                            styles: {
                                                                ...activeLayer.styles,
                                                                blur: {
                                                                    ...activeLayer.styles.blur,
                                                                    amount: val
                                                                }
                                                            }
                                                        }),
                                                    scrub: true,
                                                    min: 0,
                                                    max: 100,
                                                    slider: true
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                                lineNumber: 182,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                        lineNumber: 171,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                lineNumber: 102,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                        lineNumber: 96,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, this);
}
function AEProperty({ label, value, unit = "", icon, active = false, scrub = false, slider = false, min = 0, max = 100, onChange }) {
    const [isScrubbing, setIsScrubbing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const startX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const startVal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const handleMouseDown = (e)=>{
        if (!scrub || !onChange || typeof value !== "number") return;
        setIsScrubbing(true);
        startX.current = e.clientX;
        startVal.current = value;
        document.body.style.cursor = "ew-resize";
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isScrubbing) return;
        const handleMouseMove = (e)=>{
            const delta = e.clientX - startX.current;
            const factor = e.shiftKey ? 2 : e.altKey ? 0.1 : 0.5;
            const newVal = Math.round((startVal.current + delta * factor) * 10) / 10;
            onChange?.(Math.min(max, Math.max(min, newVal)));
        };
        const handleMouseUp = ()=>{
            setIsScrubbing(false);
            document.body.style.cursor = "default";
        };
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return ()=>{
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [
        isScrubbing,
        min,
        max,
        onChange
    ]);
    const handleClick = ()=>{
        if (!onChange || typeof value !== "number") return;
        const newVal = prompt(`Enter ${label}:`, value.toString());
        if (newVal !== null) {
            const num = parseFloat(newVal);
            if (!isNaN(num)) {
                onChange(num);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-1.5 group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 text-[10px] text-gray-500",
                        children: [
                            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-3.5 flex justify-center opacity-60",
                                children: icon
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                lineNumber: 267,
                                columnNumber: 30
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "group-hover:text-gray-300 transition-colors uppercase tracking-tight font-black",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                lineNumber: 268,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                        lineNumber: 266,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onMouseDown: handleMouseDown,
                        onClick: (e)=>e.detail === 2 && handleClick(),
                        title: "Drag to scrub, double click to type",
                        className: `text-[10px] font-mono cursor-ew-resize select-none px-1 rounded transition-colors ${isScrubbing ? "text-[#00e0ff] bg-[#00e0ff]/10" : "text-[#00e0ff] hover:bg-white/5 border-b border-dotted border-[#00e0ff]/30"}`,
                        children: [
                            typeof value === "number" ? value.toFixed(1) : value,
                            unit
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                        lineNumber: 270,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                lineNumber: 265,
                columnNumber: 13
            }, this),
            slider && typeof value === "number" && onChange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-1 bg-black/40 rounded-full overflow-hidden group/slider",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "range",
                        min: min,
                        max: max,
                        step: 0.1,
                        value: value,
                        onChange: (e)=>onChange(parseFloat(e.target.value)),
                        className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                        lineNumber: 281,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 h-full bg-[#00e0ff]/40 group-hover/slider:bg-[#00e0ff]/60 transition-colors",
                        style: {
                            width: `${(value - min) / (max - min) * 100}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                        lineNumber: 290,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                lineNumber: 280,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
        lineNumber: 264,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompositionView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/pause.js [app-ssr] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/skip-back.js [app-ssr] (ecmascript) <export default as SkipBack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-ssr] (ecmascript) <export default as SkipForward>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/maximize.js [app-ssr] (ecmascript) <export default as Maximize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-ssr] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
"use client";
;
;
;
function CompositionView({ playback, layers, activeLayerId, onSelectLayer, onTogglePlayback, onSeek, onFilesDrop, zoom = 100 }) {
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const formatTimecode = (seconds)=>{
        const h = Math.floor(seconds / 3600);
        const m = Math.floor(seconds % 3600 / 60);
        const s = Math.floor(seconds % 60);
        const f = Math.floor(seconds % 1 * playback.fps);
        return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}:${f.toString().padStart(2, "0")}`;
    };
    // Sync individual video elements with global playback
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const videos = document.querySelectorAll('video');
        videos.forEach((v)=>{
            if (playback.isPlaying) {
                v.play().catch(()=>{});
            } else {
                v.pause();
            }
        });
    }, [
        playback.isPlaying
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const videos = document.querySelectorAll('video');
        videos.forEach((v)=>{
            if (Math.abs(v.currentTime - playback.currentTime) > 0.1) {
                v.currentTime = playback.currentTime;
            }
        });
    }, [
        playback.currentTime
    ]);
    const handleDragOver = (e)=>{
        e.preventDefault();
        setIsDragging(true);
    };
    const handleDragLeave = ()=>{
        setIsDragging(false);
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files.length > 0) {
            onFilesDrop(e.dataTransfer.files);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col flex-grow bg-[#161616] relative overflow-hidden",
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-8 bg-[#2d2d2d] border-b border-black flex items-center justify-between px-4 text-[11px] text-gray-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-white uppercase tracking-widest",
                                children: "Composition 1"
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                lineNumber: 87,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "1920 x 1080 (1.00)"
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                lineNumber: 88,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                        lineNumber: 86,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                className: "w-3.5 h-3.5 hover:text-white cursor-pointer"
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                lineNumber: 91,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__["Maximize"], {
                                className: "w-3.5 h-3.5 hover:text-white cursor-pointer"
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                lineNumber: 92,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                        lineNumber: 90,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                lineNumber: 85,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-grow relative flex items-center justify-center bg-[#0e0e0e] overflow-hidden group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-10 workspace-grid"
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                        lineNumber: 98,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative aspect-video bg-black shadow-2xl overflow-hidden border border-white/5 w-[80%] max-w-[1200px] transition-transform duration-200 ease-out",
                        style: {
                            transform: `scale(${zoom / 100})`
                        },
                        children: layers.filter((l)=>{
                            const anySolo = layers.some((s)=>s.solo);
                            if (anySolo && !l.solo) return false;
                            return l.visible;
                        }).map((layer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>!layer.locked && onSelectLayer(layer.id),
                                className: `absolute transition-all duration-100 overflow-hidden flex items-center justify-center group ${activeLayerId === layer.id ? "ring-2 ring-[#d391fc] shadow-[0_0_20px_rgba(211,145,252,0.4)] z-50" : ""} ${layer.locked ? "pointer-events-none opacity-50 grayscale-[0.5]" : "cursor-pointer pointer-events-auto"}`,
                                style: {
                                    left: `${layer.position.x}%`,
                                    top: `${layer.position.y}%`,
                                    width: `${layer.scale}%`,
                                    transform: `translate(-50%, -50%) rotate(${layer.rotation}deg)`,
                                    backgroundColor: layer.url ? "transparent" : layer.color,
                                    height: layer.type === "VIDEO" ? "auto" : "40px",
                                    opacity: layer.opacity / 100,
                                    boxShadow: layer.styles?.dropShadow.enabled ? `${Math.cos(layer.styles.dropShadow.angle * Math.PI / 180) * layer.styles.dropShadow.distance}px ${Math.sin(layer.styles.dropShadow.angle * Math.PI / 180) * layer.styles.dropShadow.distance}px ${layer.styles.dropShadow.blur}px ${layer.styles.dropShadow.color}${Math.floor(layer.styles.dropShadow.opacity * 2.55).toString(16).padStart(2, '0')}` : "none",
                                    filter: layer.styles?.blur.enabled ? `blur(${layer.styles.blur.amount}px)` : "none"
                                },
                                children: [
                                    layer.url && layer.type === "VIDEO" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        src: layer.url,
                                        className: "w-full h-full object-cover",
                                        muted: layer.muted,
                                        preload: "auto",
                                        onLoadedMetadata: (e)=>{
                                        // We could sync duration back to state here
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                        lineNumber: 131,
                                        columnNumber: 33
                                    }, this),
                                    layer.url && layer.type === "AUDIO" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-full h-full ${layer.muted ? "bg-gray-800" : "bg-[#10b981]/20"} flex items-center px-3 border border-[#10b981]/50 rounded`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                className: `w-3 h-3 ${layer.muted ? "text-gray-500" : "text-[#10b981]"} mr-2`
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                                lineNumber: 143,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[8px] ${layer.muted ? "text-gray-500" : "text-[#10b981]"} truncate`,
                                                children: [
                                                    layer.name,
                                                    " ",
                                                    layer.muted ? "(Muted)" : ""
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                                lineNumber: 144,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                        lineNumber: 142,
                                        columnNumber: 33
                                    }, this),
                                    layer.locked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-black/20 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                            className: "w-4 h-4 text-white/50"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                            lineNumber: 149,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                        lineNumber: 148,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, layer.id, true, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                lineNumber: 110,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                        lineNumber: 101,
                        columnNumber: 17
                    }, this),
                    isDragging && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-50 bg-[#d391fc]/20 backdrop-blur-sm flex items-center justify-center border-4 border-dashed border-[#d391fc]/50 pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 bg-[#d391fc] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(211,145,252,0.4)]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__["Maximize"], {
                                        className: "w-8 h-8 text-[#1e1e1e]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                        lineNumber: 161,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                    lineNumber: 160,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-black uppercase tracking-tighter italic",
                                    children: "Drop to Import to BOLTChain"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                    lineNumber: 163,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                            lineNumber: 159,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                        lineNumber: 158,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[90%] h-[90%] border border-dashed border-white/10"
                        }, void 0, false, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                            lineNumber: 170,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                        lineNumber: 169,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                lineNumber: 97,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-12 bg-[#2d2d2d] border-t border-black flex items-center justify-between px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xl font-mono text-[#00e0ff] font-bold tabular-nums",
                            children: formatTimecode(playback.currentTime)
                        }, void 0, false, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                            lineNumber: 177,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                        lineNumber: 176,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onSeek(0),
                                className: "text-gray-400 hover:text-white transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__["SkipBack"], {
                                    className: "w-5 h-5 fill-current"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                    lineNumber: 184,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                lineNumber: 183,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onTogglePlayback,
                                className: "w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10 shadow-lg group",
                                children: playback.isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                    className: "w-5 h-5 fill-current text-white"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                    lineNumber: 191,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    className: "w-5 h-5 fill-current text-white ml-1"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                    lineNumber: 193,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                lineNumber: 186,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onSeek(playback.duration),
                                className: "text-gray-400 hover:text-white transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__["SkipForward"], {
                                    className: "w-5 h-5 fill-current"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                    lineNumber: 197,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                lineNumber: 196,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                        lineNumber: 182,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                    className: "w-4 h-4 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                    lineNumber: 203,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-20 h-1 bg-white/10 rounded-full overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[80%] h-full bg-[#00e0ff]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                        lineNumber: 205,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                    lineNumber: 204,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                            lineNumber: 202,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                        lineNumber: 201,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                lineNumber: 175,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
        lineNumber: 78,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AETimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-ssr] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/scissors.js [app-ssr] (ecmascript) <export default as Scissors>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/timer.js [app-ssr] (ecmascript) <export default as Timer>");
"use client";
;
;
function AETimeline({ playback, layers, activeLayerId, onSelectLayer, onToggleLayerProp, onAddLayer, onSplit, onSeek }) {
    const pixelsPerSecond = 100;
    const handleTimelineClick = (e)=>{
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const time = x / pixelsPerSecond;
        onSeek(Math.max(0, Math.min(time, playback.duration)));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[300px] bg-[#2d2d2d] flex flex-col border-t border-black select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-8 bg-[#3c3c3c] border-b border-black flex items-center px-4 gap-6 text-[10px] text-gray-400 font-bold uppercase tracking-widest",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onAddLayer,
                                className: "flex items-center gap-1 hover:text-white transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                        lineNumber: 36,
                                        columnNumber: 25
                                    }, this),
                                    " New Layer"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                lineNumber: 32,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onSplit,
                                className: "flex items-center gap-1 hover:text-white transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                        lineNumber: 42,
                                        columnNumber: 25
                                    }, this),
                                    " Split"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                lineNumber: 38,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-4 bg-white/10"
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-[#00e0ff]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                className: "w-3.5 h-3.5"
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Active Compositon"
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                lineNumber: 48,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-grow overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[300px] bg-[#252526] border-r border-black flex flex-col overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-8 bg-[#333333] border-b border-black flex items-center px-2 gap-4 text-[9px] text-gray-500 font-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 flex justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                                lineNumber: 57,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                                lineNumber: 58,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                                lineNumber: 59,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                        lineNumber: 56,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-grow",
                                        children: "LAYER NAME"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                        lineNumber: 61,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12",
                                        children: "PARENT"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                        lineNumber: 62,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-grow overflow-y-auto custom-scrollbar",
                                children: layers.map((layer, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>onSelectLayer(layer.id),
                                        className: `h-8 flex items-center px-2 gap-4 border-b border-black/20 hover:bg-[#37373d] cursor-pointer transition-colors group ${activeLayerId === layer.id ? "bg-[#37373d] ring-1 ring-inset ring-[#d391fc]/30" : index % 2 === 0 ? "bg-[#2d2d2d]/30" : "bg-transparent"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 flex justify-center gap-2 opacity-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            onToggleLayerProp(layer.id, "visible");
                                                        },
                                                        className: layer.visible ? "text-[#00e0ff]" : "text-gray-600",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            onToggleLayerProp(layer.id, "muted");
                                                        },
                                                        className: !layer.muted ? "text-[#00e0ff]" : "text-gray-600",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            onToggleLayerProp(layer.id, "locked");
                                                        },
                                                        className: layer.locked ? "text-red-500" : "text-gray-600",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                                            lineNumber: 89,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                                lineNumber: 72,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-grow text-[11px] text-gray-300 font-medium truncate flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-3 h-3 rounded-sm",
                                                        style: {
                                                            backgroundColor: layer.color
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 37
                                                    }, this),
                                                    layer.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                                lineNumber: 92,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 text-[9px] text-gray-600",
                                                children: "None"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                                lineNumber: 96,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, layer.id, true, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                        lineNumber: 67,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                lineNumber: 65,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                        lineNumber: 54,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-grow flex flex-col overflow-hidden relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-8 bg-[#333333] border-b border-black relative cursor-crosshair overflow-hidden",
                                onClick: handleTimelineClick,
                                children: Array.from({
                                    length: Math.ceil(playback.duration) + 1
                                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute border-l border-white/10 h-full flex items-end pb-1 pl-1 text-[8px] text-gray-500 font-mono",
                                        style: {
                                            left: `${i * pixelsPerSecond}px`
                                        },
                                        children: [
                                            i,
                                            "s"
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                        lineNumber: 110,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                lineNumber: 105,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-grow relative overflow-auto custom-scrollbar",
                                style: {
                                    width: `${playback.duration * pixelsPerSecond}px`
                                },
                                onClick: handleTimelineClick,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 bottom-0 w-px bg-[#00e0ff] z-10 pointer-events-none",
                                        style: {
                                            left: `${playback.currentTime * pixelsPerSecond}px`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#00e0ff] playhead-tip"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                            lineNumber: 131,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                        lineNumber: 127,
                                        columnNumber: 25
                                    }, this),
                                    layers.map((layer, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>onSelectLayer(layer.id),
                                            className: `h-8 border-b border-black/10 relative cursor-pointer transition-colors ${activeLayerId === layer.id ? "bg-[#d391fc]/5" : index % 2 === 0 ? "bg-[#2d2d2d]/10" : "bg-transparent"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `absolute top-1 bottom-1 rounded shadow-lg border-x-2 border-white/20 flex items-center px-2 cursor-move group ${activeLayerId === layer.id ? "ring-2 ring-white ring-offset-1 ring-offset-black/50 overflow-visible z-20" : ""}`,
                                                style: {
                                                    left: `${layer.startTime * pixelsPerSecond}px`,
                                                    width: `${layer.duration * pixelsPerSecond}px`,
                                                    backgroundColor: layer.color,
                                                    opacity: activeLayerId === layer.id ? 1 : 0.8
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold text-white uppercase tracking-tighter truncate drop-shadow-md",
                                                        children: layer.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                                lineNumber: 140,
                                                columnNumber: 33
                                            }, this)
                                        }, layer.id, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                            lineNumber: 135,
                                            columnNumber: 29
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                lineNumber: 121,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                        lineNumber: 103,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                lineNumber: 52,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoMenuBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoMenuBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function VideoMenuBar({ onAction }) {
    const [activeMenu, setActiveMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const menus = [
        {
            label: "File",
            items: [
                {
                    label: "New Project",
                    shortcut: "Ctrl+Alt+N",
                    action: ()=>onAction?.("FILE_NEW")
                },
                {
                    label: "Open Project...",
                    shortcut: "Ctrl+O",
                    action: ()=>onAction?.("FILE_OPEN")
                },
                {
                    separator: true
                },
                {
                    label: "Close",
                    shortcut: "Ctrl+W",
                    action: ()=>onAction?.("FILE_CLOSE")
                },
                {
                    label: "Save",
                    shortcut: "Ctrl+S",
                    action: ()=>onAction?.("FILE_SAVE")
                },
                {
                    label: "Save As...",
                    shortcut: "Shift+Ctrl+S",
                    action: ()=>onAction?.("FILE_SAVE_AS")
                },
                {
                    separator: true
                },
                {
                    label: "Import File...",
                    shortcut: "Ctrl+I",
                    action: ()=>onAction?.("FILE_IMPORT")
                },
                {
                    label: "Quick Render",
                    shortcut: "F5",
                    action: ()=>onAction?.("COMP_RENDER")
                },
                {
                    separator: true
                },
                {
                    label: "Project Settings...",
                    shortcut: "Alt+Shift+Ctrl+K",
                    action: ()=>onAction?.("FILE_SETTINGS")
                },
                {
                    label: "Mint Asset",
                    shortcut: "F12",
                    action: ()=>onAction?.("FILE_MINT")
                }
            ]
        },
        {
            label: "Edit",
            items: [
                {
                    label: "Undo",
                    shortcut: "Ctrl+Z",
                    action: ()=>onAction?.("EDIT_UNDO")
                },
                {
                    label: "Redo",
                    shortcut: "Ctrl+Y",
                    action: ()=>onAction?.("EDIT_REDO")
                },
                {
                    separator: true
                },
                {
                    label: "Cut",
                    shortcut: "Ctrl+X",
                    action: ()=>onAction?.("EDIT_CUT")
                },
                {
                    label: "Copy",
                    shortcut: "Ctrl+C",
                    action: ()=>onAction?.("EDIT_COPY")
                },
                {
                    label: "Paste",
                    shortcut: "Ctrl+V",
                    action: ()=>onAction?.("EDIT_PASTE")
                },
                {
                    separator: true
                },
                {
                    label: "Select All",
                    shortcut: "Ctrl+A",
                    action: ()=>onAction?.("EDIT_SELECT_ALL")
                },
                {
                    label: "Deselect All",
                    shortcut: "Shift+Ctrl+A",
                    action: ()=>onAction?.("EDIT_DESELECT")
                },
                {
                    separator: true
                },
                {
                    label: "Duplicate Layer",
                    shortcut: "Ctrl+D",
                    action: ()=>onAction?.("EDIT_DUPLICATE")
                },
                {
                    label: "Split Layer",
                    shortcut: "Ctrl+Shift+D",
                    action: ()=>onAction?.("EDIT_SPLIT")
                },
                {
                    label: "Delete",
                    shortcut: "F4",
                    action: ()=>onAction?.("EDIT_DELETE")
                },
                {
                    separator: true
                },
                {
                    label: "Preferences",
                    shortcut: "Ctrl+K",
                    action: ()=>onAction?.("EDIT_PREFERENCES")
                }
            ]
        },
        {
            label: "Composition",
            items: [
                {
                    label: "New Composition...",
                    shortcut: "Ctrl+N",
                    action: ()=>onAction?.("COMP_NEW")
                },
                {
                    label: "Composition Settings...",
                    shortcut: "Ctrl+K",
                    action: ()=>onAction?.("COMP_SETTINGS")
                },
                {
                    separator: true
                },
                {
                    label: "Preview",
                    shortcut: "Space"
                },
                {
                    label: "Save Frame As"
                },
                {
                    separator: true
                },
                {
                    label: "Add to Render Queue",
                    shortcut: "Ctrl+M",
                    action: ()=>onAction?.("COMP_RENDER")
                }
            ]
        },
        {
            label: "Layer",
            items: [
                {
                    label: "New"
                },
                {
                    label: "Layer Settings...",
                    shortcut: "Shift+Ctrl+Y"
                },
                {
                    separator: true
                },
                {
                    label: "Duplicate",
                    shortcut: "Ctrl+D",
                    action: ()=>onAction?.("EDIT_DUPLICATE")
                },
                {
                    label: "Split",
                    shortcut: "Ctrl+Shift+D",
                    action: ()=>onAction?.("EDIT_SPLIT")
                },
                {
                    label: "Delete",
                    shortcut: "F4",
                    action: ()=>onAction?.("EDIT_DELETE")
                },
                {
                    separator: true
                },
                {
                    label: "Pre-compose...",
                    shortcut: "Shift+Ctrl+C"
                }
            ]
        },
        {
            label: "Effect",
            items: [
                {
                    label: "Last Effect",
                    shortcut: "Alt+Ctrl+F"
                },
                {
                    separator: true
                },
                {
                    label: "Blur & Sharpen"
                },
                {
                    label: "Color Correction"
                },
                {
                    label: "Distort"
                },
                {
                    label: "Generate"
                },
                {
                    label: "Keying"
                }
            ]
        },
        {
            label: "View",
            items: [
                {
                    label: "Zoom In",
                    shortcut: "Ctrl++",
                    action: ()=>onAction?.("VIEW_ZOOM_IN")
                },
                {
                    label: "Zoom Out",
                    shortcut: "Ctrl+-",
                    action: ()=>onAction?.("VIEW_ZOOM_OUT")
                },
                {
                    label: "Fit in Window",
                    shortcut: "Ctrl+0",
                    action: ()=>onAction?.("VIEW_FIT")
                },
                {
                    separator: true
                },
                {
                    label: "Fullscreen",
                    shortcut: "F11"
                },
                {
                    separator: true
                },
                {
                    label: "Show Rulers",
                    shortcut: "Ctrl+R"
                },
                {
                    label: "Show Guides",
                    shortcut: "Ctrl+;"
                }
            ]
        },
        {
            label: "Window",
            items: [
                {
                    label: "Project Panel",
                    shortcut: "F6",
                    action: ()=>onAction?.("WINDOW_PROJECT")
                },
                {
                    label: "Timeline",
                    shortcut: "F7",
                    action: ()=>onAction?.("WINDOW_TIMELINE")
                },
                {
                    label: "Effects Control",
                    shortcut: "F8",
                    action: ()=>onAction?.("WINDOW_EFFECTS")
                },
                {
                    separator: true
                },
                {
                    label: "Help Center",
                    shortcut: "F1",
                    action: ()=>onAction?.("FILE_HELP")
                },
                {
                    label: "Mint Asset",
                    shortcut: "F12",
                    action: ()=>onAction?.("FILE_MINT")
                }
            ]
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setActiveMenu(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "h-full flex items-center bg-[#2d2d2d] select-none z-50 px-2 uppercase tracking-tighter",
        children: menus.map((menu)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-full flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onMouseEnter: ()=>activeMenu && setActiveMenu(menu.label),
                        onClick: ()=>setActiveMenu(activeMenu === menu.label ? null : menu.label),
                        className: `px-3 py-1 text-[10px] font-bold transition-colors rounded-sm mx-0.5 ${activeMenu === menu.label ? "bg-[#3c3c3c] text-white" : "text-gray-400 hover:text-white hover:bg-[#3c3c3c]"}`,
                        children: menu.label
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoMenuBar.tsx",
                        lineNumber: 142,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: activeMenu === menu.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.98
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                scale: 0.98
                            },
                            transition: {
                                duration: 0.05
                            },
                            className: "absolute top-full left-0 mt-0.5 w-64 bg-[#2d2d2d] border border-black shadow-2xl py-1 rounded-sm z-[100] normal-case tracking-normal",
                            children: menu.items.map((item, idx)=>item.separator ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-px bg-white/5 my-1 mx-2"
                                }, idx, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoMenuBar.tsx",
                                    lineNumber: 162,
                                    columnNumber: 41
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    disabled: item.disabled,
                                    onClick: ()=>{
                                        item.action?.();
                                        setActiveMenu(null);
                                    },
                                    className: "w-full text-left px-3 py-1.5 hover:bg-[#d391fc]/20 hover:text-[#d391fc] group flex justify-between items-center transition-colors disabled:opacity-30 disabled:hover:bg-transparent",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] text-gray-300 group-hover:text-[#d391fc]",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoMenuBar.tsx",
                                            lineNumber: 173,
                                            columnNumber: 45
                                        }, this),
                                        item.shortcut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-gray-500 group-hover:text-[#d391fc]/70 ml-4 font-mono",
                                            children: item.shortcut
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoMenuBar.tsx",
                                            lineNumber: 175,
                                            columnNumber: 49
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoMenuBar.tsx",
                                    lineNumber: 164,
                                    columnNumber: 41
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoMenuBar.tsx",
                            lineNumber: 153,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoMenuBar.tsx",
                        lineNumber: 151,
                        columnNumber: 21
                    }, this)
                ]
            }, menu.label, true, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoMenuBar.tsx",
                lineNumber: 141,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoMenuBar.tsx",
        lineNumber: 139,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
"use client";
;
;
;
function VideoModal({ isOpen, onClose, title, children, footer }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.9,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    scale: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    scale: 0.9,
                    y: 30
                },
                className: "bg-[#1e1e1e] border border-[#d391fc]/20 shadow-[0_0_50px_rgba(211,145,252,0.15)] rounded-md w-full max-w-xl overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-5 py-3 bg-[#252525] border-b border-black",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-[10px] font-black text-[#d391fc] uppercase tracking-widest",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoModal.tsx",
                                lineNumber: 27,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "text-gray-500 hover:text-[#d391fc] transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoModal.tsx",
                                    lineNumber: 32,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoModal.tsx",
                                lineNumber: 28,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoModal.tsx",
                        lineNumber: 26,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 text-[12px] text-gray-300",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoModal.tsx",
                        lineNumber: 37,
                        columnNumber: 25
                    }, this),
                    footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-4 bg-[#1a1a1a] border-t border-black flex justify-end gap-3",
                        children: footer
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoModal.tsx",
                        lineNumber: 43,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoModal.tsx",
                lineNumber: 19,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoModal.tsx",
            lineNumber: 18,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoModal.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MintingModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/cpu.js [app-ssr] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shapes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shapes$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/shapes.js [app-ssr] (ecmascript) <export default as Shapes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-ssr] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useActiveAccount.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function MintingModal({ isOpen, onClose, asset, onMint, isMinting }) {
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActiveAccount"])();
    const [tokenType, setTokenType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("ERC721");
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [symbol, setSymbol] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleMint = ()=>{
        if (!name || !symbol) return;
        if (tokenType === "ERC20" && (!amount || amount <= 0)) return;
        onMint(tokenType, {
            name,
            symbol,
            amount: tokenType === "ERC20" ? Number(amount) : undefined
        });
    };
    if (!isOpen || !asset) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.95,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    scale: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    scale: 0.95,
                    y: 20
                },
                className: "w-full max-w-lg bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-black italic uppercase tracking-tighter text-white flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                        className: "w-5 h-5 text-[#00ffa3]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                        lineNumber: 50,
                                        columnNumber: 29
                                    }, this),
                                    "Mint to Blockchain"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                lineNumber: 49,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "text-gray-500 hover:text-white transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                    lineNumber: 57,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                lineNumber: 53,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                        lineNumber: 48,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 overflow-y-auto custom-scrollbar flex-1",
                        children: !account ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-8 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                    className: "w-12 h-12 text-yellow-500 mx-auto"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                    lineNumber: 65,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 text-sm",
                                    children: "Please connect your wallet to mint assets."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                    lineNumber: 66,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                            lineNumber: 64,
                            columnNumber: 29
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 rounded-lg bg-black overflow-hidden flex-shrink-0 border border-white/10",
                                            children: asset.uri || asset.previewUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: asset.uri || asset.previewUrl,
                                                className: "w-full h-full object-cover",
                                                alt: asset.filename || asset.name
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                lineNumber: 74,
                                                columnNumber: 45
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shapes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shapes$3e$__["Shapes"], {
                                                    className: "w-6 h-6 text-gray-700"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 49
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                lineNumber: 80,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                            lineNumber: 72,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-white truncate text-lg",
                                                    children: asset.filename || asset.name || "Untitled Asset"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 font-mono mt-1",
                                                    children: [
                                                        "ID: ",
                                                        asset.id
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                            lineNumber: 85,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                    lineNumber: 71,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-black uppercase tracking-widest text-[#00ffa3]",
                                            children: "1. Select Token Standard"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                            lineNumber: 97,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setTokenType("ERC721"),
                                                    className: `p-4 rounded-xl border text-left transition-all ${tokenType === "ERC721" ? "bg-[#00ffa3]/10 border-[#00ffa3] shadow-[0_0_15px_rgba(0,255,163,0.1)]" : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `font-bold ${tokenType === "ERC721" ? "text-white" : "text-gray-400"}`,
                                                                children: "ERC-721"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                                lineNumber: 109,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-gray-500 leading-relaxed",
                                                            children: "Non-Fungible Token (NFT). Best for unique, 1-of-1 digital artwork or exclusive media."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setTokenType("ERC20"),
                                                    className: `p-4 rounded-xl border text-left transition-all ${tokenType === "ERC20" ? "bg-blue-500/10 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.1)]" : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `font-bold ${tokenType === "ERC20" ? "text-white" : "text-gray-400"}`,
                                                                children: "ERC-20"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                                lineNumber: 124,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-gray-500 leading-relaxed",
                                                            children: "Fungible Token. Best for fractionalized ownership, community coins, or fungible game assets."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                            lineNumber: 100,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                    lineNumber: 96,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-black uppercase tracking-widest text-[#00ffa3]",
                                            children: "2. Token Configuration"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                            lineNumber: 135,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-bold text-gray-400 mb-1",
                                                            children: "Token Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: name,
                                                            onChange: (e)=>setName(e.target.value),
                                                            placeholder: asset.filename || "e.g. My Awesome Art",
                                                            className: "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#00ffa3] transition-colors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-bold text-gray-400 mb-1",
                                                                    children: "Symbol"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                                    lineNumber: 153,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: symbol,
                                                                    onChange: (e)=>setSymbol(e.target.value),
                                                                    placeholder: "e.g. ART",
                                                                    className: "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#00ffa3] transition-colors uppercase"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                                    lineNumber: 154,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 45
                                                        }, this),
                                                        tokenType === "ERC20" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-bold text-gray-400 mb-1",
                                                                    children: "Supply Amount"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                                    lineNumber: 165,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    value: amount,
                                                                    onChange: (e)=>setAmount(Number(e.target.value)),
                                                                    min: "1",
                                                                    placeholder: "e.g. 10000",
                                                                    className: "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                                    lineNumber: 166,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                            lineNumber: 139,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                    lineNumber: 134,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                            lineNumber: 69,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                        lineNumber: 62,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-4 border-t border-white/10 bg-white/[0.02] flex justify-end gap-3 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                disabled: isMinting,
                                className: "px-6 py-2 rounded-lg font-bold text-sm text-gray-400 hover:text-white transition-colors disabled:opacity-50",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                lineNumber: 185,
                                columnNumber: 25
                            }, this),
                            account && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleMint,
                                disabled: isMinting || !name || !symbol || tokenType === "ERC20" && (!amount || amount <= 0),
                                className: `px-6 py-2 rounded-lg font-bold text-sm text-black shadow-lg flex items-center gap-2 transition-all ${isMinting || !name || !symbol || tokenType === "ERC20" && (!amount || amount <= 0) ? "bg-gray-600 cursor-not-allowed opacity-50" : tokenType === "ERC721" ? "bg-[#00ffa3] hover:bg-[#00ffa3]/90 hover:scale-105 shadow-[#00ffa3]/20" : "bg-blue-500 hover:bg-blue-500/90 hover:scale-105 shadow-blue-500/20 text-white"}`,
                                children: isMinting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                            lineNumber: 205,
                                            columnNumber: 41
                                        }, this),
                                        "Minting..."
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Mint as ",
                                        tokenType
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                lineNumber: 193,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                        lineNumber: 184,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                lineNumber: 41,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
            lineNumber: 40,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
        lineNumber: 39,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/BOLTChainvas/apps/web/src/hooks/useMinting.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMinting",
    ()=>useMinting
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$prepare$2d$contract$2d$call$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/prepare-contract-call.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$send$2d$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/actions/send-transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useActiveAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$hooks$2f$transaction$2f$useSendTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/hooks/transaction/useSendTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$chain$2d$definitions$2f$arbitrum$2d$sepolia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/chains/chain-definitions/arbitrum-sepolia.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$client$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/client/client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/contract/contract.js [app-ssr] (ecmascript)");
;
;
;
;
;
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$client$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createThirdwebClient"])({
    clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "915ea7be7f735d46101c5cc897931448"
});
const ERC721_CONTRACT_ADDRESS = "0x0000000000000000000000000000000000000000";
const ERC20_CONTRACT_ADDRESS = "0x0000000000000000000000000000000000000000";
function useMinting() {
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActiveAccount"])();
    const { mutate: sendTx } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$hooks$2f$transaction$2f$useSendTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSendTransaction"])();
    const [isMinting, setIsMinting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const mintAsset = async (type, config, assetUri)=>{
        if (!account) return false;
        setIsMinting(true);
        try {
            if (type === "ERC721") {
                const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContract"])({
                    client,
                    chain: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$chain$2d$definitions$2f$arbitrum$2d$sepolia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arbitrumSepolia"],
                    address: ERC721_CONTRACT_ADDRESS
                });
                const tokenURI = assetUri || "ipfs://placeholder";
                const transaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$prepare$2d$contract$2d$call$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareContractCall"])({
                    contract,
                    method: "function mintMedia(address to, string memory uri, uint8 mediaType) returns (uint256)",
                    params: [
                        account.address,
                        tokenURI,
                        1
                    ]
                });
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$send$2d$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendTransaction"])({
                    transaction,
                    account
                });
            } else {
                const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContract"])({
                    client,
                    chain: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$chain$2d$definitions$2f$arbitrum$2d$sepolia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arbitrumSepolia"],
                    address: ERC20_CONTRACT_ADDRESS
                });
                const transaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$prepare$2d$contract$2d$call$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareContractCall"])({
                    contract,
                    method: "function mintToken(address to, uint256 amount)",
                    params: [
                        account.address,
                        BigInt((config.amount || 0) * 10 ** 18)
                    ]
                });
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$send$2d$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendTransaction"])({
                    transaction,
                    account
                });
            }
            alert(`Successfully minted ${config.name} as ${type}!`);
            return true;
        } catch (error) {
            console.error("Minting failed:", error);
            alert("Failed to mint asset. See console for details.");
            return false;
        } finally{
            setIsMinting(false);
        }
    };
    return {
        mintAsset,
        isMinting,
        account
    };
}
}),
"[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AEVideoEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$hooks$2f$useYjs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/apps/web/src/hooks/useYjs.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$hooks$2f$useHistory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/apps/web/src/hooks/useHistory.ts [app-ssr] (ecmascript)");
// Modular Components
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$components$2f$video$2d$editor$2f$ProjectPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$components$2f$video$2d$editor$2f$EffectsControl$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$components$2f$video$2d$editor$2f$CompositionView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$components$2f$video$2d$editor$2f$AETimeline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$components$2f$video$2d$editor$2f$VideoMenuBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoMenuBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$components$2f$video$2d$editor$2f$VideoModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$components$2f$profile$2f$MintingModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$hooks$2f$useMinting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/apps/web/src/hooks/useMinting.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function AEVideoEditor() {
    const { synced } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$hooks$2f$useYjs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useYjs"])("bolt-ae-video-v1");
    // Playback Engine Refs
    const requestRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Minting State
    const { mintAsset, isMinting } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$hooks$2f$useMinting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMinting"])();
    const [isMintModalOpen, setIsMintModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleMint = async (type, config)=>{
        const dummyUri = "ipfs://video-project-data";
        const success = await mintAsset(type, config, dummyUri);
        if (success) setIsMintModalOpen(false);
    };
    // UI Visibility State
    const [showProject, setShowProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showEffects, setShowEffects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showTimeline, setShowTimeline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // State
    const [playback, setPlayback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        currentTime: 0,
        duration: 10,
        isPlaying: false,
        fps: 30
    });
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(100);
    // Modal State
    const [modalConfig, setModalConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        type: null,
        title: ""
    });
    const [layers, setLayers, history] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$hooks$2f$useHistory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHistory"])([]);
    const [activeLayerId, setActiveLayerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // AECore Playback Loop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const animate = (time)=>{
            if (lastTimeRef.current !== null && playback.isPlaying) {
                const deltaTime = (time - lastTimeRef.current) / 1000;
                setPlayback((prev)=>{
                    let nextTime = prev.currentTime + deltaTime;
                    if (nextTime >= prev.duration) {
                        nextTime = 0; // Loop or stop
                    }
                    return {
                        ...prev,
                        currentTime: nextTime
                    };
                });
            }
            lastTimeRef.current = time;
            requestRef.current = requestAnimationFrame(animate);
        };
        requestRef.current = requestAnimationFrame(animate);
        return ()=>{
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [
        playback.isPlaying
    ]);
    const handleTogglePlayback = ()=>{
        setPlayback((prev)=>({
                ...prev,
                isPlaying: !prev.isPlaying
            }));
    };
    const handleSeek = (time)=>{
        setPlayback((prev)=>({
                ...prev,
                currentTime: time
            }));
    };
    const defaultStyles = {
        dropShadow: {
            enabled: false,
            color: "#000000",
            blur: 10,
            distance: 5,
            angle: 45,
            opacity: 50
        },
        blur: {
            enabled: false,
            amount: 0
        }
    };
    const handleUpdateLayer = (id, updates)=>{
        setLayers((prev)=>prev.map((l)=>l.id === id ? {
                    ...l,
                    ...updates
                } : l));
    };
    const handleToggleLayerProp = (id, prop)=>{
        setLayers((prev)=>prev.map((l)=>{
                if (l.id !== id) return l;
                return {
                    ...l,
                    [prop]: !l[prop]
                };
            }));
    };
    const handleAddLayer = ()=>{
        const newLayer = {
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
            position: {
                x: 50,
                y: 50
            },
            scale: 100,
            rotation: 0,
            color: "#d391fc",
            styles: defaultStyles
        };
        setLayers((prev)=>[
                ...prev,
                newLayer
            ]);
        setActiveLayerId(newLayer.id);
    };
    const handleSplitLayer = ()=>{
        if (!activeLayerId) return;
        const layerToSplit = layers.find((l)=>l.id === activeLayerId);
        if (!layerToSplit) return;
        const splitTime = playback.currentTime;
        // Check if playhead is within the layer duration
        if (splitTime <= layerToSplit.startTime || splitTime >= layerToSplit.startTime + layerToSplit.duration) {
            // If not in range, maybe the user wants to split audio/video if it's a video layer
            if (layerToSplit.type === "VIDEO" && layerToSplit.url) {
                const audioLayer = {
                    ...layerToSplit,
                    id: Math.random().toString(36).substr(2, 9),
                    name: `${layerToSplit.name} (Audio)`,
                    type: "AUDIO",
                    color: "#10b981"
                };
                setLayers((prev)=>[
                        ...prev,
                        audioLayer
                    ]);
            }
            return;
        }
        // Split the clip into two
        const firstPartDuration = splitTime - layerToSplit.startTime;
        const secondPartDuration = layerToSplit.duration - firstPartDuration;
        const secondPart = {
            ...layerToSplit,
            id: Math.random().toString(36).substr(2, 9),
            name: `${layerToSplit.name} (Split)`,
            startTime: splitTime,
            duration: secondPartDuration
        };
        setLayers((prev)=>{
            const index = prev.findIndex((l)=>l.id === layerToSplit.id);
            const newLayers = [
                ...prev
            ];
            // Update first part
            newLayers[index] = {
                ...layerToSplit,
                duration: firstPartDuration
            };
            // Add second part
            newLayers.splice(index, 0, secondPart);
            return newLayers;
        });
        setActiveLayerId(secondPart.id);
    };
    const handleFiles = (files)=>{
        Array.from(files).forEach((file)=>{
            const isVideo = file.type.startsWith("video/");
            const isAudio = file.type.startsWith("audio/");
            if (!isVideo && !isAudio) return;
            const url = URL.createObjectURL(file);
            const newLayer = {
                id: Math.random().toString(36).substr(2, 9),
                name: file.name,
                type: isVideo ? "VIDEO" : "AUDIO",
                visible: true,
                muted: false,
                locked: false,
                solo: false,
                startTime: playback.currentTime,
                duration: 5,
                opacity: 100,
                position: {
                    x: 50,
                    y: 50
                },
                scale: 100,
                rotation: 0,
                color: isVideo ? "#4f46e5" : "#10b981",
                url,
                styles: defaultStyles
            };
            setLayers((prev)=>[
                    ...prev,
                    newLayer
                ]);
        });
    };
    const activeLayer = layers.find((l)=>l.id === activeLayerId) || null;
    const handleMenuAction = (id)=>{
        switch(id){
            case "FILE_NEW":
                setModalConfig({
                    isOpen: true,
                    type: "NEW_PROJECT",
                    title: "New Project"
                });
                break;
            case "COMP_SETTINGS":
                setModalConfig({
                    isOpen: true,
                    type: "COMP_SETTINGS",
                    title: "Composition Settings"
                });
                break;
            case "EDIT_PREFERENCES":
                setModalConfig({
                    isOpen: true,
                    type: "PREFERENCES",
                    title: "Preferences"
                });
                break;
            case "COMP_RENDER":
                setModalConfig({
                    isOpen: true,
                    type: "RENDER",
                    title: "Render Queue"
                });
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
                    const layer = layers.find((l)=>l.id === activeLayerId);
                    if (layer) {
                        const newLayer = {
                            ...layer,
                            id: Math.random().toString(36).substr(2, 9),
                            name: `${layer.name} Copy`
                        };
                        setLayers((prev)=>[
                                ...prev,
                                newLayer
                            ]);
                        setActiveLayerId(newLayer.id);
                    }
                }
                break;
            case "EDIT_DELETE":
                if (activeLayerId) {
                    setLayers((prev)=>prev.filter((l)=>l.id !== activeLayerId));
                    setActiveLayerId(null);
                }
                break;
            case "EDIT_SPLIT":
                handleSplitLayer();
                break;
            case "WINDOW_PROJECT":
                setShowProject((prev)=>!prev);
                break;
            case "WINDOW_EFFECTS":
                setShowEffects((prev)=>!prev);
                break;
            case "WINDOW_TIMELINE":
                setShowTimeline((prev)=>!prev);
                break;
            case "FILE_MINT":
                setIsMintModalOpen(true);
                break;
            case "FILE_HELP":
                setModalConfig({
                    isOpen: true,
                    type: "HELP",
                    title: "Bolt Video Editor - Help"
                });
                break;
            case "COMP_NEW":
                setModalConfig({
                    isOpen: true,
                    type: "COMP_SETTINGS",
                    title: "New Composition"
                });
                break;
            case "EDIT_SELECT_ALL":
                if (layers.length > 0) {
                    setActiveLayerId(layers[layers.length - 1].id);
                }
                break;
            case "EDIT_DESELECT":
                setActiveLayerId(null);
                break;
            case "VIEW_ZOOM_IN":
                setZoom((prev)=>Math.min(prev + 10, 400));
                break;
            case "VIEW_ZOOM_OUT":
                setZoom((prev)=>Math.max(prev - 10, 10));
                break;
            case "VIEW_FIT":
                setZoom(100);
                break;
            case "FILE_IMPORT":
                const input = document.createElement("input");
                input.type = "file";
                input.multiple = true;
                input.accept = "video/*,audio/*,image/*";
                input.onchange = (e)=>{
                    if (e.target.files) handleFiles(e.target.files);
                };
                input.click();
                break;
            default:
                console.log("Action not implemented:", id);
        }
    };
    // Keyboard Shortcuts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            // CTRL/META Shortcuts
            if (e.ctrlKey || e.metaKey) {
                const key = e.key.toLowerCase();
                // Special case for Split (Ctrl+Shift+D)
                if (e.shiftKey && key === "d") {
                    e.preventDefault();
                    handleMenuAction("EDIT_SPLIT");
                    return;
                }
                switch(key){
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
                        handleMenuAction("VIEW_ZOOM_IN");
                        break;
                    case "-":
                        e.preventDefault();
                        handleMenuAction("VIEW_ZOOM_OUT");
                        break;
                }
            }
            // F1-F12 Keybinds
            switch(e.key){
                case "F1":
                    e.preventDefault();
                    setModalConfig({
                        isOpen: true,
                        type: "HELP",
                        title: "Bolt Video Editor - Help"
                    });
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
                    setModalConfig({
                        isOpen: true,
                        type: "RENDER",
                        title: "Render Queue"
                    });
                    break;
                case "F6":
                    e.preventDefault();
                    setShowProject((prev)=>!prev);
                    break;
                case "F7":
                    e.preventDefault();
                    setShowTimeline((prev)=>!prev);
                    break;
                case "F8":
                    e.preventDefault();
                    setShowEffects((prev)=>!prev);
                    break;
                case "F11":
                    e.preventDefault();
                    if (typeof document !== 'undefined') {
                        if (!document.fullscreenElement) {
                            document.documentElement.requestFullscreen().catch(()=>{});
                        } else if (document.exitFullscreen) {
                            document.exitFullscreen().catch(()=>{});
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
        return ()=>window.removeEventListener("keydown", handleKeyDown);
    }, [
        history,
        handleMenuAction,
        handleTogglePlayback
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col h-screen bg-[#1e1e1e] overflow-hidden select-none text-white font-sans",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-9 bg-[#2d2d2d] border-b border-black flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-3 h-full flex items-center bg-[#d391fc]/10 border-r border-black/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-5 h-5 bg-[#d391fc] flex items-center justify-center rounded-sm",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[12px] font-black text-[#1e1e1e]",
                                                children: "Ae"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                lineNumber: 426,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                            lineNumber: 425,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 424,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$components$2f$video$2d$editor$2f$VideoMenuBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        onAction: handleMenuAction
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 429,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                lineNumber: 423,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full border border-white/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-1.5 h-1.5 rounded-full ${synced ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" : "bg-red-500 animate-pulse"}`
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                lineNumber: 434,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9px] font-black uppercase tracking-widest text-gray-500",
                                                children: synced ? "Live Link Active" : "Searching Peers"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                lineNumber: 435,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 433,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsMintModalOpen(true),
                                        className: "bg-[#00ffa3] hover:bg-[#00ffa3]/90 px-4 py-1 rounded text-[10px] font-black text-black uppercase tracking-widest transition-all shadow-[0_0_10px_rgba(0,255,163,0.2)] ml-2",
                                        children: "Mint Asset"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 439,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-white/5 hover:bg-white/10 px-4 py-1 rounded text-[10px] font-black text-white uppercase tracking-widest transition-all border border-white/10 ml-2",
                                        children: "Render"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 440,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                lineNumber: 432,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                        lineNumber: 422,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-grow overflow-hidden",
                        children: [
                            (showProject || showEffects) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[320px] flex flex-col border-r border-black shrink-0 z-30",
                                children: [
                                    showProject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: showEffects ? "h-1/2" : "h-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$components$2f$video$2d$editor$2f$ProjectPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            layers: layers,
                                            onFilesDrop: handleFiles
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                            lineNumber: 451,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 450,
                                        columnNumber: 33
                                    }, this),
                                    showEffects && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: showProject ? "h-1/2 border-t border-black/50" : "h-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$components$2f$video$2d$editor$2f$EffectsControl$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            activeLayer: activeLayer,
                                            onUpdateLayer: handleUpdateLayer
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                            lineNumber: 456,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 455,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                lineNumber: 448,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col flex-grow relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-grow flex flex-col bg-[#161616] relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$components$2f$video$2d$editor$2f$CompositionView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            playback: playback,
                                            layers: layers,
                                            activeLayerId: activeLayerId,
                                            onSelectLayer: setActiveLayerId,
                                            onTogglePlayback: handleTogglePlayback,
                                            onSeek: handleSeek,
                                            onFilesDrop: handleFiles,
                                            zoom: zoom
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                            lineNumber: 466,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 465,
                                        columnNumber: 25
                                    }, this),
                                    showTimeline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-[400px] border-t border-black z-20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$components$2f$video$2d$editor$2f$AETimeline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            playback: playback,
                                            layers: layers,
                                            activeLayerId: activeLayerId,
                                            onSelectLayer: setActiveLayerId,
                                            onToggleLayerProp: handleToggleLayerProp,
                                            onAddLayer: handleAddLayer,
                                            onSplit: handleSplitLayer,
                                            onSeek: handleSeek
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                            lineNumber: 481,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 480,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                lineNumber: 463,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                        lineNumber: 445,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                lineNumber: 420,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$components$2f$video$2d$editor$2f$VideoModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: modalConfig.isOpen,
                onClose: ()=>setModalConfig({
                        ...modalConfig,
                        isOpen: false
                    }),
                title: modalConfig.title,
                footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setModalConfig({
                                    ...modalConfig,
                                    isOpen: false
                                }),
                            className: "px-4 py-1.5 text-xs font-bold text-gray-500 hover:text-white transition-colors",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                            lineNumber: 505,
                            columnNumber: 25
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setModalConfig({
                                    ...modalConfig,
                                    isOpen: false
                                }),
                            className: "bg-[#d391fc] px-6 py-1.5 rounded-sm text-xs font-bold text-[#1e1e1e] hover:bg-[#d391fc]/90 shadow-[0_0_20px_rgba(211,145,252,0.3)]",
                            children: "OK"
                        }, void 0, false, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                            lineNumber: 511,
                            columnNumber: 25
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                    lineNumber: 504,
                    columnNumber: 21
                }, void 0),
                children: [
                    modalConfig.type === "COMP_SETTINGS" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-x-12 gap-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[10px] uppercase tracking-widest text-gray-500 font-black",
                                            children: "Composition Name"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                            lineNumber: 524,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            defaultValue: "Comp 1",
                                            className: "w-full bg-[#1a1a1a] border border-white/5 rounded px-3 py-2 text-white italic outline-none focus:border-[#d391fc]/50"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                            lineNumber: 525,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 523,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[10px] uppercase tracking-widest text-gray-500 font-black",
                                            children: "Frame Rate"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                            lineNumber: 528,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "w-full bg-[#1a1a1a] border border-white/5 rounded px-3 py-2 text-white outline-none focus:border-[#d391fc]/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "24 fps"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    selected: true,
                                                    children: "30 fps"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                    lineNumber: 531,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "60 fps"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                    lineNumber: 532,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                            lineNumber: 529,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 527,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[10px] uppercase tracking-widest text-gray-500 font-black",
                                            children: "Resolution"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                            lineNumber: 536,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    defaultValue: 1920,
                                                    className: "w-full bg-[#1a1a1a] border border-white/5 rounded px-2 py-1.5 text-white outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                    lineNumber: 538,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-600",
                                                    children: "x"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                    lineNumber: 539,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    defaultValue: 1080,
                                                    className: "w-full bg-[#1a1a1a] border border-white/5 rounded px-2 py-1.5 text-white outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                    lineNumber: 540,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                            lineNumber: 537,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 535,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[10px] uppercase tracking-widest text-gray-500 font-black",
                                            children: "Duration"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                            lineNumber: 544,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            defaultValue: "0:00:10:00",
                                            className: "w-full bg-[#1a1a1a] border border-white/5 rounded px-3 py-2 text-[#d391fc] font-mono outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                            lineNumber: 545,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 543,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                            lineNumber: 522,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                        lineNumber: 521,
                        columnNumber: 21
                    }, this),
                    modalConfig.type === "PREFERENCES" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-[10px] uppercase tracking-widest font-black text-[#d391fc]",
                                        children: "Previews"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 554,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between p-3 bg-white/5 rounded border border-white/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs",
                                                children: "Adaptive Resolution"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                lineNumber: 556,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-4 bg-[#d391fc] rounded-full relative",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute right-0.5 top-0.5 w-3 h-3 bg-[#1e1e1e] rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                    lineNumber: 558,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                lineNumber: 557,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 555,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                lineNumber: 553,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-[10px] uppercase tracking-widest font-black text-[#d391fc]",
                                        children: "Media & Disk Cache"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 563,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 bg-black/40 rounded border border-white/5 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-[11px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-500",
                                                        children: "Maximum Cache Size:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                        lineNumber: 566,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white",
                                                        children: "46.0 GB"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                        lineNumber: 567,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                lineNumber: 565,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-1 bg-white/10 rounded-full overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-full bg-[#d391fc] w-[65%]"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                    lineNumber: 570,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                lineNumber: 569,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 564,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                lineNumber: 562,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                        lineNumber: 552,
                        columnNumber: 21
                    }, this),
                    modalConfig.type === "RENDER" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 bg-[#d391fc]/10 rounded-full flex items-center justify-center mx-auto border border-[#d391fc]/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 border-2 border-[#d391fc] border-t-transparent rounded-full animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 580,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                lineNumber: 579,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-lg font-bold text-white italic",
                                        children: "Preparing Render Engine"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 583,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 text-xs",
                                        children: "Allocating virtual memory for BOLTChain sequence export..."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 584,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                lineNumber: 582,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                        lineNumber: 578,
                        columnNumber: 21
                    }, this),
                    modalConfig.type === "HELP" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-x-8 gap-y-2 text-[11px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between border-b border-white/5 py-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#d391fc] font-bold",
                                                children: "F1"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                lineNumber: 593,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300",
                                                children: "Help Center"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                lineNumber: 594,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 592,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between border-b border-white/5 py-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#d391fc] font-bold",
                                                children: "Space"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                lineNumber: 597,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300",
                                                children: "Play / Pause"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                lineNumber: 598,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 596,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between border-b border-white/5 py-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#d391fc] font-bold",
                                                children: "Ctrl + D"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                lineNumber: 601,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300",
                                                children: "Duplicate Layer"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                lineNumber: 602,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 600,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between border-b border-white/5 py-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#d391fc] font-bold",
                                                children: "Ctrl + Shift + D"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                lineNumber: 605,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300",
                                                children: "Split Layer"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                lineNumber: 606,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 604,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between border-b border-white/5 py-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#d391fc] font-bold",
                                                children: "Ctrl + K"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                lineNumber: 609,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300",
                                                children: "Comp Settings"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                lineNumber: 610,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 608,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between border-b border-white/5 py-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#d391fc] font-bold",
                                                children: "Ctrl + M / F5"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                lineNumber: 613,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300",
                                                children: "Render Queue"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                lineNumber: 614,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 612,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between border-b border-white/5 py-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#d391fc] font-bold",
                                                children: "Ctrl + N / Alt+N"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                lineNumber: 617,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300",
                                                children: "New Comp / Project"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                lineNumber: 618,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 616,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between border-b border-white/5 py-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#d391fc] font-bold",
                                                children: "Ctrl + A / Shift+A"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                lineNumber: 621,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300",
                                                children: "Select / Deselect"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                lineNumber: 622,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 620,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between border-b border-white/5 py-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#d391fc] font-bold",
                                                children: "Ctrl + / -"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                lineNumber: 625,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300",
                                                children: "Zoom In / Out"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                lineNumber: 626,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 624,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between border-b border-white/5 py-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#d391fc] font-bold",
                                                children: "Ctrl + 0"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                lineNumber: 629,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300",
                                                children: "Fit in Window"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                                lineNumber: 630,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 628,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                lineNumber: 591,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 bg-[#d391fc]/10 border border-[#d391fc]/20 rounded-md text-[10px] text-[#d391fc] font-medium leading-relaxed",
                                children: "Pro Tip: Use industry-standard After Effects shortcuts for maximum velocity. Press F11 for an immersive fullscreen experience."
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                lineNumber: 633,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                        lineNumber: 590,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                lineNumber: 499,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$components$2f$profile$2f$MintingModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isMintModalOpen,
                onClose: ()=>!isMinting && setIsMintModalOpen(false),
                asset: {
                    id: "video-project-1",
                    name: "Video Composition",
                    previewUrl: ""
                },
                onMint: handleMint,
                isMinting: isMinting
            }, void 0, false, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                lineNumber: 640,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=Documents_BOLTChainvas_apps_web_src_24351051._.js.map