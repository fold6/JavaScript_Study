const fs = require("fs"); //파일시스템에 패키지 연결
//fs는 파일을 읽고 쓰는 등 파일 관련 작업을 할 수 있게 해주는 Node.js 기본 제공 모듈임.

//비동기처리 예외처리를 할 필요가 없습니다.
fs.readFile("text1.txt", "utf-8", (err, data) => {
  //err,data 예외처리
  if (err) {
    console.log("에러가발생/비동기");
  } else {
    console.log(data);
  }
});

//동기식
try {
  const text = fs.readFileSync("text1.txt", "utf-8"); // 동기
  console.log(`동기식으로 읽음 : ${text}`);
} catch (e) { //에러발생시 catch를 사용
  console.log("에러발생! / 동기");
}

/* 
비동기 (실무)VS 동기  
[비동기]
파일 읽는 작업 동안 다른 작업을 처리할 수 있음.
콜백 함수로 작업 완료 후 결과를 처리함.
CPU를 효율적으로 사용 가능하지만 코드가 복잡해질 수 있음.
[동기]
파일 읽는 작업이 끝날 때까지 프로그램이 멈춤.
직관적이고 코드가 간단함.
작업 중단으로 인해 다른 작업이 지연될 수 있음

비동기 처리는 효율적이지만 복잡한 상황에서 관리가 필요함.
동기 처리는 간단하지만 대규모 프로그램에서는 성능이 떨어질 수 있음.
초보라면 비동기와 동기의 차이를 이해하는 것이 중요하고, 현실에서는 대부분 비동기 방식을 많이 사용함.


*/