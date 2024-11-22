//filter 배열을 특정 조건으로 걸러주는 배열요소 다시 재할당
import { range } from "./range";

const array: number[] = range(1, 10 + 1); //[1, 2, 3, ...10]//배열선언  5
const helf = array.length / 2; //5

//array.filter((배열요소)=>{조건식});
//홀수배열
let belowHalf: number[] = array.filter((v, index) => index < helf); //[ 1 2 3 4 5 ]

//짝수배열
let overHalf: number[] = array.filter((v, index) => index >= helf); //[ 6 7 8 9 10 ]
console.log(array);
console.log(belowHalf, overHalf); // [ 1, 3, 5, 7, 9 ] [ 2, 4, 6, 8, 10 ]
