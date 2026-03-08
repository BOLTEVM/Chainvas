"use client";

import { useEffect, useRef, useState } from "react";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { schema } from "prosemirror-schema-basic";
import { keymap } from "prosemirror-keymap";
import { baseKeymap } from "prosemirror-commands";
import { ySyncPlugin, yCursorPlugin, yUndoPlugin, undo, redo } from "y-prosemirror";
import { CanvasObject, TypographyOptions } from "@/app/text/types";

interface TextFrameEditorProps {
    object: CanvasObject;
    typography: TypographyOptions;
    ydoc: any;
    provider: any;
    onSelect?: () => void;
    isActiveTool: boolean;
}

export default function TextFrameEditor({
    object,
    typography,
    ydoc,
    provider,
    onSelect,
    isActiveTool
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
