"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("./controller/mainController/MainController");
var RouterSingleton_1 = __importDefault(require("./router/RouterSingleton"));
var body_parser_1 = __importDefault(require("body-parser"));
var connectToMongoDb = require("./databaseConnection/connectToDb.js").connectToDb;
require('dotenv').config();
var server = express_1.default();
server.use(body_parser_1.default.json());
server.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTION,PUT,POST,GET,PATCH");
    next();
});
server.use(RouterSingleton_1.default.getRouterInstance());
var _server;
connectToMongoDb(function () {
    _server = server.listen(8080);
    console.log("Listening");
});
module.exports = _server;
