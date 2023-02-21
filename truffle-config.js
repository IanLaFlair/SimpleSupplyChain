const HDWallet = require('./node_modules/truffle-hdwallet-provider');
const mnemonic = 'include globe soccer album annual flag smart candy violin rose slab aerobic';

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id,
      websockets: true
    },
    goerli: {
      provider: () => new HDWallet(mnemonic, `https://goerli.infura.io/v3/3ee53aad567e4565bc1aad64ac276e0d`),
      network_id: 5,       // Ropsten's id
      gas: 3000000,  
      gasPrice: 10000000000  ,    // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },
  mocha: {
    timeout: 100000
  },
  // Configure your compilers
  compilers: {
   
    solc: {
      version: "^0.4.23",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
  
};