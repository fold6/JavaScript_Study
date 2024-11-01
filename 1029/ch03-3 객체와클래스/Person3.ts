class Person3 {
  name: string
  age?: number
  constructor(name: string, age?: number) {
    this.name = name  //현재 클래스 속성 name을 지정하고 속성값을 생성자보낸 name
    this.age = age
  }
}
//생성자 생성
let jack3: Person3 = new Person3('Jack', 32);
// 화면출력
console.log(jack3)
