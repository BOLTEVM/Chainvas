"use client";

import { useRef, useEffect, useState } from "react";

interface SignaturePadProps {
    onSave: (dataUrl: string) => void;
    onClear?: () => void;
}

export default function SignaturePad({ onSave, onClear }: SignaturePadProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [hasContent, setHasContent] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Handle HiDPI scaling
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        
        ctx.scale(dpr, dpr);
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
    }, []);

    const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
        setIsDrawing(true);
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const rect = canvas.getBoundingClientRect();
        const x = ("touches" in e) ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
        const y = ("touches" in e) ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

        ctx.beginPath();
        ctx.moveTo(x, y);
    };

    const draw = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const rect = canvas.getBoundingClientRect();
        const x = ("touches" in e) ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
        const y = ("touches" in e) ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

        ctx.lineTo(x, y);
        ctx.stroke();
        setHasContent(true);
    };

    const stopDrawing = () => {
        setIsDrawing(false);
    };

    const clear = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setHasContent(false);
        onClear?.();
    };

    const save = () => {
        if (!hasContent) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        onSave(canvas.toDataURL("image/png"));
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="relative bg-[#1e1e1e] border border-white/10 rounded-lg overflow-hidden cursor-crosshair">
                <canvas
                    ref={canvasRef}
                    width={500}
                    height={200}
                    className="w-full h-[200px]"
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                />
                <div className="absolute bottom-2 right-2 text-[10px] text-gray-500 pointer-events-none uppercase tracking-widest font-bold">
                    Sign Here
                </div>
            </div>
            <div className="flex justify-between items-center px-1">
                <button
                    onClick={clear}
                    className="text-[10px] font-black uppercase tracking-widest text-red-500 hover:text-red-400 transition-colors"
                >
                    Clear Slate
                </button>
                <button
                    onClick={save}
                    disabled={!hasContent}
                    className={`px-6 py-2 rounded text-xs font-black uppercase tracking-widest transition-all ${hasContent
                            ? "bg-[#ff6b00] text-white shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:scale-105 active:scale-95"
                            : "bg-white/5 text-gray-500 cursor-not-allowed"
                        }`}
                >
                    Apply Signature
                </button>
            </div>
        </div>
    );
}
