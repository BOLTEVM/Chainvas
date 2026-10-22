"use client";

import { useState } from "react";
import { quais } from "quais";
import { createThirdwebClient } from "thirdweb";
import { upload } from "thirdweb/storage";
import { TokenType } from "@/components/profile/MintingModal";
import { useToast } from "@/components/shared/ToastProvider";
import { useQuaiWallet } from "@/hooks/useQuaiWallet";
import {
    ERC20_CONTRACT_ADDRESS,
    ERC721_CONTRACT_ADDRESS,
    MEDIA_ASSET_ABI,
    MEDIA_TOKEN_ABI,
    explorerTxUrl,
} from "@/lib/quai";

// thirdweb is used for IPFS storage only; all chain interaction on Quai goes
// through the quais SDK because Quai nodes expose the quai_ JSON-RPC namespace.
// The client is created lazily: throwing at module scope took down every page
// that imports this hook (and failed the static export) when the key was unset,
// even though the key is only needed at the moment an asset is uploaded.
const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;

let cachedClient: ReturnType<typeof createThirdwebClient> | null = null;
const getStorageClient = () => {
    if (!clientId) {
        throw new Error(
            "IPFS uploads need NEXT_PUBLIC_THIRDWEB_CLIENT_ID. Set it in apps/web/.env.local and reload.",
        );
    }
    if (!cachedClient) cachedClient = createThirdwebClient({ clientId });
    return cachedClient;
};

export function useMinting() {
    const wallet = useQuaiWallet();
    const { addToast } = useToast();
    const [isMinting, setIsMinting] = useState(false);

    const uploadToIPFS = async (file: File | Blob) => {
        try {
            const uris = await upload({
                client: getStorageClient(),
                files: [file as any],
            });
            return uris[0];
        } catch (error) {
            console.error("IPFS Upload failed:", error);
            throw error;
        }
    };

    const mintAsset = async (
        type: TokenType,
        config: { name: string; symbol: string; amount?: number; mediaType?: number },
        asset: string | File | Blob
    ) => {
        const signer = await wallet.getSigner();
        if (!signer) {
            addToast({
                type: "error",
                title: "Wallet Not Connected",
                message: "Connect Pelagus to mint on Quai Network.",
            });
            return false;
        }

        // Preflight 1: an unset NEXT_PUBLIC_ERC*_ADDRESS falls back to the zero
        // address. quais cannot resolve a Quai shard for it, so it never fills
        // in tx.chainId and the node rejects the call with an opaque
        // "transaction chainId mismatch (value=0x00)". Fail here instead, with
        // the name of the variable that is actually missing.
        const contractAddress = type === "ERC721" ? ERC721_CONTRACT_ADDRESS : ERC20_CONTRACT_ADDRESS;
        const addressVar = type === "ERC721" ? "NEXT_PUBLIC_ERC721_ADDRESS" : "NEXT_PUBLIC_ERC20_ADDRESS";
        if (!contractAddress || /^0x0+$/i.test(contractAddress)) {
            addToast({
                type: "error",
                title: "No contract configured",
                message: `${addressVar} is not set, so there is no ${type} contract to mint to. The deployed addresses for each network are in packages/contracts/deployments/.`,
            });
            return false;
        }

        // Preflight 2: Pelagus must be on the network this build targets, or the
        // node rejects the transaction with a genuine chainId mismatch.
        try {
            const activeNetwork = await signer.provider?.getNetwork();
            const walletChainId = activeNetwork ? Number(activeNetwork.chainId) : 0;
            if (walletChainId && walletChainId !== wallet.network.chainId) {
                addToast({
                    type: "error",
                    title: "Wrong network",
                    message: `Pelagus is on chain ${walletChainId}, but this build targets ${wallet.network.name} (chain ${wallet.network.chainId}). Switch network in Pelagus, or set NEXT_PUBLIC_QUAI_NETWORK to match.`,
                });
                return false;
            }
        } catch {
            /* provider cannot report a network - let the transaction surface it */
        }

        setIsMinting(true);

        try {
            const ownerAddress = await signer.getAddress();

            let finalUri = typeof asset === "string" ? asset : "";

            // If asset is a File or Blob, upload it first
            if (asset instanceof File || asset instanceof Blob) {
                addToast({ type: "info", title: "Uploading to IPFS...", message: "Please wait while we secure your asset." });
                finalUri = await uploadToIPFS(asset);
            }

            let txHash: string;

            if (type === "ERC721") {
                const contract = new quais.Contract(contractAddress, MEDIA_ASSET_ABI, signer);
                const tokenURI = finalUri || "ipfs://placeholder";

                const tx = await contract.mintMedia(ownerAddress, tokenURI, config.mediaType ?? 1);
                addToast({ type: "info", title: "Transaction Broadcast", message: "Waiting for Quai Network confirmation..." });
                const receipt = await tx.wait();
                txHash = receipt?.hash ?? tx.hash;
            } else {
                const contract = new quais.Contract(contractAddress, MEDIA_TOKEN_ABI, signer);
                // parseUnits avoids the floating-point precision loss of amount * 10 ** 18.
                const amount = quais.parseUnits(String(config.amount || 0), 18);

                const tx = await contract.mintToken(ownerAddress, amount);
                addToast({ type: "info", title: "Transaction Broadcast", message: "Waiting for Quai Network confirmation..." });
                const receipt = await tx.wait();
                txHash = receipt?.hash ?? tx.hash;
            }

            addToast({
                type: "success",
                title: "Minting Successful",
                message: `Minted ${config.name} as ${type} on ${wallet.network.name}. Tx: ${explorerTxUrl(txHash, wallet.network)}`,
            });
            return true;
        } catch (error: any) {
            console.error("Minting failed:", error);
            addToast({
                type: "error",
                title: "Minting Failed",
                message: error.message || "Failed to mint asset. See console for details.",
            });
            return false;
        } finally {
            setIsMinting(false);
        }
    };

    return { mintAsset, isMinting, account: wallet.address ? { address: wallet.address } : null, wallet };
}
