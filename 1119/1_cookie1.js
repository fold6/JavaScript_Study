const express = require("express");
// npm i cookie-parser
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

app.use(cookieParser()); //app안에 쿠키파서의함수를 내부함수화

app.get("/setCookie", (req, res) => {
  console.log("setCookie호출");
  res.cookie(
    "member",
    {
      id: "apple",
      name: "김사과",
      gender: "female",
    },
    {
      maxAge: 1000 * 60 * 60, //만료시간을 밀리초 단위로 설정
    }
  );
  res.redirect("/showCookie"); //경로지정
});

app.get("/showCookie", (req, res) => {
  console.log("showCookie 호출");
  res.send(req.cookies);
  res.end();
});

app.listen(port, () => {
  console.log(`${port}포트로 서버 실행중...`);
});
