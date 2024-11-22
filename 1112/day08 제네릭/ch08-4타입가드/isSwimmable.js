"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSwimmable = void 0;
var BirdAndFish_1 = require("./BirdAndFish");
var isSwimmable = function (o) {
    return o instanceof BirdAndFish_1.Fish;
};
exports.isSwimmable = isSwimmable;
