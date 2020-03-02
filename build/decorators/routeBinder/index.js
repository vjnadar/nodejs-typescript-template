"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routeBinder_1 = require("./routeBinder");
var httpRequestStrings_1 = require("../../enums/httpRequestStrings/httpRequestStrings");
exports.Get = routeBinder_1.routeBinder(httpRequestStrings_1.httpRequestStrings.GET);
exports.Post = routeBinder_1.routeBinder(httpRequestStrings_1.httpRequestStrings.POST);
exports.Put = routeBinder_1.routeBinder(httpRequestStrings_1.httpRequestStrings.PUT);
exports.Patch = routeBinder_1.routeBinder(httpRequestStrings_1.httpRequestStrings.PATCH);
