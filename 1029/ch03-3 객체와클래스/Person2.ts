//클래스는 constructor라는 이름의 특별한 메서드를 포함하는데 이를 생성자라고 함

class Person2 {
  constructor(public name: string, public age?: number) {}
}
let jack2: Person2 = new Person2('Jack', 32)
console.log(jack2)
