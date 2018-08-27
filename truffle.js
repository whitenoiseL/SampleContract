const PrivateKeyProvider = require('truffle-privatekey-provider');
let privateKey = '4A4A8C67E9622E991F9783A41E6A84DC458F3D41F31D522BCAE6CE5556C3B8BF';
let provider = new PrivateKeyProvider(privateKey, "http://localhost:8545");

module.exports = {
    networks: {
        testrpc: {
            provider,
            network_id: "*",
            gas: 4500000, // Gas limit used for deploys
            gasPrice: 10000000000 // 10 gwei
        },
        myprod: {
            provider,
            network_id: '*',
            gas: 4500000, // Gas limit used for deploys
            gasPrice: 10000000000 // 10 gwei
        }
    },
    solc: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    },
    // https://truffle.readthedocs.io/en/beta/advanced/configuration/
    mocha: {
        bail: true
    }
};
