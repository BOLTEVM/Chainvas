const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const MediaAsset = await hre.ethers.getContractFactory("MediaAsset");
    const mediaAsset = await MediaAsset.deploy();
    await mediaAsset.waitForDeployment();
    console.log("MediaAsset deployed to:", await mediaAsset.getAddress());

    const MediaToken = await hre.ethers.getContractFactory("MediaToken");
    const mediaToken = await MediaToken.deploy("BOLTChainvasToken", "BCVT");
    await mediaToken.waitForDeployment();
    console.log("MediaToken deployed to:", await mediaToken.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
