//메서드체인
//객체의 메서드를 이어서 계속 호출하는 방식의 코드를 작성
//$('#p').css("color","red").slideUp(2000).slideDown(2000)

export class Calculator {
  constructor(public value: number = 0) {}
  add(value: number) {
    this.value += value;
    return this;
  }
  multiply(value: number) {
    this.value *= value;
    return this;
  }
}
