import "reflect-metadata";
import { RequestHandlerDescriptor } from "../../types/decorators/decoratorTypes";

export function routeBinder(method: string) {
  return function(path: string) {
    return function(target: any, key: any, desc: RequestHandlerDescriptor) {
      Reflect.defineMetadata("path", path, target, key);
      Reflect.defineMetadata("method", method, target, key);
    };
  };
}
