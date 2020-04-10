import { MongoClient as Client,Db } from "mongodb";

const mongoDb = require("mongodb");

const MongoClient = mongoDb.MongoClient;
let _db:Db;

const connectToDb = (listenCallBack:()=>void) => {
  MongoClient.connect(process.env.MONGO_HOST, { useUnifiedTopology: true })
    .then((client:Client) => {
      console.log("Connected!");
      _db = client.db();
      listenCallBack();
    })
    .catch((err:Error) => {
      throw err;
    });
};

const getDbAccess = () => {
  if (_db) {
    return _db;
  } else {
    throw new Error("Cannot access the database!");
  }
};

exports.connectToDb = connectToDb;
exports.getDbAccess = getDbAccess;
