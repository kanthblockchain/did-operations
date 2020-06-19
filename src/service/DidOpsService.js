const EthrDID = require('ethr-did');
const resolve = require('did-resolver').default;
const registerResolver = require('ethr-did-resolver').default;
const HttpProvider = require('ethjs-provider-http');
const Web3 = require('web3');
const didJWT = require('did-jwt');
const { SimpleSigner } = require('did-jwt');
const DidUtils  = require('../util/DidUtils');
const logger = require('../constants/logger');

const didOpsService  = {

     createDid : async () =>{ 
       const keyPair = DidUtils.createDid();
       return {"did": keyPair.address};
    },

    queryAccounts : async () =>{ 
        Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send
        let web3 = new Web3('http://127.0.0.1:8545');
        logger.info('web3 is: '+web3)
        const accounts = await web3.eth.getAccounts();
        return accounts;
    },

    generateJWTWithClaim : async (did, pvtKey, claims) => {
        Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send
        let web3 = new Web3('http://127.0.0.1:8545');
        const accounts = await web3.eth.getAccounts();
        const ethrDidInstance = DidUtils.getEthrDidInstance(web3, {"registry": ""  , "address": accounts[0]});
        const jwt  = await ethrDidInstance.signJWT({claims: claims});
        logger.info(`jwt of signed claim: ${JSON.stringify(jwt)}`);
        return jwt;
    },

    registerDid : async (did, pvtKey, claims) => {


    }
};

module.exports = didOpsService;