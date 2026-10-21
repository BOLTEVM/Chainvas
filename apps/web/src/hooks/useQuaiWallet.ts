"use client";

import { useCallback, useEffect, useState } from "react";
import { quais } from "quais";
import { getPelagusProvider, getQuaiNetwork } from "@/lib/quai";

export interface QuaiWalletState {
    /** Connected Quai address, or null when disconnected. */
    address: string | null;
    /** Whether the Pelagus extension is installed. */
    isPelagusInstalled: boolean;
    /** True while a connection request is in flight. */
    isConnecting: boolean;
    /** Active Quai network config (chainId, rpc, explorer). */
    network: ReturnType<typeof getQuaiNetwork>;
    /** Request a connection to Pelagus. Resolves to the connected address. */
    connect: () => Promise<string | null>;
    /** Forget the current connection (Pelagus stays authorized; UI state clears). */
    disconnect: () => void;
    /** A quais Signer for the connected account, or null. */
    getSigner: () => Promise<quais.Signer | null>;
    error: string | null;
}

/**
 * Wallet connection for Quai Network via the Pelagus browser extension.
 *
 * Pelagus injects `window.pelagus`; Quai nodes speak the `quai_` JSON-RPC
 * namespace, so all requests are routed through the quais BrowserProvider
 * rather than a generic EIP-1193 client.
 */
export function useQuaiWallet(): QuaiWalletState {
    const [address, setAddress] = useState<string | null>(null);
    const [isPelagusInstalled, setIsPelagusInstalled] = useState(false);
    const [isConnecting, setIsConnecting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const network = getQuaiNetwork();

    useEffect(() => {
        const provider = getPelagusProvider();
        setIsPelagusInstalled(!!provider);
        if (!provider) return;

        // Restore an existing authorized session.
        const browserProvider = new quais.BrowserProvider(provider);
        browserProvider
            .getSigner()
            .then((signer) => signer.getAddress())
            .then((addr) => setAddress(addr))
            .catch(() => {
                /* no authorized account yet */
            });

        const handleAccountsChanged = (accounts: string[]) => {
            setAddress(accounts && accounts.length > 0 ? accounts[0] : null);
        };
        if (typeof provider.on === "function") {
            provider.on("accountsChanged", handleAccountsChanged);
        }
        return () => {
            if (typeof provider.removeListener === "function") {
                provider.removeListener("accountsChanged", handleAccountsChanged);
            }
        };
    }, []);

    const connect = useCallback(async (): Promise<string | null> => {
        setError(null);
        const provider = getPelagusProvider();
        if (!provider) {
            setError("Pelagus wallet not detected. Install Pelagus to use BOLTChainvas on Quai Network.");
            return null;
        }
        setIsConnecting(true);
        try {
            const browserProvider = new quais.BrowserProvider(provider);
            // Triggers the Pelagus authorization prompt if not yet authorized.
            const signer = await browserProvider.getSigner();
            const addr = await signer.getAddress();
            setAddress(addr);
            return addr;
        } catch (err: any) {
            setError(err?.message || "Failed to connect Pelagus wallet.");
            return null;
        } finally {
            setIsConnecting(false);
        }
    }, []);

    const disconnect = useCallback(() => {
        setAddress(null);
    }, []);

    const getSigner = useCallback(async (): Promise<quais.Signer | null> => {
        const provider = getPelagusProvider();
        if (!provider || !address) return null;
        const browserProvider = new quais.BrowserProvider(provider);
        try {
            return await browserProvider.getSigner();
        } catch {
            return null;
        }
    }, [address]);

    return { address, isPelagusInstalled, isConnecting, network, connect, disconnect, getSigner, error };
}
