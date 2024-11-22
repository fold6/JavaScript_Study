import { doSomething } from "./doSomething";
const [result, errorMassage] = doSomething(); //비구조할당
console.log(result, errorMassage); //에러, 에러메시지
