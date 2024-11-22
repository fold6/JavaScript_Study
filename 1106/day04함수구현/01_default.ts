export type Person = { name: string; age: number };//타입 

export const makePerson = (name: string, age: number = 10): Person => {
  const person = { name: name, age: age };
  return person;
};

console.log(makePerson("jack")); //jack , 10
console.log(makePerson("Jane", 33)); //Jane 33

//매개변수의 기본값을 지정 -> 디볼트 매개변수
//(매개변수:타입 = 매개변수)
