const accountRouter = require('express').Router();
const accountDetailsController = require('../controller/AccountDetailsController');

accountRouter.route('/query').get(accountDetailsController.query);
accountRouter.route('/balance/:address').get(accountDetailsController.balance);

module.exports = accountRouter;