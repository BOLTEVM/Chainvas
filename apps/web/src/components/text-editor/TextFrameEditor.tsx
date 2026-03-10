"use client";

import { useEffect, useRef, useState } from "react";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { schema } from "prosemirror-schema-basic";
import { keymap } from "prosemirror-keymap";
import { baseKeymap } from "prosemirror-commands";
import { ySyncPlugin, yCursorPlugin, yUndoPlugin, undo, redo } from "y-prosemirror";
import { CanvasObject, TypographyOptions } from "@/app/text/types";
import { ethers } from "ethers";
import { ShieldAlert, ShieldCheck } from "lucide-react";

interface TextFrameEditorProps {
    object: CanvasObject;
    typography: TypographyOptions;
    ydoc: any;
    provider: any;
    onSelect?: () => void;
    isActiveTool: boolean;
    allObjects: CanvasObject[]; // Added for integrity check
}

export default function TextFrameEditor({
    object,
    typography,
    ydoc,
    provider,
    onSelect,
    isActiveTool,
    allObjects
}: TextFrameEditorProps) {
    const editorRef = useRef<HTMLDivElement>(null);
    const [view, setView] = useState<EditorView | null>(null);

    useEffect(() => {
        if (!editorRef.current || !ydoc || !provider || !object.contentId) return;

        const getPlugins = () => {
            const basePlugins = [
                keymap({
                    "Mod-z": undo,
                    "Mod-y": redo,
                    "Mod-Shift-z": redo,
                }),
                keymap(baseKeymap),
            ];

            const type = ydoc.getXmlFragment(object.contentId);
            return [
                ySyncPlugin(type),
                yCursorPlugin(provider.awareness),
                yUndoPlugin(),
                ...basePlugins
            ];
        };

        const editorView = new EditorView(editorRef.current, {
            state: EditorState.create({
                schema,
                plugins: getPlugins(),
            }),
        });

        setView(editorView);

        return () => {
            editorView.destroy();
        };
    }, [provider, ydoc, object.contentId]);

    // Update styles dynamically without recreating editor
    useEffect(() => {
        if (editorRef.current) {
            Object.assign(editorRef.current.style, {
                fontFamily: typography.fontFamily,
                fontSize: `${typography.fontSize}pt`,
                textAlign: typography.textAlign,
                color: typography.color,
                lineHeight: `${typography.lineHeight}pt`,
                letterSpacing: `${typography.letterSpacing}em`,
                fontWeight: typography.bold ? "bold" : typography.fontWeight,
                fontStyle: typography.italic ? "italic" : "normal"
            });
        }
    }, [typography]);

    const isText = object.type === "TEXT" || object.type === "TEXT_ON_PATH";
    const isSignature = object.type === "SIGNATURE";

    // Verify Integrity
    const getIntegrityStatus = () => {
        if (!object.integrityHash) return null;
        const docState = JSON.stringify(allObjects.filter(o => o.type !== "SIGNATURE").map(o => ({ id: o.id, x: o.x, y: o.y, type: o.type })));
        const currentHash = ethers.keccak256(ethers.toUtf8Bytes(docState));
        return currentHash === object.integrityHash;
    };

    const isVerified = getIntegrityStatus();

    return (
        <div
            className={`absolute z-10 ${object.isSelected ? 'outline outline-1 outline-[#ff6b00]' : 'border border-transparent hover:outline hover:outline-1 hover:outline-blue-500/50'}`}
            style={{
                left: object.x,
                top: object.y,
                width: object.width,
                height: object.height,
                pointerEvents: isActiveTool ? "auto" : "none",
                backgroundColor: object.styles?.backgroundColor || "transparent",
                borderColor: object.styles?.borderColor || "transparent",
                borderWidth: object.styles?.borderWidth || 0,
                borderRadius: object.styles?.borderRadius || 0,
            }}
            onMouseDown={(e) => {
                if (!isActiveTool) e.preventDefault();
                onSelect?.();
            }}
        >
            {isText ? (
                <div
                    ref={editorRef}
                    className="w-full h-full outline-none p-1 font-sans leading-relaxed text-left cursor-text overflow-hidden [&_.ProseMirror]:min-h-full [&_.ProseMirror]:outline-none"
                    style={{
                        fontFamily: typography.fontFamily,
                        fontSize: `${typography.fontSize}pt`,
                        textAlign: typography.textAlign,
                        color: typography.color,
                        lineHeight: `${typography.lineHeight}pt`,
                        letterSpacing: `${typography.letterSpacing}em`,
                        fontWeight: typography.bold ? "bold" : typography.fontWeight,
                        fontStyle: typography.italic ? "italic" : "normal"
                    }}
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center border border-gray-400/50 relative">
                    {/* Placeholder cross for shape frames */}
                    <div className="absolute w-full h-[1px] bg-gray-400/30 transform origin-center rotate-45" />
                    <div className="absolute w-full h-[1px] bg-gray-400/30 transform origin-center -rotate-45" />

                    {isSignature && object.signatureData && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-2 bg-black/40 backdrop-blur-sm group overflow-hidden">
                            <img src={object.signatureData} alt="Signature" className="max-w-full max-h-full object-contain invert" />

                            {/* Integrity Badge */}
                            <div className={`absolute bottom-1 right-1 px-1.5 py-0.5 rounded-sm flex items-center gap-1 border ${isVerified
                                    ? "bg-green-500/10 border-green-500/30 text-green-400"
                                    : "bg-red-500/10 border-red-500/30 text-red-400"
                                }`}>
                                {isVerified ? <ShieldCheck className="w-2.5 h-2.5" /> : <ShieldAlert className="w-2.5 h-2.5" />}
                                <span className="text-[7px] font-black uppercase tracking-tighter">
                                    {isVerified ? "Verified Integrity" : "Integrity Compromised"}
                                </span>
                            </div>

                            {/* Signer Info Hover */}
                            <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center p-3 gap-1">
                                <span className="text-[8px] font-black text-[#ff6b00] uppercase tracking-widest">Signer Address</span>
                                <span className="text-[7px] font-mono text-white break-all">{object.signerAddress}</span>
                                <div className="h-px bg-white/10 my-1" />
                                <span className="text-[8px] font-black text-[#ff6b00] uppercase tracking-widest">Integrity Hash</span>
                                <span className="text-[7px] font-mono text-gray-500 truncate">{object.integrityHash}</span>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Selection Handles */}
            {object.isSelected && (
                <>
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-[#ff6b00] cursor-nwse-resize" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-[#ff6b00] cursor-nesw-resize" />
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-[#ff6b00] cursor-nesw-resize" />
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-[#ff6b00] cursor-nwse-resize" />
                </>
            )}
        </div>
    );
}
