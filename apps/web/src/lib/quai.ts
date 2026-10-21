/**
 * Quai Network chain configuration for BOLTChainvas.
 *
 * Quai zones run a go-ethereum-derived EVM, but nodes expose the `quai_`
 * JSON-RPC namespace (not `eth_`), and the native wallet is Pelagus, which
 * injects `window.pelagus`. All on-chain interaction in the app should go
 * through the quais SDK (an Ethers v6 fork) against these settings.
 *
 * Select the active network with NEXT_PUBLIC_QUAI_NETWORK ("mainnet" | "orchard").
 * Defaults to the Orchard testnet so nothing touches mainnet by accident.
 */

export interface QuaiNetworkConfig {
    key: "mainnet" | "orchard";
    name: string;
    chainId: number;
    rpcUrl: string;
    explorerUrl: string;
    faucetUrl?: string;
    nativeCurrency: { name: string; symbol: string; decimals: number };
}

export const QUAI_NETWORKS: Record<"mainnet" | "orchard", QuaiNetworkConfig> = {
    mainnet: {
        key: "mainnet",
        name: "Quai Mainnet (Cyprus-1)",
        chainId: 9,
        rpcUrl: process.env.NEXT_PUBLIC_QUAI_MAINNET_RPC_URL || "https://rpc.quai.network/cyprus1",
        explorerUrl: "https://quaiscan.io",
        nativeCurrency: { name: "Quai", symbol: "QUAI", decimals: 18 },
    },
    orchard: {
        key: "orchard",
        name: "Quai Orchard Testnet (Cyprus-1)",
        chainId: 15000,
        rpcUrl: process.env.NEXT_PUBLIC_QUAI_ORCHARD_RPC_URL || "https://orchard.rpc.quai.network/cyprus1",
        explorerUrl: "https://orchard.quaiscan.io",
        faucetUrl: "https://orchard.faucet.quai.network",
        nativeCurrency: { name: "Quai", symbol: "QUAI", decimals: 18 },
    },
};

export function getQuaiNetwork(): QuaiNetworkConfig {
    const key = (process.env.NEXT_PUBLIC_QUAI_NETWORK || "orchard").toLowerCase();
    return key === "mainnet" ? QUAI_NETWORKS.mainnet : QUAI_NETWORKS.orchard;
}

export const ERC721_CONTRACT_ADDRESS =
    process.env.NEXT_PUBLIC_ERC721_ADDRESS || "0x0000000000000000000000000000000000000000";
export const ERC20_CONTRACT_ADDRESS =
    process.env.NEXT_PUBLIC_ERC20_ADDRESS || "0x0000000000000000000000000000000000000000";

export const MEDIA_ASSET_ABI = [
    "function mintMedia(address to, string uri, uint8 mediaType) returns (uint256)",
    "function getMediaMetadata(uint256 tokenId) view returns (tuple(uint8 mediaType, address creator, uint256 timestamp))",
    "function totalMinted() view returns (uint256)",
    "function tokenURI(uint256 tokenId) view returns (string)",
    "function ownerOf(uint256 tokenId) view returns (address)",
    "event MediaMinted(uint256 indexed tokenId, uint8 mediaType, address indexed creator, address indexed to, string tokenURI)",
];

export const MEDIA_TOKEN_ABI = [
    "function mintToken(address to, uint256 amount)",
    "function balanceOf(address account) view returns (uint256)",
    "function totalSupply() view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "event TokenMinted(address indexed to, uint256 amount, address indexed minter)",
];

declare global {
    interface Window {
        pelagus?: any;
    }
}

/** Returns the injected Pelagus provider, or null when the wallet is not installed. */
export function getPelagusProvider(): any | null {
    if (typeof window === "undefined") return null;
    return window.pelagus ?? null;
}

export function explorerTxUrl(txHash: string, network: QuaiNetworkConfig = getQuaiNetwork()): string {
    return `${network.explorerUrl}/tx/${txHash}`;
}

export function explorerAddressUrl(address: string, network: QuaiNetworkConfig = getQuaiNetwork()): string {
    return `${network.explorerUrl}/address/${address}`;
}

/**
 * Public IPFS gateways used to render ipfs:// content in the app.
 *
 * NOTE: thirdweb's per-client CDN (<clientId>.ipfscdn.io) is unusable with our
 * client ID — at 128 chars it exceeds the 63-char DNS label limit, so that
 * hostname can never resolve. Uploads via thirdweb storage work fine; only
 * retrieval must go through a public gateway. Override with
 * NEXT_PUBLIC_IPFS_GATEWAY (e.g. a dedicated Pinata gateway for production).
 */
export const IPFS_GATEWAYS = [
    process.env.NEXT_PUBLIC_IPFS_GATEWAY || "https://gateway.pinata.cloud/ipfs/",
    "https://dweb.link/ipfs/",
    "https://w3s.link/ipfs/",
    "https://ipfs.io/ipfs/",
];

/**
 * Convert an ipfs:// URI (or bare CID) into an https URL on a public gateway.
 * Pass-through for non-IPFS URIs (http(s), data:, blob:).
 */
export function resolveIpfsUrl(uri: string | undefined | null, gatewayIndex = 0): string {
    if (!uri) return "";
    if (!uri.startsWith("ipfs://")) return uri;
    const path = uri.slice("ipfs://".length);
    const gateway = IPFS_GATEWAYS[gatewayIndex] || IPFS_GATEWAYS[0];
    return gateway.replace(/\/?$/, "/") + path;
}
