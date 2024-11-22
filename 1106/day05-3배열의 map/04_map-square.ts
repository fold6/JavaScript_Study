import { range } from "./range";

let squres: number[] = range(1, 5 + 1).map((val: number) => val * val);
// [1*1 2*2 3*3 4*4 5*5]
console.log(squres);
