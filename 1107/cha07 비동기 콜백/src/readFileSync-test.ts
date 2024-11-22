import { readFileSync } from "fs";

//Buffer 임시저장공간타입의미
const buffer: Buffer = readFileSync("./package.json");

//buffer임시저장된 파일을 텍스트로 변환
const content: string = buffer.toString();
console.log(content); //출력

readFileSync("."); //함수호출
