"use client";

import { usePrivy } from "@privy-io/react-auth";
import { useSpacetimeDB } from "@/hooks/useSpacetimeDB";
import {
    User,
    FileIcon,
    Video,
    Image as ImageIcon,
    Music,
    Type,
    Clock,
    TrendingUp,
    ArrowUpRight,
    Search,
    Filter,
    MoreVertical
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import MintingModal, { TokenType } from "@/components/profile/MintingModal";
import { useMinting } from "@/hooks/useMinting";

export default function ProfilePage() {
    const { user, authenticated } = usePrivy();
    const address = user?.wallet?.address;
    const { isConnected, videos, marketplaceAssets, transactions } = useSpacetimeDB(address);
    const [searchQuery, setSearchQuery] = useState("");

    // Minting State
    const { mintAsset, isMinting } = useMinting();
    const [selectedAssetToMint, setSelectedAssetToMint] = useState<any | null>(null);

    const handleMintAsset = async (type: TokenType, config: { name: string; symbol: string; amount?: number; mediaType?: number }) => {
        if (!selectedAssetToMint) return;
        const uri = selectedAssetToMint.uri || selectedAssetToMint.previewUrl || "";
        const success = await mintAsset(type, config, uri);
        if (success) {
            setSelectedAssetToMint(null);
        }
    };

    if (!authenticated) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-8">
                <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10">
                        <User className="w-8 h-8 text-gray-400" />
                    </div>
                    <h1 className="text-2xl font-black italic uppercase tracking-tighter text-white">Please Connect Wallet</h1>
                    <p className="text-gray-500 text-sm max-w-xs mx-auto">You need to be authenticated to view your private asset overview and activity data.</p>
                </div>
            </div>
        );
    }

    // Filter data relating to the user
    // Since we mocked initial data to match the address passed in useSpacetimeDB, 
    // we can just use the state returned. In a real system, we'd filter table subscriptions.
    const userVideos = videos.filter(v => v.uploaderId === address);
    const ownedAssets = marketplaceAssets.filter(a => a.owned);
    const userTransactions = transactions.filter(t => t.buyerIdentity === address);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#00ffa3]/30">
            {/* Top Navigation / Breadcrumb */}
            <div className="h-16 border-b border-white/5 bg-black/40 backdrop-blur-xl sticky top-0 z-50 px-8 flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-gray-500">
                    <span className="hover:text-white cursor-pointer transition-colors">Dashboard</span>
                    <span className="text-white/20">/</span>
                    <span className="text-white">User Profile</span>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search your library..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-white/5 border border-white/10 rounded-full pl-9 pr-6 py-1.5 text-[10px] focus:border-[#00ffa3]/50 outline-none transition-all w-64"
                        />
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-8 py-12 space-y-12">
                {/* Header Section */}
                <div className="flex items-end justify-between border-b border-white/5 pb-12">
                    <div className="flex items-center gap-8">
                        <div className="relative group">
                            <div className="w-32 h-32 rounded-[2rem] bg-gradient-to-br from-[#00ffa3] to-blue-500 p-1">
                                <div className="w-full h-full rounded-[1.8rem] bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
                                    <User className="w-16 h-16 text-white opacity-50" />
                                </div>
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#00ffa3] rounded-xl flex items-center justify-center border-4 border-[#0a0a0a] shadow-lg shadow-[#00ffa3]/20">
                                <TrendingUp className="w-4 h-4 text-black" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-none">
                                {address?.slice(0, 6)}...{address?.slice(-4)}
                            </h1>
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full ${isConnected ? "bg-[#00ffa3]" : "bg-red-500"} animate-pulse`} />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 italic">
                                        Verified Spacetime Node
                                    </span>
                                </div>
                                <div className="h-3 w-px bg-white/10" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00ffa3]">
                                    Pro Creator
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex flex-col justify-center">
                            <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest leading-none">Total Assets</span>
                            <span className="text-2xl font-black italic tracking-tighter">{userVideos.length + ownedAssets.length}</span>
                        </div>
                        <div className="bg-[#00ffa3]/10 border border-[#00ffa3]/20 rounded-2xl px-6 py-4 flex flex-col justify-center">
                            <span className="text-[8px] font-bold text-[#00ffa3] uppercase tracking-widest leading-none">Balance</span>
                            <span className="text-2xl font-black italic tracking-tighter text-white">12.4K <span className="text-[10px] text-[#00ffa3]">MON</span></span>
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-12 gap-8">
                    {/* Left Column: Media List */}
                    <div className="col-span-8 space-y-8">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-black italic uppercase tracking-tighter flex items-center gap-3">
                                My Library
                                <span className="text-[#00ffa3] text-[10px] font-bold bg-[#00ffa3]/10 px-2 py-0.5 rounded-full uppercase tracking-widest">
                                    {userVideos.length + ownedAssets.length} Files
                                </span>
                            </h3>
                            <button className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white flex items-center gap-2">
                                <Filter className="w-3 h-3" /> Filter
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {/* Combined Media List: Uploads + Purchased */}
                            {[...userVideos, ...ownedAssets].map((asset: any) => (
                                <motion.div
                                    key={asset.id}
                                    whileHover={{ y: -4 }}
                                    className="group bg-[#111] border border-white/5 rounded-2xl p-4 hover:border-white/10 transition-all flex items-center gap-4"
                                >
                                    <div className="w-16 h-16 rounded-xl bg-black overflow-hidden flex-shrink-0 border border-white/5">
                                        {asset.uri || asset.previewUrl ? (
                                            <img
                                                src={asset.uri || asset.previewUrl}
                                                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                                                alt={asset.filename || asset.name}
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <Video className="w-6 h-6 text-gray-700" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-bold text-sm text-white truncate group-hover:text-[#00ffa3] transition-colors uppercase italic tracking-tight">
                                            {asset.filename || asset.name}
                                        </h4>
                                        <div className="flex items-center gap-3 mt-1">
                                            <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">
                                                {asset.filename ? "Video" : "Marketplace"}
                                            </span>
                                            <div className="w-1 h-1 rounded-full bg-white/10" />
                                            <span className="text-[9px] font-medium text-gray-600">
                                                {new Date().toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 flex-shrink-0">
                                        <button
                                            onClick={() => setSelectedAssetToMint(asset)}
                                            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#00ffa3]/20 text-[10px] font-black uppercase tracking-widest text-[#00ffa3] border border-white/5 hover:border-[#00ffa3]/50 transition-all"
                                        >
                                            Mint
                                        </button>
                                        <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/5 text-gray-500 hover:text-white transition-colors">
                                            <MoreVertical className="w-4 h-4" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}

                            {(userVideos.length + ownedAssets.length === 0) && (
                                <div className="col-span-2 h-48 border border-dashed border-white/5 rounded-[2rem] flex flex-col items-center justify-center text-center space-y-3">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                        <FileIcon className="w-5 h-5 text-gray-600" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-gray-500 text-xs italic">Your library is currently empty in this cluster.</p>
                                        <p className="text-[9px] font-black uppercase tracking-widest text-[#00ffa3] cursor-pointer hover:underline">Connect Assets</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Activity & Stats */}
                    <div className="col-span-4 space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-xs font-black uppercase tracking-widest text-[#00ffa3]">Recent Activity</h3>
                            <div className="space-y-3">
                                {userTransactions.map(tx => (
                                    <div key={tx.id} className="bg-white/5 border border-white/5 rounded-2xl p-4 flex items-center justify-between group hover:bg-white/[0.08] transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center">
                                                <ArrowUpRight className="w-5 h-5 text-red-500" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-white italic">Purchased Asset</span>
                                                <span className="text-[9px] text-gray-600 font-medium">#{tx.assetId}</span>
                                            </div>
                                        </div>
                                        <span className="text-xs font-bold text-gray-400">-${tx.amount}</span>
                                    </div>
                                ))}

                                {userTransactions.length === 0 && (
                                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 text-center">
                                        <Clock className="w-6 h-6 text-gray-700 mx-auto mb-2" />
                                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-600">No recent transactions</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Quick Action Cards */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="col-span-2 p-6 rounded-[2rem] bg-gradient-to-br from-[#00ffa3] to-blue-600 flex flex-col justify-end h-40 group cursor-pointer overflow-hidden relative shadow-xl shadow-[#00ffa3]/10 active:scale-95 transition-all">
                                <TrendingUp className="absolute -top-4 -right-4 w-32 h-32 text-black/10 group-hover:scale-110 transition-transform" />
                                <div className="relative z-10 space-y-1">
                                    <h4 className="text-black font-black italic uppercase tracking-tighter text-xl leading-none">Creator<br />Stats</h4>
                                    <p className="text-black/60 text-[9px] font-bold uppercase tracking-widest">View Detailed Metrics</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <MintingModal
                isOpen={!!selectedAssetToMint}
                onClose={() => !isMinting && setSelectedAssetToMint(null)}
                asset={selectedAssetToMint}
                onMint={handleMintAsset}
                isMinting={isMinting}
            />
        </div>
    );
}
