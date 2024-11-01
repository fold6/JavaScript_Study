"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _04_split_1 = require("./04_split");
console.log((0, _04_split_1.split)("hello"), // [ 'h', 'e', 'l', 'l', 'o' ]
(0, _04_split_1.split)("h_e_l_l_o", "_") // [ 'h', 'e', 'l', 'l', 'o' ]
);
//어떤프로그래밍 언어는 문자열을 문자들의 배열로 간주한다
//그래서 타입스크립트는 문자타입이 없고 문자열의 내용 또한 변경할 수 없다
//이렇한 특징에 문자열을 가공하려면 문자열을 배열로 전환해야 한다
//문자열을 배열로 전환할때는 String클래스의 split메서드를 사용
//문자열을 쪼개는 기준인 구분자를 입력받아 문자열 string[]배열로 만들어준다
