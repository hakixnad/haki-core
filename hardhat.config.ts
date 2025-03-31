import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.5.16",
  networks: {
    hardhat: {},
    testnet: {
      url: process.env.RPC,
      accounts: [process.env.PRIVATE_KEY || ""],
    },
  },
  etherscan: {
    apiKey: {
      bscTestnet: "",
    },
  },
};