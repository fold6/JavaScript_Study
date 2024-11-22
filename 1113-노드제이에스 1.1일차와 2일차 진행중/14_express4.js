const express = require("express");
const app = express();
const port = 3000;

//127.0.0.1:3000
app.use((req, res) => {
  console.log("첫번째 미들웨어 실행");

  console.dir(req.header);
  //dir는 객체의 속성을 콘솔에 출력하는데 사용
  const userAgent = req.header("User-Agent");
  console.log(userAgent);

  // http://localhost:3000/?userid=apple
  const paramName = req.query.userid; // get방식의 변수값을 가져옴
  console.log(paramName); //aapple

  res.writeHead(200, { "content-type": "text/html;charset=utf8" });
  res.write("<h2>익스프레스 서버에서 응답한 메세지입니다.</h2>");
  res.write(`<p>User-Agent : ${userAgent}</p>`);
  res.write(`<p>paramName : ${paramName}</p>`);
  res.end();
  0;
});

app.listen(port, () => {
  console.log(`${port} 포트로 서버 실행중....`);
});
