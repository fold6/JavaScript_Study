//1부터 100까지 홀수 더하는 값
let sum2 = 0;
for (let val = 1; val <= 100; val += 2) sum2 += val;
console.log(sum2); //2550

// 반복 흐름:
// val: 1, 3, 5, 7, ..., 99
// 짝수만 더하려면  시작 값을 2로 바꾸고, val을 2씩 증가시키면 됨: