/*
이 코드는 ts2564 오류가 납니다. 그리고 그 이유는 코드를 이런식으로 작성하지 말라는 의미입니다.
하지만, 이 코드는 교육용 이므로, 여기서는 @ts-nocheck 을 사용하여 
컴파일러로 하여금 너무 엄격하게 코드를 해석하지 않도록 했습니다.
*/
// @ts-nocheck

class Person1 {
  name: string
  age?: number
}
let jack1: Person1 = new Person1()
jack1.name = 'Jack'
jack1.age = 32
console.log(jack1)
