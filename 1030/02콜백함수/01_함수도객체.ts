//함수를 객체로 생성
let add2 = new Function("a", "b", "return a + b;"); //F를 대문자로

let result2 = add(1, 2);
console.log(result2);
