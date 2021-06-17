require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stone deny soap snake gloom narrow equal genuine'; 
let testAccounts = [
"0xe1984f3b800e594fb17f09a7f8b3196af7c6a3b3c24aeb41b961b6d9762cf7bc",
"0x1dbb7080504c02aa7b77ce124b71240c31a03aabec49a0cca77b969d4896ac44",
"0x236a0a38d5478f84c5a839cb1976560a992c53da9afd03ef818770dce5eac1d6",
"0x8f65fd01143af9b5e7fbd656ea54cbe67da6f7210f600a4598d680aadb382fb4",
"0x1f16512c30f4e0405141473986aa53cd24c9cc4e0de21b982c19c07de2de5043",
"0x43a2f5c3f6367c674e46eda62093833123ade9b96b3a08df2f251b45c6fa13bd",
"0x7b61b9128fb1e0804a7eb67cc1ca250eea8d08923b756b46f3be780ce3c84f66",
"0x068ab40e02c27cb2d40beb42f75412d96bb9f278667722f795d5f9f0fdaaed4a",
"0x2e0415f39bdbdc21ee0b88ee5c231f40a8de95132d3c9de7ba80fc11fe74509a",
"0x1aecf48946f1b99171eb217e352f2549b34d78406a0d16aab6e67a0b99bf457e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

