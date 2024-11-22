const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); //파싱
app.use(cookieParser("!@#$%^&*()")); //특수문자를 조합해서 쿠키를 암호화

//127.0.0.1:3000/login
app.get("/login", (req, res) => {
  fs.readFile("login.html", "utf8", (err, data) => {
    if (!err) {
      res.writeHead(200, { "content-type": "text/html" });
      //res.write() 한줄씩
      res.end(data); //한꺼번에 또는 앞에 res.write() 사용이 되면 마침의 의미
    } else {
      console.log(err);
    }
  });
});

app.post("/loginOk", (req, res) => {
  const userid = req.body.userid;
  const userpw = req.body.userpw;
  console.log(userid);
  console.log(userpw);

  //admin / 1234
  if (userid == "admin" && userpw == "1234") {
    const expiresDay = new Date(Date.now() + 1000 * 60 * 60 * 24); //쿠키의 허용시간
    res.cookie("userid", userid, { expires: expiresDay, signed: true }); //쿠키설정
    res.redirect("/welcome"); //로그인성공시 라우터연결
  } else {
    res.redirect("/fail"); //로그인실패시 라우터연결
  }
});

//127.0.0.1:3000/welcome
app.get("/welcome", (req, res) => {
  const cookieUserid = req.signedCookies.userid;
  console.log(cookieUserid);
  if (cookieUserid) {
    fs.readFile("welcome.html", "utf8", (err, data) => {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    });
  } else {
    res.redirect("/login");
  }
});

//127.0.0.1:3000/fail
app.get("/fail", (req, res) => {
  fs.readFile("fail.html", "utf8", (err, data) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(data);
  });
});

//127.0.0.1:3000/logout
app.get("/logout", (req, res) => {
  res.clearCookie("userid");
  res.redirect("/login");
});

app.listen(port, () => {
  console.log(`${port}포트로 서버 실행중`);
});
