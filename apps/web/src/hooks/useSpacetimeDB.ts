"use client";

import { useEffect, useState, useCallback } from "react";
// Since the exact exports might vary by version and we are mocking, 
// we use internal interfaces for the build placeholder.
interface Identity { __identity__: string; }

// Represents a Video Asset stored in SpacetimeDB
export interface VideoAsset {
    id: string;
    uploaderId: string;
    // Option A: IPFS / Thirdweb Storage URI
    uri?: string;
    // Option B: Direct Raw Blob Buffer (base64 encoded for frontend transport if needed)
    blob?: Uint8Array;
    filename: string;
    createdAt: number;
}

// WebRTC Signaling Types
export interface Signal {
    id: string;
    senderId: string;
    receiverId?: string; // Optional for broadcast or targeted
    type: "offer" | "answer" | "candidate";
    data: string; // SDP or IceCandidate JSON string
}

// Global SpacetimeDB Client instance
const spacetimeClient: any = null;
let isConnecting = false;
const signalHandlers: ((signal: Signal) => void)[] = [];

// SpacetimeDB Types
export interface Collaborator {
    id: string;
    identity: string;
    nickname: string;
    role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
    status: "ONLINE" | "OFFLINE" | "AWAY";
    avatar?: string;
}

export interface Organization {
    id: string;
    name: string;
    slug: string;
    description: string;
    collaborators: string[]; // IDs of collaborators
    active: boolean;
}

export interface MarketplaceAsset {
    id: string;
    name: string;
    type: "VIDEO" | "AUDIO" | "IMAGE" | "FONT" | "TEMPLATE";
    price: number;
    previewUrl: string;
    creator: string;
    tags: string[];
    owned?: boolean;
}

export interface Transaction {
    id: string;
    assetId: string;
    buyerIdentity: string;
    timestamp: number;
    amount: number;
}

