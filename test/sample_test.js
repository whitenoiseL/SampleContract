const Web3Wallet = require('web3-wallet');
const privateKey = '4A4A8C67E9622E991F9783A41E6A84DC458F3D41F31D522BCAE6CE5556C3B8BF';
const url = 'http://localhost:9545';
const contractaddr = '0x345ca3e014aaf5dca488057592ee47305d9b3e10';
const sampleabi = require('../build/contracts/sample');

const wallet = privateKey && Web3Wallet.wallet.fromPrivateKey(privateKey);
const web3 = Web3Wallet.create(wallet, url);
const sampleCore = web3.eth.loadContract(sampleabi.abi, contractaddr);

(async function(){
    let id = 1;
    await sampleCore.setId(id);
    console.log((await sampleCore.getId()).toString());

})().catch(console.error);