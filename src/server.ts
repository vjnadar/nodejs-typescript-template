import express, { Request, Response, NextFunction } from "express";
import "./controller/mainController/MainController";
import Router from "./router/RouterSingleton";
import bodyParser from "body-parser";
const connectToMongoDb = require("./databaseConnection/connectToDb.js").connectToDb;
require('dotenv').config()
const server = express();
server.use(bodyParser.json());
server.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTION,PUT,POST,GET,PATCH");
  next();
});
server.use(Router.getRouterInstance());
let _server;
connectToMongoDb(() => {
  _server = server.listen(8080);
  console.log("Listening");
});

module.exports = _server;
