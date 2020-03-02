import { RequestHandler } from "express";

export function middleware(middleware: RequestHandler) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    let middlewares = Reflect.getMetadata("middeware", target, key) || [];
    Reflect.defineMetadata(
      "middleware",
      [...middlewares, middleware],
      target,
      key
    );
  };
}
