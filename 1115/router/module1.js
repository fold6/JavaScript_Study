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
  app.post("/joinMember:userid", (req, res) => {
    const result = {};
    const userid = req.params.userid;

    //조회
    if (!req.body["password"] || !req.body["name"]) {
      result["success"] = 100; // 100 : 실패
      result["msg"] = "invalid request";
      res.json(result);
      return false;
    }

    //추가
  });

  // http://localhost:3000/updateMember/apple 데이터에 특정데이터 업데이트 하는 라우터
  // http://localhost:3000/deleteMember/berry 데이터 리스트에서 특정데이터 삭제하는 라우터
};
