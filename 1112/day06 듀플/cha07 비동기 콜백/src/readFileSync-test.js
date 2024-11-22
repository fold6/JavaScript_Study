"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
//Buffer 임시저장공간타입의미
var buffer = (0, fs_1.readFileSync)("./package.json");
//buffer임시저장된 파일을 텍스트로 변환
var content = buffer.toString();
console.log(content); //출력
(0, fs_1.readFileSync)("."); //함수호출
