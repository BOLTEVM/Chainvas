require("@nomicfoundation/hardhat-toolbox");

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
};
