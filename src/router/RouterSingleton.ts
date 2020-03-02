import express, { Router } from "express";

class RouterSingleton {
  private static routerInstance: Router;
  static getRouterInstance(): Router {
    if (!RouterSingleton.routerInstance) {
      RouterSingleton.routerInstance = Router();
    }
    return RouterSingleton.routerInstance;
  }
}
export default RouterSingleton;
