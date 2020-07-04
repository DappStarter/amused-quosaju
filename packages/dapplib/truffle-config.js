require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift reward stick unveil gesture father equal gesture'; 
let testAccounts = [
"0xee1efcc43622ef46d2a8b3c40b21e0cb5420fe78e1050051cba519dc3c9dc7b8",
"0x02b2fdedbf59d74ea611828767713d4adf047104f6ff30a1eebbaa5bc9b58b9f",
"0x70e18f07b6d3628f75af890cc1dbd6fc25dffc1155a5af78eb7e0520e4812964",
"0xd26b1f37a7b72f0bebe18885f45dc8a444c4db8ffa07e1fd3df9d22ff45f8059",
"0x487d91f110177f9ac50410bda65fa56e394e9e0d0e76105845398a470966e621",
"0x6f3b7cdfce5c687b44ba2dc87503f2ec90059e7f62d20f7e8f3c418f8faa24d1",
"0xc2c171240b50b97916855401f7cf1bf237b1f178701504b68f7a36a431c3a73c",
"0x8a0c8dcd84736c944cdff3c321bd4ca630e192411713e357ecd1b822ea815e52",
"0x676670d0ea8d0a761641e5de82de5adcd35cc68b5d805f5a7f00911e948efa8d",
"0x605fd1771b969c6281abe2705e9b85e0165e30fdb4e0cd066eadbc38c3a1d347"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
