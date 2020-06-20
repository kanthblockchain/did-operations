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
const didRegistryAddress = process.env.DID_REGISTRY_ADDRESS;
const didPubKey= process.env.DID_PUB_KEY;
const didPvtKey= process.env.DID_PVT_KEY;

const didOpsService  = {

     createDidFromNewKeyPair : async () =>{ 
       const keyPair = DidUtils.createDid();
       const ethrDid = new EthrDID({...keyPair, provider});
       logger.info(`ethrDid created -> signer: ${ethrDid.signer}`);
       return { 
                "address": ethrDid.address,
                "privateKey" : keyPair.privateKey,
                "did": ethrDid.did
            };
    },

    createDidFromAddress : async () =>{ 
        const keyPair = {"privateKey": didPvtKey, "address": didPubKey }
        const ethrDid = new EthrDID({...keyPair, provider});
        logger.info(`ethrDid created -> signer: ${ethrDid.signer}`);
        return { 
                 "address": ethrDid.address,
                 "privateKey" : keyPair.privateKey,
                 "did": ethrDid.did
             };
     },
 
    registerDid : async (did, pvtKey, claims) => {



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

};

module.exports = didOpsService;