import "reflect-metadata";
import Router from "../../router/RouterSingleton";
import { httpRequestStrings as httpRequestTypes } from "../../enums/httpRequestStrings/httpRequestStrings";

export function controller(routePrefix: string) {
  return function(target: any) {
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path: string = Reflect.getMetadata("path", target.prototype, key);
      const method: httpRequestTypes = Reflect.getMetadata(
        "method",
        target.prototype,
        key
      );
      const middlewares =
        Reflect.getMetadata("middleware", target.prototype, key) || [];
      if (path && method) {
        Router.getRouterInstance()[method](
          `${routePrefix}${path}`,
          [...middlewares],
          routeHandler
        );
      }
    }
  };
}
