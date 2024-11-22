"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pureDelete = void 0;
var pureDelete = function (array, cb) { return array.filter(function (val, index) { return cb(val, index) == true; }); };
exports.pureDelete = pureDelete;
//{ name: "Jack" },{ name: "Jane", age: 32 },
