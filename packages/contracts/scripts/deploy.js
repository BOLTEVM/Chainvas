/**
 * BOLTChainvas deployment for Quai Network (and generic EVM fallback).
 *
 * Quai zones expose the `quai_` JSON-RPC namespace (not `eth_`), so on Quai
 * networks we deploy through the quais SDK — an Ethers v6 fork with a
 * near-identical API — and push contract metadata to IPFS so Quaiscan can
 * verify the source.
 *
 * Usage:
 *   npx hardhat run scripts/deploy.js --network cyprus1          # mainnet, chainId 9
 *   npx hardhat run scripts/deploy.js --network cyprus1-orchard  # Orchard testnet, chainId 15000
 *   npx hardhat run scripts/deploy.js --network hardhat          # local sanity check (ethers)
 *
 * Env (see .env.example):
 *   CYPRUS1_PK            deployer private key for the Cyprus-1 zone
 *   ERC20_NAME/ERC20_SYMBOL   token constructor args (default: BOLTChainvasToken/BCVT)
 */
const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

const QUAI_CHAIN_IDS = new Set([9, 15000]);

async function deployWithQuais() {
    const quais = require("quais");
    const { deployMetadata } = hre;

    const rpcUrl = hre.network.config.url;
    const privateKey = hre.network.config.accounts[0];
    const chainId = hre.network.config.chainId;

    // staticNetwork + usePathing:false: only Cyprus-1 is active on Quai today,
    // and usePathing probes every (mostly inactive) zone endpoint, which hangs
    // against the public RPC. The configured URL already routes to Cyprus-1.
    const provider = new quais.JsonRpcProvider(rpcUrl, chainId, { staticNetwork: true, usePathing: false });
    const wallet = new quais.Wallet(privateKey, provider);
    console.log("Deploying to Quai with account:", wallet.address, `(chainId ${chainId})`);

    const balance = await provider.getBalance(wallet.address);
    console.log("Deployer balance:", quais.formatQuai(balance), "QUAI");
    if (balance === 0n) {
        throw new Error(
            `Deployer ${wallet.address} has 0 QUAI on ${hre.network.name}. ` +
            (chainId === 15000
                ? "Fund it from the Orchard faucet (Discord-verified) before deploying."
                : "Fund it with real QUAI (chainId 9) before deploying.")
        );
    }

    const tokenName = process.env.ERC20_NAME || "BOLTChainvasToken";
    const tokenSymbol = process.env.ERC20_SYMBOL || "BCVT";

    async function deployOne(contractName, args) {
        const artifactPath = path.join(
            hre.config.paths.artifacts, "contracts", `${contractName}.sol`, `${contractName}.json`
        );
        const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));

        // Embed the metadata CID so Quaiscan can fetch and verify the source.
        let ipfsHash = null;
        if (deployMetadata && typeof deployMetadata.pushMetadataToIPFS === "function") {
            ipfsHash = await deployMetadata.pushMetadataToIPFS(contractName);
            console.log(`${contractName} metadata CID:`, ipfsHash);
        } else {
            console.warn(`${contractName}: deployMetadata plugin unavailable; contract will deploy but Quaiscan verification will not be possible.`);
        }

        const factory = new quais.ContractFactory(artifact.abi, artifact.bytecode, wallet, ipfsHash);
        const contract = await factory.deploy(...args);
        console.log(`${contractName} tx broadcast:`, contract.deploymentTransaction().hash);

        await contract.waitForDeployment();
        const address = await contract.getAddress();
        console.log(`${contractName} deployed to:`, address);
        return address;
    }

    const mediaAsset = await deployOne("MediaAsset", []);
    const mediaToken = await deployOne("MediaToken", [tokenName, tokenSymbol]);

    writeDeploymentSummary({ network: hre.network.name, chainId: hre.network.config.chainId, mediaAsset, mediaToken });
}

async function deployWithEthers() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying with account:", deployer.address, `(network ${hre.network.name})`);

    const MediaAsset = await hre.ethers.getContractFactory("MediaAsset");
    const mediaAsset = await MediaAsset.deploy();
    await mediaAsset.waitForDeployment();
    const mediaAssetAddress = await mediaAsset.getAddress();
    console.log("MediaAsset deployed to:", mediaAssetAddress);

    const MediaToken = await hre.ethers.getContractFactory("MediaToken");
    const mediaToken = await MediaToken.deploy(
        process.env.ERC20_NAME || "BOLTChainvasToken",
        process.env.ERC20_SYMBOL || "BCVT"
    );
    await mediaToken.waitForDeployment();
    const mediaTokenAddress = await mediaToken.getAddress();
    console.log("MediaToken deployed to:", mediaTokenAddress);

    writeDeploymentSummary({ network: hre.network.name, chainId: hre.network.config.chainId, mediaAsset: mediaAssetAddress, mediaToken: mediaTokenAddress });
}

function writeDeploymentSummary({ network, chainId, mediaAsset, mediaToken }) {
    const out = {
        network,
        chainId,
        deployedAt: new Date().toISOString(),
        contracts: {
            MediaAsset: mediaAsset,
            MediaToken: mediaToken,
        },
        frontendEnv: {
            NEXT_PUBLIC_QUAI_NETWORK: chainId === 9 ? "mainnet" : "orchard",
            NEXT_PUBLIC_ERC721_ADDRESS: mediaAsset,
            NEXT_PUBLIC_ERC20_ADDRESS: mediaToken,
        },
    };
    const file = path.join(__dirname, "..", "deployments", `${network}-${chainId}.json`);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, JSON.stringify(out, null, 2) + "\n");
    console.log(`\nDeployment summary written to ${file}`);
    console.log("Set these in apps/web .env.local:\n" +
        `  NEXT_PUBLIC_QUAI_NETWORK=${out.frontendEnv.NEXT_PUBLIC_QUAI_NETWORK}\n` +
        `  NEXT_PUBLIC_ERC721_ADDRESS=${mediaAsset}\n` +
        `  NEXT_PUBLIC_ERC20_ADDRESS=${mediaToken}`);
}

async function main() {
    const chainId = hre.network.config.chainId;
    if (QUAI_CHAIN_IDS.has(chainId)) {
        await deployWithQuais();
    } else {
        await deployWithEthers();
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
