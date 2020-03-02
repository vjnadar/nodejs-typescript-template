"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var routeBinder_1 = require("../../decorators/routeBinder/");
var middleware_1 = require("../../decorators/middleware/middleware");
var logger_1 = require("../../middlewares/logger");
var controller_1 = require("../../decorators/controller/controller");
var MainController = /** @class */ (function () {
    function MainController() {
    }
    MainController.prototype.test = function (req, res, next) {
        res.status(200).json({ message: "Hello world!" });
    };
    __decorate([
        routeBinder_1.Get("/test"),
        middleware_1.middleware(logger_1.logger),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], MainController.prototype, "test", null);
    MainController = __decorate([
        controller_1.controller("/main")
    ], MainController);
    return MainController;
}());
exports.default = MainController;
