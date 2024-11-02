// 화살표 함수를 선언하는 형태: ()=>{}
// Person 타입을 정의. 이 타입은 name과 age를 가진 객체로 구성됨.
export type Person = { name: string; age: number };

// makePerson 함수를 선언. name(필수)과 age(선택) 매개변수를 받음. age의 기본값은 10으로 설정됨.(그래서 jack이 10이 나오게 됨)
// 반환값으로는 Person 타입의 객체를 반환.
export const makePerson = (name: string, age: number = 10): Person => ({
  // 중괄호 {}를 소괄호 ()로 감싸서 객체 리터럴로 인식하게 만듦.
  // 그렇지 않으면 중괄호가 실행 블록으로 해석됨.
  name, // name 매개변수를 name 속성에 할당.
  age, // age 매개변수를 age 속성에 할당.
});

// makePerson 함수를 호출하면서 name에 "Jack"을 전달하고 age는 생략.
// age의 기본값이 10이므로, { name: "Jack", age: 10 } 객체가 생성됨.
console.log(makePerson("Jack")); // { name: "Jack", age: 10 } 출력

// makePerson 함수를 호출하면서 name에 "Jane"을 전달하고 age에 33을 전달.
// { name: "Jane", age: 33 } 객체가 생성됨.
console.log(makePerson("Jane", 33)); // { name: "Jane", age: 33 } 출력
