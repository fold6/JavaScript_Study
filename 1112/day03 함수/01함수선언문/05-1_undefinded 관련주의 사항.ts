interface IAgeable {
  age?: number;
}
//인터페이스에 속성이 있다면
function getAge(o: IAgeable | null | undefined) {
  //조건 ? 참일때 : 거짓일
  //조건 && 실행문
  //조건 중첩
  return o != undefined && o.age ? o.age : 0;
}

//함수호출
console.log(getAge(undefined)); //0
console.log(getAge(null)); // 0
console.log(getAge({ age: 32 })); //32
