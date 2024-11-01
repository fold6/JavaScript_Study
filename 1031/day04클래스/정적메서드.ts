//정적 메서드
//클래스의 속성은 static 수정자를 속성앞에 붙여서 정적으로 만들 수 있다
//클래스이름.정적 메서드()
//자바스크립트의 인스턴스란
//비슷한 성질을 가진 여러개의 객체를 만들기 위해, 일종의 설계도라고 할 수 있는 생성자 함수

export class C {
  static whoAreYou(): string {
    return `I'm class C`;
  }
}
export class D {
  static whoAreYou(): string {
    return `I'm class D`;
  }
}

console.log(C.whoAreYou()); // I'm class C
console.log(D.whoAreYou()); // I'm class D
