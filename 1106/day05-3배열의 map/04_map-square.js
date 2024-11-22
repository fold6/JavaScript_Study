"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var range_1 = require("./range");
var squres = (0, range_1.range)(1, 5 + 1).map(function (val) { return val * val; });
// [1*1 2*2 3*3 4*4 5*5]
console.log(squres);
