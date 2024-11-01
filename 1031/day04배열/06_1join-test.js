"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _06_1join_1 = require("./06_1join");
console.log((0, _06_1join_1.join)(["h", "e", "l", "l", "o"]), // hello
(0, _06_1join_1.join)(["h", "e", "l", "l", "o"], "_") // h_e_l_l_o
);
//배열을 string타입으로 변환할려면 join메소드를 사용
//join(구분자:string):string
