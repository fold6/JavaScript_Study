import { range } from "./range";

let names: string[] = range(1, 5 + 1).map((val, index) => `[${index}]:${val}`);
console.log(names);
// [ '[0]: 1', '[1]: 2', '[2]: 3', '[3]: 4', '[4]: 5' ]

// 배열을 가공해서 다른 배열을 만들어 내는 메소드
// 배열명.map(콜백함수)
// 배열명.map((요소: 타입, 인덱스?: number) => {})
