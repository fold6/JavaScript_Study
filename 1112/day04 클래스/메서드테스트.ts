import { Calculator } from "./메서드체인";

let calc = new Calculator(); //새로운 클래스 생성
let result = calc.add(1).add(2).multiply(3).multiply(4).value;
console.log(result); //(0 + 1 + 2) * 3 *4
