import { join } from "./06_1join";

console.log(
  join(["h", "e", "l", "l", "o"]), // hello
  join(["h", "e", "l", "l", "o"], "_") // h_e_l_l_o
);
//배열을 string타입으로 변환할려면 join메소드를 사용
//join(구분자:string):string
