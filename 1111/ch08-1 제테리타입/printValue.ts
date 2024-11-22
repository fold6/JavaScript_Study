import { IValuable, Valueable } from "./Valuable";

export const printValue = <T>(o: IValuable<T>): void => console.log(o.value);

export { IValuable, Valueable }; //import한 함수를 다시 내보내기
