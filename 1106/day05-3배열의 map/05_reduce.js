"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var range_1 = require("./range");
//배열요소 1부터 100까지 합
var reduceSum = (0, range_1.range)(1, 100 + 1).reduce(function (result, value) { return result + value; }, 0);
console.log(reduceSum); //5050
// 배열명.reduce(콜백함수, 초기 요소);
// 배열명.reduce((결과: 타입, 요소: 타입)) => {}, 초기 요소);
