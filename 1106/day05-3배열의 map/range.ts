export const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : [];
  // 1 < 10   [1, 2, 3, 4, .... 10]
  //배열선언
