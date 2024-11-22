export class B {
  constructor(public value: number = 1) {} //public 외부에서 접근이 가능하게 설정
  method(): void {
    console.log(`value: ${this.value}`);
  }
}
//타입스크립트는 클래스 속성 중 함수 표현식을 담은 속성은 function키워드를 생략하는
//단축구문을 지원한다
