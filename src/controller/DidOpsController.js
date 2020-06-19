const didOpsService = require('../service/DidOpsService');
const logger = require('../constants/logger');

const didOpsController = {
    createDid : async (request,response) =>{ 
        let responseData = await didOpsService.createDid();
        let statusCode = 200;
        let jsonData = null;
        logger.info(`response for keyPair: ${responseData}`);
        if (responseData) {
            jsonData = responseData;
        }else{
           statusCode =  500;
        }
         response
            .status(statusCode)
            .json(jsonData);
    },

    registerDid : async (request, response) => {
        const address = request.params.address;
        let responseData = await didOpsService.registerDid(address);
        let statusCode = 200;
        let jsonData = null;
        if (responseData) {
            jsonData = responseData;
        }else{
           statusCode =  500;
        }
         response
            .status(statusCode)
            .json(jsonData);
    },

    addClaimToDid : async (request, response) => {
        const address = request.params.address;
        const body = req.body;
        const did = req.did;
        //TODO encrypted privateKey , to be decrypted 
        const pvtKey = req.pvtKey;
        const claims = body.claims;
        let responseData = await didOpsService.registerDid(did, pvtKey, claims);
        let statusCode = 200;
        let jsonData = null;
        if (responseData) {
            jsonData = responseData;
        }else{
           statusCode =  500;
        }
         response
            .status(statusCode)
            .json(jsonData);
    },

    generateJWTWithClaim : async(request,response) => {
        const address = request.params.address;
        const body = req.body;
        const did = req.did;
        //TODO encrypted privateKey , to be decrypted 
        const pvtKey = req.pvtKey;
        const claims = body.claims;
        let responseData = await didOpsService.generateJWTWithClaim(did, pvtKey, claims);
        let statusCode = 200;
        let jsonData = null;
        if (responseData) {
            jsonData = responseData;
        }else{
           statusCode =  500;
        }
         response
            .status(statusCode)
            .json(jsonData);
    },

    query : async (request,response) => {
        const accounts = await didOpsService.queryAccounts();
        let statusCode = 200;
        let jsonData = null;
        if (accounts) {
            jsonData = accounts;
        }else{
           statusCode =  500;
        }
         response
            .status(statusCode)
            .json(jsonData);
    },

    balance : async (request,response) => {
        const accounts = await didOpsService.balance(request.params.address);
        let statusCode = 200;
        let jsonData = null;
        if (accounts) {
            jsonData = accounts;
        }else{
           statusCode =  500;
        }
         response
            .status(statusCode)
            .json(jsonData);
    }

} 

module.exports = didOpsController;