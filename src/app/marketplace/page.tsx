"use client";

import { useState } from "react";
import { useSpacetimeDB } from "@/hooks/useSpacetimeDB";
import {
    Search,
    Filter,
    Sparkles,
    TrendingUp,
    Clock,
    ChevronRight,
    Play,
    Music,
    ImageIcon,
    FileText,
    Layers,
    ShoppingCart,
    Zap
} from "lucide-react";
import AssetCard from "@/components/marketplace/AssetCard";
import { motion, AnimatePresence } from "framer-motion";

export default function MarketplacePage() {
    const { isConnected, marketplaceAssets, purchaseAsset } = useSpacetimeDB();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

    const categories = [
        { id: "ALL", label: "Everything", icon: Sparkles },
        { id: "VIDEO", label: "Video Assets", icon: Play },
        { id: "IMAGE", label: "Stock Photos", icon: ImageIcon },
        { id: "AUDIO", label: "Audio & FX", icon: Music },
        { id: "FONT", label: "Typography", icon: FileText },
        { id: "TEMPLATE", label: "Templates", icon: Layers },
    ];

    const filteredAssets = marketplaceAssets.filter(asset => {
        const matchesSearch = asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            asset.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesCategory = selectedCategory === "ALL" || asset.type === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#00ffa3]/30">
            {/* Header / Nav */}
            <div className="h-16 border-b border-white/5 bg-black/40 backdrop-blur-xl sticky top-0 z-50 px-8 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#00ffa3] to-[#00d1ff] rounded-lg flex items-center justify-center">
                            <ShoppingCart className="w-5 h-5 text-black" />
                        </div>
                        <span className="font-black text-xl tracking-tighter italic uppercase">Asset<span className="text-[#00ffa3]">Market</span></span>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search decentralized assets..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-white/5 border border-white/5 rounded-full pl-11 pr-6 py-2 text-xs focus:border-[#00ffa3]/50 outline-none transition-all w-80"
                        />
                    </div>
                    <div className="h-6 w-px bg-white/10" />
                    <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#00ffa3] hover:text-white transition-colors">
                        <Filter className="w-3.5 h-3.5" />
                        Filters
                    </button>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-8 py-12 space-y-12">
                {/* Hero / Featured Section */}
                <div className="grid grid-cols-12 gap-8 h-[400px]">
                    <div className="col-span-8 relative bg-[#111] rounded-[2.5rem] border border-white/5 overflow-hidden group">
                        <img
                            src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1200&q=80"
                            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-[2s]"
                            alt="Hero"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                        <div className="absolute inset-0 p-12 flex flex-col justify-end space-y-4">
                            <div className="flex items-center gap-2 text-[#00ffa3] text-[10px] font-bold uppercase tracking-[0.3em] bg-[#00ffa3]/10 w-fit px-3 py-1 rounded-full border border-[#00ffa3]/20">
                                <Sparkles className="w-3 h-3" /> Featured Collection
                            </div>
                            <h2 className="text-6xl font-black italic tracking-tighter uppercase leading-none max-w-xl">
                                Synthetic <span className="text-[#00ffa3]">Overlays</span> Pack 01
                            </h2>
                            <p className="text-gray-400 text-sm max-w-md">
                                Professional grade VHS glitches and neon overlays for your next cinematic Monad production.
                            </p>
                            <button className="bg-white text-black px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-2 w-fit hover:bg-[#00ffa3] transition-colors mt-4">
                                Discover Collection <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <div className="col-span-4 grid grid-rows-2 gap-8">
                        <div className="bg-gradient-to-br from-[#00ffa3]/10 to-transparent border border-[#00ffa3]/20 rounded-[2rem] p-8 flex flex-col justify-between">
                            <TrendingUp className="w-8 h-8 text-[#00ffa3]" />
                            <div className="space-y-1">
                                <h3 className="text-xl font-black uppercase italic">Trending</h3>
                                <p className="text-xs text-gray-500">Most downloaded assets this week across the cluster.</p>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between group cursor-pointer hover:bg-white/[0.08] transition-all">
                            <Clock className="w-8 h-8 text-blue-400" />
                            <div className="space-y-1">
                                <h3 className="text-xl font-black uppercase italic">New Drops</h3>
                                <p className="text-xs text-gray-500">Fresh content minted to the decentralized registry.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Categories */}
                <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-xs whitespace-nowrap border transition-all ${selectedCategory === cat.id
                                    ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                                    : "bg-white/5 text-gray-500 border-white/5 hover:border-white/10 hover:text-white"
                                }`}
                        >
                            <cat.icon className="w-4 h-4" />
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Asset Grid */}
                <div className="space-y-8">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-black italic uppercase tracking-tighter flex items-center gap-3">
                            {selectedCategory === "ALL" ? "All Assets" : categories.find(c => c.id === selectedCategory)?.label}
                            <span className="text-[#00ffa3] text-sm tabular-nums">[{filteredAssets.length}]</span>
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredAssets.map((asset) => (
                                <AssetCard
                                    key={asset.id}
                                    asset={asset}
                                    onPurchase={purchaseAsset}
                                />
                            ))}
                        </AnimatePresence>
                    </div>

                    {filteredAssets.length === 0 && (
                        <div className="h-64 flex flex-col items-center justify-center border-2 border-dashed border-white/5 rounded-[2.5rem] space-y-4">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                                <Zap className="w-6 h-6 text-gray-600" />
                            </div>
                            <p className="text-gray-500 text-sm italic">No assets found in this sector of the grid.</p>
                        </div>
                    )}
                </div>
            </main>

            {/* Sticky Status Bar */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full flex items-center gap-8 shadow-3xl z-50">
                <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${isConnected ? "bg-[#00ffa3]" : "bg-red-500"} animate-pulse`} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                        {isConnected ? "Spacetime Live" : "Offline"}
                    </span>
                </div>
                <div className="h-4 w-px bg-white/20" />
                <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                        <span className="text-[8px] font-bold text-gray-500 uppercase tracking-tighter leading-none">Transactions</span>
                        <span className="text-[#00ffa3] font-mono text-xs">0xBD...4A2</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
