import { useState } from "react";
import { prepareContractCall, sendTransaction } from "thirdweb";
import { useActiveAccount } from "thirdweb/react";
import { arbitrumSepolia } from "thirdweb/chains";
import { createThirdwebClient, getContract } from "thirdweb";
import { upload } from "thirdweb/storage";
import { TokenType } from "@/components/profile/MintingModal";
import { useToast } from "@/components/shared/ToastProvider";

const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;
if (!clientId) {
    throw new Error("Missing NEXT_PUBLIC_THIRDWEB_CLIENT_ID environment variable.");
}

const client = createThirdwebClient({
    clientId,
});

const ERC721_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_ERC721_ADDRESS || "0x0000000000000000000000000000000000000000";
const ERC20_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_ERC20_ADDRESS || "0x0000000000000000000000000000000000000000";

export function useMinting() {
    const account = useActiveAccount();
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
        if (!account) return false;
        setIsMinting(true);

        try {
            let finalUri = typeof asset === "string" ? asset : "";
            
            // If asset is a File or Blob, upload it first
            if (asset instanceof File || asset instanceof Blob) {
                addToast({ type: "info", title: "Uploading to IPFS...", message: "Please wait while we secure your asset." });
                finalUri = await uploadToIPFS(asset);
            }

            if (type === "ERC721") {
                const contract = getContract({
                    client,
                    chain: arbitrumSepolia,
                    address: ERC721_CONTRACT_ADDRESS,
                });

                const tokenURI = finalUri || "ipfs://placeholder";

                const transaction = prepareContractCall({
                    contract,
                    method: "function mintMedia(address to, string memory uri, uint8 mediaType) returns (uint256)",
                    params: [account.address, tokenURI, config.mediaType ?? 1],
                });

                await sendTransaction({ transaction, account });
            } else {
                const contract = getContract({
                    client,
                    chain: arbitrumSepolia,
                    address: ERC20_CONTRACT_ADDRESS,
                });

                const transaction = prepareContractCall({
                    contract,
                    method: "function mintToken(address to, uint256 amount)",
                    params: [account.address, BigInt((config.amount || 0) * 10 ** 18)],
                });

                await sendTransaction({ transaction, account });
            }

            addToast({
                type: "success",
                title: "Minting Successful",
                message: `Successfully minted ${config.name} as ${type} to your wallet.`
            });
            return true;
        } catch (error: any) {
            console.error("Minting failed:", error);
            addToast({
                type: "error",
                title: "Minting Failed",
                message: error.message || "Failed to mint asset. See console for details."
            });
            return false;
        } finally {
            setIsMinting(false);
        }
    };

    return { mintAsset, isMinting, account };
}
