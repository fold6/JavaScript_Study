import { readFileSync, readFile } from "fs";

// package.json 파일을 동기 방식으로 읽는 예
console.log("01read package.json using synchronous api...");
const buffer: Buffer = readFileSync("./package.json");
console.log(buffer.toString());

// package.json 파일을 비동기 방식으로 읽는 예
readFile("./package.json", (error: Error, buffer: Buffer) => {
  console.log("02read package.json using asynchronous api...");
  console.log(buffer.toString());
});

// Promise 와 async/await 구문을 사용한 예
const readFilePromise = (filename: string): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    readFile(filename, (error: Error, buffer: Buffer) => {
      //예외처리
      if (error) reject(error);
      else resolve(buffer.toString()); //package.json 문자화해서 리턴
    });
  });

//비동기식 함수를 선언
(async () => {
  const content = await readFilePromise("./package.json"); //함수호출
  console.log("03read package.json using Promise and async/await...");
  console.log(content);
})();
