const express = require("express");
const bodyParser = require("body-parser");
// npm install body-parser
// post 데이터를 전달받기 위해 사용

const app = express();
const port = 3000;

// http://localhost:3000/?userid=apple&userpw=1111 (전송방식이 get이 아니기 때문에 데이터를 받을 수 없음)
app.use(bodyParser, bodyParser.urlencoded({ extended: "false" })); //분석->파싱
app.use((req, res) => {
  const paramId = req.body.userid;
  const paramPw = req.body.userpw;
  console.log(`paramId:${paramId}, paramPw:${paramPw}`);

  res.writeHead(200, { "content-type": "text/html;charset=utf8" });
  res.write("<h2>익스프레스 서버에서 응답한 메세지입니다.</h2>");
  res.write(`<p>아이디 : ${paramId}</p>`);
  res.write(`<p>비밀번호 : ${paramPw}</p>`);
  res.end();
});

app.listen(port, () => {
  console.log(`${port} 포트로 서버 실행중...`);
});
