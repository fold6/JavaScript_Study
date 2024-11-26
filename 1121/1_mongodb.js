const express = require("express");
const bodyParser = require("body-parser");
// npm i mongodb
const MongoClient = require("mongodb").MongoClient;
// npm i mongoose
const mongoose = require("mongoose");

const app = express();
const router = express.Router();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

let database; //몽고디비에서 갖고온 데이터베이스 저장공간
let UserSchema;
let UserModel;

// mongodb 연결 함수
function connectDB() {
  // console.log("함수호출");
  // const databaseURL = "mongodb://localhost:27017"; //몽고디비에 접속
  // MongoClient.connect(databaseURL, (err, db) => {
  //   if (!err) {
  //     const tempdb = db.db("fontenddb");
  //     database = tempdb;
  //     console.log("mongo 데이터베이스 연결 성공");
  //   } else {
  //     console.log(err);
  //   }
  // });

  const url = "mongodb://localhost:27017/frontenddb";
  console.log("데이터베이스 연결 시도중 ... ");

  mongoose.connect(url); //실제로 몽고디비 연결 메소드
  database = mongoose.connection;
  database.on("error", console.error.bind(console, "mongoose 연결 실패!"));
  database.on("open", () => {
    console.log("데이터베이스 연결 성공!");
    UserSchema = mongoose.Schema({
      userid: String,
      userpw: String,
      name: String,
      gender: String,
    });
    console.log("UserSchema 생성 완료!");

    UserModel = mongoose.model("members", UserSchema); //컬렉션 구조 설정
    console.log("UserModel이 정의되었습니다.");
  });
}

// 회원가입
// http://localhost:3000/members/regist (post)
router.route("/members/regist").post((req, res) => {
  console.log("/members/regist 호출!");
  const userid = req.body.userid;
  const userpw = req.body.userpw;
  const name = req.body.name;
  const gender = req.body.gender;

  //입력된 정보 확인
  console.log(
    `userid:${userid}, userpw:${userpw}, name:${name}, gender:${gender}`
  );

  //데이터베이스 회원가입에 대한 예외처리
  if (database) {
    joinUser(database, userid, userpw, name, gender, (err, result) => {
      if (!err) {
        if (result) {
          res.writeHead("200", { "content-type": "text/html;charset=utf8" });
          res.write("<h2>회원가입 성공</h2>");
          res.end();
        } else {
          res.writeHead("200", { "content-type": "text/html;charset=utf8" });
          res.write("<h2>회원가입 실패</h2>");
          res.end();
        }
      } else {
        res.writeHead("200", { "content-type": "text/html;charset=utf8" });
        res.write("<h2>서버에러! 회원가입 실패</h2>");
        res.end();
      }
    });
  } else {
    res.writeHead("200", { "content-type": "text/html;charset=utf8" });
    res.write("<h2>데이터베이스 연결실패</h2>");
    res.end();
  }
});

// 로그인
// http://localhost:3000/members/login (post)
router.route("/members/login").post((req, res) => {
  console.log("/members/login 호출");
  const userid = req.body.userid;
  const userpw = req.body.userpw;
  console.log(`userid:${userid}, userpw:${userpw}`);

  if (database) {
    loginMember(database, userid, userpw, (err, result) => {
      if (!err) {
        if (result) {
          console.dir(result); //객체의 속성을 콘솔에 출력하는 데 사용
          const resultUserid = result[0].userid;
          const resultUserpw = result[0].userpw;
          const resultName = result[0].username;
          const resultGender = result[0].gender;

          res.writeHead("200", { "content-type": "text/html;charset=utf8" });
          res.write("<h2>로그인 성공</h2>");
          res.write(`<p>${resultUserid}(${resultName})님 환영합니다.</p>`);
          res.write(`<p>${resultName}은 성별이 ${resultGender}</p>`);
          res.end();
        } else {
          res.writeHead("200", { "content-type": "text/html;charset=utf8" });
          res.write("<h2>로그인 실패</h2>");
          res.write("<p>아이디 또는 비밀번호를 확인하세요.</p>");
          res.end();
        }
      } else {
        res.writeHead(200, { "content-type": "text/html;charset=utf8" });
        res.write("<h2>로그인 실패</h2>");
        res.write("<h2>서버 오류 발생! 로그인에 실패했습니다.</h2>");
        res.end();
      }
    });
  } else {
    res.writeHead("200", { "content-type": "text/html;charset=utf8" });
    res.write("<h2>데이터베이스 연결실패</h2>");
    res.write("<p>mongodb 데이터베이스에 연결하지 못했습니다.</p>");
    res.end();
  }
});

