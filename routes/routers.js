var express = require('express');
const filedbo = require('./filedbo');
var routers = {};
routers.getRandomFileRouter = express.Router();
routers.getRandomFileRouter.get('/', function(req, res, next) {
    var s = filedbo.getRandomFile();
    res.send({ ret: s });
});

module.exports = routers;