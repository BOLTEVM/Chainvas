require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        compilers: [
            { version: "0.8.20" },
            {
                version: "0.8.24",
                settings: { evmVersion: "cancun" }
            },
            {
                version: "0.8.26",
                settings: { evmVersion: "cancun" }
            }
        ],
    },
    networks: {
        arbitrumSepolia: {
            url: process.env.VITE_RPC_URL || "https://sepolia-rollup.arbitrum.io/rpc",
            accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : []
        }
    }
};
