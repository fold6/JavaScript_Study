"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFlyable = void 0;
var BirdAndFish_1 = require("./BirdAndFish");
var isFlyable = function (o) {
    return o instanceof BirdAndFish_1.Bird;
};
exports.isFlyable = isFlyable;
