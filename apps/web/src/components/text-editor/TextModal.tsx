"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface TextModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
}

export default function TextModal({ isOpen, onClose, title, children, footer }: TextModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: 10 }}
                        className="bg-[#2d2d2d] border border-black shadow-2xl rounded-sm w-full max-w-lg overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-white/5">
                            <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{title}</h3>
                            <button
                                onClick={onClose}
                                className="text-gray-500 hover:text-white transition-colors"
                            >
                                <X size={14} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8 text-[13px] text-gray-300">
                            {children}
                        </div>

                        {/* Footer */}
                        {footer && (
                            <div className="px-6 py-4 bg-[#252525] border-t border-white/5 flex justify-end gap-2">
                                {footer}
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
