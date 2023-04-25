import { HardhatUserConfig } from "hardhat/config";

// Plugins
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy-ethers"
import "hardhat-deploy";
import "solidity-docgen";
import "./plugins/abigen.plugin";
import "./plugins/merger.plugin";

// Config
import {
  ALCHEMY_API_KEY,
  ETHERSCAN_API_KEY,
  COINMARKETCAP_API_KEY
} from "./config";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
    },
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./tests",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  namedAccounts: {
    deployer: 0,
  },
  mocha: {
    timeout: 40000,
  },
  typechain: {
    outDir: "./typechain-types",
    target: "ethers-v5",
  },
  gasReporter: {
    currency: "USD",
    gasPriceApi: `https://api.etherscan.io/api?module=proxy&action=eth_gasPrice&apikey=${ETHERSCAN_API_KEY}`,
    coinmarketcap: COINMARKETCAP_API_KEY,
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
  docgen: {
    outputDir: "./docs",
    pages: "items",
  },
  abigen: {
    outDir: "./abis",
  },
  merger: {
    outDir: "./merged",
  },
};

export default config;
