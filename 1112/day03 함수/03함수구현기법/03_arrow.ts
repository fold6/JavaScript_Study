// ()=>{}
export type Person = { name: string; age: number };

export const makePerson = (name: string, age: number = 10): Person => ({
  name,
  age,
});

//이렇게 구현했을때 컴파일러는 {}를 객체가 아닌 복합실행문으로 해서 따라서 컴파일러가 {}를 객체로 해석하게 할려면
//객체를 소괄호로 깜싸주어야한다
console.log(makePerson("Jack"));
console.log(makePerson("Jane", 33));
