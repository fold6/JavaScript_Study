export const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : []; //1, 10 //삼항연산자입니다
//1 < 10
//range(1, 10) 1 2 3 4 5 6 7 8 9
//
// from이 to보다 작으면 참(true)
// 그렇지 않으면 거짓(false)
//거짓일 때 반환 값: [] 
// from이 to보다 크거나 같아지면 빈 배열을 반환함.