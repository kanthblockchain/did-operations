const EthrDID = require('ethr-did');
const logger = require('../constants/logger');

const createDid = () => {
    const keyPair = EthrDID.createKeyPair();
    logger.info(`keyPair: ${JSON.stringify(keyPair)}`);    
    return keyPair;
}

const getEthrDidInstance = (web3,didArguments) => {
    logger.info(`didArguments: ${JSON.stringify(didArguments)}`)
    const ethrDid = new EthrDID({
        provider: web3.currentProvider,
        registry: didArguments.registry,
        address: didArguments.address
        });
    logger.info(`ethrDid: ${JSON.stringify(ethrDid)}`);
    return ethrDid;
}

module.exports = {createDid, getEthrDidInstance};