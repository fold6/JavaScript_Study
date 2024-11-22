const { json } = require("body-parser");

module.exports = (app, fs) => {
  // http://localhost:3000  특정 포트를 연결
  app.get("/", (req, res) => {
    res.render("index.ejs", { length: 10 });
  });

  // http://localhost:3000/about 특정파일을 연결하는 라우터
  app.get("/about", (req, res) => {
    res.render("about.html");
  });

  // http://localhost:3000/list 데이터를 갖고는 라우터
  app.get("/list", (req, res) => {
    fs.readFile(__dirname + "/../data/member.json", (err, data) => {
      if (!err) {
        console.log(data);
        res.writeHead(200, { "content-type": "text/json;charset=utf-8" });
        res.end(data);
      } else {
        console.log(err);
      }
    });
  });

  // http://localhost:3000/getMember/apple 데이터 리스트에서 특정 데이터 추출 하는 라우터
  app.get("/getMember/:userid", (req, res) => {
    fs.readFile(__dirname + "/../data/member.json", "utf8", (err, data) => {
      if (!err) {
        const member = JSON.parse(data);
        res.json(member[req.params.userid]);
        //라우터에 입력된 객체명을 조건으로 추출한다 어디서 지정한 json파일에서.
      } else {
        console.log(err);
      }
    });
  });

  //http://localhost:3000/joinMember/apple 데이터 리스트에 특정 데이터 추가 하는 라우터
  app.post("/joinMember/:userid", (req, res) => {
    const result = {}; //메시지를 저장하는 객체선언
    const userid = req.params.userid;

    //조회-> password나 name에 데이터가 없을때
    if (!req.body["password"] || !req.body["name"]) {
      result["success"] = 100; // 100 : 실패
      result["msg"] = "빈칸에 데이터를 입력하세요";
      res.json(result);
      return false;
    }

    //추가
    fs.readFile(__dirname + "/../data/member.json", "utf8", (err, data) => {
      if (!err) {
        const member = JSON.parse(data); //JSON포맷으로 되어있는 문자열을 json객체 변환
        member[userid] = req.body;
        fs.writeFile(
          __dirname + "/../data/member.json",
          JSON.stringify(member, null, "\t"), //JSON 객체를 JSON 포맷의 문자열로 변환
          "utf8",
          (err, data) => {
            if (!err) {
              result["success"] = 200;
              result["msg"] = "success";
              res.json(result);
            } else {
              console.log(err);
            }
          }
        );
      } else {
        console.log(err);
      }
    });
  });

  // http://localhost:3000/updateMember/apple 데이터에 특정데이터 업데이트 하는 라우터
  app.put("/updateMember/:userid", (req, res) => {
    const result = {};
    const userid = req.params.userid;

    //조회-> password나 name에 데이터가 없을때
    if (!req.body["password"] || !req.body["name"]) {
      result["success"] = 100; // 100 : 실패
      result["msg"] = "빈칸에 데이터를 입력하세요";
      res.json(result);
      return false;
    }

    fs.readFile(__dirname + "/../data/member.json", "utf8", (err, data) => {
      if (!err) {
        const member = JSON.parse(data);
        member[userid] = req.body;
        fs.writeFile(
          __dirname + "/../data/member.json",
          JSON.stringify(member, null, "\t"),
          "utf8",
          (err, data) => {
            if (!err) {
              result["success"] = 200;
              result["msg"] = "수정되었습니다";
              res.json(result);
            } else {
              console.log(err);
            }
          }
        );
      } else {
        console.log(err);
      }
    });
  });

  // http://localhost:3000/deleteMember/berry 데이터 리스트에서 특정데이터 삭제하는 라우터
  app.delete("/deleteMember/:userid", (req, res) => {
    const result = {};
    fs.readFile(__dirname + "/../data/member.json", "utf8", (err, data) => {
      const member = JSON.parse(data);
      if (!member[req.params.userid]) {
        //요청한 아이디가 없다면 참이죠
        result["success"] = 102; //서버가 요청을 수신하고 처리 중이지만, 아직 최종 응답을 제공할 수 없음을 의미
        result["msg"] = "not found";
        res.json(result);
        return false;
      }

      delete member[req.params.userid];
      fs.writeFile(
        __dirname + "/../data/member.json",
        JSON.stringify(member, null, "\t"),
        "utf8",
        (err, data) => {
          result["success"] = 200;
          result["msg"] = "success";
          res.json(result);
        }
      );
    });
  });
};
