const didOpsRouter = require('express').Router();
const didOpsController = require('../controller/DidOpsController');

/* did-Operartion api path */
didOpsRouter.route('/did/create').post(didOpsController.createDid);
didOpsRouter.route('/did/query').get(didOpsController.query);
didOpsRouter.route('/did/registerDid').post(didOpsController.registerDid);
didOpsRouter.route('/did/generateJWTWithClaim').post(didOpsController.generateJWTWithClaim);

module.exports = didOpsRouter;