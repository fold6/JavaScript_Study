const express = require("express");
const bodyParser = require("body-parser");
// npm i serve-static 이미지나 리소스, 페이지외를 가상디렉토리를 설정
const static = require("serve-static");
const path = require("path"); // url관리하는 모듈
// npm i morgan 라우터나 사이트에 접속했을때 로그를 남기는 모듈
const logger = require("morgan");
// npm i multer 파일 업로드를 위한 익스프레스에 적용하는 미들웨어
const multer = require("multer");

const port = 3000;
const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: true }));

//경로 설정
app.use("/public", static(path.join(__dirname, "public")));
app.use("/uploads", static(path.join(__dirname, "uploads")));
app.use(logger("dev")); // dev, short, common, bombined 개발자모드(여러가자 로그가 보임)

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads");
  }, //저장폴더설정
  filename: (req, file, callback) => {
    const extension = path.extname(file.originalname); //test.jpg
    //                확장명을 추출 /file.originalname 사용자가 올린 파일이름
    const basename = path.basename(file.originalname, extension); //test, jpg
    callback(null, basename + "_" + Date.now() + extension); //tset_1621561651.jpg
  }, //저장할파일이름 설정
});

const upload = multer({
  storage: storage,
  limit: {
    files: 1,
    fileSize: 1024 * 1024 * 100, //100메가
  },
});

router.route("/write").post(upload.array("photo", 1), (req, res) => {
  console.log("/write 호출!");
  try {
    // 파일을 전송하고 처리할때 어떤 문제가 발생할지 알수없으므로 사용
    const title = req.body.title;
    const content = req.body.content;
    const files = req.files;
    console.dir(req.files[0]); //서버에 파일이 전달 되었는지 확인
    const originalname = files[0].originalname;
    const filename = files[0].filename; //파일이름
    const mimetype = files[0].mimetype; //파일타입
    const size = files[0].size;

    console.log(
      `파일정보 : 원본파일명:${originalname}, 파일이름:${filename}, mimetype:${mimetype}, 파일크기:${size}`
    );

    res.writeHead("200", { "content-type": "text/html;charset=utf8" });
    res.write("<h2>파일 업로드 성공</h2>");
    res.write("<hr>");
    res.write(`<p>제목 : ${title}</p>`);
    res.write(`<p>내용 : ${content}</p>`);
    res.write(`<p>원본파일명 : ${originalname}</p>`);
    res.write(`<p>파일명 : ${filename}</p>`);
    res.write(`<p>mimetype : ${mimetype}</p>`);
    res.write(`<p>파일크기 : ${size}</p>`);
    res.write(`<p><img src='/uploads/${filename}' width='200'></p>`);
    res.end();
  } catch (e) {
    console.log(e);
  }
});

app.use("/", router); //라우터 등록

app.listen(port, () => {
  // 사용자 기다리게 메시지 전달
  console.log(`${port}포트로 서버 동작중...`);
});
