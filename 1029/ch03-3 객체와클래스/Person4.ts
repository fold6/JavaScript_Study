//인터페이스 구현한 예
//인터페이스는 이러이러한 속성이 있어야 한다는 규약일뿐이다
interface IPerson4 {
  name: string
  age?: number
}

class Person4 implements IPerson4 {
  constructor(public name: string, public age?: number) {}
}
let jack4: IPerson4 = new Person4('Jack', 32)
console.log(jack4) // Person4 { name: 'Jack', age: 32 }
