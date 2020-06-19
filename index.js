'use strict';

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended: true}),)
    .use(bodyParser.json());

app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

app.use(express.static('doc'));
require('dotenv').config();

app.get('/docs', (req, res) => {
    res.sendFile(rootPath.join(__dirname, 'html/doc.html'));
});
const logger = require('./src/constants/logger');

const cors = require('cors');
const didOpsRoutes = require('./src/routes/DidOpsRouter');
const accountRoutes = require('./src/routes/AccountRouter');

    app
    .use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', '*');

    // Request headers you wish to allow
    res.setHeader('access-control-allow-headers', '*');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);
    logger.info('received request');
    // Pass to next layer of middleware
    next();
}).use("/did", didOpsRoutes).use("/account",accountRoutes)
.use(function (req, res) {
    return res.status(404).send({message: 'Route' + req.url + ' Not found.'});
})
.use(cors);

const port =  process.env.PORT;
var server = app.listen(port, () => logger.info(`DID-Ops-App started and listening on port ${port}`));
app.on( 'close', () => logger.info(`Closing on port ${port}`) );
module.exports = app;
