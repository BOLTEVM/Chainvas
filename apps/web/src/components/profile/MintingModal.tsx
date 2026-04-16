"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cpu, Shapes, ShieldAlert } from "lucide-react";
import { useActiveAccount } from "thirdweb/react";

export type TokenType = "ERC20" | "ERC721";

export interface MintableAsset {
    id: string;
    name?: string;
    filename?: string;
    uri?: string;
    previewUrl?: string;
}

interface MintingModalProps {
    isOpen: boolean;
    onClose: () => void;
    asset: MintableAsset | null;
    onMint: (type: TokenType, config: { name: string; symbol: string; amount?: number; mediaType?: number }) => void;
    isMinting: boolean;
    defaultMediaType?: number | undefined; 
}

export default function MintingModal({ isOpen, onClose, asset, onMint, isMinting, defaultMediaType }: MintingModalProps) {
    const account = useActiveAccount();
    const [tokenType, setTokenType] = useState<TokenType>("ERC721");
    const [name, setName] = useState("");
    const [symbol, setSymbol] = useState("");
    const [amount, setAmount] = useState<number | "">("");

    useEffect(() => {
        if (isOpen) {
            setTokenType("ERC721");
            setName("");
            setSymbol("");
            setAmount("");
        }
    }, [isOpen]);

    const handleMint = () => {
        if (!name || !symbol) return;
        if (tokenType === "ERC20" && (!amount || amount <= 0)) return;

        onMint(tokenType, {
            name,
            symbol,
            amount: tokenType === "ERC20" ? Number(amount) : undefined,
            mediaType: defaultMediaType
        });
    };

    if (!isOpen || !asset) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="w-full max-w-lg bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                >
                    {/* Header */}
                    <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
                        <h2 className="text-xl font-black italic uppercase tracking-tighter text-white flex items-center gap-2">
                            <Cpu className="w-5 h-5 text-[#00ffa3]" />
                            Mint to Blockchain
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Content Area - Scrollable */}
                    <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
                        {!account ? (
                            <div className="text-center py-8 space-y-4">
                                <ShieldAlert className="w-12 h-12 text-yellow-500 mx-auto" />
                                <p className="text-gray-400 text-sm">Please connect your wallet to mint assets.</p>
                            </div>
                        ) : (
                            <div className="space-y-8">
                                {/* Asset Preview Summary */}
                                <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-xl">
                                    <div className="w-16 h-16 rounded-lg bg-black overflow-hidden flex-shrink-0 border border-white/10">
                                        {asset.uri || asset.previewUrl ? (
                                            <img
                                                src={asset.uri || asset.previewUrl}
                                                className="w-full h-full object-cover"
                                                alt={asset.filename || asset.name}
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <Shapes className="w-6 h-6 text-gray-700" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-white truncate text-lg">
                                            {asset.filename || asset.name || "Untitled Asset"}
                                        </h3>
                                        <p className="text-xs text-gray-500 font-mono mt-1">
                                            ID: {asset.id}
                                        </p>
                                    </div>
                                </div>

                                {/* Token Type Selection */}
                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase tracking-widest text-[#00ffa3]">
                                        1. Select Token Standard
                                    </label>
                                    <div className="grid grid-cols-2 gap-4">
                                        <button
                                            onClick={() => setTokenType("ERC721")}
                                            className={`p-4 rounded-xl border text-left transition-all ${tokenType === "ERC721"
                                                ? "bg-[#00ffa3]/10 border-[#00ffa3] shadow-[0_0_15px_rgba(0,255,163,0.1)]"
                                                : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                                                }`}
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <span className={`font-bold ${tokenType === "ERC721" ? "text-white" : "text-gray-400"}`}>ERC-721</span>
                                            </div>
                                            <p className="text-[10px] text-gray-500 leading-relaxed">
                                                Non-Fungible Token (NFT). Best for unique, 1-of-1 digital artwork or exclusive media.
                                            </p>
                                        </button>

                                        <button
                                            onClick={() => setTokenType("ERC20")}
                                            className={`p-4 rounded-xl border text-left transition-all ${tokenType === "ERC20"
                                                ? "bg-blue-500/10 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                                                : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                                                }`}
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <span className={`font-bold ${tokenType === "ERC20" ? "text-white" : "text-gray-400"}`}>ERC-20</span>
                                            </div>
                                            <p className="text-[10px] text-gray-500 leading-relaxed">
                                                Fungible Token. Best for fractionalized ownership, community coins, or fungible game assets.
                                            </p>
                                        </button>
                                    </div>
                                </div>

                                {/* Configuration Form */}
                                <div className="space-y-4">
                                    <label className="text-xs font-black uppercase tracking-widest text-[#00ffa3]">
                                        2. Token Configuration
                                    </label>

                                    <div className="space-y-3">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-400 mb-1">Token Name</label>
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder={asset.filename || "e.g. My Awesome Art"}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#00ffa3] transition-colors"
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-bold text-gray-400 mb-1">Symbol</label>
                                                <input
                                                    type="text"
                                                    value={symbol}
                                                    onChange={(e) => setSymbol(e.target.value)}
                                                    placeholder="e.g. ART"
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#00ffa3] transition-colors uppercase"
                                                />
                                            </div>

                                            {tokenType === "ERC20" && (
                                                <div>
                                                    <label className="block text-xs font-bold text-gray-400 mb-1">Supply Amount</label>
                                                    <input
                                                        type="number"
                                                        value={amount}
                                                        onChange={(e) => setAmount(Number(e.target.value))}
                                                        min="1"
                                                        placeholder="e.g. 10000"
                                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer / Actions */}
                    <div className="px-6 py-4 border-t border-white/10 bg-white/[0.02] flex justify-end gap-3 shrink-0">
                        <button
                            onClick={onClose}
                            disabled={isMinting}
                            className="px-6 py-2 rounded-lg font-bold text-sm text-gray-400 hover:text-white transition-colors disabled:opacity-50"
                        >
                            Cancel
                        </button>
                        {account && (
                            <button
                                onClick={handleMint}
                                disabled={isMinting || !name || !symbol || (tokenType === "ERC20" && (!amount || amount <= 0))}
                                className={`px-6 py-2 rounded-lg font-bold text-sm text-black shadow-lg flex items-center gap-2 transition-all ${isMinting || !name || !symbol || (tokenType === "ERC20" && (!amount || amount <= 0))
                                    ? "bg-gray-600 cursor-not-allowed opacity-50"
                                    : tokenType === "ERC721"
                                        ? "bg-[#00ffa3] hover:bg-[#00ffa3]/90 hover:scale-105 shadow-[#00ffa3]/20"
                                        : "bg-blue-500 hover:bg-blue-500/90 hover:scale-105 shadow-blue-500/20 text-white"
                                    }`}
                            >
                                {isMinting ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                                        Minting...
                                    </>
                                ) : (
                                    <>Mint as {tokenType}</>
                                )}
                            </button>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

