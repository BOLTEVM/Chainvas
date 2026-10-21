"use client";

import { MarketplaceAsset } from "@/hooks/useSpacetimeDB";
import { resolveIpfsUrl } from "@/lib/quai";
import { ShoppingCart, Check, Play, FileText, ImageIcon, Music } from "lucide-react";
import { motion } from "framer-motion";

interface AssetCardProps {
    asset: MarketplaceAsset;
    onPurchase: (id: string) => void;
}

export default function AssetCard({ asset, onPurchase }: AssetCardProps) {
    const TypeIcon = {
        VIDEO: Play,
        AUDIO: Music,
        IMAGE: ImageIcon,
        FONT: FileText,
        TEMPLATE: Zap
    }[asset.type] || Play;

    function Zap({ className }: { className?: string }) {
        return <path className={className} d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />;
    }

    const typeColors = {
        VIDEO: "text-purple-400 bg-purple-400/10 border-purple-400/20",
        AUDIO: "text-blue-400 bg-blue-400/10 border-blue-400/20",
        IMAGE: "text-green-400 bg-green-400/10 border-green-400/20",
        FONT: "text-orange-400 bg-orange-400/10 border-orange-400/20",
        TEMPLATE: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20"
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group relative bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-[#00ffa3]/30 transition-all shadow-2xl"
        >
            {/* Preview Image */}
            <div className="aspect-video relative overflow-hidden bg-black">
                <img
                    src={resolveIpfsUrl(asset.previewUrl)}
                    alt={asset.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />

                {/* Type Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border backdrop-blur-md flex items-center gap-1.5 ${typeColors[asset.type]}`}>
                    <TypeIcon className="w-3 h-3" />
                    {asset.type}
                </div>

                {/* Hover Play Button (Mock) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                        <Play className="w-5 h-5 text-white fill-current" />
                    </div>
                </div>
            </div>

            {/* Info Section */}
            <div className="p-5 space-y-4">
                <div className="space-y-1">
                    <h3 className="text-white font-bold tracking-tight text-lg group-hover:text-[#00ffa3] transition-colors line-clamp-1">
                        {asset.name}
                    </h3>
                    <p className="text-gray-500 text-xs font-medium">by {asset.creator}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                    {asset.tags.map(tag => (
                        <span key={tag} className="text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded-md">
                            #{tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                    <div className="flex flex-col">
                        <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Price</span>
                        <span className="text-white font-black text-xl italic tracking-tighter">
                            ${asset.price}<span className="text-[#00ffa3] text-sm ml-0.5">USD</span>
                        </span>
                    </div>

                    <button
                        onClick={() => !asset.owned && onPurchase(asset.id)}
                        disabled={asset.owned}
                        className={`px-4 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 transition-all ${asset.owned
                                ? "bg-[#00ffa3]/10 text-[#00ffa3] border border-[#00ffa3]/20 cursor-default"
                                : "bg-white text-black hover:bg-[#00ffa3] hover:scale-105 active:scale-95"
                            }`}
                    >
                        {asset.owned ? (
                            <>
                                <Check className="w-3.5 h-3.5" />
                                Owned
                            </>
                        ) : (
                            <>
                                <ShoppingCart className="w-3.5 h-3.5" />
                                Purchase
                            </>
                        )}
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
