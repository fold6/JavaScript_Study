import { ResultType } from "./ResultType";

export const doSomething = (): ResultType => {
  try {
    throw new Error("Some error occurs..."); //에러발생메소드(에러에대한경고메시지)
  } catch (e) {
    return [false, e.message];
  }
};
//불순함수를 순수함수로 바뀌주는 전형적인 코드 설계
