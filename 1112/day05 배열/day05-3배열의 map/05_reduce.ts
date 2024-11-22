import { range } from "./range";

//배열요소 1부터 100까지 합
let reduceSum: number = range(1, 100 + 1).reduce(
  (result: number, value: number) => result + value,
  0
);
console.log(reduceSum); //5050

// 배열명.reduce(콜백함수, 초기 요소);
// 배열명.reduce((결과: 타입, 요소: 타입)) => {}, 초기 요소);
