// 제네릭 타입은 인터페이스나 클래스,함수,타입별칭등에 사용할수 있는 기능으로,
// 해당 심벌의 타입을 미리 지정하지 않고 다양한 타입에 대응할때 사용합니다.

// 제네릭 인터페이스 구문
/*
interface IValuable<T> {
  value: T
}
*/

export interface IValuable<T> {
  value: T;
}