// 정보 수정
// http://localhost:3000/members/edit (post)
router.route("/members/edit").post(() => {
  console.log("/member/edit 호출!");

  const userid = req.body.userid;
  const userpw = req.body.userpw;
  const name = req.body.name;
  const gender = req.body.gender;
  console.log(
    `userid:${userid}, userpw:${userpw}, name:${name},gender:${gender}`
  );

  if (database) {
    editMember(database, userid, userpw, name, gender, (err, result) => {
      if (!err) {
        if (result.modifiedCount > 0) {
          res.writeHead("200", { "content-type": "text/html;charset=utf8" });
          res.write("<h2>회원정보 수정 성공</h2>");
          res.write("<p>회원정보 수정에 성공했습니다.</p>");
          res.end();
        } else {
          res.writeHead("200", { "content-type": "text/html;charset=utf8" });
          res.write("<h2>회원정보 수정 실패</h2>");
          res.write("<p>정보 수정에 실패했습니다.</p>");
          res.end();
        }
      } else {
        res.writeHead("200", { "content-type": "text/html;charset=utf8" });
        res.write("<h2>회원정보 수정 실패</h2>");
        res.write("<p>서버 오류 발생! 정보 수정에 실패했습니다.</p>");
        res.end();
      }
    });
  } else {
    res.writeHead("200", { "content-type": "text/html;charset=utf8" });
    res.write("<h2>데이터베이스 연결실패</h2>");
    res.write("<p>mongodb 데이터베이스에 연결하지 못했습니다.</p>");
    res.end();
  }
});

// 회원 삭제
// http://localhost:3000/member/delete (post)

// --------------------------------------------------------------------------- CALLBACK함수
const joinUser = function (database, userid, userpw, name, gender, callback) {
  console.log("joinMember 호출!");
  const members = database.collection("members"); //데이터베이스에 컬렉션 지정
  members.insertMany(
    [{ userid: userid, userpw: userpw, username: name, gender: gender }],
    (err, result) => {
      if (!err) {
        //result.insertedCount는 insertMany()가 한번 수행시 카운트 생성되는 메소드
        if (result.insertedCount > 0) {
          console.log(`사용자 document ${result.insertedCount}명 추가 되었음!`);
        } else {
          console.log(`사용자 document 추가되지 않음!`);
        }
        callback(null, result);
        return;
      } else {
        console.log(err);
        callback(err, none);
      }
    }
  );
};

const loginMember = function (database, userid, userpw, callback) {
  console.log("loginMember 호출!");
  const members = database.collection("members"); //데이터베이스에 컬렉션 지정

  members.find({ userid: userid, userpw: userpw }).toArray((err, result) => {
    if (!err) {
      if (result.length > 0) {
        console.log("사용자를 찾았습니다.");
        callback(null, result);
      } else {
        console.log("일치하는 사용자가 없습니다.");
        callback(null, null);
      }
      return;
    } else {
      console.log(err);
      callback(err, null);
    }
  });
};

app.use("/", router);

app.listen(port, () => {
  console.log(`${port}포트로 서버 동작중...`);
  connectDB(); //노드 실행시 몽고디비연결함수 호출
});
