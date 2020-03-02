"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var RouterSingleton = /** @class */ (function () {
    function RouterSingleton() {
    }
    RouterSingleton.getRouterInstance = function () {
        if (!RouterSingleton.routerInstance) {
            RouterSingleton.routerInstance = express_1.Router();
        }
        return RouterSingleton.routerInstance;
    };
    return RouterSingleton;
}());
exports.default = RouterSingleton;
