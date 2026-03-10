"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Fingerprint, Lock, Scale } from "lucide-react";
import SignaturePad from "./SignaturePad";

interface SignatureModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSign: (signatureData: string) => void;
    documentId: string;
}

export default function SignatureModal({ isOpen, onClose, onSign, documentId }: SignatureModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="w-full max-w-xl bg-[#2d2d2d] border border-white/10 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                    >
                        {/* Header */}
                        <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-[#ff6b00]/10 rounded-lg">
                                    <ShieldCheck className="w-5 h-5 text-[#ff6b00]" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-black text-white uppercase tracking-tighter italic">Signature Integrity</h3>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Document ID: {documentId}</p>
                                </div>
                            </div>
                            <button onClick={onClose} className="p-2 text-gray-500 hover:text-white transition-colors">
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-8">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="p-3 bg-white/5 rounded-lg border border-white/5 space-y-2">
                                    <Fingerprint className="w-4 h-4 text-[#ff6b00]" />
                                    <h4 className="text-[9px] font-black uppercase text-white tracking-widest">Biometric Proof</h4>
                                    <p className="text-[8px] text-gray-500 leading-tight">Digital hand-drawn verification captured in real-time.</p>
                                </div>
                                <div className="p-3 bg-white/5 rounded-lg border border-white/5 space-y-2">
                                    <Lock className="w-4 h-4 text-[#00ffa3]" />
                                    <h4 className="text-[9px] font-black uppercase text-white tracking-widest">Immutable Hash</h4>
                                    <p className="text-[8px] text-gray-500 leading-tight">Signature bound to document state via SHA-256 integrity.</p>
                                </div>
                                <div className="p-3 bg-white/5 rounded-lg border border-white/5 space-y-2">
                                    <Scale className="w-4 h-4 text-blue-400" />
                                    <h4 className="text-[9px] font-black uppercase text-white tracking-widest">Legal Standing</h4>
                                    <p className="text-[8px] text-gray-500 leading-tight">Enforceable digital conduct under BOLTChain protocols.</p>
                                </div>
                            </div>

                            <SignaturePad onSave={onSign} onClear={() => {}} />

                            <div className="p-3 bg-[#ff6b00]/5 border border-[#ff6b00]/10 rounded text-[10px] text-[#ff6b00] leading-relaxed italic">
                                Note: Once signed, any modification to the layout, text, or elements of this document will visually break the cryptographic integrity seal.
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
