import { range } from "./range";

//배열요소 1부터 10까지 곱하기
let reduceSum: number = range(1, 10 + 1).reduce(
  (result: number, value: number) => result * value,
  1
);
console.log(reduceSum); // 3628800

// 배열명.reduce(콜백함수, 초기 요소);
// 배열명.reduce((결과: 타입, 요소: 타입)) => {}, 초기 요소);
