let printMe2: (arg0: string, arg1: number) => void = function (
  arg0: string,
  arg1: number
): void {};

//함수의 시그니처->변수에 타입이 있듯이 함수 또한 타입이 있다
//(매개변수1타입, 매개변수2타입[, ...])=>반환타입
// printMe2함수는 string, number 타입변수가 두개 있고 반환타입은 void이다
// 함수의 시그니처는 (string, number) => void
