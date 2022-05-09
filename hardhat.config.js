require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // mumbai: {
    //   url: "https://rpc-mumbai.matic.today",
    //   accounts: [process.env.pk],
    // },
    // polygon: {
    //   url: "https://polygon-rpc.com/",
    //   accounts: [process.env.pk],
    // },
  },
};

/** HARDHAT CONFIGURATION
 *  1. networks - Configure the local network that we're gonna work with.
 *  2. chainId - 1337 is the default localhost chain id of MetaMask.
 */
