import { IValuable } from "./IValuable";

export class Valueable<T> implements IValuable<T> {
  constructor(public value: T) {}
}

export { IValuable };
//implements 키워드는 새로운 클래스의 모양을 동일하게 정의하고 싶을 때 사용합니다
