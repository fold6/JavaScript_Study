"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _11_arrayLength_1 = require("./11_arrayLength");
var numArray = [1, 2, 3];
var strArray = ["Hello", "World"];
var personArray = [{ name: "Jack" }, { name: "Jane", age: 32 }];
console.log((0, _11_arrayLength_1.arrayLength)(numArray), //3
(0, _11_arrayLength_1.arrayLength)(strArray), //2
(0, _11_arrayLength_1.arrayLength)(personArray), //2
(0, _11_arrayLength_1.isEmpty)([]), //true
(0, _11_arrayLength_1.isEmpty)([1]) //false
);
