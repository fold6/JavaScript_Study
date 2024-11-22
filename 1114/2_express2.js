const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const router = express.Router();
//app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.urlencoded({ extended: true })); //문서 분석 => 파싱

//라우터생성
// http://localhost:3000/member/login -> post
router.route("/member/login").post((req, res) => {
  console.log("/member/login 호출!");
});

// http://localhost:3000/member/regist -> post
router.route("/member/regist").post((req, res) => {
  console.log("/member/regist 호출!");
});

// http://localhost:3000/member/about -> get
router.route("/member/about").get((req, res) => {
  console.log("/member/about 호출!");
});

app.use("/", router); //router를 경로상 루트로 설정

app.all("*", (req, res) => {
  res.status(404).send("<h2>페이지를 찾을 수 없습니다.</h2>");
});

app.listen(port, () => {
  console.log(`${port} 포트로 서버 실행중....`);
});
