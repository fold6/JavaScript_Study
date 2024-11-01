"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
var init = function (callback) {
    console.log("default initialization finished.");
    callback();
    console.log("all initialization finished.");
};
exports.init = init;
