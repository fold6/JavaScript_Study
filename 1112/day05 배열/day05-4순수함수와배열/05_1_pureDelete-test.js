"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _05_pureDelete_1 = require("./05_pureDelete");
var mixedArray = [
    //여러가지속성의배열요소들
    [],
    { name: "Jack" },
    { name: "Jane", age: 32 },
    ["description"],
];
//배열을 삭제
var objectsOnly = (0, _05_pureDelete_1.pureDelete)(mixedArray, function (val) {
    return Array.isArray(val);
});
//console.log(mixedArray, objectsOnly);
console.log(objectsOnly);
