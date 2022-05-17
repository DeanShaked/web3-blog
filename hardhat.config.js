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
        polygon: {
            url: "https:/polygon-mainnet.infura.io/v3/6f8f108c5bf44e408d3fb1e9357e2e55",
            accounts: [process.env.PK],
        },
    },
};

/** HARDHAT CONFIGURATION
 *  1. networks - Configure the local network that we're gonna work with.
 *  2. chainId - 1337 is the default localhost chain id of MetaMask.
 */