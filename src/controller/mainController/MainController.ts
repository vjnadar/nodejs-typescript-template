import express, { Request, Response, NextFunction } from "express";

import { Get, Post, Put, Patch } from "../../decorators/routeBinder/";
import { middleware as Middleware } from "../../decorators/middleware/middleware";
import { logger } from "../../middlewares/logger";
import { controller as Controller } from "../../decorators/controller/controller";

@Controller("/main")
class MainController {
  @Get("/test")
  @Middleware(logger)
  test(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({ message: "Hello world!" });
  }
}
export default MainController;
