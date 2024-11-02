//이 코드에서는 makeObject 함수가 key와 value를 받아서 해당 키와 값을 가진 객체를 반환함. TypeScript에서 { [key: string]: string } 형태를 **색인 가능 타입(indexable type)**이라고 하며, 이는 동적으로 키를 생성하고 할당할 수 있게 함.


// makeObject 함수의 반환 타입으로 사용될 KeyValueType 타입 정의.
// KeyValueType은 문자열 키와 문자열 값을 가진 객체 형태로 정의됨.
export type KeyValueType = { [key: string]: string }; 
// [key: string]은 문자열 키로 객체 속성을 설정할 수 있음을 의미함.
// 즉, 이 객체는 "name", "firstName" 등 다양한 키를 가질 수 있음.

// makeObject 함수 선언. key와 value를 매개변수로 받아서 KeyValueType 객체 반환.
// 매개변수로 받은 key를 객체의 속성 이름으로, value를 속성 값으로 설정.
export const makeObject = (key: string, value: string): KeyValueType => ({
  // [key]: value는 매개변수 key의 값을 속성 이름으로, value의 값을 속성 값으로 가짐.
  // 객체 리터럴을 중괄호로 감싸서 리턴.
  [key]: value,
});

// makeObject 함수를 호출하여 key로 "name", value로 "Jack"을 전달.
// 이 호출로 { name: 'Jack' } 객체가 반환됨.
console.log(makeObject("name", "Jack")); // { name: 'Jack' }

// makeObject 함수를 호출하여 key로 "firstName", value로 "Jane"을 전달.
// 이 호출로 { firstName: 'Jane' } 객체가 반환됨.
console.log(makeObject("firstName", "Jane")); // { firstName: 'Jane' }


//요약
//이 코드에서 [key: string]: string 형태로 지정된 색인 가능 타입은 객체의 키를 동적으로 생성하고 할당할 수 있게 해줌.
//makeObject("name", "Jack") 같은 호출은 key 값이 "name"이 되어 { name: "Jack" } 형태의 객체가 생성됨.