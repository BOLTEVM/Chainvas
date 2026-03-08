import { useState } from "react";
import { prepareContractCall, sendTransaction } from "thirdweb";
import { useActiveAccount, useSendTransaction } from "thirdweb/react";
import { arbitrumSepolia } from "thirdweb/chains";
import { createThirdwebClient, getContract } from "thirdweb";
import { TokenType } from "@/components/profile/MintingModal";

const client = createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "915ea7be7f735d46101c5cc897931448",
});

const ERC721_CONTRACT_ADDRESS = "0x0000000000000000000000000000000000000000";
const ERC20_CONTRACT_ADDRESS = "0x0000000000000000000000000000000000000000";

export function useMinting() {
    const account = useActiveAccount();
    const { mutate: sendTx } = useSendTransaction();
    const [isMinting, setIsMinting] = useState(false);

    const mintAsset = async (type: TokenType, config: { name: string; symbol: string; amount?: number }, assetUri: string) => {
        if (!account) return false;
        setIsMinting(true);

        try {
            if (type === "ERC721") {
                const contract = getContract({
                    client,
                    chain: arbitrumSepolia,
                    address: ERC721_CONTRACT_ADDRESS,
                });

                const tokenURI = assetUri || "ipfs://placeholder";

                const transaction = prepareContractCall({
                    contract,
                    method: "function mintMedia(address to, string memory uri, uint8 mediaType) returns (uint256)",
                    params: [account.address, tokenURI, 1], // Defaulting mediaType to 1
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

            alert(`Successfully minted ${config.name} as ${type}!`);
            return true;
        } catch (error) {
            console.error("Minting failed:", error);
            alert("Failed to mint asset. See console for details.");
            return false;
        } finally {
            setIsMinting(false);
        }
    };

    return { mintAsset, isMinting, account };
}
