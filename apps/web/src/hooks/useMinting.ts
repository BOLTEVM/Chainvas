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

const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;
if (!clientId) {
    throw new Error("Missing NEXT_PUBLIC_THIRDWEB_CLIENT_ID environment variable.");
}

// thirdweb is used for IPFS storage only; all chain interaction on Quai goes
// through the quais SDK because Quai nodes expose the quai_ JSON-RPC namespace.
const client = createThirdwebClient({ clientId });

export function useMinting() {
    const wallet = useQuaiWallet();
    const { addToast } = useToast();
    const [isMinting, setIsMinting] = useState(false);

    const uploadToIPFS = async (file: File | Blob) => {
        try {
            const uris = await upload({
                client,
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
                const contract = new quais.Contract(ERC721_CONTRACT_ADDRESS, MEDIA_ASSET_ABI, signer);
                const tokenURI = finalUri || "ipfs://placeholder";

                const tx = await contract.mintMedia(ownerAddress, tokenURI, config.mediaType ?? 1);
                addToast({ type: "info", title: "Transaction Broadcast", message: "Waiting for Quai Network confirmation..." });
                const receipt = await tx.wait();
                txHash = receipt?.hash ?? tx.hash;
            } else {
                const contract = new quais.Contract(ERC20_CONTRACT_ADDRESS, MEDIA_TOKEN_ABI, signer);
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
