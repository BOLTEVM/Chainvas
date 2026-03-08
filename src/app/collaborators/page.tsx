"use client";

import { useState, useEffect } from "react";
import { useSpacetimeDB, Collaborator, Organization } from "@/hooks/useSpacetimeDB";
import {
    Users,
    Building2,
    Shield,
    Activity,
    Plus,
    Search,
    MoreHorizontal,
    UserPlus,
    Globe,
    Zap,
    ArrowRight,
    Terminal,
    CheckCircle2,
    Wifi,
    WifiOff
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CollaboratorsPage() {
    const {
        isConnected,
        identity,
        organizations,
        collaborators,
        activeOrgId,
        createOrganization,
        addCollaborator
    } = useSpacetimeDB();

    const [activeTab, setActiveTab] = useState<"COLABORATORS" | "ORGANIZATIONS">("COLABORATORS");
    const [searchQuery, setSearchQuery] = useState("");
    const [showInviteModal, setShowInviteModal] = useState(false);
    const [inviteData, setInviteData] = useState({ nickname: "", role: "EDITOR" as Collaborator["role"] });

    const activeOrg = organizations.find(o => o.id === activeOrgId);

    // Filtered lists
    const filteredCollaborators = collaborators.filter(c =>
        c.nickname.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#00ffa3]/30">
            {/* Top Navigation / Status Bar */}
            <div className="h-16 border-b border-white/5 bg-black/40 backdrop-blur-xl sticky top-0 z-50 px-8 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#00ffa3] to-[#00d1ff] rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(0,255,163,0.3)]">
                            <Zap className="w-5 h-5 text-black fill-current" />
                        </div>
                        <span className="font-black text-xl tracking-tighter italic uppercase">Spacetime<span className="text-[#00ffa3]">DB</span></span>
                    </div>
                    <div className="h-4 w-px bg-white/10" />
                    <nav className="flex gap-1">
                        {["COLABORATORS", "ORGANIZATIONS"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab as any)}
                                className={`px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === tab
                                    ? "bg-white/10 text-[#00ffa3]"
                                    : "text-gray-500 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                        {isConnected ? (
                            <Wifi className="w-3.5 h-3.5 text-[#00ffa3]" />
                        ) : (
                            <WifiOff className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                        )}
                        <span className={`text-[10px] font-black uppercase tracking-widest ${isConnected ? "text-[#00ffa3]" : "text-red-500"}`}>
                            {isConnected ? "Spacetime Live" : "Connecting..."}
                        </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10 flex items-center justify-center text-[10px] font-bold">
                        {identity?.__identity__?.substring(0, 2).toUpperCase() || "??"}
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-8 py-12">
                {/* Dashboard Header */}
                <div className="flex justify-between items-end mb-12">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[#00ffa3] text-[10px] font-black uppercase tracking-[0.3em]">
                            <Globe className="w-3 h-3" /> Shared Instance
                        </div>
                        <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-none">
                            {activeTab === "COLABORATORS" ? "Global Personnel" : "Entity Structures"}
                        </h1>
                        <p className="text-gray-500 text-sm max-w-lg">
                            Manage real-time synchronization between collaborators and organizations using the SpacetimeDB decentralized relational cluster.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search cluster..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-white/5 border border-white/5 rounded-full pl-11 pr-6 py-3 text-sm focus:border-[#00ffa3]/50 outline-none transition-all w-64"
                            />
                        </div>
                        <button
                            onClick={() => setShowInviteModal(true)}
                            className="bg-[#00ffa3] text-black px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-transform active:scale-95 shadow-[0_0_30px_rgba(0,255,163,0.2)]"
                        >
                            <UserPlus className="w-4 h-4" />
                            {activeTab === "COLABORATORS" ? "Invite Member" : "Form Org"}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-8">
                    {/* Main Content Area */}
                    <div className="col-span-8 space-y-6">
                        <AnimatePresence mode="wait">
                            {activeTab === "COLABORATORS" ? (
                                <motion.div
                                    key="collab"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="space-y-4"
                                >
                                    {filteredCollaborators.map((c) => (
                                        <div key={c.id} className="group bg-white/5 border border-white/5 p-6 rounded-2xl flex items-center justify-between hover:bg-white/[0.08] hover:border-white/10 transition-all cursor-pointer">
                                            <div className="flex items-center gap-6">
                                                <div className="relative">
                                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-xl font-black border border-white/10">
                                                        {c.nickname[0]}
                                                    </div>
                                                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-[#0a0a0a] ${c.status === "ONLINE" ? "bg-[#00ffa3]" : "bg-gray-600"
                                                        }`} />
                                                </div>
                                                <div className="space-y-1">
                                                    <h3 className="text-lg font-bold tracking-tight flex items-center gap-2">
                                                        {c.nickname}
                                                        {c.role === "OWNER" && <Shield className="w-3.5 h-3.5 text-[#00ffa3]" />}
                                                    </h3>
                                                    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-500">
                                                        <span className="px-2 py-0.5 bg-white/5 rounded border border-white/5 text-[#00ffa3]">{c.role}</span>
                                                        <span>ID: {c.identity.substring(0, 10)}...</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="text-right hidden group-hover:block transition-all mr-4">
                                                    <div className="text-[10px] font-black text-[#00ffa3] uppercase tracking-widest">Active Session</div>
                                                    <div className="text-xs text-gray-500 italic">Editing: Video Master</div>
                                                </div>
                                                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                                                    <MoreHorizontal className="w-5 h-5 text-gray-500" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="orgs"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="grid grid-cols-2 gap-6"
                                >
                                    {organizations.map((org) => (
                                        <div key={org.id} className="bg-white/5 border border-white/5 p-8 rounded-3xl space-y-6 hover:bg-white/[0.07] transition-all group overflow-hidden relative">
                                            <div className="absolute -right-4 -top-4 w-32 h-32 bg-[#00ffa3] opacity-[0.02] rounded-full blur-3xl group-hover:opacity-[0.05] transition-opacity" />
                                            <div className="flex justify-between items-start">
                                                <div className="w-12 h-12 bg-[#00ffa3]/10 rounded-xl flex items-center justify-center border border-[#00ffa3]/20">
                                                    <Building2 className="w-6 h-6 text-[#00ffa3]" />
                                                </div>
                                                <div className="px-3 py-1 bg-[#00ffa3]/10 border border-[#00ffa3]/20 rounded-full text-[9px] font-black text-[#00ffa3] tracking-widest uppercase">
                                                    Active Structure
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="text-2xl font-black italic uppercase tracking-tighter">{org.name}</h3>
                                                <p className="text-sm text-gray-500 line-clamp-2">{org.description}</p>
                                            </div>
                                            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                                <div className="flex -space-x-2">
                                                    {org.collaborators.slice(0, 3).map((_, i) => (
                                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-[#161616] bg-gray-800" />
                                                    ))}
                                                    <div className="w-8 h-8 rounded-full border-2 border-[#161616] bg-[#00ffa3] text-black text-[9px] font-black flex items-center justify-center">
                                                        +{org.collaborators.length}
                                                    </div>
                                                </div>
                                                <button className="text-[10px] font-black uppercase tracking-widest text-[#00ffa3] flex items-center gap-2 group">
                                                    Configure <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Sidebar Area */}
                    <div className="col-span-4 space-y-8">
                        {/* Spacetime Console */}
                        <div className="bg-[#111] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                            <div className="bg-white/5 px-6 py-4 flex items-center justify-between border-b border-white/5">
                                <div className="flex items-center gap-2">
                                    <Terminal className="w-4 h-4 text-[#00ffa3]" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Database Console</span>
                                </div>
                                <div className="flex gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                </div>
                            </div>
                            <div className="p-6 font-mono text-[10px] space-y-3">
                                <div className="flex gap-3 text-gray-500">
                                    <span className="text-[#00ffa3] shrink-0">12:04:11</span>
                                    <span className="text-white">Connecting to spacetime_host_01...</span>
                                </div>
                                <div className="flex gap-3 text-gray-500">
                                    <span className="text-[#00ffa3] shrink-0">12:04:12</span>
                                    <span className="text-blue-400 font-bold italic">SUCCESS:</span>
                                    <span className="text-white line-clamp-1">Identity established [{identity?.__identity__?.substring(0, 8)}]</span>
                                </div>
                                <div className="flex gap-3 text-gray-500">
                                    <span className="text-[#00ffa3] shrink-0">12:04:12</span>
                                    <span className="text-white">Subscribing to table `collaborators`...</span>
                                </div>
                                <div className="flex gap-3 text-gray-500">
                                    <span className="text-[#00ffa3] shrink-0">12:04:12</span>
                                    <span className="text-white">Subscribing to table `organizations`...</span>
                                </div>
                                <div className="flex gap-3 text-gray-500 animate-pulse">
                                    <span className="text-[#00ffa3] shrink-0">12:04:15</span>
                                    <span className="text-[#00ffa3]">_</span>
                                </div>
                            </div>
                        </div>

                        {/* Stats Card */}
                        <div className="bg-gradient-to-br from-[#00ffa3]/10 to-[#00d1ff]/5 border border-[#00ffa3]/20 rounded-3xl p-8 space-y-6">
                            <div className="flex items-center gap-3">
                                <Activity className="w-5 h-5 text-[#00ffa3]" />
                                <span className="font-black uppercase tracking-widest text-[11px] text-[#00ffa3]">Regional Activity</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <div className="text-3xl font-black italic tracking-tighter">14ms</div>
                                    <div className="text-[9px] uppercase font-black text-gray-500 tracking-widest">Global Latency</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-3xl font-black italic tracking-tighter">{collaborators.length}</div>
                                    <div className="text-[9px] uppercase font-black text-gray-500 tracking-widest">Online Peers</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Invite Modal */}
            <AnimatePresence>
                {showInviteModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowInviteModal(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-[#111] border border-white/10 w-full max-w-md rounded-[2.5rem] overflow-hidden relative shadow-3xl"
                        >
                            <div className="p-10 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-black italic uppercase tracking-tighter">Invite Potential</h2>
                                    <p className="text-gray-500 text-xs">Propagate new collaborator identity to the SpacetimeDB cluster.</p>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Nickname / Alias</label>
                                        <input
                                            type="text"
                                            value={inviteData.nickname}
                                            onChange={(e) => setInviteData({ ...inviteData, nickname: e.target.value })}
                                            placeholder="Enter handle..."
                                            className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-sm focus:border-[#00ffa3]/50 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Access Tier</label>
                                        <div className="grid grid-cols-2 gap-2">
                                            {["ADMIN", "EDITOR", "VIEWER"].map((role) => (
                                                <button
                                                    key={role}
                                                    onClick={() => setInviteData({ ...inviteData, role: role as any })}
                                                    className={`px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${inviteData.role === role
                                                        ? "bg-[#00ffa3] text-black border-transparent"
                                                        : "bg-white/5 text-gray-500 border-white/5 hover:bg-white/10"
                                                        }`}
                                                >
                                                    {role}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <button
                                        onClick={() => setShowInviteModal(false)}
                                        className="flex-grow py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                                    >
                                        Abort
                                    </button>
                                    <button
                                        onClick={() => {
                                            addCollaborator(inviteData.nickname, inviteData.role);
                                            setShowInviteModal(false);
                                            setInviteData({ nickname: "", role: "EDITOR" });
                                        }}
                                        className="bg-[#00ffa3] text-black flex-grow py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:scale-105 transition-transform"
                                    >
                                        Sync Identity
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
}
