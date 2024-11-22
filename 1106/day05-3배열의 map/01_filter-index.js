"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//filter 배열을 특정 조건으로 걸러주는 배열요소 다시 재할당
var range_1 = require("./range");
var array = (0, range_1.range)(1, 10 + 1); //[1, 2, 3, ...10]//배열선언  5
var helf = array.length / 2; //5
//array.filter((배열요소)=>{조건식});
//홀수배열
var belowHalf = array.filter(function (v, index) { return index < helf; }); //[ 1 2 3 4 5 ]
//짝수배열
var overHalf = array.filter(function (v, index) { return index >= helf; }); //[ 6 7 8 9 10 ]
console.log(array);
console.log(belowHalf, overHalf); // [ 1, 3, 5, 7, 9 ] [ 2, 4, 6, 8, 10 ]
