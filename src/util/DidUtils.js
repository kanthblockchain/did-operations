const EthrDID = require('ethr-did');

const createDid = (web3, didArguments) => {
    const ethrDid = new EthrDID({
        provider: web3.currentProvider,
        registry: didArguments.registry,
        address: didArguments.address
        });

    return ethdDid;
}

module.exports = {createDid};