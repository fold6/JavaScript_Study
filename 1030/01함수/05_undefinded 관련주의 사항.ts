interface INameable {
  name: string;
}

// 매개변수의 undefined인지 판별하는 코드 작성
function getName(o: INameable) {
  //삼항연산자 사용  조건 ? 참일때값 : 거짓일때 값
  //undefind인경우 return o.name -> o.undefind -> unknown name 출력
  return o != undefined ? o.name : "unknown name";
  // undefined   !=   name:'jack => 참인지 거짓
}

//let n = getName (undefined);//할당하지않은값
//console.log(n)
console.log(getName({ name: "jack" })); //jack
