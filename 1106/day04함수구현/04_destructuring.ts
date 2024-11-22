//함수의 매개변수도 변수의 일종이므로 비구조 할당을 적용할 수 있다
//const (name, age) = preson//name: "Jack", age: 10
export type Person = { name: string; age: number };

const printPerson = ({ name, age }: Person): void => {
  console.log(`name: ${name}, age: ${age}`);
}; //({ name, age }: Person)함수의매개변수를 비구조 할당 적용

printPerson({ name: "Jack", age: 10 }); // name: Jack, age: 10
