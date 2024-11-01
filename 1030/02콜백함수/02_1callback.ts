import { init } from "./02_init";
init(() => {
  console.log("custom initialization finished");
});

//콜백함수란 매개변수 형태로 동작하는 함수
//init() 함수호출 몸통을 함수를 호출
//console.log("default initialization finished.");실행1
//호출돤 함수에서 callback(); 호출에 의해
//() => {console.log("custom initialization finished");}//실행2
//console.log("all initialization finished.");//실행3
