//추상클래스
//abstract 키워드를 사용해 추상클래스를 만들수있다
//

abstract class AbstractPerson5 {
  abstract name: string
  constructor(public age?: number) {}
}

//클래스 상속
//class 상속클래스 extends 부모클래스 {...}
class Person5 extends AbstractPerson5 {
  constructor(public name: string, age?: number) {
    super(age) //클래스 생성자를 호출
  }
}
let jack5: Person5 = new Person5('Jack', 32)
console.log(jack5) // Person5 { name: 'Jack', age: 32 }
