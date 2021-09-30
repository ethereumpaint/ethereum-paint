require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-ethers")
require("@nomiclabs/hardhat-etherscan")
require('hardhat-abi-exporter');
require('hardhat-deploy')
require('dotenv').config()
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const DEV_PRIVATE_KEY = process.env.DEV_PRIVATE_KEY
const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL
const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [DEV_PRIVATE_KEY]
    },
    mainnet: {
      url: MAINNET_RPC_URL,
      accounts: [DEPLOYER_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
  abiExporter: {
    path: './data/abi',
    clear: true,
    flat: true,
    only: 0,
    spacing: 2,
    pretty: true,
  },
  solidity: "0.8.0",
  namedAccounts: {
    deployer: {
      default: 0
    }
  }
};
