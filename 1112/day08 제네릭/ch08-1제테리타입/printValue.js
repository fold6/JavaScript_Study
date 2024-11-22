"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Valueable = exports.printValue = void 0;
var Valuable_1 = require("./Valuable");
Object.defineProperty(exports, "Valueable", { enumerable: true, get: function () { return Valuable_1.Valueable; } });
var printValue = function (o) { return console.log(o.value); };
exports.printValue = printValue;