export function useSpacetimeDB(walletAddress?: string) {
    const [isConnected, setIsConnected] = useState(false);
    const [identity, setIdentity] = useState<Identity | null>(null);
    const [videos, setVideos] = useState<VideoAsset[]>([]);

    // Org & Collaborator State
    const [organizations, setOrganizations] = useState<Organization[]>([]);
    const [collaborators, setCollaborators] = useState<Collaborator[]>([]);
    const [activeOrgId, setActiveOrgId] = useState<string | null>(null);

    // Marketplace State
    const [marketplaceAssets, setMarketplaceAssets] = useState<MarketplaceAsset[]>([]);
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    // Since we don't have a compiled Wasm module to bind to right now,
    // we will simulate the SpacetimeDB local connection state for the UI build.
    // In a production environment, this would use: `spacetimeClient.connect(...)`

    useEffect(() => {
        if (!spacetimeClient && !isConnecting) {
            isConnecting = true;
            console.log("Mocking SpacetimeDB Connection...");

            setTimeout(() => {
                setIsConnected(true);
                const mockIdentity = { __identity__: walletAddress || "mock_identity_12345" } as Identity;
                setIdentity(mockIdentity);

                // Initial Mock Data
                const mockCollabs: Collaborator[] = [
                    { id: "c1", identity: walletAddress || "mock_identity_12345", nickname: "You (Antigravity)", role: "OWNER", status: "ONLINE" },
                    { id: "c2", identity: "id_jane", nickname: "Jane Doe", role: "ADMIN", status: "ONLINE" },
                    { id: "c3", identity: "id_bob", nickname: "Bob Smith", role: "EDITOR", status: "OFFLINE" },
                ];

                const mockOrg: Organization = {
                    id: "org1",
                    name: "BOLT Creative Studio",
                    slug: "bolt-studio",
                    description: "Global production team for MONAD blockchain assets.",
                    collaborators: ["c1", "c2", "c3"],
                    active: true
                };

                setCollaborators(mockCollabs);
                setOrganizations([mockOrg]);
                setActiveOrgId("org1");

                // Mock Marketplace Data
                const mockAssets: MarketplaceAsset[] = [
                    {
                        id: "m1",
                        name: "Neon Cyberpunk Overlay",
                        type: "VIDEO",
                        price: 45,
                        previewUrl: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=800&q=80",
                        creator: "CyberVfx",
                        tags: ["neon", "cyberpunk", "overlay"],
                        owned: false
                    },
                    {
                        id: "m2",
                        name: "Lo-Fi Texture Pack",
                        type: "IMAGE",
                        price: 20,
                        previewUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80",
                        creator: "RetroPixel",
                        tags: ["lo-fi", "grunge", "texture"],
                        owned: true
                    },
                    {
                        id: "m3",
                        name: "Futuristic Glitch SFX",
                        type: "AUDIO",
                        price: 15,
                        previewUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
                        creator: "SonicVoid",
                        tags: ["glitch", "sfx", "sci-fi"],
                        owned: false
                    },
                    {
                        id: "m4",
                        name: "Monad Bold Display",
                        type: "FONT",
                        price: 35,
                        previewUrl: "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&q=80",
                        creator: "TypeMaster",
                        tags: ["typography", "bold", "display"],
                        owned: false
                    }
                ];
                setMarketplaceAssets(mockAssets);
            }, 1000);
        }
    }, []);

    const purchaseAsset = useCallback((assetId: string) => {
        if (!isConnected || !identity) return;

        const asset = marketplaceAssets.find(a => a.id === assetId);
        if (!asset || asset.owned) return;

        const newTransaction: Transaction = {
            id: `tx_${Date.now()}`,
            assetId,
            buyerIdentity: identity.__identity__,
            timestamp: Date.now(),
            amount: asset.price
        };

        setTransactions(prev => [...prev, newTransaction]);
        setMarketplaceAssets(prev => prev.map(a =>
            a.id === assetId ? { ...a, owned: true } : a
        ));

        console.log(`SpacetimeDB: Asset ${assetId} purchased by ${identity.__identity__}`);
    }, [isConnected, identity, marketplaceAssets]);

    const createOrganization = useCallback((name: string, description: string) => {
        const newOrg: Organization = {
            id: `org_${Date.now()}`,
            name,
            slug: name.toLowerCase().replace(/\s+/g, "-"),
            description,
            collaborators: [identity?.__identity__ || "unknown"],
            active: false
        };
        setOrganizations(prev => [...prev, newOrg]);
    }, [identity]);

    const addCollaborator = useCallback((nickname: string, role: Collaborator["role"]) => {
        const newCollab: Collaborator = {
            id: `coll_${Date.now()}`,
            identity: `id_${Math.random().toString(36).substr(2, 9)}`,
            nickname,
            role,
            status: "OFFLINE"
        };
        setCollaborators(prev => [...prev, newCollab]);

        // Add to active org
        if (activeOrgId) {
            setOrganizations(prev => prev.map(org =>
                org.id === activeOrgId
                    ? { ...org, collaborators: [...org.collaborators, newCollab.id] }
                    : org
            ));
        }
    }, [activeOrgId]);

    // Option A Reducer Simulation
    const addVideoAssetUri = useCallback((uri: string, filename: string) => {
        if (!isConnected) return;

        // Simulate reducer call: `SpacetimeDB.reducers.addVideoAssetUri(uri, filename)`
        const newAsset: VideoAsset = {
            id: Date.now().toString(),
            uploaderId: identity?.__identity__?.toString() || "unknown",
            uri,
            filename,
            createdAt: Date.now()
        };

        // Optimistic UI Update (SpacetimeDB normally broadcasts table updates)
        setVideos(prev => [...prev, newAsset]);
    }, [isConnected, identity]);

    // Option B Reducer Simulation
    const addVideoAssetBlob = useCallback((blob: Uint8Array, filename: string) => {
        if (!isConnected) return;

        // Simulate reducer call: `SpacetimeDB.reducers.addVideoAssetBlob(blob, filename)`
        const newAsset: VideoAsset = {
            id: Date.now().toString(),
            uploaderId: identity?.__identity__?.toString() || "unknown",
            blob,
            filename,
            createdAt: Date.now()
        };

        setVideos(prev => [...prev, newAsset]);
    }, [isConnected, identity]);

    // Signaling Methods
    const sendSignal = useCallback((type: Signal["type"], data: string, receiverId?: string) => {
        if (!isConnected) return;

        const signal: Signal = {
            id: Date.now().toString(),
            senderId: identity?.__identity__?.toString() || "unknown",
            receiverId,
            type,
            data
        };

        // Simulate broadcast to all local handlers
        // In reality, this would be a SpacetimeDB reducer call
        console.log(`Sending SpaceTimeDB Signal: ${type}`);
        setTimeout(() => {
            signalHandlers.forEach(handler => handler(signal));
        }, 100);
    }, [isConnected, identity]);

    const onSignal = useCallback((handler: (signal: Signal) => void) => {
        signalHandlers.push(handler);
        return () => {
            const index = signalHandlers.indexOf(handler);
            if (index > -1) signalHandlers.splice(index, 1);
        };
    }, []);

    return {
        isConnected,
        identity,
        videos,
        organizations,
        collaborators,
        activeOrgId,
        createOrganization,
        addCollaborator,
        addVideoAssetUri,
        addVideoAssetBlob,
        sendSignal,
        onSignal,
        // Marketplace
        marketplaceAssets,
        transactions,
        purchaseAsset
    };
}
