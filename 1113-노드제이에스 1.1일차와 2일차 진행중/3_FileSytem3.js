const fs = require("fs"); //파일시스템에 패키지 연결
const data = "안녕 나는 새로운 파일에 들어갈 내용이야";

fs.writeFile("new.txt", data, "utf-8", (err) => {
  if (err) {
    console.log("에러 발생!");
  } else {
    console.log("저장완료 / 비동기");
  }
});

/* fs.writeFileSync("text5.txt", data, "utf-8");
console.log("저장완료 / 동기"); */
