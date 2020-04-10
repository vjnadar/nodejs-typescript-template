import express, { Request, Response, NextFunction } from "express";

import { Get, Post, Put, Patch } from "../../decorators/routeBinder/";
import { middleware as Middleware } from "../../decorators/middleware/middleware";
import { logger } from "../../middlewares/logger";
import { controller as Controller } from "../../decorators/controller/controller";
const getDbAccess = require("../../databaseConnection/connectToDb").getDbAccess;
const ObjectId = require("mongodb").ObjectID;

@Controller("/main")
class MainController {
  @Get("/test")
  @Middleware(logger)
  async test(req: Request, res: Response, next: NextFunction) {
    try {
      let db = getDbAccess();
      const _id = ObjectId("5e623edad270ff238c6bf731");
      let result = await db.collection("test").findOne({ _id });
      res.status(200).json({ message: "Hello world!", result });
    } catch (error) {}
  }
  @Post("/test")
  @Middleware(logger)
  async testPost(req: Request, res: Response, next: NextFunction) {
    try {
      let db = getDbAccess();
      const _id = ObjectId("5e623edad270ff238c6bf731");
      let r = await db.collection("test").insertOne({ testMessage: "Test1" });
      res.status(200).json({ message: "Hello world!", result: r.result });
    } catch (error) {}
  }
}
export default MainController;
