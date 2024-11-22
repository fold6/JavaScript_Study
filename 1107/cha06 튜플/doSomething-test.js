"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var doSomething_1 = require("./doSomething");
var _a = (0, doSomething_1.doSomething)(), result = _a[0], errorMassage = _a[1]; //비구조할당
console.log(result, errorMassage); //에러, 에러메시지
