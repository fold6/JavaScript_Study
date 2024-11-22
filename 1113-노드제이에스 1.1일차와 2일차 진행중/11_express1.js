const express = require("express");
const app = express();
const port = 3000;

//127.0.0.1:3000
app.get("/", (req, res) => {
  res.send("익스프레스 서버 테스트");
});

app.listen(port, () => {
  console.log(`${port} 포트로 서버 실행중....`);
});
