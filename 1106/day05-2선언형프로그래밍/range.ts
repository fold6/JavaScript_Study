export const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : []; //1, 10 //
  
//range(1, 10(-1)) 1->시작하는 값 10-> 범위 => [1, 2, 3, 4, ~  9]
//range(1, 10(-1)+) 1->시작하는 값 10-> 범위 => [1, 2, 3, 4, ~  10]
