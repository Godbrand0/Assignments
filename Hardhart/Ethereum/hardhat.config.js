require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const {PRIVATE_KEY, ETHERSCAN_KEY, ETHSEPHOLIA_URL_KEY, CORESCAN_KEY, COREDAO_URL_KEY} = process.env;

module.exports = {
  solidity: "0.8.30",
  networks: {
    sepolia: {
      url: ETHSEPHOLIA_URL_KEY,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    core: {
      url: COREDAO_URL_KEY,
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 1114,
    },
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_KEY,
    },
  },
  corescan: {
    apiKey: CORESCAN_KEY,
  },
  sourcify: {
    enabled: true,
  },
};


