const accountDetailsService = require('../service/AccountDetailsService');
const logger = require('../constants/logger');

const accountDetailsController = {
    query : async (request,response) => {
        const accounts = await accountDetailsService.queryAccounts();
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
        const accounts = await accountDetailsService.balance(request.params.address);
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

module.exports = accountDetailsController;