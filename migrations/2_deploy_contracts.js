const sample=artifacts.require('./sample.sol');

module.exports = function(deployer) {
    deployer.then(async () => {
        await deployer.deploy(sample);
    });
};
