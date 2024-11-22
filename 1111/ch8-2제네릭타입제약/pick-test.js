"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pick_1 = require("./pick");
var obj = { name: "Jane", age: 22, city: "Seoul", country: "Korea" };
console.log((0, pick_1.pick)(obj, ["city", "age"]));
// { name: 'Jane', age: 22 }
