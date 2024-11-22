export const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : []; //1, 10 //삼항연산자입니다
//1 < 10
//range(1, 10) 1 2 3 4 5 6 7 8 9
