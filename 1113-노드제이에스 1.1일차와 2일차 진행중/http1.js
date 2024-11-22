const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(
      '<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>http모듈테스트</title></head><body style="background-color: deepskyblue;"><h2>http모듈테스트</h2><p>처음으로 실행하는 node.js http서버</p></body></html>'
    );
  })
  .listen(3005, () => {
    console.log("서버 실행중...");
  });
