const express = require("express");
const app = express();
const port = 3000;

//127.0.0.1:3000
app.use((req, res) => {
  res.writeHead("200", { "content-type": "text/html;charset=utf-8" }); //서버가 응답하는 문서정보를 설정
  res.end("<h2>익스프레스 서버에서 응답하는 메세지입니다</h2>");
});

app.listen(port, () => {
  console.log(`${port} 포트로 서버 실행중....`);
});
