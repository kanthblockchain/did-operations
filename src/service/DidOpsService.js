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
        logger.info('in createDid of service');
        
        // network config
        Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send
        let web3 = new Web3.providers.HttpProvider('http://localhost:7545');
        const accounts = await web3.eth.getAccounts();
        const account_0 = await accounts[1];
        const address = account_0;
        const registry = '0xd3a1647be4fe9fab57ba0c4a8215cb8a927e5e16';
       return DidUtils.createDid(web3,{"registry": registry,"address": address});
    },

    queryAccounts : async () =>{ 
        logger.info('in query of service');
        Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send
        let web3 = new Web3.providers.HttpProvider('http://localhost:7545');
        logger.info('web3 is: '+web3)
        const accounts = await web3.eth.getAccounts();
        return accounts;
    }
};

module.exports = didOpsService;