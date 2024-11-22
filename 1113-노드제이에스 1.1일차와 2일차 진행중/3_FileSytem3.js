const fs = require("fs"); //파일시스템에 패키지 연결
const data = "Hello Node.js !!";

fs.writeFile("text3.txt", data, "utf-8", (err) => {
  if (err) {
    console.log("에러 발생!");
  } else {
    console.log("저장완료 / 비동기");
  }
});

fs.writeFileSync("text4.txt", data, "utf-8");
console.log("저장완료 / 동기");
