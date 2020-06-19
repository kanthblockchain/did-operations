const HttpProvider = require('ethjs-provider-http');
const Web3 = require('web3');
const DidUtils  = require('../util/DidUtils');
const logger = require('../constants/logger');
require('dotenv').config();
const infura = process.env.INFURA;
const mnemonic = process.env.MNEMONIC;
const HDWalletProvider = require("truffle-hdwallet-provider");
const provider = new HDWalletProvider( mnemonic, infura );

const accountDetailsService  = {

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
    }
};

module.exports = accountDetailsService;