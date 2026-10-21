require("@nomicfoundation/hardhat-toolbox");

// Quai deploy-metadata plugin (Quaiscan verification support). Optional:
// if the package is unavailable the local compile/test flow still works.
try {
    require("@quai/hardhat-deploy-metadata");
} catch {
    console.warn("[hardhat] @quai/hardhat-deploy-metadata not installed; Quaiscan metadata push disabled.");
}

const dotenv = require("dotenv");
dotenv.config({ path: [".env", ".env.local", "../../.env.local", "../../.env"] });

const PRIVATE_KEY = process.env.CYPRUS1_PK || process.env.PRIVATE_KEY || "";
const accounts = PRIVATE_KEY ? [PRIVATE_KEY] : [];

/**
 * Quai Network EVM zones run a go-ethereum-derived EVM with the `london`
 * hardfork and support Solidity <= 0.8.20. Do not raise the compiler
 * version or evmVersion without checking Quai docs first.
 *
 * Networks:
 *   cyprus1          Quai mainnet, chainId 9     (rpc.quai.network/cyprus1)
 *   cyprus1-orchard  Orchard testnet, chainId 15000 (orchard.rpc.quai.network/cyprus1)
 *                    Faucet: https://orchard.faucet.quai.network
 */
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        version: "0.8.20",
        settings: {
            optimizer: { enabled: true, runs: 1000 },
            evmVersion: "london",
            // Required by @quai/hardhat-deploy-metadata for Quaiscan verification.
            metadata: { bytecodeHash: "ipfs", useLiteralContent: true },
        },
    },
    networks: {
        hardhat: {
            chainId: 1337,
        },
        cyprus1: {
            url: process.env.QUAI_MAINNET_RPC_URL || "https://rpc.quai.network/cyprus1",
            accounts,
            chainId: 9,
        },
        "cyprus1-orchard": {
            url: process.env.QUAI_ORCHARD_RPC_URL || "https://orchard.rpc.quai.network/cyprus1",
            accounts,
            chainId: 15000,
        },
        // Legacy EVM target, kept for backwards compatibility.
        arbitrumSepolia: {
            url: process.env.VITE_RPC_URL || "https://sepolia-rollup.arbitrum.io/rpc",
            accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
        },
    },
    paths: {
        sources: "./contracts",
        cache: "./cache",
        artifacts: "./artifacts",
    },
    mocha: {
        timeout: 40000,
    },
};
