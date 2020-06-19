const didOpsService = require('../service/DidOpsService');
const logger = require('../constants/logger');

const didOpsController = {
    createDid : async (request,response) =>{ 
        logger.info('in createDid of controller');
        let responseData = didOpsService.createDid();
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

    query : async () => {
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
    }

} 

module.exports = didOpsController;