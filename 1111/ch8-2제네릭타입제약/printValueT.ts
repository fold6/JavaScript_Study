import { IValuable } from "./IValuable";
//제네릭타입제약구문작성
export const printValueT = <Q, T extends IValuable<Q>>(o: T) =>
  console.log(o.value);

export { IValuable };

//extends 타입 매개변수의 상한 경계(upper bound)를 지정하는 데 사용
//상한 경계는 특정 타입으로 제한하여 제네릭 타입이 해당 타입을 상속받거나 해당 인터페이스를 구현해야 한다는 제약을 설정
