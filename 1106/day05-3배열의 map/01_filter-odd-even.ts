//filter 배열을 특정 조건으로 걸러주는 배열요소 다시 재할당
import { range } from "./range";

const array: number[] = range(1, 10 + 1); //[1, 2, 3, ...10]//배열선언

//array.filter((배열요소)=>{조건식});
//홀수배열
let odds: number[] = array.filter((value) => value % 2 != 0); //[ 1, 3, 5, 7, 9 ]

//짝수배열
let evens: number[] = array.filter((value) => value % 2 == 0); //[ 2, 4, 6, 8, 10 ]
console.log(array);
console.log(odds, evens); // [ 1, 3, 5, 7, 9 ] [ 2, 4, 6, 8, 10 ]
