"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var range_1 = require("./range");
//배열요소 1부터 10까지 곱하기
var reduceSum = (0, range_1.range)(1, 10 + 1).reduce(function (result, value) { return result * value; }, 1);
console.log(reduceSum); // 3628800
// 배열명.reduce(콜백함수, 초기 요소);
// 배열명.reduce((결과: 타입, 요소: 타입)) => {}, 초기 요소);
