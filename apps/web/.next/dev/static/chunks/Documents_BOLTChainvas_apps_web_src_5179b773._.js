(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/BOLTChainvas/apps/web/src/hooks/useYjs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useYjs",
    ()=>useYjs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/yjs/dist/yjs.mjs [app-client] (ecmascript)");
// @ts-ignore - y-webrtc lacks robust typescript definitions sometimes
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$y$2d$webrtc$2f$src$2f$y$2d$webrtc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/y-webrtc/src/y-webrtc.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
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
    _s();
    const [synced, setSynced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [provider, setProvider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // We use refs to keep the identical Y.Doc instance across re-renders
    const ydocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (!ydocRef.current) {
        ydocRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Doc"]();
    }
    const ydoc = ydocRef.current;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useYjs.useEffect": ()=>{
            // Initialize WebRTC Provider
            // Connects to public signaling servers. In production, you'd host your own.
            const webrtcProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$y$2d$webrtc$2f$src$2f$y$2d$webrtc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebrtcProvider"](`chainvas-${roomName}`, ydoc, {
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
            webrtcProvider.on("synced", {
                "useYjs.useEffect": (isSynced)=>{
                    setSynced(isSynced.synced);
                }
            }["useYjs.useEffect"]);
            return ({
                "useYjs.useEffect": ()=>{
                    webrtcProvider.disconnect();
                    webrtcProvider.destroy();
                    ydoc.destroy();
                }
            })["useYjs.useEffect"];
        }
    }["useYjs.useEffect"], [
        roomName,
        ydoc
    ]);
    return {
        ydoc,
        provider,
        synced
    };
}
_s(useYjs, "BGsnxaX6rWHz8toUuDUyTb14dZA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/BOLTChainvas/apps/web/src/hooks/useHistory.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHistory",
    ()=>useHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useHistory(initialState) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "2fd2307d161036a35b2f8fc191044279d8cb1cb26db2e59cb49b1339b20f9472") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2fd2307d161036a35b2f8fc191044279d8cb1cb26db2e59cb49b1339b20f9472";
    }
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    if ($[1] !== initialState) {
        t0 = [
            initialState
        ];
        $[1] = initialState;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const state = history[index];
    let t1;
    if ($[3] !== index) {
        t1 = ({
            "useHistory[setState]": (nextState)=>{
                setHistory({
                    "useHistory[setState > setHistory()]": (prevHistory)=>{
                        const current = prevHistory[index];
                        const next = typeof nextState === "function" ? nextState(current) : nextState;
                        if (JSON.stringify(next) === JSON.stringify(current)) {
                            return prevHistory;
                        }
                        const newHistory = prevHistory.slice(0, index + 1);
                        newHistory.push(next);
                        if (newHistory.length > 50) {
                            newHistory.shift();
                            setIndex(newHistory.length - 1);
                        } else {
                            setIndex(newHistory.length - 1);
                        }
                        return newHistory;
                    }
                }["useHistory[setState > setHistory()]"]);
            }
        })["useHistory[setState]"];
        $[3] = index;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const setState = t1;
    let t2;
    if ($[5] !== index) {
        t2 = ({
            "useHistory[undo]": ()=>{
                if (index > 0) {
                    setIndex(_useHistoryUndoSetIndex);
                }
            }
        })["useHistory[undo]"];
        $[5] = index;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const undo = t2;
    let t3;
    if ($[7] !== history.length || $[8] !== index) {
        t3 = ({
            "useHistory[redo]": ()=>{
                if (index < history.length - 1) {
                    setIndex(_useHistoryRedoSetIndex);
                }
            }
        })["useHistory[redo]"];
        $[7] = history.length;
        $[8] = index;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    const redo = t3;
    const canUndo = index > 0;
    const canRedo = index < history.length - 1;
    let t4;
    if ($[10] !== canRedo || $[11] !== canUndo || $[12] !== redo || $[13] !== undo) {
        t4 = {
            undo,
            redo,
            canUndo,
            canRedo
        };
        $[10] = canRedo;
        $[11] = canUndo;
        $[12] = redo;
        $[13] = undo;
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    let t5;
    if ($[15] !== setState || $[16] !== state || $[17] !== t4) {
        t5 = [
            state,
            setState,
            t4
        ];
        $[15] = setState;
        $[16] = state;
        $[17] = t4;
        $[18] = t5;
    } else {
        t5 = $[18];
    }
    return t5;
}
_s(useHistory, "xd06rwIpjbvEahi36N51mMQVUyY=");
function _useHistoryRedoSetIndex(prev_0) {
    return prev_0 + 1;
}
function _useHistoryUndoSetIndex(prev) {
    return prev - 1;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/folder.js [app-client] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/film.js [app-client] (ecmascript) <export default as Film>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/music.js [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ProjectPanel(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "491b705d345b45c7a8f97bb43e126536763e5ffd19fa7accc87d5f23186b3d78") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "491b705d345b45c7a8f97bb43e126536763e5ffd19fa7accc87d5f23186b3d78";
    }
    const { layers, onFilesDrop } = t0;
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "ProjectPanel[handleDragOver]": (e)=>{
                e.preventDefault();
                setIsDragging(true);
            }
        })["ProjectPanel[handleDragOver]"];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const handleDragOver = t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "ProjectPanel[handleDragLeave]": ()=>{
                setIsDragging(false);
            }
        })["ProjectPanel[handleDragLeave]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const handleDragLeave = t2;
    let t3;
    if ($[3] !== onFilesDrop) {
        t3 = ({
            "ProjectPanel[handleDrop]": (e_0)=>{
                e_0.preventDefault();
                setIsDragging(false);
                if (e_0.dataTransfer.files.length > 0) {
                    onFilesDrop(e_0.dataTransfer.files);
                }
            }
        })["ProjectPanel[handleDrop]"];
        $[3] = onFilesDrop;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const handleDrop = t3;
    const t4 = `flex flex-col h-full bg-[#252526] border-r border-black overflow-hidden transition-colors ${isDragging ? "bg-[#d391fc]/10" : ""}`;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                    className: "w-3.5 h-3.5 text-[#00e0ff]"
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                    lineNumber: 69,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[10px] font-black text-gray-300 uppercase tracking-widest",
                    children: "Project"
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                    lineNumber: 69,
                    columnNumber: 100
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-9 bg-[#3c3c3c] flex items-center px-3 border-b border-black justify-between",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        className: "w-3.5 h-3.5 text-gray-400 hover:text-white cursor-pointer"
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                        lineNumber: 76,
                        columnNumber: 150
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                    lineNumber: 76,
                    columnNumber: 109
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-2 border-b border-black flex items-center gap-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-grow flex items-center bg-[#1e1e1e] rounded px-2 py-1 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        className: "w-3 h-3 text-gray-500"
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                        lineNumber: 83,
                        columnNumber: 159
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "Search assets...",
                        className: "bg-transparent border-none outline-none text-[10px] text-gray-400 w-full"
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                        lineNumber: 83,
                        columnNumber: 203
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                lineNumber: 83,
                columnNumber: 77
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
            lineNumber: 83,
            columnNumber: 10
        }, this);
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            className: "sticky top-0 bg-[#252526] text-gray-500 font-bold uppercase text-[9px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "px-3 py-2 border-b border-black",
                        children: "Name"
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                        lineNumber: 90,
                        columnNumber: 104
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "px-3 py-2 border-b border-black text-right",
                        children: "Size"
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                        lineNumber: 90,
                        columnNumber: 161
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                lineNumber: 90,
                columnNumber: 100
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    let t9;
    if ($[9] !== layers) {
        t9 = layers.map(_ProjectPanelLayersMap);
        $[9] = layers;
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] !== layers.length) {
        t10 = layers.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                colSpan: 2,
                className: "px-3 py-8 text-center text-gray-600 italic",
                children: "Drag and drop assets here"
            }, void 0, false, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                lineNumber: 105,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
            lineNumber: 105,
            columnNumber: 34
        }, this);
        $[11] = layers.length;
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] !== t10 || $[14] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-grow overflow-y-auto custom-scrollbar",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full text-left text-[11px] border-separate border-spacing-0",
                children: [
                    t8,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: [
                            t9,
                            t10
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                        lineNumber: 113,
                        columnNumber: 156
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                lineNumber: 113,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[13] = t10;
        $[14] = t9;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "aspect-video bg-black flex items-center justify-center rounded border border-white/5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                className: "w-8 h-8 text-white/10"
            }, void 0, false, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                lineNumber: 122,
                columnNumber: 113
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    let t13;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-[150px] border-t border-black bg-black/20 flex flex-col p-3 gap-2",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] text-white font-bold truncate",
                            children: "No Asset Selected"
                        }, void 0, false, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                            lineNumber: 129,
                            columnNumber: 138
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[9px] text-gray-500",
                            children: "1920x1080 (1.0)"
                        }, void 0, false, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                            lineNumber: 129,
                            columnNumber: 222
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                    lineNumber: 129,
                    columnNumber: 101
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[17] = t13;
    } else {
        t13 = $[17];
    }
    let t14;
    if ($[18] !== handleDrop || $[19] !== t11 || $[20] !== t4) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            onDragOver: handleDragOver,
            onDragLeave: handleDragLeave,
            onDrop: handleDrop,
            children: [
                t6,
                t7,
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[18] = handleDrop;
        $[19] = t11;
        $[20] = t4;
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    return t14;
}
_s(ProjectPanel, "VIDKbg2yfT0CLfTnlFHLO2Fjmb8=");
_c = ProjectPanel;
function _ProjectPanelLayersMap(layer, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        className: "hover:bg-[#37373d] transition-colors cursor-pointer group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-3 py-2 flex items-center gap-3 text-gray-300",
                children: [
                    layer.type === "VIDEO" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                        className: "w-3.5 h-3.5 text-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                        lineNumber: 147,
                        columnNumber: 190
                    }, this),
                    layer.type === "AUDIO" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
                        className: "w-3.5 h-3.5 text-purple-400"
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                        lineNumber: 147,
                        columnNumber: 264
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "truncate max-w-[120px]",
                        children: layer.name
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                        lineNumber: 147,
                        columnNumber: 314
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                lineNumber: 147,
                columnNumber: 99
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-3 py-2 text-right text-gray-500 font-mono",
                children: "--"
            }, void 0, false, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
                lineNumber: 147,
                columnNumber: 379
            }, this)
        ]
    }, layer.id, true, {
        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx",
        lineNumber: 147,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ProjectPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EffectsControl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/sliders-vertical.js [app-client] (ecmascript) <export default as Sliders>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/maximize.js [app-client] (ecmascript) <export default as Maximize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function EffectsControl(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(93);
    if ($[0] !== "63521269817e51b6fa729c21e730d563239810f3d053e3cfd537bbf060eeae24") {
        for(let $i = 0; $i < 93; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "63521269817e51b6fa729c21e730d563239810f3d053e3cfd537bbf060eeae24";
    }
    const { activeLayer, onUpdateLayer } = t0;
    if (!activeLayer) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col h-full bg-[#252526] border-r border-black items-center justify-center text-gray-600 p-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__["Sliders"], {
                        className: "w-12 h-12 mb-4 opacity-10"
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                        lineNumber: 26,
                        columnNumber: 143
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-bold uppercase tracking-widest opacity-30",
                        children: "No Layer Selected"
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                        lineNumber: 26,
                        columnNumber: 192
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                lineNumber: 26,
                columnNumber: 12
            }, this);
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        return t1;
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__["Sliders"], {
            className: "w-3.5 h-3.5 mr-2 text-[#d391fc]"
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== activeLayer.name) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-9 bg-[#3c3c3c] flex items-center px-3 border-b border-black shrink-0",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[10px] font-black text-gray-300 uppercase tracking-widest truncate",
                    children: [
                        "Effect Controls: ",
                        activeLayer.name
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                    lineNumber: 42,
                    columnNumber: 102
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[3] = activeLayer.name;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-7 px-2 flex items-center gap-2 bg-[#2d2d2d] cursor-pointer hover:bg-[#333]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "w-3 h-3 text-gray-500"
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                    lineNumber: 50,
                    columnNumber: 104
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[10px] font-bold text-gray-400 uppercase tracking-tighter",
                    children: "Transform"
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                    lineNumber: 50,
                    columnNumber: 153
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const t5 = `${activeLayer.position.x}, ${activeLayer.position.y}`;
    let t6;
    if ($[7] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AEProperty, {
            label: "Anchor Point",
            icon: t4,
            value: t5
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[7] = t5;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== activeLayer.id || $[10] !== activeLayer.position || $[11] !== onUpdateLayer) {
        t7 = ({
            "EffectsControl[<AEProperty>.onChange]": (val)=>onUpdateLayer(activeLayer.id, {
                    position: {
                        ...activeLayer.position,
                        x: val
                    }
                })
        })["EffectsControl[<AEProperty>.onChange]"];
        $[9] = activeLayer.id;
        $[10] = activeLayer.position;
        $[11] = onUpdateLayer;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== activeLayer.position.x || $[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AEProperty, {
            label: "Position X",
            value: activeLayer.position.x,
            unit: "%",
            onChange: t7,
            scrub: true,
            min: -100,
            max: 200
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[13] = activeLayer.position.x;
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== activeLayer.id || $[17] !== activeLayer.position || $[18] !== onUpdateLayer) {
        t9 = ({
            "EffectsControl[<AEProperty>.onChange]": (val_0)=>onUpdateLayer(activeLayer.id, {
                    position: {
                        ...activeLayer.position,
                        y: val_0
                    }
                })
        })["EffectsControl[<AEProperty>.onChange]"];
        $[16] = activeLayer.id;
        $[17] = activeLayer.position;
        $[18] = onUpdateLayer;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== activeLayer.position.y || $[21] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AEProperty, {
            label: "Position Y",
            value: activeLayer.position.y,
            unit: "%",
            onChange: t9,
            scrub: true,
            min: -100,
            max: 200
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[20] = activeLayer.position.y;
        $[21] = t9;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== t10 || $[24] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4",
            children: [
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 125,
            columnNumber: 11
        }, this);
        $[23] = t10;
        $[24] = t8;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__["Maximize"], {
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, this);
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== activeLayer.id || $[28] !== onUpdateLayer) {
        t13 = ({
            "EffectsControl[<AEProperty>.onChange]": (val_1)=>onUpdateLayer(activeLayer.id, {
                    scale: val_1
                })
        })["EffectsControl[<AEProperty>.onChange]"];
        $[27] = activeLayer.id;
        $[28] = onUpdateLayer;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] !== activeLayer.scale || $[31] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AEProperty, {
            label: "Scale",
            icon: t12,
            value: activeLayer.scale,
            unit: "%",
            onChange: t13,
            scrub: true,
            min: 0,
            max: 500,
            slider: true
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[30] = activeLayer.scale;
        $[31] = t13;
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    let t15;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    let t16;
    if ($[34] !== activeLayer.id || $[35] !== onUpdateLayer) {
        t16 = ({
            "EffectsControl[<AEProperty>.onChange]": (val_2)=>onUpdateLayer(activeLayer.id, {
                    rotation: val_2
                })
        })["EffectsControl[<AEProperty>.onChange]"];
        $[34] = activeLayer.id;
        $[35] = onUpdateLayer;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] !== activeLayer.rotation || $[38] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AEProperty, {
            label: "Rotation",
            icon: t15,
            value: activeLayer.rotation,
            unit: "\xB0",
            onChange: t16,
            scrub: true,
            min: -360,
            max: 360
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        $[37] = activeLayer.rotation;
        $[38] = t16;
        $[39] = t17;
    } else {
        t17 = $[39];
    }
    let t18;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__["Sliders"], {
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 192,
            columnNumber: 11
        }, this);
        $[40] = t18;
    } else {
        t18 = $[40];
    }
    let t19;
    if ($[41] !== activeLayer.id || $[42] !== onUpdateLayer) {
        t19 = ({
            "EffectsControl[<AEProperty>.onChange]": (val_3)=>onUpdateLayer(activeLayer.id, {
                    opacity: val_3
                })
        })["EffectsControl[<AEProperty>.onChange]"];
        $[41] = activeLayer.id;
        $[42] = onUpdateLayer;
        $[43] = t19;
    } else {
        t19 = $[43];
    }
    let t20;
    if ($[44] !== activeLayer.opacity || $[45] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AEProperty, {
            label: "Opacity",
            icon: t18,
            value: activeLayer.opacity,
            unit: "%",
            onChange: t19,
            scrub: true,
            min: 0,
            max: 100,
            slider: true
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[44] = activeLayer.opacity;
        $[45] = t19;
        $[46] = t20;
    } else {
        t20 = $[46];
    }
    let t21;
    if ($[47] !== t11 || $[48] !== t14 || $[49] !== t17 || $[50] !== t20 || $[51] !== t6) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col border-b border-black",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 flex flex-col gap-5",
                    children: [
                        t6,
                        t11,
                        t14,
                        t17,
                        t20
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                    lineNumber: 221,
                    columnNumber: 68
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[47] = t11;
        $[48] = t14;
        $[49] = t17;
        $[50] = t20;
        $[51] = t6;
        $[52] = t21;
    } else {
        t21 = $[52];
    }
    let t22;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-7 px-2 flex items-center gap-2 bg-[#2d2d2d] cursor-pointer hover:bg-[#333]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "w-3 h-3 text-gray-500"
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                    lineNumber: 233,
                    columnNumber: 105
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[10px] font-bold text-gray-400 uppercase tracking-tighter",
                    children: "Layer Styles"
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                    lineNumber: 233,
                    columnNumber: 154
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 233,
            columnNumber: 11
        }, this);
        $[53] = t22;
    } else {
        t22 = $[53];
    }
    let t23;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[10px] font-black text-[#d391fc] uppercase tracking-widest",
            children: "Drop Shadow"
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[54] = t23;
    } else {
        t23 = $[54];
    }
    const t24 = activeLayer.styles?.dropShadow.enabled;
    let t25;
    if ($[55] !== activeLayer.id || $[56] !== activeLayer.styles || $[57] !== onUpdateLayer) {
        t25 = ({
            "EffectsControl[<input>.onChange]": (e)=>onUpdateLayer(activeLayer.id, {
                    styles: {
                        ...activeLayer.styles,
                        dropShadow: {
                            ...activeLayer.styles.dropShadow,
                            enabled: e.target.checked
                        }
                    }
                })
        })["EffectsControl[<input>.onChange]"];
        $[55] = activeLayer.id;
        $[56] = activeLayer.styles;
        $[57] = onUpdateLayer;
        $[58] = t25;
    } else {
        t25 = $[58];
    }
    let t26;
    if ($[59] !== t24 || $[60] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "checkbox",
                    checked: t24,
                    onChange: t25,
                    className: "w-3 h-3 accent-[#d391fc]"
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                    lineNumber: 268,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[59] = t24;
        $[60] = t25;
        $[61] = t26;
    } else {
        t26 = $[61];
    }
    let t27;
    if ($[62] !== activeLayer.id || $[63] !== activeLayer.styles || $[64] !== onUpdateLayer) {
        t27 = activeLayer.styles?.dropShadow.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pl-4 space-y-4 border-l border-white/5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AEProperty, {
                    label: "Blur",
                    value: activeLayer.styles.dropShadow.blur,
                    unit: "px",
                    onChange: {
                        "EffectsControl[<AEProperty>.onChange]": (val_4)=>onUpdateLayer(activeLayer.id, {
                                styles: {
                                    ...activeLayer.styles,
                                    dropShadow: {
                                        ...activeLayer.styles.dropShadow,
                                        blur: val_4
                                    }
                                }
                            })
                    }["EffectsControl[<AEProperty>.onChange]"],
                    scrub: true,
                    min: 0,
                    max: 100,
                    slider: true
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                    lineNumber: 277,
                    columnNumber: 109
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AEProperty, {
                    label: "Distance",
                    value: activeLayer.styles.dropShadow.distance,
                    unit: "px",
                    onChange: {
                        "EffectsControl[<AEProperty>.onChange]": (val_5)=>onUpdateLayer(activeLayer.id, {
                                styles: {
                                    ...activeLayer.styles,
                                    dropShadow: {
                                        ...activeLayer.styles.dropShadow,
                                        distance: val_5
                                    }
                                }
                            })
                    }["EffectsControl[<AEProperty>.onChange]"],
                    scrub: true,
                    min: 0,
                    max: 100,
                    slider: true
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                    lineNumber: 287,
                    columnNumber: 98
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AEProperty, {
                    label: "Angle",
                    value: activeLayer.styles.dropShadow.angle,
                    unit: "\xB0",
                    onChange: {
                        "EffectsControl[<AEProperty>.onChange]": (val_6)=>onUpdateLayer(activeLayer.id, {
                                styles: {
                                    ...activeLayer.styles,
                                    dropShadow: {
                                        ...activeLayer.styles.dropShadow,
                                        angle: val_6
                                    }
                                }
                            })
                    }["EffectsControl[<AEProperty>.onChange]"],
                    scrub: true,
                    min: 0,
                    max: 360
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                    lineNumber: 297,
                    columnNumber: 98
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AEProperty, {
                    label: "Opacity",
                    value: activeLayer.styles.dropShadow.opacity,
                    unit: "%",
                    onChange: {
                        "EffectsControl[<AEProperty>.onChange]": (val_7)=>onUpdateLayer(activeLayer.id, {
                                styles: {
                                    ...activeLayer.styles,
                                    dropShadow: {
                                        ...activeLayer.styles.dropShadow,
                                        opacity: val_7
                                    }
                                }
                            })
                    }["EffectsControl[<AEProperty>.onChange]"],
                    scrub: true,
                    min: 0,
                    max: 100,
                    slider: true
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                    lineNumber: 307,
                    columnNumber: 84
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-[11px] text-gray-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "group-hover:text-gray-300 transition-colors uppercase tracking-tight font-medium",
                                children: "Color"
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                                lineNumber: 317,
                                columnNumber: 222
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                            lineNumber: 317,
                            columnNumber: 155
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "color",
                            value: activeLayer.styles.dropShadow.color,
                            onChange: {
                                "EffectsControl[<input>.onChange]": (e_0)=>onUpdateLayer(activeLayer.id, {
                                        styles: {
                                            ...activeLayer.styles,
                                            dropShadow: {
                                                ...activeLayer.styles.dropShadow,
                                                color: e_0.target.value
                                            }
                                        }
                                    })
                            }["EffectsControl[<input>.onChange]"],
                            className: "w-8 h-4 bg-transparent border-none cursor-pointer"
                        }, void 0, false, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                            lineNumber: 317,
                            columnNumber: 339
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                    lineNumber: 317,
                    columnNumber: 98
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 277,
            columnNumber: 53
        }, this);
        $[62] = activeLayer.id;
        $[63] = activeLayer.styles;
        $[64] = onUpdateLayer;
        $[65] = t27;
    } else {
        t27 = $[65];
    }
    let t28;
    if ($[66] !== t26 || $[67] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                t26,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 337,
            columnNumber: 11
        }, this);
        $[66] = t26;
        $[67] = t27;
        $[68] = t28;
    } else {
        t28 = $[68];
    }
    let t29;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[10px] font-black text-[#d391fc] uppercase tracking-widest",
            children: "Gaussian Blur"
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 346,
            columnNumber: 11
        }, this);
        $[69] = t29;
    } else {
        t29 = $[69];
    }
    const t30 = activeLayer.styles?.blur.enabled;
    let t31;
    if ($[70] !== activeLayer.id || $[71] !== activeLayer.styles || $[72] !== onUpdateLayer) {
        t31 = ({
            "EffectsControl[<input>.onChange]": (e_1)=>onUpdateLayer(activeLayer.id, {
                    styles: {
                        ...activeLayer.styles,
                        blur: {
                            ...activeLayer.styles.blur,
                            enabled: e_1.target.checked
                        }
                    }
                })
        })["EffectsControl[<input>.onChange]"];
        $[70] = activeLayer.id;
        $[71] = activeLayer.styles;
        $[72] = onUpdateLayer;
        $[73] = t31;
    } else {
        t31 = $[73];
    }
    let t32;
    if ($[74] !== t30 || $[75] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t29,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "checkbox",
                    checked: t30,
                    onChange: t31,
                    className: "w-3 h-3 accent-[#d391fc]"
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                    lineNumber: 374,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 374,
            columnNumber: 11
        }, this);
        $[74] = t30;
        $[75] = t31;
        $[76] = t32;
    } else {
        t32 = $[76];
    }
    let t33;
    if ($[77] !== activeLayer.id || $[78] !== activeLayer.styles || $[79] !== onUpdateLayer) {
        t33 = activeLayer.styles?.blur.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pl-4 space-y-4 border-l border-white/5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AEProperty, {
                label: "Amount",
                value: activeLayer.styles.blur.amount,
                unit: "px",
                onChange: {
                    "EffectsControl[<AEProperty>.onChange]": (val_8)=>onUpdateLayer(activeLayer.id, {
                            styles: {
                                ...activeLayer.styles,
                                blur: {
                                    ...activeLayer.styles.blur,
                                    amount: val_8
                                }
                            }
                        })
                }["EffectsControl[<AEProperty>.onChange]"],
                scrub: true,
                min: 0,
                max: 100,
                slider: true
            }, void 0, false, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                lineNumber: 383,
                columnNumber: 103
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 383,
            columnNumber: 47
        }, this);
        $[77] = activeLayer.id;
        $[78] = activeLayer.styles;
        $[79] = onUpdateLayer;
        $[80] = t33;
    } else {
        t33 = $[80];
    }
    let t34;
    if ($[81] !== t32 || $[82] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                t32,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 403,
            columnNumber: 11
        }, this);
        $[81] = t32;
        $[82] = t33;
        $[83] = t34;
    } else {
        t34 = $[83];
    }
    let t35;
    if ($[84] !== t28 || $[85] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col border-b border-black",
            children: [
                t22,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 flex flex-col gap-6",
                    children: [
                        t28,
                        t34
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                    lineNumber: 412,
                    columnNumber: 69
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 412,
            columnNumber: 11
        }, this);
        $[84] = t28;
        $[85] = t34;
        $[86] = t35;
    } else {
        t35 = $[86];
    }
    let t36;
    if ($[87] !== t21 || $[88] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-grow overflow-y-auto custom-scrollbar",
            children: [
                t21,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 421,
            columnNumber: 11
        }, this);
        $[87] = t21;
        $[88] = t35;
        $[89] = t36;
    } else {
        t36 = $[89];
    }
    let t37;
    if ($[90] !== t2 || $[91] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full bg-[#252526] border-r border-black overflow-hidden select-none",
            children: [
                t2,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 430,
            columnNumber: 11
        }, this);
        $[90] = t2;
        $[91] = t36;
        $[92] = t37;
    } else {
        t37 = $[92];
    }
    return t37;
}
_c = EffectsControl;
function AEProperty(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(44);
    if ($[0] !== "63521269817e51b6fa729c21e730d563239810f3d053e3cfd537bbf060eeae24") {
        for(let $i = 0; $i < 44; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "63521269817e51b6fa729c21e730d563239810f3d053e3cfd537bbf060eeae24";
    }
    const { label, value, unit: t1, icon, active: t2, scrub: t3, slider: t4, min: t5, max: t6, onChange } = t0;
    const unit = t1 === undefined ? "" : t1;
    t2 === undefined ? false : t2;
    const scrub = t3 === undefined ? false : t3;
    const slider = t4 === undefined ? false : t4;
    const min = t5 === undefined ? 0 : t5;
    const max = t6 === undefined ? 100 : t6;
    const [isScrubbing, setIsScrubbing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const startX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const startVal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    let t7;
    if ($[1] !== onChange || $[2] !== scrub || $[3] !== value) {
        t7 = ({
            "AEProperty[handleMouseDown]": (e)=>{
                if (!scrub || !onChange || typeof value !== "number") {
                    return;
                }
                setIsScrubbing(true);
                startX.current = e.clientX;
                startVal.current = value;
                document.body.style.cursor = "ew-resize";
            }
        })["AEProperty[handleMouseDown]"];
        $[1] = onChange;
        $[2] = scrub;
        $[3] = value;
        $[4] = t7;
    } else {
        t7 = $[4];
    }
    const handleMouseDown = t7;
    let t8;
    let t9;
    if ($[5] !== isScrubbing || $[6] !== max || $[7] !== min || $[8] !== onChange) {
        t8 = ({
            "AEProperty[useEffect()]": ()=>{
                if (!isScrubbing) {
                    return;
                }
                const handleMouseMove = {
                    "AEProperty[useEffect() > handleMouseMove]": (e_0)=>{
                        const delta = e_0.clientX - startX.current;
                        const factor = e_0.shiftKey ? 2 : e_0.altKey ? 0.1 : 0.5;
                        const newVal = Math.round((startVal.current + delta * factor) * 10) / 10;
                        onChange?.(Math.min(max, Math.max(min, newVal)));
                    }
                }["AEProperty[useEffect() > handleMouseMove]"];
                const handleMouseUp = {
                    "AEProperty[useEffect() > handleMouseUp]": ()=>{
                        setIsScrubbing(false);
                        document.body.style.cursor = "default";
                    }
                }["AEProperty[useEffect() > handleMouseUp]"];
                window.addEventListener("mousemove", handleMouseMove);
                window.addEventListener("mouseup", handleMouseUp);
                return ()=>{
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("mouseup", handleMouseUp);
                };
            }
        })["AEProperty[useEffect()]"];
        t9 = [
            isScrubbing,
            min,
            max,
            onChange
        ];
        $[5] = isScrubbing;
        $[6] = max;
        $[7] = min;
        $[8] = onChange;
        $[9] = t8;
        $[10] = t9;
    } else {
        t8 = $[9];
        t9 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t8, t9);
    let t10;
    if ($[11] !== label || $[12] !== onChange || $[13] !== value) {
        t10 = ({
            "AEProperty[handleClick]": ()=>{
                if (!onChange || typeof value !== "number") {
                    return;
                }
                const newVal_0 = prompt(`Enter ${label}:`, value.toString());
                if (newVal_0 !== null) {
                    const num = parseFloat(newVal_0);
                    if (!isNaN(num)) {
                        onChange(num);
                    }
                }
            }
        })["AEProperty[handleClick]"];
        $[11] = label;
        $[12] = onChange;
        $[13] = value;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    const handleClick = t10;
    let t11;
    if ($[15] !== icon) {
        t11 = icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "w-3.5 flex justify-center opacity-60",
            children: icon
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 569,
            columnNumber: 19
        }, this);
        $[15] = icon;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] !== label) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "group-hover:text-gray-300 transition-colors uppercase tracking-tight font-black",
            children: label
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 577,
            columnNumber: 11
        }, this);
        $[17] = label;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] !== t11 || $[20] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 text-[10px] text-gray-500",
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 585,
            columnNumber: 11
        }, this);
        $[19] = t11;
        $[20] = t12;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] !== handleClick) {
        t14 = ({
            "AEProperty[<div>.onClick]": (e_1)=>e_1.detail === 2 && handleClick()
        })["AEProperty[<div>.onClick]"];
        $[22] = handleClick;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    const t15 = `text-[10px] font-mono cursor-ew-resize select-none px-1 rounded transition-colors ${isScrubbing ? "text-[#00e0ff] bg-[#00e0ff]/10" : "text-[#00e0ff] hover:bg-white/5 border-b border-dotted border-[#00e0ff]/30"}`;
    let t16;
    if ($[24] !== value) {
        t16 = typeof value === "number" ? value.toFixed(1) : value;
        $[24] = value;
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    let t17;
    if ($[26] !== handleMouseDown || $[27] !== t14 || $[28] !== t15 || $[29] !== t16 || $[30] !== unit) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onMouseDown: handleMouseDown,
            onClick: t14,
            title: "Drag to scrub, double click to type",
            className: t15,
            children: [
                t16,
                unit
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 613,
            columnNumber: 11
        }, this);
        $[26] = handleMouseDown;
        $[27] = t14;
        $[28] = t15;
        $[29] = t16;
        $[30] = unit;
        $[31] = t17;
    } else {
        t17 = $[31];
    }
    let t18;
    if ($[32] !== t13 || $[33] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t13,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 625,
            columnNumber: 11
        }, this);
        $[32] = t13;
        $[33] = t17;
        $[34] = t18;
    } else {
        t18 = $[34];
    }
    let t19;
    if ($[35] !== max || $[36] !== min || $[37] !== onChange || $[38] !== slider || $[39] !== value) {
        t19 = slider && typeof value === "number" && onChange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-1 bg-black/40 rounded-full overflow-hidden group/slider",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "range",
                    min: min,
                    max: max,
                    step: 0.1,
                    value: value,
                    onChange: {
                        "AEProperty[<input>.onChange]": (e_2)=>onChange(parseFloat(e_2.target.value))
                    }["AEProperty[<input>.onChange]"],
                    className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                    lineNumber: 634,
                    columnNumber: 146
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 left-0 h-full bg-[#00e0ff]/40 group-hover/slider:bg-[#00e0ff]/60 transition-colors",
                    style: {
                        width: `${(value - min) / (max - min) * 100}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
                    lineNumber: 636,
                    columnNumber: 117
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 634,
            columnNumber: 62
        }, this);
        $[35] = max;
        $[36] = min;
        $[37] = onChange;
        $[38] = slider;
        $[39] = value;
        $[40] = t19;
    } else {
        t19 = $[40];
    }
    let t20;
    if ($[41] !== t18 || $[42] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-1.5 group",
            children: [
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx",
            lineNumber: 650,
            columnNumber: 11
        }, this);
        $[41] = t18;
        $[42] = t19;
        $[43] = t20;
    } else {
        t20 = $[43];
    }
    return t20;
}
_s(AEProperty, "oICZGrjz8A1h8b1DWTKlDTWq+7k=");
_c1 = AEProperty;
var _c, _c1;
__turbopack_context__.k.register(_c, "EffectsControl");
__turbopack_context__.k.register(_c1, "AEProperty");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompositionView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/skip-back.js [app-client] (ecmascript) <export default as SkipBack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-client] (ecmascript) <export default as SkipForward>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/maximize.js [app-client] (ecmascript) <export default as Maximize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CompositionView(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(64);
    if ($[0] !== "cf6eff7fb0dbf108a931029cec62e9c14cf0a270affff9c93c5e77f9cf8416fd") {
        for(let $i = 0; $i < 64; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cf6eff7fb0dbf108a931029cec62e9c14cf0a270affff9c93c5e77f9cf8416fd";
    }
    const { playback, layers, activeLayerId, onSelectLayer, onTogglePlayback, onSeek, onFilesDrop } = t0;
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== playback.fps) {
        t1 = ({
            "CompositionView[formatTimecode]": (seconds)=>{
                const h = Math.floor(seconds / 3600);
                const m = Math.floor(seconds % 3600 / 60);
                const s = Math.floor(seconds % 60);
                const f = Math.floor(seconds % 1 * playback.fps);
                return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}:${f.toString().padStart(2, "0")}`;
            }
        })["CompositionView[formatTimecode]"];
        $[1] = playback.fps;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const formatTimecode = t1;
    let t2;
    let t3;
    if ($[3] !== playback.isPlaying) {
        t2 = ({
            "CompositionView[useEffect()]": ()=>{
                const videos = document.querySelectorAll("video");
                videos.forEach({
                    "CompositionView[useEffect() > videos.forEach()]": (v)=>{
                        if (playback.isPlaying) {
                            v.play().catch(_CompositionViewUseEffectVideosForEachAnonymous);
                        } else {
                            v.pause();
                        }
                    }
                }["CompositionView[useEffect() > videos.forEach()]"]);
            }
        })["CompositionView[useEffect()]"];
        t3 = [
            playback.isPlaying
        ];
        $[3] = playback.isPlaying;
        $[4] = t2;
        $[5] = t3;
    } else {
        t2 = $[4];
        t3 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[6] !== playback.currentTime) {
        t4 = ({
            "CompositionView[useEffect()]": ()=>{
                const videos_0 = document.querySelectorAll("video");
                videos_0.forEach({
                    "CompositionView[useEffect() > videos_0.forEach()]": (v_0)=>{
                        if (Math.abs(v_0.currentTime - playback.currentTime) > 0.1) {
                            v_0.currentTime = playback.currentTime;
                        }
                    }
                }["CompositionView[useEffect() > videos_0.forEach()]"]);
            }
        })["CompositionView[useEffect()]"];
        t5 = [
            playback.currentTime
        ];
        $[6] = playback.currentTime;
        $[7] = t4;
        $[8] = t5;
    } else {
        t4 = $[7];
        t5 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "CompositionView[handleDragOver]": (e)=>{
                e.preventDefault();
                setIsDragging(true);
            }
        })["CompositionView[handleDragOver]"];
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    const handleDragOver = t6;
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "CompositionView[handleDragLeave]": ()=>{
                setIsDragging(false);
            }
        })["CompositionView[handleDragLeave]"];
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    const handleDragLeave = t7;
    let t8;
    if ($[11] !== onFilesDrop) {
        t8 = ({
            "CompositionView[handleDrop]": (e_0)=>{
                e_0.preventDefault();
                setIsDragging(false);
                if (e_0.dataTransfer.files.length > 0) {
                    onFilesDrop(e_0.dataTransfer.files);
                }
            }
        })["CompositionView[handleDrop]"];
        $[11] = onFilesDrop;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    const handleDrop = t8;
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold text-white uppercase tracking-widest",
                    children: "Composition 1"
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                    lineNumber: 145,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "1920 x 1080 (1.00)"
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                    lineNumber: 145,
                    columnNumber: 136
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
            lineNumber: 145,
            columnNumber: 10
        }, this);
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-8 bg-[#2d2d2d] border-b border-black flex items-center justify-between px-4 text-[11px] text-gray-400",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                            className: "w-3.5 h-3.5 hover:text-white cursor-pointer"
                        }, void 0, false, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                            lineNumber: 152,
                            columnNumber: 177
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__["Maximize"], {
                            className: "w-3.5 h-3.5 hover:text-white cursor-pointer"
                        }, void 0, false, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                            lineNumber: 152,
                            columnNumber: 245
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                    lineNumber: 152,
                    columnNumber: 136
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 opacity-10 workspace-grid"
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] !== activeLayerId || $[17] !== layers || $[18] !== onSelectLayer) {
        let t13;
        if ($[20] !== layers) {
            t13 = ({
                "CompositionView[layers.filter()]": (l)=>{
                    const anySolo = layers.some(_CompositionViewLayersFilterLayersSome);
                    if (anySolo && !l.solo) {
                        return false;
                    }
                    return l.visible;
                }
            })["CompositionView[layers.filter()]"];
            $[20] = layers;
            $[21] = t13;
        } else {
            t13 = $[21];
        }
        let t14;
        if ($[22] !== activeLayerId || $[23] !== onSelectLayer) {
            t14 = ({
                "CompositionView[(anonymous)()]": (layer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: {
                            "CompositionView[(anonymous)() > <div>.onClick]": ()=>!layer.locked && onSelectLayer(layer.id)
                        }["CompositionView[(anonymous)() > <div>.onClick]"],
                        className: `absolute transition-all duration-100 overflow-hidden flex items-center justify-center group ${activeLayerId === layer.id ? "ring-2 ring-[#d391fc] shadow-[0_0_20px_rgba(211,145,252,0.4)] z-50" : ""} ${layer.locked ? "pointer-events-none opacity-50 grayscale-[0.5]" : "cursor-pointer pointer-events-auto"}`,
                        style: {
                            left: `${layer.position.x}%`,
                            top: `${layer.position.y}%`,
                            width: `${layer.scale}%`,
                            transform: `translate(-50%, -50%) rotate(${layer.rotation}deg)`,
                            backgroundColor: layer.url ? "transparent" : layer.color,
                            height: layer.type === "VIDEO" ? "auto" : "40px",
                            opacity: layer.opacity / 100,
                            boxShadow: layer.styles?.dropShadow.enabled ? `${Math.cos(layer.styles.dropShadow.angle * Math.PI / 180) * layer.styles.dropShadow.distance}px ${Math.sin(layer.styles.dropShadow.angle * Math.PI / 180) * layer.styles.dropShadow.distance}px ${layer.styles.dropShadow.blur}px ${layer.styles.dropShadow.color}${Math.floor(layer.styles.dropShadow.opacity * 2.55).toString(16).padStart(2, "0")}` : "none",
                            filter: layer.styles?.blur.enabled ? `blur(${layer.styles.blur.amount}px)` : "none"
                        },
                        children: [
                            layer.url && layer.type === "VIDEO" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                src: layer.url,
                                className: "w-full h-full object-cover",
                                muted: layer.muted,
                                preload: "auto",
                                onLoadedMetadata: _CompositionViewAnonymousVideoOnLoadedMetadata
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                lineNumber: 197,
                                columnNumber: 52
                            }, this),
                            layer.url && layer.type === "AUDIO" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-full h-full ${layer.muted ? "bg-gray-800" : "bg-[#10b981]/20"} flex items-center px-3 border border-[#10b981]/50 rounded`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                        className: `w-3 h-3 ${layer.muted ? "text-gray-500" : "text-[#10b981]"} mr-2`
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                        lineNumber: 197,
                                        columnNumber: 400
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-[8px] ${layer.muted ? "text-gray-500" : "text-[#10b981]"} truncate`,
                                        children: [
                                            layer.name,
                                            " ",
                                            layer.muted ? "(Muted)" : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                        lineNumber: 197,
                                        columnNumber: 490
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                lineNumber: 197,
                                columnNumber: 258
                            }, this),
                            layer.locked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black/20 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                    className: "w-4 h-4 text-white/50"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                    lineNumber: 197,
                                    columnNumber: 735
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                                lineNumber: 197,
                                columnNumber: 656
                            }, this)
                        ]
                    }, layer.id, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                        lineNumber: 185,
                        columnNumber: 52
                    }, this)
            })["CompositionView[(anonymous)()]"];
            $[22] = activeLayerId;
            $[23] = onSelectLayer;
            $[24] = t14;
        } else {
            t14 = $[24];
        }
        t12 = layers.filter(t13).map(t14);
        $[16] = activeLayerId;
        $[17] = layers;
        $[18] = onSelectLayer;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[25] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative aspect-video bg-black shadow-2xl overflow-hidden border border-white/5 w-[80%] max-w-[1200px]",
            children: t12
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[25] = t12;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== isDragging) {
        t14 = isDragging && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 z-50 bg-[#d391fc]/20 backdrop-blur-sm flex items-center justify-center border-4 border-dashed border-[#d391fc]/50 pointer-events-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 bg-[#d391fc] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(211,145,252,0.4)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__["Maximize"], {
                            className: "w-8 h-8 text-[#1e1e1e]"
                        }, void 0, false, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                            lineNumber: 223,
                            columnNumber: 361
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                        lineNumber: 223,
                        columnNumber: 222
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-black uppercase tracking-tighter italic",
                        children: "Drop to Import to BOLTChain"
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                        lineNumber: 223,
                        columnNumber: 414
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                lineNumber: 223,
                columnNumber: 193
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
            lineNumber: 223,
            columnNumber: 25
        }, this);
        $[27] = isDragging;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 pointer-events-none border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[90%] h-[90%] border border-dashed border-white/10"
            }, void 0, false, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                lineNumber: 231,
                columnNumber: 173
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    let t16;
    if ($[30] !== t13 || $[31] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-grow relative flex items-center justify-center bg-[#0e0e0e] overflow-hidden group",
            children: [
                t11,
                t13,
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[30] = t13;
        $[31] = t14;
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    const t17 = formatTimecode(playback.currentTime);
    let t18;
    if ($[33] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl font-mono text-[#00e0ff] font-bold tabular-nums",
                children: t17
            }, void 0, false, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                lineNumber: 248,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
            lineNumber: 248,
            columnNumber: 11
        }, this);
        $[33] = t17;
        $[34] = t18;
    } else {
        t18 = $[34];
    }
    let t19;
    if ($[35] !== onSeek) {
        t19 = ({
            "CompositionView[<button>.onClick]": ()=>onSeek(0)
        })["CompositionView[<button>.onClick]"];
        $[35] = onSeek;
        $[36] = t19;
    } else {
        t19 = $[36];
    }
    let t20;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__["SkipBack"], {
            className: "w-5 h-5 fill-current"
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
            lineNumber: 266,
            columnNumber: 11
        }, this);
        $[37] = t20;
    } else {
        t20 = $[37];
    }
    let t21;
    if ($[38] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t19,
            className: "text-gray-400 hover:text-white transition-colors",
            children: t20
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
            lineNumber: 273,
            columnNumber: 11
        }, this);
        $[38] = t19;
        $[39] = t21;
    } else {
        t21 = $[39];
    }
    let t22;
    if ($[40] !== playback.isPlaying) {
        t22 = playback.isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
            className: "w-5 h-5 fill-current text-white"
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
            lineNumber: 281,
            columnNumber: 32
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
            className: "w-5 h-5 fill-current text-white ml-1"
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
            lineNumber: 281,
            columnNumber: 88
        }, this);
        $[40] = playback.isPlaying;
        $[41] = t22;
    } else {
        t22 = $[41];
    }
    let t23;
    if ($[42] !== onTogglePlayback || $[43] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onTogglePlayback,
            className: "w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10 shadow-lg group",
            children: t22
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[42] = onTogglePlayback;
        $[43] = t22;
        $[44] = t23;
    } else {
        t23 = $[44];
    }
    let t24;
    if ($[45] !== onSeek || $[46] !== playback.duration) {
        t24 = ({
            "CompositionView[<button>.onClick]": ()=>onSeek(playback.duration)
        })["CompositionView[<button>.onClick]"];
        $[45] = onSeek;
        $[46] = playback.duration;
        $[47] = t24;
    } else {
        t24 = $[47];
    }
    let t25;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__["SkipForward"], {
            className: "w-5 h-5 fill-current"
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
            lineNumber: 309,
            columnNumber: 11
        }, this);
        $[48] = t25;
    } else {
        t25 = $[48];
    }
    let t26;
    if ($[49] !== t24) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t24,
            className: "text-gray-400 hover:text-white transition-colors",
            children: t25
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
            lineNumber: 316,
            columnNumber: 11
        }, this);
        $[49] = t24;
        $[50] = t26;
    } else {
        t26 = $[50];
    }
    let t27;
    if ($[51] !== t21 || $[52] !== t23 || $[53] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4",
            children: [
                t21,
                t23,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
            lineNumber: 324,
            columnNumber: 11
        }, this);
        $[51] = t21;
        $[52] = t23;
        $[53] = t26;
        $[54] = t27;
    } else {
        t27 = $[54];
    }
    let t28;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
            className: "w-4 h-4 text-gray-400"
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
            lineNumber: 334,
            columnNumber: 11
        }, this);
        $[55] = t28;
    } else {
        t28 = $[55];
    }
    let t29;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    t28,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-20 h-1 bg-white/10 rounded-full overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[80%] h-full bg-[#00e0ff]"
                        }, void 0, false, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                            lineNumber: 341,
                            columnNumber: 165
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                        lineNumber: 341,
                        columnNumber: 98
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
                lineNumber: 341,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
            lineNumber: 341,
            columnNumber: 11
        }, this);
        $[56] = t29;
    } else {
        t29 = $[56];
    }
    let t30;
    if ($[57] !== t18 || $[58] !== t27) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-12 bg-[#2d2d2d] border-t border-black flex items-center justify-between px-6",
            children: [
                t18,
                t27,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
            lineNumber: 348,
            columnNumber: 11
        }, this);
        $[57] = t18;
        $[58] = t27;
        $[59] = t30;
    } else {
        t30 = $[59];
    }
    let t31;
    if ($[60] !== handleDrop || $[61] !== t16 || $[62] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col flex-grow bg-[#161616] relative overflow-hidden",
            onDragOver: handleDragOver,
            onDragLeave: handleDragLeave,
            onDrop: handleDrop,
            children: [
                t10,
                t16,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx",
            lineNumber: 357,
            columnNumber: 11
        }, this);
        $[60] = handleDrop;
        $[61] = t16;
        $[62] = t30;
        $[63] = t31;
    } else {
        t31 = $[63];
    }
    return t31;
}
_s(CompositionView, "//y4/U26I19D1CBu/ZKEuR95i8o=");
_c = CompositionView;
function _CompositionViewAnonymousVideoOnLoadedMetadata(e_1) {}
function _CompositionViewLayersFilterLayersSome(s_0) {
    return s_0.solo;
}
function _CompositionViewUseEffectVideosForEachAnonymous() {}
var _c;
__turbopack_context__.k.register(_c, "CompositionView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AETimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/scissors.js [app-client] (ecmascript) <export default as Scissors>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/timer.js [app-client] (ecmascript) <export default as Timer>");
"use client";
;
;
;
function AETimeline(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(62);
    if ($[0] !== "610b451dd72a1a6f0dc8daf831fee6e0dd7ec74364678d5f715768f07813ccb1") {
        for(let $i = 0; $i < 62; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "610b451dd72a1a6f0dc8daf831fee6e0dd7ec74364678d5f715768f07813ccb1";
    }
    const { playback, layers, activeLayerId, onSelectLayer, onToggleLayerProp, onAddLayer, onSplit, onSeek } = t0;
    let t1;
    if ($[1] !== onSeek || $[2] !== playback.duration) {
        t1 = ({
            "AETimeline[handleTimelineClick]": (e)=>{
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const time = x / 100;
                onSeek(Math.max(0, Math.min(time, playback.duration)));
            }
        })["AETimeline[handleTimelineClick]"];
        $[1] = onSeek;
        $[2] = playback.duration;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleTimelineClick = t1;
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== onAddLayer) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onAddLayer,
            className: "flex items-center gap-1 hover:text-white transition-colors",
            children: [
                t2,
                " New Layer"
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[5] = onAddLayer;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"], {
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== onSplit) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onSplit,
            className: "flex items-center gap-1 hover:text-white transition-colors",
            children: [
                t4,
                " Split"
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[8] = onSplit;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t3 || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4",
            children: [
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
            lineNumber: 83,
            columnNumber: 10
        }, this);
        $[10] = t3;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-px h-4 bg-white/10"
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-[#00e0ff]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                    className: "w-3.5 h-3.5"
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                    lineNumber: 99,
                    columnNumber: 66
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Active Compositon"
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                    lineNumber: 99,
                    columnNumber: 99
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== t6) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-8 bg-[#3c3c3c] border-b border-black flex items-center px-4 gap-6 text-[10px] text-gray-400 font-bold uppercase tracking-widest",
            children: [
                t6,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[15] = t6;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-8 bg-[#333333] border-b border-black flex items-center px-2 gap-4 text-[9px] text-gray-500 font-black",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-12 flex justify-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                            className: "w-3 h-3"
                        }, void 0, false, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                            lineNumber: 114,
                            columnNumber: 180
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                            className: "w-3 h-3"
                        }, void 0, false, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                            lineNumber: 114,
                            columnNumber: 207
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                            className: "w-3 h-3"
                        }, void 0, false, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                            lineNumber: 114,
                            columnNumber: 238
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                    lineNumber: 114,
                    columnNumber: 132
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-grow",
                    children: "LAYER NAME"
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                    lineNumber: 114,
                    columnNumber: 272
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-12",
                    children: "PARENT"
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                    lineNumber: 114,
                    columnNumber: 315
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
            lineNumber: 114,
            columnNumber: 11
        }, this);
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== activeLayerId || $[19] !== layers || $[20] !== onSelectLayer || $[21] !== onToggleLayerProp) {
        let t12;
        if ($[23] !== activeLayerId || $[24] !== onSelectLayer || $[25] !== onToggleLayerProp) {
            t12 = ({
                "AETimeline[layers.map()]": (layer, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: {
                            "AETimeline[layers.map() > <div>.onClick]": ()=>onSelectLayer(layer.id)
                        }["AETimeline[layers.map() > <div>.onClick]"],
                        className: `h-8 flex items-center px-2 gap-4 border-b border-black/20 hover:bg-[#37373d] cursor-pointer transition-colors group ${activeLayerId === layer.id ? "bg-[#37373d] ring-1 ring-inset ring-[#d391fc]/30" : index % 2 === 0 ? "bg-[#2d2d2d]/30" : "bg-transparent"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 flex justify-center gap-2 opacity-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "AETimeline[layers.map() > <button>.onClick]": (e_0)=>{
                                                e_0.stopPropagation();
                                                onToggleLayerProp(layer.id, "visible");
                                            }
                                        }["AETimeline[layers.map() > <button>.onClick]"],
                                        className: layer.visible ? "text-[#00e0ff]" : "text-gray-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                            lineNumber: 131,
                                            columnNumber: 126
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                        lineNumber: 126,
                                        columnNumber: 386
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "AETimeline[layers.map() > <button>.onClick]": (e_1)=>{
                                                e_1.stopPropagation();
                                                onToggleLayerProp(layer.id, "muted");
                                            }
                                        }["AETimeline[layers.map() > <button>.onClick]"],
                                        className: !layer.muted ? "text-[#00e0ff]" : "text-gray-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                            lineNumber: 136,
                                            columnNumber: 125
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                        lineNumber: 131,
                                        columnNumber: 162
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "AETimeline[layers.map() > <button>.onClick]": (e_2)=>{
                                                e_2.stopPropagation();
                                                onToggleLayerProp(layer.id, "locked");
                                            }
                                        }["AETimeline[layers.map() > <button>.onClick]"],
                                        className: layer.locked ? "text-red-500" : "text-gray-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                            lineNumber: 141,
                                            columnNumber: 123
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                        lineNumber: 136,
                                        columnNumber: 165
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                lineNumber: 126,
                                columnNumber: 326
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-grow text-[11px] text-gray-300 font-medium truncate flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 rounded-sm",
                                        style: {
                                            backgroundColor: layer.color
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                        lineNumber: 141,
                                        columnNumber: 264
                                    }, this),
                                    layer.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                lineNumber: 141,
                                columnNumber: 166
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 text-[9px] text-gray-600",
                                children: "None"
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                lineNumber: 143,
                                columnNumber: 36
                            }, this)
                        ]
                    }, layer.id, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                        lineNumber: 124,
                        columnNumber: 55
                    }, this)
            })["AETimeline[layers.map()]"];
            $[23] = activeLayerId;
            $[24] = onSelectLayer;
            $[25] = onToggleLayerProp;
            $[26] = t12;
        } else {
            t12 = $[26];
        }
        t11 = layers.map(t12);
        $[18] = activeLayerId;
        $[19] = layers;
        $[20] = onSelectLayer;
        $[21] = onToggleLayerProp;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[27] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[300px] bg-[#252526] border-r border-black flex flex-col overflow-hidden",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-grow overflow-y-auto custom-scrollbar",
                    children: t11
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                    lineNumber: 163,
                    columnNumber: 108
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[27] = t11;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== playback.duration) {
        t13 = Array.from({
            length: Math.ceil(playback.duration) + 1
        }).map(_AETimelineAnonymous);
        $[29] = playback.duration;
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    let t14;
    if ($[31] !== handleTimelineClick || $[32] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-8 bg-[#333333] border-b border-black relative cursor-crosshair overflow-hidden",
            onClick: handleTimelineClick,
            children: t13
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        $[31] = handleTimelineClick;
        $[32] = t13;
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    const t15 = `${playback.duration * 100}px`;
    let t16;
    if ($[34] !== t15) {
        t16 = {
            width: t15
        };
        $[34] = t15;
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    const t17 = `${playback.currentTime * 100}px`;
    let t18;
    if ($[36] !== t17) {
        t18 = {
            left: t17
        };
        $[36] = t17;
        $[37] = t18;
    } else {
        t18 = $[37];
    }
    let t19;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#00e0ff] playhead-tip"
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[38] = t19;
    } else {
        t19 = $[38];
    }
    let t20;
    if ($[39] !== t18) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 bottom-0 w-px bg-[#00e0ff] z-10 pointer-events-none",
            style: t18,
            children: t19
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        $[39] = t18;
        $[40] = t20;
    } else {
        t20 = $[40];
    }
    let t21;
    if ($[41] !== activeLayerId || $[42] !== layers || $[43] !== onSelectLayer) {
        let t22;
        if ($[45] !== activeLayerId || $[46] !== onSelectLayer) {
            t22 = ({
                "AETimeline[layers.map()]": (layer_0, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: {
                            "AETimeline[layers.map() > <div>.onClick]": ()=>onSelectLayer(layer_0.id)
                        }["AETimeline[layers.map() > <div>.onClick]"],
                        className: `h-8 border-b border-black/10 relative cursor-pointer transition-colors ${activeLayerId === layer_0.id ? "bg-[#d391fc]/5" : index_0 % 2 === 0 ? "bg-[#2d2d2d]/10" : "bg-transparent"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute top-1 bottom-1 rounded shadow-lg border-x-2 border-white/20 flex items-center px-2 cursor-move group ${activeLayerId === layer_0.id ? "ring-2 ring-white ring-offset-1 ring-offset-black/50 overflow-visible z-20" : ""}`,
                            style: {
                                left: `${layer_0.startTime * 100}px`,
                                width: `${layer_0.duration * 100}px`,
                                backgroundColor: layer_0.color,
                                opacity: activeLayerId === layer_0.id ? 1 : 0.8
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                    lineNumber: 237,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold text-white uppercase tracking-tighter truncate drop-shadow-md",
                                    children: layer_0.name
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                                    lineNumber: 237,
                                    columnNumber: 115
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                            lineNumber: 232,
                            columnNumber: 251
                        }, this)
                    }, layer_0.id, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
                        lineNumber: 230,
                        columnNumber: 59
                    }, this)
            })["AETimeline[layers.map()]"];
            $[45] = activeLayerId;
            $[46] = onSelectLayer;
            $[47] = t22;
        } else {
            t22 = $[47];
        }
        t21 = layers.map(t22);
        $[41] = activeLayerId;
        $[42] = layers;
        $[43] = onSelectLayer;
        $[44] = t21;
    } else {
        t21 = $[44];
    }
    let t22;
    if ($[48] !== handleTimelineClick || $[49] !== t16 || $[50] !== t20 || $[51] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-grow relative overflow-auto custom-scrollbar",
            style: t16,
            onClick: handleTimelineClick,
            children: [
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[48] = handleTimelineClick;
        $[49] = t16;
        $[50] = t20;
        $[51] = t21;
        $[52] = t22;
    } else {
        t22 = $[52];
    }
    let t23;
    if ($[53] !== t14 || $[54] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-grow flex flex-col overflow-hidden relative",
            children: [
                t14,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
            lineNumber: 266,
            columnNumber: 11
        }, this);
        $[53] = t14;
        $[54] = t22;
        $[55] = t23;
    } else {
        t23 = $[55];
    }
    let t24;
    if ($[56] !== t12 || $[57] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-grow overflow-hidden",
            children: [
                t12,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
            lineNumber: 275,
            columnNumber: 11
        }, this);
        $[56] = t12;
        $[57] = t23;
        $[58] = t24;
    } else {
        t24 = $[58];
    }
    let t25;
    if ($[59] !== t24 || $[60] !== t9) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-[300px] bg-[#2d2d2d] flex flex-col border-t border-black select-none",
            children: [
                t9,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
            lineNumber: 284,
            columnNumber: 11
        }, this);
        $[59] = t24;
        $[60] = t9;
        $[61] = t25;
    } else {
        t25 = $[61];
    }
    return t25;
}
_c = AETimeline;
function _AETimelineAnonymous(_, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute border-l border-white/10 h-full flex items-end pb-1 pl-1 text-[8px] text-gray-500 font-mono",
        style: {
            left: `${i * 100}px`
        },
        children: [
            i,
            "s"
        ]
    }, i, true, {
        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx",
        lineNumber: 294,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "AETimeline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoMenuBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoMenuBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function VideoMenuBar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(116);
    if ($[0] !== "4e5d31f179d035e1d2a060521ba4da7f75339b3be5377094c3e42d93196c4bdb") {
        for(let $i = 0; $i < 116; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4e5d31f179d035e1d2a060521ba4da7f75339b3be5377094c3e42d93196c4bdb";
    }
    const { onAction } = t0;
    const [activeMenu, setActiveMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[1] !== onAction) {
        t1 = {
            label: "New Project",
            shortcut: "Ctrl+Alt+N",
            action: ()=>onAction?.("FILE_NEW")
        };
        $[1] = onAction;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== onAction) {
        t2 = {
            label: "Open Project...",
            shortcut: "Ctrl+O",
            action: ()=>onAction?.("FILE_OPEN")
        };
        $[3] = onAction;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            separator: true
        };
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== onAction) {
        t4 = {
            label: "Close",
            shortcut: "Ctrl+W",
            action: ()=>onAction?.("FILE_CLOSE")
        };
        $[6] = onAction;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== onAction) {
        t5 = {
            label: "Save",
            shortcut: "Ctrl+S",
            action: ()=>onAction?.("FILE_SAVE")
        };
        $[8] = onAction;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== onAction) {
        t6 = {
            label: "Save As...",
            shortcut: "Shift+Ctrl+S",
            action: ()=>onAction?.("FILE_SAVE_AS")
        };
        $[10] = onAction;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            separator: true
        };
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== onAction) {
        t8 = {
            label: "Import",
            shortcut: "Ctrl+I",
            action: ()=>onAction?.("FILE_IMPORT")
        };
        $[13] = onAction;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== onAction) {
        t9 = {
            label: "Quick Render",
            shortcut: "F5",
            action: ()=>onAction?.("COMP_RENDER")
        };
        $[15] = onAction;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            separator: true
        };
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== onAction) {
        t11 = {
            label: "Project Settings...",
            shortcut: "Alt+Shift+Ctrl+K",
            action: ()=>onAction?.("FILE_SETTINGS")
        };
        $[18] = onAction;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== onAction) {
        t12 = {
            label: "Mint Asset",
            shortcut: "F12",
            action: ()=>onAction?.("FILE_MINT")
        };
        $[20] = onAction;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== t1 || $[23] !== t11 || $[24] !== t12 || $[25] !== t2 || $[26] !== t4 || $[27] !== t5 || $[28] !== t6 || $[29] !== t8 || $[30] !== t9) {
        t13 = {
            label: "File",
            items: [
                t1,
                t2,
                t3,
                t4,
                t5,
                t6,
                t7,
                t8,
                t9,
                t10,
                t11,
                t12
            ]
        };
        $[22] = t1;
        $[23] = t11;
        $[24] = t12;
        $[25] = t2;
        $[26] = t4;
        $[27] = t5;
        $[28] = t6;
        $[29] = t8;
        $[30] = t9;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    let t14;
    if ($[32] !== onAction) {
        t14 = {
            label: "Undo",
            shortcut: "Ctrl+Z",
            action: ()=>onAction?.("EDIT_UNDO")
        };
        $[32] = onAction;
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    let t15;
    if ($[34] !== onAction) {
        t15 = {
            label: "Redo",
            shortcut: "Ctrl+Y",
            action: ()=>onAction?.("EDIT_REDO")
        };
        $[34] = onAction;
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    let t16;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = {
            separator: true
        };
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] !== onAction) {
        t17 = {
            label: "Cut",
            shortcut: "Ctrl+X",
            action: ()=>onAction?.("EDIT_CUT")
        };
        $[37] = onAction;
        $[38] = t17;
    } else {
        t17 = $[38];
    }
    let t18;
    if ($[39] !== onAction) {
        t18 = {
            label: "Copy",
            shortcut: "Ctrl+C",
            action: ()=>onAction?.("EDIT_COPY")
        };
        $[39] = onAction;
        $[40] = t18;
    } else {
        t18 = $[40];
    }
    let t19;
    if ($[41] !== onAction) {
        t19 = {
            label: "Paste",
            shortcut: "Ctrl+V",
            action: ()=>onAction?.("EDIT_PASTE")
        };
        $[41] = onAction;
        $[42] = t19;
    } else {
        t19 = $[42];
    }
    let t20;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = {
            separator: true
        };
        $[43] = t20;
    } else {
        t20 = $[43];
    }
    let t21;
    if ($[44] !== onAction) {
        t21 = {
            label: "Duplicate",
            shortcut: "F3",
            action: ()=>onAction?.("EDIT_DUPLICATE")
        };
        $[44] = onAction;
        $[45] = t21;
    } else {
        t21 = $[45];
    }
    let t22;
    if ($[46] !== onAction) {
        t22 = {
            label: "Split Layer",
            shortcut: "F4",
            action: ()=>onAction?.("EDIT_SPLIT")
        };
        $[46] = onAction;
        $[47] = t22;
    } else {
        t22 = $[47];
    }
    let t23;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = {
            separator: true
        };
        $[48] = t23;
    } else {
        t23 = $[48];
    }
    let t24;
    if ($[49] !== onAction) {
        t24 = {
            label: "Preferences",
            shortcut: "Ctrl+K",
            action: ()=>onAction?.("EDIT_PREFERENCES")
        };
        $[49] = onAction;
        $[50] = t24;
    } else {
        t24 = $[50];
    }
    let t25;
    if ($[51] !== t14 || $[52] !== t15 || $[53] !== t17 || $[54] !== t18 || $[55] !== t19 || $[56] !== t21 || $[57] !== t22 || $[58] !== t24) {
        t25 = {
            label: "Edit",
            items: [
                t14,
                t15,
                t16,
                t17,
                t18,
                t19,
                t20,
                t21,
                t22,
                t23,
                t24
            ]
        };
        $[51] = t14;
        $[52] = t15;
        $[53] = t17;
        $[54] = t18;
        $[55] = t19;
        $[56] = t21;
        $[57] = t22;
        $[58] = t24;
        $[59] = t25;
    } else {
        t25 = $[59];
    }
    let t26;
    if ($[60] !== onAction) {
        t26 = {
            label: "New Composition...",
            shortcut: "Ctrl+N",
            action: ()=>onAction?.("COMP_NEW")
        };
        $[60] = onAction;
        $[61] = t26;
    } else {
        t26 = $[61];
    }
    let t27;
    if ($[62] !== onAction) {
        t27 = {
            label: "Composition Settings...",
            shortcut: "Ctrl+K",
            action: ()=>onAction?.("COMP_SETTINGS")
        };
        $[62] = onAction;
        $[63] = t27;
    } else {
        t27 = $[63];
    }
    let t28;
    let t29;
    let t30;
    let t31;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = {
            separator: true
        };
        t29 = {
            label: "Preview",
            shortcut: "Space"
        };
        t30 = {
            label: "Save Frame As"
        };
        t31 = {
            separator: true
        };
        $[64] = t28;
        $[65] = t29;
        $[66] = t30;
        $[67] = t31;
    } else {
        t28 = $[64];
        t29 = $[65];
        t30 = $[66];
        t31 = $[67];
    }
    let t32;
    if ($[68] !== onAction) {
        t32 = {
            label: "Add to Render Queue",
            shortcut: "F5",
            action: ()=>onAction?.("COMP_RENDER")
        };
        $[68] = onAction;
        $[69] = t32;
    } else {
        t32 = $[69];
    }
    let t33;
    if ($[70] !== t26 || $[71] !== t27 || $[72] !== t32) {
        t33 = {
            label: "Composition",
            items: [
                t26,
                t27,
                t28,
                t29,
                t30,
                t31,
                t32
            ]
        };
        $[70] = t26;
        $[71] = t27;
        $[72] = t32;
        $[73] = t33;
    } else {
        t33 = $[73];
    }
    let t34;
    let t35;
    let t36;
    if ($[74] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = {
            label: "New"
        };
        t35 = {
            label: "Layer Settings...",
            shortcut: "Shift+Ctrl+Y"
        };
        t36 = {
            separator: true
        };
        $[74] = t34;
        $[75] = t35;
        $[76] = t36;
    } else {
        t34 = $[74];
        t35 = $[75];
        t36 = $[76];
    }
    let t37;
    if ($[77] !== onAction) {
        t37 = {
            label: "Duplicate",
            shortcut: "F3",
            action: ()=>onAction?.("EDIT_DUPLICATE")
        };
        $[77] = onAction;
        $[78] = t37;
    } else {
        t37 = $[78];
    }
    let t38;
    if ($[79] !== onAction) {
        t38 = {
            label: "Delete",
            shortcut: "F4",
            action: ()=>onAction?.("EDIT_DELETE")
        };
        $[79] = onAction;
        $[80] = t38;
    } else {
        t38 = $[80];
    }
    let t39;
    let t40;
    if ($[81] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = {
            separator: true
        };
        t40 = {
            label: "Pre-compose...",
            shortcut: "Shift+Ctrl+C"
        };
        $[81] = t39;
        $[82] = t40;
    } else {
        t39 = $[81];
        t40 = $[82];
    }
    let t41;
    if ($[83] !== t37 || $[84] !== t38) {
        t41 = {
            label: "Layer",
            items: [
                t34,
                t35,
                t36,
                t37,
                t38,
                t39,
                t40
            ]
        };
        $[83] = t37;
        $[84] = t38;
        $[85] = t41;
    } else {
        t41 = $[85];
    }
    let t42;
    if ($[86] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = {
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
        };
        $[86] = t42;
    } else {
        t42 = $[86];
    }
    let t43;
    if ($[87] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = {
            label: "View",
            items: [
                {
                    label: "Zoom In",
                    shortcut: "Ctrl++"
                },
                {
                    label: "Zoom Out",
                    shortcut: "Ctrl+-"
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
        };
        $[87] = t43;
    } else {
        t43 = $[87];
    }
    let t44;
    if ($[88] !== onAction) {
        t44 = {
            label: "Project Panel",
            shortcut: "F6",
            action: ()=>onAction?.("WINDOW_PROJECT")
        };
        $[88] = onAction;
        $[89] = t44;
    } else {
        t44 = $[89];
    }
    let t45;
    if ($[90] !== onAction) {
        t45 = {
            label: "Timeline",
            shortcut: "F7",
            action: ()=>onAction?.("WINDOW_TIMELINE")
        };
        $[90] = onAction;
        $[91] = t45;
    } else {
        t45 = $[91];
    }
    let t46;
    if ($[92] !== onAction) {
        t46 = {
            label: "Effects Control",
            shortcut: "F8",
            action: ()=>onAction?.("WINDOW_EFFECTS")
        };
        $[92] = onAction;
        $[93] = t46;
    } else {
        t46 = $[93];
    }
    let t47;
    if ($[94] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = {
            separator: true
        };
        $[94] = t47;
    } else {
        t47 = $[94];
    }
    let t48;
    if ($[95] !== onAction) {
        t48 = {
            label: "Help Center",
            shortcut: "F1",
            action: ()=>onAction?.("FILE_HELP")
        };
        $[95] = onAction;
        $[96] = t48;
    } else {
        t48 = $[96];
    }
    let t49;
    if ($[97] !== onAction) {
        t49 = {
            label: "Mint Asset",
            shortcut: "F12",
            action: ()=>onAction?.("FILE_MINT")
        };
        $[97] = onAction;
        $[98] = t49;
    } else {
        t49 = $[98];
    }
    let t50;
    if ($[99] !== t44 || $[100] !== t45 || $[101] !== t46 || $[102] !== t48 || $[103] !== t49) {
        t50 = {
            label: "Window",
            items: [
                t44,
                t45,
                t46,
                t47,
                t48,
                t49
            ]
        };
        $[99] = t44;
        $[100] = t45;
        $[101] = t46;
        $[102] = t48;
        $[103] = t49;
        $[104] = t50;
    } else {
        t50 = $[104];
    }
    let t51;
    if ($[105] !== t13 || $[106] !== t25 || $[107] !== t33 || $[108] !== t41 || $[109] !== t50) {
        t51 = [
            t13,
            t25,
            t33,
            t41,
            t42,
            t43,
            t50
        ];
        $[105] = t13;
        $[106] = t25;
        $[107] = t33;
        $[108] = t41;
        $[109] = t50;
        $[110] = t51;
    } else {
        t51 = $[110];
    }
    const menus = t51;
    let t52;
    let t53;
    if ($[111] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = ({
            "VideoMenuBar[useEffect()]": ()=>{
                const handleClickOutside = {
                    "VideoMenuBar[useEffect() > handleClickOutside]": (event)=>{
                        if (containerRef.current && !containerRef.current.contains(event.target)) {
                            setActiveMenu(null);
                        }
                    }
                }["VideoMenuBar[useEffect() > handleClickOutside]"];
                document.addEventListener("mousedown", handleClickOutside);
                return ()=>document.removeEventListener("mousedown", handleClickOutside);
            }
        })["VideoMenuBar[useEffect()]"];
        t53 = [];
        $[111] = t52;
        $[112] = t53;
    } else {
        t52 = $[111];
        t53 = $[112];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t52, t53);
    let t54;
    if ($[113] !== activeMenu || $[114] !== menus) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: "h-full flex items-center bg-[#2d2d2d] select-none z-50 px-2 uppercase tracking-tighter",
            children: menus.map({
                "VideoMenuBar[menus.map()]": (menu)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-full flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onMouseEnter: {
                                    "VideoMenuBar[menus.map() > <button>.onMouseEnter]": ()=>activeMenu && setActiveMenu(menu.label)
                                }["VideoMenuBar[menus.map() > <button>.onMouseEnter]"],
                                onClick: {
                                    "VideoMenuBar[menus.map() > <button>.onClick]": ()=>setActiveMenu(activeMenu === menu.label ? null : menu.label)
                                }["VideoMenuBar[menus.map() > <button>.onClick]"],
                                className: `px-3 py-1 text-[10px] font-bold transition-colors rounded-sm mx-0.5 ${activeMenu === menu.label ? "bg-[#3c3c3c] text-white" : "text-gray-400 hover:text-white hover:bg-[#3c3c3c]"}`,
                                children: menu.label
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoMenuBar.tsx",
                                lineNumber: 657,
                                columnNumber: 114
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: activeMenu === menu.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    children: menu.items.map({
                                        "VideoMenuBar[menus.map() > menu.items.map()]": (item, idx)=>item.separator ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-px bg-white/5 my-1 mx-2"
                                            }, idx, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoMenuBar.tsx",
                                                lineNumber: 673,
                                                columnNumber: 97
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                disabled: item.disabled,
                                                onClick: {
                                                    "VideoMenuBar[menus.map() > menu.items.map() > <button>.onClick]": ()=>{
                                                        item.action?.();
                                                        setActiveMenu(null);
                                                    }
                                                }["VideoMenuBar[menus.map() > menu.items.map() > <button>.onClick]"],
                                                className: "w-full text-left px-3 py-1.5 hover:bg-[#d391fc]/20 hover:text-[#d391fc] group flex justify-between items-center transition-colors disabled:opacity-30 disabled:hover:bg-transparent",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] text-gray-300 group-hover:text-[#d391fc]",
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoMenuBar.tsx",
                                                        lineNumber: 678,
                                                        columnNumber: 279
                                                    }, this),
                                                    item.shortcut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-gray-500 group-hover:text-[#d391fc]/70 ml-4 font-mono",
                                                        children: item.shortcut
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoMenuBar.tsx",
                                                        lineNumber: 678,
                                                        columnNumber: 387
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoMenuBar.tsx",
                                                lineNumber: 673,
                                                columnNumber: 155
                                            }, this)
                                    }["VideoMenuBar[menus.map() > menu.items.map()]"])
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoMenuBar.tsx",
                                    lineNumber: 661,
                                    columnNumber: 323
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoMenuBar.tsx",
                                lineNumber: 661,
                                columnNumber: 276
                            }, this)
                        ]
                    }, menu.label, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoMenuBar.tsx",
                        lineNumber: 657,
                        columnNumber: 46
                    }, this)
            }["VideoMenuBar[menus.map()]"])
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoMenuBar.tsx",
            lineNumber: 656,
            columnNumber: 11
        }, this);
        $[113] = activeMenu;
        $[114] = menus;
        $[115] = t54;
    } else {
        t54 = $[115];
    }
    return t54;
}
_s(VideoMenuBar, "zBNRlF0CmTF1Rk8yrECWo3GwSCI=");
_c = VideoMenuBar;
var _c;
__turbopack_context__.k.register(_c, "VideoMenuBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
"use client";
;
;
;
;
function VideoModal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "ae8ab45a3ddb3360a6ee62c6f97cb30c93ec0a48cf4a734addc891bd36942979") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ae8ab45a3ddb3360a6ee62c6f97cb30c93ec0a48cf4a734addc891bd36942979";
    }
    const { isOpen, onClose, title, children, footer } = t0;
    let t1;
    if ($[1] !== children || $[2] !== footer || $[3] !== isOpen || $[4] !== onClose || $[5] !== title) {
        t1 = isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-5 py-3 bg-[#252525] border-b border-black",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-[10px] font-black text-[#d391fc] uppercase tracking-widest",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoModal.tsx",
                                lineNumber: 42,
                                columnNumber: 242
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "text-gray-500 hover:text-[#d391fc] transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoModal.tsx",
                                    lineNumber: 42,
                                    columnNumber: 425
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoModal.tsx",
                                lineNumber: 42,
                                columnNumber: 334
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoModal.tsx",
                        lineNumber: 42,
                        columnNumber: 146
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 text-[12px] text-gray-300",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoModal.tsx",
                        lineNumber: 42,
                        columnNumber: 455
                    }, this),
                    footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-4 bg-[#1a1a1a] border-t border-black flex justify-end gap-3",
                        children: footer
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoModal.tsx",
                        lineNumber: 42,
                        columnNumber: 529
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoModal.tsx",
                lineNumber: 30,
                columnNumber: 125
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoModal.tsx",
            lineNumber: 30,
            columnNumber: 20
        }, this);
        $[1] = children;
        $[2] = footer;
        $[3] = isOpen;
        $[4] = onClose;
        $[5] = title;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t1
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoModal.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c = VideoModal;
var _c;
__turbopack_context__.k.register(_c, "VideoModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MintingModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shapes$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/shapes.js [app-client] (ecmascript) <export default as Shapes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useActiveAccount.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function MintingModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(39);
    if ($[0] !== "e2b78f44d14d88a48755349363656307171a568c0772e4afb3f5dafbb6dea028") {
        for(let $i = 0; $i < 39; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e2b78f44d14d88a48755349363656307171a568c0772e4afb3f5dafbb6dea028";
    }
    const { isOpen, onClose, asset, onMint, isMinting } = t0;
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveAccount"])();
    const [tokenType, setTokenType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ERC721");
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [symbol, setSymbol] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    if ($[1] !== amount || $[2] !== name || $[3] !== onMint || $[4] !== symbol || $[5] !== tokenType) {
        t1 = ({
            "MintingModal[handleMint]": ()=>{
                if (!name || !symbol) {
                    return;
                }
                if (tokenType === "ERC20" && (!amount || amount <= 0)) {
                    return;
                }
                onMint(tokenType, {
                    name,
                    symbol,
                    amount: tokenType === "ERC20" ? Number(amount) : undefined
                });
            }
        })["MintingModal[handleMint]"];
        $[1] = amount;
        $[2] = name;
        $[3] = onMint;
        $[4] = symbol;
        $[5] = tokenType;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    const handleMint = t1;
    if (!isOpen || !asset) {
        return null;
    }
    let t2;
    let t3;
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 0,
            scale: 0.95,
            y: 20
        };
        t3 = {
            opacity: 1,
            scale: 1,
            y: 0
        };
        t4 = {
            opacity: 0,
            scale: 0.95,
            y: 20
        };
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
    } else {
        t2 = $[7];
        t3 = $[8];
        t4 = $[9];
    }
    let t5;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-black italic uppercase tracking-tighter text-white flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                    className: "w-5 h-5 text-[#00ffa3]"
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                    lineNumber: 99,
                    columnNumber: 114
                }, this),
                "Mint to Blockchain"
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== onClose) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "text-gray-500 hover:text-white transition-colors",
                    children: t6
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                    lineNumber: 113,
                    columnNumber: 116
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[12] = onClose;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== account || $[15] !== amount || $[16] !== asset || $[17] !== name || $[18] !== symbol || $[19] !== tokenType) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 overflow-y-auto custom-scrollbar flex-1",
            children: !account ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-8 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                        className: "w-12 h-12 text-yellow-500 mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                        lineNumber: 121,
                        columnNumber: 127
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 text-sm",
                        children: "Please connect your wallet to mint assets."
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                        lineNumber: 121,
                        columnNumber: 188
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                lineNumber: 121,
                columnNumber: 83
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 rounded-lg bg-black overflow-hidden flex-shrink-0 border border-white/10",
                                children: asset.uri || asset.previewUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: asset.uri || asset.previewUrl,
                                    className: "w-full h-full object-cover",
                                    alt: asset.filename || asset.name
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                    lineNumber: 121,
                                    columnNumber: 529
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shapes$3e$__["Shapes"], {
                                        className: "w-6 h-6 text-gray-700"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                        lineNumber: 121,
                                        columnNumber: 713
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                    lineNumber: 121,
                                    columnNumber: 649
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                lineNumber: 121,
                                columnNumber: 396
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-white truncate text-lg",
                                        children: asset.filename || asset.name || "Untitled Asset"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                        lineNumber: 121,
                                        columnNumber: 802
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 font-mono mt-1",
                                        children: [
                                            "ID: ",
                                            asset.id
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                        lineNumber: 121,
                                        columnNumber: 911
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                lineNumber: 121,
                                columnNumber: 770
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                        lineNumber: 121,
                        columnNumber: 307
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs font-black uppercase tracking-widest text-[#00ffa3]",
                                children: "1. Select Token Standard"
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                lineNumber: 121,
                                columnNumber: 1020
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "MintingModal[<button>.onClick]": ()=>setTokenType("ERC721")
                                        }["MintingModal[<button>.onClick]"],
                                        className: `p-4 rounded-xl border text-left transition-all ${tokenType === "ERC721" ? "bg-[#00ffa3]/10 border-[#00ffa3] shadow-[0_0_15px_rgba(0,255,163,0.1)]" : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `font-bold ${tokenType === "ERC721" ? "text-white" : "text-gray-400"}`,
                                                    children: "ERC-721"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 339
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                lineNumber: 123,
                                                columnNumber: 283
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-gray-500 leading-relaxed",
                                                children: "Non-Fungible Token (NFT). Best for unique, 1-of-1 digital artwork or exclusive media."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                lineNumber: 123,
                                                columnNumber: 448
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                        lineNumber: 121,
                                        columnNumber: 1171
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "MintingModal[<button>.onClick]": ()=>setTokenType("ERC20")
                                        }["MintingModal[<button>.onClick]"],
                                        className: `p-4 rounded-xl border text-left transition-all ${tokenType === "ERC20" ? "bg-blue-500/10 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.1)]" : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `font-bold ${tokenType === "ERC20" ? "text-white" : "text-gray-400"}`,
                                                    children: "ERC-20"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 337
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                lineNumber: 125,
                                                columnNumber: 281
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-gray-500 leading-relaxed",
                                                children: "Fungible Token. Best for fractionalized ownership, community coins, or fungible game assets."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                lineNumber: 125,
                                                columnNumber: 444
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                        lineNumber: 123,
                                        columnNumber: 603
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                lineNumber: 121,
                                columnNumber: 1131
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                        lineNumber: 121,
                        columnNumber: 993
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs font-black uppercase tracking-widest text-[#00ffa3]",
                                children: "2. Token Configuration"
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                lineNumber: 125,
                                columnNumber: 645
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-bold text-gray-400 mb-1",
                                                children: "Token Name"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                lineNumber: 125,
                                                columnNumber: 786
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: name,
                                                onChange: {
                                                    "MintingModal[<input>.onChange]": (e)=>setName(e.target.value)
                                                }["MintingModal[<input>.onChange]"],
                                                placeholder: asset.filename || "e.g. My Awesome Art",
                                                className: "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#00ffa3] transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                lineNumber: 125,
                                                columnNumber: 866
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                        lineNumber: 125,
                                        columnNumber: 781
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-bold text-gray-400 mb-1",
                                                        children: "Symbol"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 312
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: symbol,
                                                        onChange: {
                                                            "MintingModal[<input>.onChange]": (e_0)=>setSymbol(e_0.target.value)
                                                        }["MintingModal[<input>.onChange]"],
                                                        placeholder: "e.g. ART",
                                                        className: "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#00ffa3] transition-colors uppercase"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 388
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                lineNumber: 127,
                                                columnNumber: 307
                                            }, this),
                                            tokenType === "ERC20" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-bold text-gray-400 mb-1",
                                                        children: "Supply Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 279
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: amount,
                                                        onChange: {
                                                            "MintingModal[<input>.onChange]": (e_1)=>setAmount(Number(e_1.target.value))
                                                        }["MintingModal[<input>.onChange]"],
                                                        min: "1",
                                                        placeholder: "e.g. 10000",
                                                        className: "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 362
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                                lineNumber: 129,
                                                columnNumber: 274
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                        lineNumber: 127,
                                        columnNumber: 267
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                                lineNumber: 125,
                                columnNumber: 754
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                        lineNumber: 125,
                        columnNumber: 618
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                lineNumber: 121,
                columnNumber: 280
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[14] = account;
        $[15] = amount;
        $[16] = asset;
        $[17] = name;
        $[18] = symbol;
        $[19] = tokenType;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    let t9;
    if ($[21] !== isMinting || $[22] !== onClose) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            disabled: isMinting,
            className: "px-6 py-2 rounded-lg font-bold text-sm text-gray-400 hover:text-white transition-colors disabled:opacity-50",
            children: "Cancel"
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
            lineNumber: 144,
            columnNumber: 10
        }, this);
        $[21] = isMinting;
        $[22] = onClose;
        $[23] = t9;
    } else {
        t9 = $[23];
    }
    let t10;
    if ($[24] !== account || $[25] !== amount || $[26] !== handleMint || $[27] !== isMinting || $[28] !== name || $[29] !== symbol || $[30] !== tokenType) {
        t10 = account && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleMint,
            disabled: isMinting || !name || !symbol || tokenType === "ERC20" && (!amount || amount <= 0),
            className: `px-6 py-2 rounded-lg font-bold text-sm text-black shadow-lg flex items-center gap-2 transition-all ${isMinting || !name || !symbol || tokenType === "ERC20" && (!amount || amount <= 0) ? "bg-gray-600 cursor-not-allowed opacity-50" : tokenType === "ERC721" ? "bg-[#00ffa3] hover:bg-[#00ffa3]/90 hover:scale-105 shadow-[#00ffa3]/20" : "bg-blue-500 hover:bg-blue-500/90 hover:scale-105 shadow-blue-500/20 text-white"}`,
            children: isMinting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                        lineNumber: 153,
                        columnNumber: 588
                    }, this),
                    "Minting..."
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    "Mint as ",
                    tokenType
                ]
            }, void 0, true)
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
            lineNumber: 153,
            columnNumber: 22
        }, this);
        $[24] = account;
        $[25] = amount;
        $[26] = handleMint;
        $[27] = isMinting;
        $[28] = name;
        $[29] = symbol;
        $[30] = tokenType;
        $[31] = t10;
    } else {
        t10 = $[31];
    }
    let t11;
    if ($[32] !== t10 || $[33] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-6 py-4 border-t border-white/10 bg-white/[0.02] flex justify-end gap-3 shrink-0",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        $[32] = t10;
        $[33] = t9;
        $[34] = t11;
    } else {
        t11 = $[34];
    }
    let t12;
    if ($[35] !== t11 || $[36] !== t7 || $[37] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: t2,
                    animate: t3,
                    exit: t4,
                    className: "w-full max-w-lg bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",
                    children: [
                        t7,
                        t8,
                        t11
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                    lineNumber: 176,
                    columnNumber: 133
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
                lineNumber: 176,
                columnNumber: 28
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[35] = t11;
        $[36] = t7;
        $[37] = t8;
        $[38] = t12;
    } else {
        t12 = $[38];
    }
    return t12;
}
_s(MintingModal, "BLL0JBZsPI4VTjRePpZgv388xz0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveAccount"]
    ];
});
_c = MintingModal;
var _c;
__turbopack_context__.k.register(_c, "MintingModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/BOLTChainvas/apps/web/src/hooks/useMinting.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMinting",
    ()=>useMinting
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$prepare$2d$contract$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/prepare-contract-call.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$send$2d$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/actions/send-transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useActiveAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$hooks$2f$transaction$2f$useSendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/hooks/transaction/useSendTransaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$chain$2d$definitions$2f$arbitrum$2d$sepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/chains/chain-definitions/arbitrum-sepolia.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$client$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/client/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/contract/contract.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$client$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createThirdwebClient"])({
    clientId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "915ea7be7f735d46101c5cc897931448"
});
const ERC721_CONTRACT_ADDRESS = "0x0000000000000000000000000000000000000000";
const ERC20_CONTRACT_ADDRESS = "0x0000000000000000000000000000000000000000";
function useMinting() {
    _s();
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveAccount"])();
    const { mutate: sendTx } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$hooks$2f$transaction$2f$useSendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSendTransaction"])();
    const [isMinting, setIsMinting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const mintAsset = async (type, config, assetUri)=>{
        if (!account) return false;
        setIsMinting(true);
        try {
            if (type === "ERC721") {
                const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
                    client,
                    chain: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$chain$2d$definitions$2f$arbitrum$2d$sepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arbitrumSepolia"],
                    address: ERC721_CONTRACT_ADDRESS
                });
                const tokenURI = assetUri || "ipfs://placeholder";
                const transaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$prepare$2d$contract$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareContractCall"])({
                    contract,
                    method: "function mintMedia(address to, string memory uri, uint8 mediaType) returns (uint256)",
                    params: [
                        account.address,
                        tokenURI,
                        1
                    ] // Defaulting mediaType to 1
                });
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$send$2d$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTransaction"])({
                    transaction,
                    account
                });
            } else {
                const contract_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
                    client,
                    chain: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$chain$2d$definitions$2f$arbitrum$2d$sepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arbitrumSepolia"],
                    address: ERC20_CONTRACT_ADDRESS
                });
                const transaction_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$prepare$2d$contract$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareContractCall"])({
                    contract: contract_0,
                    method: "function mintToken(address to, uint256 amount)",
                    params: [
                        account.address,
                        BigInt((config.amount || 0) * 10 ** 18)
                    ]
                });
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$send$2d$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTransaction"])({
                    transaction: transaction_0,
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
_s(useMinting, "Cb0hmhJOgb4aW2uaDSl8AQrQpkc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$hooks$2f$transaction$2f$useSendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSendTransaction"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AEVideoEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$hooks$2f$useYjs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/apps/web/src/hooks/useYjs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$hooks$2f$useHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/apps/web/src/hooks/useHistory.ts [app-client] (ecmascript)");
// Modular Components
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$components$2f$video$2d$editor$2f$ProjectPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/ProjectPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$components$2f$video$2d$editor$2f$EffectsControl$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/EffectsControl.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$components$2f$video$2d$editor$2f$CompositionView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/CompositionView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$components$2f$video$2d$editor$2f$AETimeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/AETimeline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$components$2f$video$2d$editor$2f$VideoMenuBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoMenuBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$components$2f$video$2d$editor$2f$VideoModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/apps/web/src/components/video-editor/VideoModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$components$2f$profile$2f$MintingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/apps/web/src/components/profile/MintingModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$hooks$2f$useMinting$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/apps/web/src/hooks/useMinting.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(120);
    if ($[0] !== "697c1fede1859b08dda49d5c3ca8b566d2c3470b5aeec8dea771a7e6462731cc") {
        for(let $i = 0; $i < 120; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "697c1fede1859b08dda49d5c3ca8b566d2c3470b5aeec8dea771a7e6462731cc";
    }
    const { synced } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$hooks$2f$useYjs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useYjs"])("bolt-ae-video-v1");
    const requestRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { mintAsset, isMinting } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$hooks$2f$useMinting$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMinting"])();
    const [isMintModalOpen, setIsMintModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] !== mintAsset) {
        t0 = ({
            "AEVideoEditor[handleMint]": async (type, config)=>{
                const success = await mintAsset(type, config, "ipfs://video-project-data");
                if (success) {
                    setIsMintModalOpen(false);
                }
            }
        })["AEVideoEditor[handleMint]"];
        $[1] = mintAsset;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const handleMint = t0;
    const [showProject, setShowProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showEffects, setShowEffects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showTimeline, setShowTimeline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            currentTime: 0,
            duration: 10,
            isPlaying: false,
            fps: 30
        };
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const [playback, setPlayback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            isOpen: false,
            type: null,
            title: ""
        };
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const [modalConfig, setModalConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [];
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const [layers, setLayers, history] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$hooks$2f$useHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistory"])(t3);
    const [activeLayerId, setActiveLayerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t4;
    let t5;
    if ($[6] !== playback.isPlaying) {
        t4 = ({
            "AEVideoEditor[useEffect()]": ()=>{
                const animate = {
                    "AEVideoEditor[useEffect() > animate]": (time)=>{
                        if (lastTimeRef.current !== null && playback.isPlaying) {
                            const deltaTime = (time - lastTimeRef.current) / 1000;
                            setPlayback({
                                "AEVideoEditor[useEffect() > animate > setPlayback()]": (prev)=>{
                                    let nextTime = prev.currentTime + deltaTime;
                                    if (nextTime >= prev.duration) {
                                        nextTime = 0;
                                    }
                                    return {
                                        ...prev,
                                        currentTime: nextTime
                                    };
                                }
                            }["AEVideoEditor[useEffect() > animate > setPlayback()]"]);
                        }
                        lastTimeRef.current = time;
                        requestRef.current = requestAnimationFrame(animate);
                    }
                }["AEVideoEditor[useEffect() > animate]"];
                requestRef.current = requestAnimationFrame(animate);
                return ()=>{
                    if (requestRef.current) {
                        cancelAnimationFrame(requestRef.current);
                    }
                };
            }
        })["AEVideoEditor[useEffect()]"];
        t5 = [
            playback.isPlaying
        ];
        $[6] = playback.isPlaying;
        $[7] = t4;
        $[8] = t5;
    } else {
        t4 = $[7];
        t5 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "AEVideoEditor[handleTogglePlayback]": ()=>{
                setPlayback(_AEVideoEditorHandleTogglePlaybackSetPlayback);
            }
        })["AEVideoEditor[handleTogglePlayback]"];
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    const handleTogglePlayback = t6;
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "AEVideoEditor[handleSeek]": (time_0)=>{
                setPlayback({
                    "AEVideoEditor[handleSeek > setPlayback()]": (prev_1)=>({
                            ...prev_1,
                            currentTime: time_0
                        })
                }["AEVideoEditor[handleSeek > setPlayback()]"]);
            }
        })["AEVideoEditor[handleSeek]"];
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    const handleSeek = t7;
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
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
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    const defaultStyles = t8;
    let t9;
    if ($[12] !== setLayers) {
        t9 = ({
            "AEVideoEditor[handleUpdateLayer]": (id, updates)=>{
                setLayers({
                    "AEVideoEditor[handleUpdateLayer > setLayers()]": (prev_2)=>prev_2.map({
                            "AEVideoEditor[handleUpdateLayer > setLayers() > prev_2.map()]": (l)=>l.id === id ? {
                                    ...l,
                                    ...updates
                                } : l
                        }["AEVideoEditor[handleUpdateLayer > setLayers() > prev_2.map()]"])
                }["AEVideoEditor[handleUpdateLayer > setLayers()]"]);
            }
        })["AEVideoEditor[handleUpdateLayer]"];
        $[12] = setLayers;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    const handleUpdateLayer = t9;
    let t10;
    if ($[14] !== setLayers) {
        t10 = ({
            "AEVideoEditor[handleToggleLayerProp]": (id_0, prop)=>{
                setLayers({
                    "AEVideoEditor[handleToggleLayerProp > setLayers()]": (prev_3)=>prev_3.map({
                            "AEVideoEditor[handleToggleLayerProp > setLayers() > prev_3.map()]": (l_0)=>{
                                if (l_0.id !== id_0) {
                                    return l_0;
                                }
                                return {
                                    ...l_0,
                                    [prop]: !l_0[prop]
                                };
                            }
                        }["AEVideoEditor[handleToggleLayerProp > setLayers() > prev_3.map()]"])
                }["AEVideoEditor[handleToggleLayerProp > setLayers()]"]);
            }
        })["AEVideoEditor[handleToggleLayerProp]"];
        $[14] = setLayers;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    const handleToggleLayerProp = t10;
    let t11;
    if ($[16] !== layers.length || $[17] !== playback.currentTime || $[18] !== setLayers) {
        t11 = ({
            "AEVideoEditor[handleAddLayer]": ()=>{
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
                setLayers({
                    "AEVideoEditor[handleAddLayer > setLayers()]": (prev_4)=>[
                            ...prev_4,
                            newLayer
                        ]
                }["AEVideoEditor[handleAddLayer > setLayers()]"]);
                setActiveLayerId(newLayer.id);
            }
        })["AEVideoEditor[handleAddLayer]"];
        $[16] = layers.length;
        $[17] = playback.currentTime;
        $[18] = setLayers;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    const handleAddLayer = t11;
    let t12;
    if ($[20] !== activeLayerId || $[21] !== layers || $[22] !== playback.currentTime || $[23] !== setLayers) {
        t12 = ({
            "AEVideoEditor[handleSplitLayer]": ()=>{
                if (!activeLayerId) {
                    return;
                }
                const layerToSplit = layers.find({
                    "AEVideoEditor[handleSplitLayer > layers.find()]": (l_1)=>l_1.id === activeLayerId
                }["AEVideoEditor[handleSplitLayer > layers.find()]"]);
                if (!layerToSplit) {
                    return;
                }
                const splitTime = playback.currentTime;
                if (splitTime <= layerToSplit.startTime || splitTime >= layerToSplit.startTime + layerToSplit.duration) {
                    if (layerToSplit.type === "VIDEO" && layerToSplit.url) {
                        const audioLayer = {
                            ...layerToSplit,
                            id: Math.random().toString(36).substr(2, 9),
                            name: `${layerToSplit.name} (Audio)`,
                            type: "AUDIO",
                            color: "#10b981"
                        };
                        setLayers({
                            "AEVideoEditor[handleSplitLayer > setLayers()]": (prev_5)=>[
                                    ...prev_5,
                                    audioLayer
                                ]
                        }["AEVideoEditor[handleSplitLayer > setLayers()]"]);
                    }
                    return;
                }
                const firstPartDuration = splitTime - layerToSplit.startTime;
                const secondPartDuration = layerToSplit.duration - firstPartDuration;
                const secondPart = {
                    ...layerToSplit,
                    id: Math.random().toString(36).substr(2, 9),
                    name: `${layerToSplit.name} (Split)`,
                    startTime: splitTime,
                    duration: secondPartDuration
                };
                setLayers({
                    "AEVideoEditor[handleSplitLayer > setLayers()]": (prev_6)=>{
                        const index = prev_6.findIndex({
                            "AEVideoEditor[handleSplitLayer > setLayers() > prev_6.findIndex()]": (l_2)=>l_2.id === layerToSplit.id
                        }["AEVideoEditor[handleSplitLayer > setLayers() > prev_6.findIndex()]"]);
                        const newLayers = [
                            ...prev_6
                        ];
                        newLayers[index] = {
                            ...layerToSplit,
                            duration: firstPartDuration
                        };
                        newLayers.splice(index, 0, secondPart);
                        return newLayers;
                    }
                }["AEVideoEditor[handleSplitLayer > setLayers()]"]);
                setActiveLayerId(secondPart.id);
            }
        })["AEVideoEditor[handleSplitLayer]"];
        $[20] = activeLayerId;
        $[21] = layers;
        $[22] = playback.currentTime;
        $[23] = setLayers;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    const handleSplitLayer = t12;
    let t13;
    if ($[25] !== playback.currentTime || $[26] !== setLayers) {
        t13 = ({
            "AEVideoEditor[handleFiles]": (files)=>{
                Array.from(files).forEach({
                    "AEVideoEditor[handleFiles > (anonymous)()]": (file)=>{
                        const isVideo = file.type.startsWith("video/");
                        const isAudio = file.type.startsWith("audio/");
                        if (!isVideo && !isAudio) {
                            return;
                        }
                        const url = URL.createObjectURL(file);
                        const newLayer_0 = {
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
                        setLayers({
                            "AEVideoEditor[handleFiles > (anonymous)() > setLayers()]": (prev_7)=>[
                                    ...prev_7,
                                    newLayer_0
                                ]
                        }["AEVideoEditor[handleFiles > (anonymous)() > setLayers()]"]);
                    }
                }["AEVideoEditor[handleFiles > (anonymous)()]"]);
            }
        })["AEVideoEditor[handleFiles]"];
        $[25] = playback.currentTime;
        $[26] = setLayers;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    const handleFiles = t13;
    let t14;
    if ($[28] !== activeLayerId || $[29] !== layers) {
        t14 = layers.find({
            "AEVideoEditor[layers.find()]": (l_3)=>l_3.id === activeLayerId
        }["AEVideoEditor[layers.find()]"]) || null;
        $[28] = activeLayerId;
        $[29] = layers;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    const activeLayer = t14;
    let t15;
    if ($[31] !== activeLayerId || $[32] !== handleSplitLayer || $[33] !== history || $[34] !== layers || $[35] !== setLayers) {
        t15 = ({
            "AEVideoEditor[handleMenuAction]": (id_1)=>{
                bb100: switch(id_1){
                    case "FILE_NEW":
                        {
                            setModalConfig({
                                isOpen: true,
                                type: "NEW_PROJECT",
                                title: "New Project"
                            });
                            break bb100;
                        }
                    case "COMP_SETTINGS":
                        {
                            setModalConfig({
                                isOpen: true,
                                type: "COMP_SETTINGS",
                                title: "Composition Settings"
                            });
                            break bb100;
                        }
                    case "EDIT_PREFERENCES":
                        {
                            setModalConfig({
                                isOpen: true,
                                type: "PREFERENCES",
                                title: "Preferences"
                            });
                            break bb100;
                        }
                    case "COMP_RENDER":
                        {
                            setModalConfig({
                                isOpen: true,
                                type: "RENDER",
                                title: "Render Queue"
                            });
                            break bb100;
                        }
                    case "FILE_SAVE":
                        {
                            alert("Project structure saved to BOLTChain");
                            break bb100;
                        }
                    case "EDIT_UNDO":
                        {
                            history.undo();
                            break bb100;
                        }
                    case "EDIT_REDO":
                        {
                            history.redo();
                            break bb100;
                        }
                    case "EDIT_DUPLICATE":
                        {
                            if (activeLayerId) {
                                const layer = layers.find({
                                    "AEVideoEditor[handleMenuAction > layers.find()]": (l_5)=>l_5.id === activeLayerId
                                }["AEVideoEditor[handleMenuAction > layers.find()]"]);
                                if (layer) {
                                    const newLayer_1 = {
                                        ...layer,
                                        id: Math.random().toString(36).substr(2, 9),
                                        name: `${layer.name} Copy`
                                    };
                                    setLayers({
                                        "AEVideoEditor[handleMenuAction > setLayers()]": (prev_12)=>[
                                                ...prev_12,
                                                newLayer_1
                                            ]
                                    }["AEVideoEditor[handleMenuAction > setLayers()]"]);
                                    setActiveLayerId(newLayer_1.id);
                                }
                            }
                            break bb100;
                        }
                    case "EDIT_DELETE":
                        {
                            if (activeLayerId) {
                                setLayers({
                                    "AEVideoEditor[handleMenuAction > setLayers()]": (prev_11)=>prev_11.filter({
                                            "AEVideoEditor[handleMenuAction > setLayers() > prev_11.filter()]": (l_4)=>l_4.id !== activeLayerId
                                        }["AEVideoEditor[handleMenuAction > setLayers() > prev_11.filter()]"])
                                }["AEVideoEditor[handleMenuAction > setLayers()]"]);
                                setActiveLayerId(null);
                            }
                            break bb100;
                        }
                    case "EDIT_SPLIT":
                        {
                            handleSplitLayer();
                            break bb100;
                        }
                    case "WINDOW_PROJECT":
                        {
                            setShowProject(_AEVideoEditorHandleMenuActionSetShowProject);
                            break bb100;
                        }
                    case "WINDOW_EFFECTS":
                        {
                            setShowEffects(_AEVideoEditorHandleMenuActionSetShowEffects);
                            break bb100;
                        }
                    case "WINDOW_TIMELINE":
                        {
                            setShowTimeline(_AEVideoEditorHandleMenuActionSetShowTimeline);
                            break bb100;
                        }
                    case "FILE_MINT":
                        {
                            setIsMintModalOpen(true);
                            break bb100;
                        }
                    case "FILE_HELP":
                        {
                            setModalConfig({
                                isOpen: true,
                                type: "HELP",
                                title: "Bolt Video Editor - Help"
                            });
                            break bb100;
                        }
                    default:
                        {
                            console.log("Action not implemented:", id_1);
                        }
                }
            }
        })["AEVideoEditor[handleMenuAction]"];
        $[31] = activeLayerId;
        $[32] = handleSplitLayer;
        $[33] = history;
        $[34] = layers;
        $[35] = setLayers;
        $[36] = t15;
    } else {
        t15 = $[36];
    }
    const handleMenuAction = t15;
    let t16;
    let t17;
    if ($[37] !== handleMenuAction || $[38] !== history) {
        t16 = ({
            "AEVideoEditor[useEffect()]": ()=>{
                const handleKeyDown = {
                    "AEVideoEditor[useEffect() > handleKeyDown]": (e)=>{
                        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") {
                            if (e.shiftKey) {
                                history.redo();
                            } else {
                                history.undo();
                            }
                            e.preventDefault();
                        } else {
                            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "y") {
                                history.redo();
                                e.preventDefault();
                            }
                        }
                        bb178: switch(e.key){
                            case "F1":
                                {
                                    e.preventDefault();
                                    setModalConfig({
                                        isOpen: true,
                                        type: "HELP",
                                        title: "Bolt Video Editor - Help"
                                    });
                                    break bb178;
                                }
                            case "F3":
                                {
                                    e.preventDefault();
                                    handleMenuAction("EDIT_DUPLICATE");
                                    break bb178;
                                }
                            case "F4":
                                {
                                    e.preventDefault();
                                    handleMenuAction("EDIT_DELETE");
                                    break bb178;
                                }
                            case "F5":
                                {
                                    e.preventDefault();
                                    setModalConfig({
                                        isOpen: true,
                                        type: "RENDER",
                                        title: "Render Queue"
                                    });
                                    break bb178;
                                }
                            case "F6":
                                {
                                    e.preventDefault();
                                    setShowProject(_AEVideoEditorUseEffectHandleKeyDownSetShowProject);
                                    break bb178;
                                }
                            case "F7":
                                {
                                    e.preventDefault();
                                    setShowTimeline(_AEVideoEditorUseEffectHandleKeyDownSetShowTimeline);
                                    break bb178;
                                }
                            case "F8":
                                {
                                    e.preventDefault();
                                    setShowEffects(_AEVideoEditorUseEffectHandleKeyDownSetShowEffects);
                                    break bb178;
                                }
                            case "F11":
                                {
                                    e.preventDefault();
                                    if (typeof document !== "undefined") {
                                        if (!document.fullscreenElement) {
                                            document.documentElement.requestFullscreen().catch(_AEVideoEditorUseEffectHandleKeyDownAnonymous);
                                        } else {
                                            if (document.exitFullscreen) {
                                                document.exitFullscreen().catch(_AEVideoEditorUseEffectHandleKeyDownAnonymous2);
                                            }
                                        }
                                    }
                                    break bb178;
                                }
                            case "F12":
                                {
                                    e.preventDefault();
                                    setIsMintModalOpen(true);
                                    break bb178;
                                }
                            case " ":
                                {
                                    if (document.activeElement?.tagName !== "INPUT") {
                                        e.preventDefault();
                                        handleTogglePlayback();
                                    }
                                }
                        }
                    }
                }["AEVideoEditor[useEffect() > handleKeyDown]"];
                window.addEventListener("keydown", handleKeyDown);
                return ()=>window.removeEventListener("keydown", handleKeyDown);
            }
        })["AEVideoEditor[useEffect()]"];
        t17 = [
            history,
            handleMenuAction,
            handleTogglePlayback
        ];
        $[37] = handleMenuAction;
        $[38] = history;
        $[39] = t16;
        $[40] = t17;
    } else {
        t16 = $[39];
        t17 = $[40];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t16, t17);
    let t18;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-3 h-full flex items-center bg-[#d391fc]/10 border-r border-black/20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-5 h-5 bg-[#d391fc] flex items-center justify-center rounded-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[12px] font-black text-[#1e1e1e]",
                    children: "Ae"
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                    lineNumber: 647,
                    columnNumber: 181
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                lineNumber: 647,
                columnNumber: 99
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
            lineNumber: 647,
            columnNumber: 11
        }, this);
        $[41] = t18;
    } else {
        t18 = $[41];
    }
    let t19;
    if ($[42] !== handleMenuAction) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center h-full",
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$components$2f$video$2d$editor$2f$VideoMenuBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onAction: handleMenuAction
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                    lineNumber: 654,
                    columnNumber: 58
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
            lineNumber: 654,
            columnNumber: 11
        }, this);
        $[42] = handleMenuAction;
        $[43] = t19;
    } else {
        t19 = $[43];
    }
    const t20 = `w-1.5 h-1.5 rounded-full ${synced ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" : "bg-red-500 animate-pulse"}`;
    let t21;
    if ($[44] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t20
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
            lineNumber: 663,
            columnNumber: 11
        }, this);
        $[44] = t20;
        $[45] = t21;
    } else {
        t21 = $[45];
    }
    const t22 = synced ? "Live Link Active" : "Searching Peers";
    let t23;
    if ($[46] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[9px] font-black uppercase tracking-widest text-gray-500",
            children: t22
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
            lineNumber: 672,
            columnNumber: 11
        }, this);
        $[46] = t22;
        $[47] = t23;
    } else {
        t23 = $[47];
    }
    let t24;
    if ($[48] !== t21 || $[49] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full border border-white/5",
            children: [
                t21,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
            lineNumber: 680,
            columnNumber: 11
        }, this);
        $[48] = t21;
        $[49] = t23;
        $[50] = t24;
    } else {
        t24 = $[50];
    }
    let t25;
    let t26;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "AEVideoEditor[<button>.onClick]": ()=>setIsMintModalOpen(true)
            }["AEVideoEditor[<button>.onClick]"],
            className: "bg-[#00ffa3] hover:bg-[#00ffa3]/90 px-4 py-1 rounded text-[10px] font-black text-black uppercase tracking-widest transition-all shadow-[0_0_10px_rgba(0,255,163,0.2)] ml-2",
            children: "Mint Asset"
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
            lineNumber: 690,
            columnNumber: 11
        }, this);
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "bg-white/5 hover:bg-white/10 px-4 py-1 rounded text-[10px] font-black text-white uppercase tracking-widest transition-all border border-white/10 ml-2",
            children: "Render"
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
            lineNumber: 693,
            columnNumber: 11
        }, this);
        $[51] = t25;
        $[52] = t26;
    } else {
        t25 = $[51];
        t26 = $[52];
    }
    let t27;
    if ($[53] !== t24) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t24,
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
            lineNumber: 702,
            columnNumber: 11
        }, this);
        $[53] = t24;
        $[54] = t27;
    } else {
        t27 = $[54];
    }
    let t28;
    if ($[55] !== t19 || $[56] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-9 bg-[#2d2d2d] border-b border-black flex items-center justify-between",
            children: [
                t19,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
            lineNumber: 710,
            columnNumber: 11
        }, this);
        $[55] = t19;
        $[56] = t27;
        $[57] = t28;
    } else {
        t28 = $[57];
    }
    let t29;
    if ($[58] !== activeLayer || $[59] !== handleFiles || $[60] !== handleUpdateLayer || $[61] !== layers || $[62] !== showEffects || $[63] !== showProject) {
        t29 = (showProject || showEffects) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[320px] flex flex-col border-r border-black shrink-0 z-30",
            children: [
                showProject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: showEffects ? "h-1/2" : "h-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$components$2f$video$2d$editor$2f$ProjectPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        layers: layers,
                        onFilesDrop: handleFiles
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                        lineNumber: 719,
                        columnNumber: 186
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                    lineNumber: 719,
                    columnNumber: 136
                }, this),
                showEffects && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: showProject ? "h-1/2 border-t border-black/50" : "h-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$components$2f$video$2d$editor$2f$EffectsControl$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        activeLayer: activeLayer,
                        onUpdateLayer: handleUpdateLayer
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                        lineNumber: 719,
                        columnNumber: 342
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                    lineNumber: 719,
                    columnNumber: 267
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
            lineNumber: 719,
            columnNumber: 43
        }, this);
        $[58] = activeLayer;
        $[59] = handleFiles;
        $[60] = handleUpdateLayer;
        $[61] = layers;
        $[62] = showEffects;
        $[63] = showProject;
        $[64] = t29;
    } else {
        t29 = $[64];
    }
    let t30;
    if ($[65] !== activeLayerId || $[66] !== handleFiles || $[67] !== layers || $[68] !== playback) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-grow flex flex-col bg-[#161616] relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$components$2f$video$2d$editor$2f$CompositionView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                playback: playback,
                layers: layers,
                activeLayerId: activeLayerId,
                onSelectLayer: setActiveLayerId,
                onTogglePlayback: handleTogglePlayback,
                onSeek: handleSeek,
                onFilesDrop: handleFiles
            }, void 0, false, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                lineNumber: 732,
                columnNumber: 74
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
            lineNumber: 732,
            columnNumber: 11
        }, this);
        $[65] = activeLayerId;
        $[66] = handleFiles;
        $[67] = layers;
        $[68] = playback;
        $[69] = t30;
    } else {
        t30 = $[69];
    }
    let t31;
    if ($[70] !== activeLayerId || $[71] !== handleAddLayer || $[72] !== handleSplitLayer || $[73] !== handleToggleLayerProp || $[74] !== layers || $[75] !== playback || $[76] !== showTimeline) {
        t31 = showTimeline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-[400px] border-t border-black z-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$components$2f$video$2d$editor$2f$AETimeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                lineNumber: 743,
                columnNumber: 81
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
            lineNumber: 743,
            columnNumber: 27
        }, this);
        $[70] = activeLayerId;
        $[71] = handleAddLayer;
        $[72] = handleSplitLayer;
        $[73] = handleToggleLayerProp;
        $[74] = layers;
        $[75] = playback;
        $[76] = showTimeline;
        $[77] = t31;
    } else {
        t31 = $[77];
    }
    let t32;
    if ($[78] !== t30 || $[79] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col flex-grow relative",
            children: [
                t30,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
            lineNumber: 757,
            columnNumber: 11
        }, this);
        $[78] = t30;
        $[79] = t31;
        $[80] = t32;
    } else {
        t32 = $[80];
    }
    let t33;
    if ($[81] !== t29 || $[82] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-grow overflow-hidden",
            children: [
                t29,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
            lineNumber: 766,
            columnNumber: 11
        }, this);
        $[81] = t29;
        $[82] = t32;
        $[83] = t33;
    } else {
        t33 = $[83];
    }
    let t34;
    if ($[84] !== t28 || $[85] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-screen bg-[#1e1e1e] overflow-hidden select-none text-white font-sans",
            children: [
                t28,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
            lineNumber: 775,
            columnNumber: 11
        }, this);
        $[84] = t28;
        $[85] = t33;
        $[86] = t34;
    } else {
        t34 = $[86];
    }
    let t35;
    if ($[87] !== modalConfig) {
        t35 = ({
            "AEVideoEditor[<VideoModal>.onClose]": ()=>setModalConfig({
                    ...modalConfig,
                    isOpen: false
                })
        })["AEVideoEditor[<VideoModal>.onClose]"];
        $[87] = modalConfig;
        $[88] = t35;
    } else {
        t35 = $[88];
    }
    let t36;
    if ($[89] !== modalConfig) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "AEVideoEditor[<button>.onClick]": ()=>setModalConfig({
                                ...modalConfig,
                                isOpen: false
                            })
                    }["AEVideoEditor[<button>.onClick]"],
                    className: "px-4 py-1.5 text-xs font-bold text-gray-500 hover:text-white transition-colors",
                    children: "Cancel"
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                    lineNumber: 797,
                    columnNumber: 39
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "AEVideoEditor[<button>.onClick]": ()=>setModalConfig({
                                ...modalConfig,
                                isOpen: false
                            })
                    }["AEVideoEditor[<button>.onClick]"],
                    className: "bg-[#d391fc] px-6 py-1.5 rounded-sm text-xs font-bold text-[#1e1e1e] hover:bg-[#d391fc]/90 shadow-[0_0_20px_rgba(211,145,252,0.3)]",
                    children: "OK"
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                    lineNumber: 802,
                    columnNumber: 151
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
            lineNumber: 797,
            columnNumber: 11
        }, this);
        $[89] = modalConfig;
        $[90] = t36;
    } else {
        t36 = $[90];
    }
    let t37;
    if ($[91] !== modalConfig.type) {
        t37 = modalConfig.type === "COMP_SETTINGS" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-x-12 gap-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-[10px] uppercase tracking-widest text-gray-500 font-black",
                                children: "Composition Name"
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                lineNumber: 815,
                                columnNumber: 156
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                defaultValue: "Comp 1",
                                className: "w-full bg-[#1a1a1a] border border-white/5 rounded px-3 py-2 text-white italic outline-none focus:border-[#d391fc]/50"
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                lineNumber: 815,
                                columnNumber: 262
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                        lineNumber: 815,
                        columnNumber: 129
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-[10px] uppercase tracking-widest text-gray-500 font-black",
                                children: "Frame Rate"
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                lineNumber: 815,
                                columnNumber: 467
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "w-full bg-[#1a1a1a] border border-white/5 rounded px-3 py-2 text-white outline-none focus:border-[#d391fc]/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "24 fps"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 815,
                                        columnNumber: 697
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        selected: true,
                                        children: "30 fps"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 815,
                                        columnNumber: 720
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "60 fps"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 815,
                                        columnNumber: 759
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                lineNumber: 815,
                                columnNumber: 567
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                        lineNumber: 815,
                        columnNumber: 440
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-[10px] uppercase tracking-widest text-gray-500 font-black",
                                children: "Resolution"
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                lineNumber: 815,
                                columnNumber: 824
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        defaultValue: 1920,
                                        className: "w-full bg-[#1a1a1a] border border-white/5 rounded px-2 py-1.5 text-white outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 815,
                                        columnNumber: 965
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "x"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 815,
                                        columnNumber: 1106
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        defaultValue: 1080,
                                        className: "w-full bg-[#1a1a1a] border border-white/5 rounded px-2 py-1.5 text-white outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 815,
                                        columnNumber: 1146
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                lineNumber: 815,
                                columnNumber: 924
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                        lineNumber: 815,
                        columnNumber: 797
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-[10px] uppercase tracking-widest text-gray-500 font-black",
                                children: "Duration"
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                lineNumber: 815,
                                columnNumber: 1326
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                defaultValue: "0:00:10:00",
                                className: "w-full bg-[#1a1a1a] border border-white/5 rounded px-3 py-2 text-[#d391fc] font-mono outline-none"
                            }, void 0, false, {
                                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                lineNumber: 815,
                                columnNumber: 1424
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                        lineNumber: 815,
                        columnNumber: 1299
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                lineNumber: 815,
                columnNumber: 78
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
            lineNumber: 815,
            columnNumber: 51
        }, this);
        $[91] = modalConfig.type;
        $[92] = t37;
    } else {
        t37 = $[92];
    }
    let t38;
    if ($[93] !== modalConfig.type) {
        t38 = modalConfig.type === "PREFERENCES" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-[10px] uppercase tracking-widest font-black text-[#d391fc]",
                            children: "Previews"
                        }, void 0, false, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                            lineNumber: 823,
                            columnNumber: 103
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-3 bg-white/5 rounded border border-white/5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs",
                                    children: "Adaptive Resolution"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 823,
                                    columnNumber: 292
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-4 bg-[#d391fc] rounded-full relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0.5 top-0.5 w-3 h-3 bg-[#1e1e1e] rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 823,
                                        columnNumber: 404
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 823,
                                    columnNumber: 344
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                            lineNumber: 823,
                            columnNumber: 196
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                    lineNumber: 823,
                    columnNumber: 76
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-[10px] uppercase tracking-widest font-black text-[#d391fc]",
                            children: "Media & Disk Cache"
                        }, void 0, false, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                            lineNumber: 823,
                            columnNumber: 529
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-black/40 rounded border border-white/5 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between text-[11px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-500",
                                            children: "Maximum Cache Size:"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                            lineNumber: 823,
                                            columnNumber: 759
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white",
                                            children: "46.0 GB"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                            lineNumber: 823,
                                            columnNumber: 817
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 823,
                                    columnNumber: 709
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-1 bg-white/10 rounded-full overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full bg-[#d391fc] w-[65%]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                        lineNumber: 823,
                                        columnNumber: 928
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 823,
                                    columnNumber: 866
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                            lineNumber: 823,
                            columnNumber: 636
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                    lineNumber: 823,
                    columnNumber: 502
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
            lineNumber: 823,
            columnNumber: 49
        }, this);
        $[93] = modalConfig.type;
        $[94] = t38;
    } else {
        t38 = $[94];
    }
    let t39;
    if ($[95] !== modalConfig.type) {
        t39 = modalConfig.type === "RENDER" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-8 space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-16 h-16 bg-[#d391fc]/10 rounded-full flex items-center justify-center mx-auto border border-[#d391fc]/20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 border-2 border-[#d391fc] border-t-transparent rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                        lineNumber: 831,
                        columnNumber: 212
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                    lineNumber: 831,
                    columnNumber: 88
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-lg font-bold text-white italic",
                            children: "Preparing Render Engine"
                        }, void 0, false, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                            lineNumber: 831,
                            columnNumber: 345
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 text-xs",
                            children: "Allocating virtual memory for BOLTChain sequence export..."
                        }, void 0, false, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                            lineNumber: 831,
                            columnNumber: 425
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                    lineNumber: 831,
                    columnNumber: 318
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
            lineNumber: 831,
            columnNumber: 44
        }, this);
        $[95] = modalConfig.type;
        $[96] = t39;
    } else {
        t39 = $[96];
    }
    let t40;
    if ($[97] !== modalConfig.type) {
        t40 = modalConfig.type === "HELP" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-x-8 gap-y-2 text-[11px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between border-b border-white/5 py-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#d391fc] font-bold",
                                    children: "F1"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 839,
                                    columnNumber: 198
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-300",
                                    children: "Help / Keybinds"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 839,
                                    columnNumber: 250
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                            lineNumber: 839,
                            columnNumber: 131
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between border-b border-white/5 py-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#d391fc] font-bold",
                                    children: "F7"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 839,
                                    columnNumber: 377
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-300",
                                    children: "Toggle Timeline"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 839,
                                    columnNumber: 429
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                            lineNumber: 839,
                            columnNumber: 310
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between border-b border-white/5 py-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#d391fc] font-bold",
                                    children: "F3"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 839,
                                    columnNumber: 556
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-300",
                                    children: "Duplicate Layer"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 839,
                                    columnNumber: 608
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                            lineNumber: 839,
                            columnNumber: 489
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between border-b border-white/5 py-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#d391fc] font-bold",
                                    children: "F8"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 839,
                                    columnNumber: 735
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-300",
                                    children: "Toggle Effects"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 839,
                                    columnNumber: 787
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                            lineNumber: 839,
                            columnNumber: 668
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between border-b border-white/5 py-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#d391fc] font-bold",
                                    children: "F4"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 839,
                                    columnNumber: 913
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-300",
                                    children: "Delete Layer"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 839,
                                    columnNumber: 965
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                            lineNumber: 839,
                            columnNumber: 846
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between border-b border-white/5 py-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#d391fc] font-bold",
                                    children: "F11"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 839,
                                    columnNumber: 1089
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-300",
                                    children: "Fullscreen"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 839,
                                    columnNumber: 1142
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                            lineNumber: 839,
                            columnNumber: 1022
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between border-b border-white/5 py-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#d391fc] font-bold",
                                    children: "F5"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 839,
                                    columnNumber: 1264
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-300",
                                    children: "Render Queue"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 839,
                                    columnNumber: 1316
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                            lineNumber: 839,
                            columnNumber: 1197
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between border-b border-white/5 py-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#d391fc] font-bold",
                                    children: "F12"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 839,
                                    columnNumber: 1440
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-300",
                                    children: "Mint Asset (On-Chain)"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 839,
                                    columnNumber: 1493
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                            lineNumber: 839,
                            columnNumber: 1373
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between border-b border-white/5 py-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#d391fc] font-bold",
                                    children: "F6"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 839,
                                    columnNumber: 1626
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-300",
                                    children: "Toggle Project Panel"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 839,
                                    columnNumber: 1678
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                            lineNumber: 839,
                            columnNumber: 1559
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between border-b border-white/5 py-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#d391fc] font-bold",
                                    children: "Space"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 839,
                                    columnNumber: 1810
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-300",
                                    children: "Play / Pause"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                                    lineNumber: 839,
                                    columnNumber: 1865
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                            lineNumber: 839,
                            columnNumber: 1743
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                    lineNumber: 839,
                    columnNumber: 69
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 bg-[#d391fc]/10 border border-[#d391fc]/20 rounded-md text-[10px] text-[#d391fc] font-medium leading-relaxed",
                    children: "Pro Tip: Use F11 for an immersive editing experience. All shortcuts are built for professional BOLT workflows."
                }, void 0, false, {
                    fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
                    lineNumber: 839,
                    columnNumber: 1928
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
            lineNumber: 839,
            columnNumber: 42
        }, this);
        $[97] = modalConfig.type;
        $[98] = t40;
    } else {
        t40 = $[98];
    }
    let t41;
    if ($[99] !== modalConfig.isOpen || $[100] !== modalConfig.title || $[101] !== t35 || $[102] !== t36 || $[103] !== t37 || $[104] !== t38 || $[105] !== t39 || $[106] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$components$2f$video$2d$editor$2f$VideoModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isOpen: modalConfig.isOpen,
            onClose: t35,
            title: modalConfig.title,
            footer: t36,
            children: [
                t37,
                t38,
                t39,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
            lineNumber: 847,
            columnNumber: 11
        }, this);
        $[99] = modalConfig.isOpen;
        $[100] = modalConfig.title;
        $[101] = t35;
        $[102] = t36;
        $[103] = t37;
        $[104] = t38;
        $[105] = t39;
        $[106] = t40;
        $[107] = t41;
    } else {
        t41 = $[107];
    }
    let t42;
    if ($[108] !== isMinting) {
        t42 = ({
            "AEVideoEditor[<MintingModal>.onClose]": ()=>!isMinting && setIsMintModalOpen(false)
        })["AEVideoEditor[<MintingModal>.onClose]"];
        $[108] = isMinting;
        $[109] = t42;
    } else {
        t42 = $[109];
    }
    let t43;
    if ($[110] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = {
            id: "video-project-1",
            name: "Video Composition",
            previewUrl: ""
        };
        $[110] = t43;
    } else {
        t43 = $[110];
    }
    let t44;
    if ($[111] !== handleMint || $[112] !== isMintModalOpen || $[113] !== isMinting || $[114] !== t42) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$components$2f$profile$2f$MintingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isOpen: isMintModalOpen,
            onClose: t42,
            asset: t43,
            onMint: handleMint,
            isMinting: isMinting
        }, void 0, false, {
            fileName: "[project]/Documents/BOLTChainvas/apps/web/src/app/video/page.tsx",
            lineNumber: 883,
            columnNumber: 11
        }, this);
        $[111] = handleMint;
        $[112] = isMintModalOpen;
        $[113] = isMinting;
        $[114] = t42;
        $[115] = t44;
    } else {
        t44 = $[115];
    }
    let t45;
    if ($[116] !== t34 || $[117] !== t41 || $[118] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t34,
                t41,
                t44
            ]
        }, void 0, true);
        $[116] = t34;
        $[117] = t41;
        $[118] = t44;
        $[119] = t45;
    } else {
        t45 = $[119];
    }
    return t45;
}
_s(AEVideoEditor, "KpErtUk5fJKZjRh7Dodw7lYgC2k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$hooks$2f$useYjs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useYjs"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$hooks$2f$useMinting$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMinting"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$apps$2f$web$2f$src$2f$hooks$2f$useHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistory"]
    ];
});
_c = AEVideoEditor;
function _AEVideoEditorUseEffectHandleKeyDownAnonymous2() {}
function _AEVideoEditorUseEffectHandleKeyDownAnonymous() {}
function _AEVideoEditorUseEffectHandleKeyDownSetShowEffects(prev_13) {
    return !prev_13;
}
function _AEVideoEditorUseEffectHandleKeyDownSetShowTimeline(prev_14) {
    return !prev_14;
}
function _AEVideoEditorUseEffectHandleKeyDownSetShowProject(prev_15) {
    return !prev_15;
}
function _AEVideoEditorHandleMenuActionSetShowTimeline(prev_8) {
    return !prev_8;
}
function _AEVideoEditorHandleMenuActionSetShowEffects(prev_9) {
    return !prev_9;
}
function _AEVideoEditorHandleMenuActionSetShowProject(prev_10) {
    return !prev_10;
}
function _AEVideoEditorHandleTogglePlaybackSetPlayback(prev_0) {
    return {
        ...prev_0,
        isPlaying: !prev_0.isPlaying
    };
}
var _c;
__turbopack_context__.k.register(_c, "AEVideoEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_BOLTChainvas_apps_web_src_5179b773._.js.map