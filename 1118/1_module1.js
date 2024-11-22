const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.engine("html", require("ejs").renderFile); //view
app.use(express.urlencoded({ extended: true })); //body 분석=> 파싱

const module1 = require("./router/module1")(app, fs); //router/module1에 연결

app.listen(port, () => {
  console.log(`${port}번 포트로 서버실행중....`);
});
