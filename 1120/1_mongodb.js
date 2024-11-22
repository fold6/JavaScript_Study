const express = require("express");
const bodyParser = require("body-parser");
// npm i mongodb
const MongoClient = require("mongodb").MongoClient;

const app = express();
const router = express.Router();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

let database; //몽고디비에서 갖고온 데이터베이스 저장공간
// mongodb 연결 함수
function connectDB() {
  console.log("함수호출");
  const databaseURL = "mongodb://localhost:27017"; //몽고디비에 접속
  MongoClient.connect(databaseURL, (err, db) => {
    if (!err) {
      const tempdb = db.db("fontenddb");
      database = tempdb;
      console.log("mongo 데이터베이스 연결 성공");
    } else {
      console.log(err);
    }
  });
}

// 회원가입
// http://localhost:3000/member/regist (post)

// 로그인
// http://localhost:3000/member/login (post)

// 정보 수정
// http://localhost:3000/member/edit (post)

// 회원 삭제
// http://localhost:3000/member/delete (post)

// --------------------------------------------------------------------------- CALLBACK함수

app.use("/", router);

app.listen(port, () => {
  console.log(`${port}포트로 서버 동작중...`);
  connectDB(); //노드 실행시 몽고디비연결함수 호출
});
