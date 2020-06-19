const EthrDID = require('ethr-did');
const resolve = require('did-resolver').default;
const registerResolver = require('ethr-did-resolver').default;
const HttpProvider = require('ethjs-provider-http');
const Web3 = require('web3');
const didJWT = require('did-jwt');
const { SimpleSigner } = require('did-jwt');
const DidUtils  = require('../util/DidUtils');
const logger = require('../constants/logger');
require('dotenv').config();
const infura = process.env.INFURA;
const mnemonic = process.env.MNEMONIC;
const HDWalletProvider = require("truffle-hdwallet-provider");
const provider = new HDWalletProvider( mnemonic, infura );

const didOpsService  = {

     createDid : async () =>{ 
       const keyPair = DidUtils.createDid();
       return {"did": keyPair.address};
    },

    queryAccounts : async () =>{ 
        Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send
        let web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();
        logger.info('accounts is: '+JSON.stringify(accounts));
        return accounts;
    },

    balance : async (address) =>{ 
        Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send
        let web3 = new Web3(provider);
        const accountBalance = await web3.eth.getBalance(address);
        logger.info('accountBalance is: '+accountBalance);
        return accountBalance;
    },

    generateJWTWithClaim : async (did, pvtKey, claims) => {
        Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send
        let web3 = new Web3(provider);
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