require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-ethers")
require("@nomiclabs/hardhat-etherscan")
require('hardhat-deploy');
require('dotenv').config()
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
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
      accounts: [PRIVATE_KEY],
      saveDeployments: true
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
  solidity: "0.8.0",
  namedAccounts: {
    deployer: {
      default: 0
    }
  }
};
