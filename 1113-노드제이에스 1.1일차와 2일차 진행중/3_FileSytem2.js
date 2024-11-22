const fs = require("fs"); //파일시스템에 패키지 연결

//비동기처리 예외처리를 할 필요가 없습니다.
fs.readFile("text1.txt", "utf-8", (err, data) => {
  //err,data 예외처리
  if (err) {
    console.log("에러가발생/비동기");
  } else {
    console.log(data);
  }
});

//동기식
try {
  const text = fs.readFileSync("text1.txt", "utf-8"); // 동기
  console.log(`동기식으로 읽음 : ${text}`);
} catch (e) {
  console.log("에러발생! / 동기");
}
