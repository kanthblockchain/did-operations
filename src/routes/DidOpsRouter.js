const didOpsRouter = require('express').Router();
const didOpsController = require('../controller/DidOpsController');

/* did-Operartion api path */
didOpsRouter.route('/create').post(didOpsController.createDid);
didOpsRouter.route('/registerClaimWithDid').post(didOpsController.registerClaimWithDid);
didOpsRouter.route('/generateJWTWithClaim').post(didOpsController.generateJWTWithClaim);

module.exports = didOpsRouter;