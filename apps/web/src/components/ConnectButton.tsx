"use client";

import { Zap, LogOut, User, Building2, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { useQuaiWallet } from "@/hooks/useQuaiWallet";

export function ConnectButton() {
    const { address, isPelagusInstalled, isConnecting, connect, disconnect, network } = useQuaiWallet();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const shortAddress = address
        ? `${address.slice(0, 6)}...${address.slice(-4)}`
        : "Connected";

    if (!address) {
        if (!isPelagusInstalled) {
            return (
                <a
                    href="https://pelaguswallet.io"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)]"
                >
                    <Zap className="w-4 h-4 fill-current" />
                    <span>Install Pelagus</span>
                </a>
            );
        }
        return (
            <button
                onClick={connect}
                disabled={isConnecting}
                title={`Connect to ${network.name}`}
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] disabled:opacity-50"
            >
                <Zap className="w-4 h-4 fill-current" />
                <span>{isConnecting ? "Connecting..." : "Connect"}</span>
            </button>
        );
    }

    return (
        <div className="relative">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-2.5 rounded-full font-medium transition-all"
            >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>{shortAddress}</span>
            </button>

            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute right-0 mt-3 w-48 glass-panel border border-white/10 rounded-2xl overflow-hidden z-50 shadow-2xl"
                        >
                            <div className="p-2">
                                <Link href="/profile" className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                                    <User className="w-4 h-4" />
                                    <span>Profile</span>
                                </Link>
                                <Link href="/collaborators" className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                                    <Building2 className="w-4 h-4" />
                                    <span>Organizations</span>
                                </Link>
                                <Link href="/marketplace" className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                                    <ShoppingCart className="w-4 h-4" />
                                    <span>Marketplace</span>
                                </Link>
                                <div className="my-1 border-t border-white/5" />
                                <button
                                    onClick={() => {
                                        disconnect();
                                        setIsMenuOpen(false);
                                    }}
                                    className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                                >
                                    <LogOut className="w-4 h-4" />
                                    <span>Disconnect</span>
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
