require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/1hFU_dMWDRPKS3l7fb1LJN_h-bGVhqAJ",
      accounts: [
        "5fb6ed6ef7c6d399d5b78c42535cb6c3cb53c76880e4e35e4ebcb74936e391b3",
      ],
    },
  },
};
