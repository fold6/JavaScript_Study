//단축 구문
//매개변수의 이름과 똑같은 이름의 속성을 가진 객체를 만들수 있다
//이때 속성값부분을 생략할 수 있는 이것을 단축 구문임

export type Person = { name: string; age: number };

export const makePerson = (name: string, age: number = 10): Person => {
  const person = { name, age }; //{ name: name, age: age }
  return person;
};

console.log(makePerson("jack")); //jack , 10
console.log(makePerson("Jane", 33)); //Jane 33
