//type stringNumberFunc = (string, number?) => void
//타입의 별칭 -> 기존에 존재하는 타입을 단순히 이름만 바뀌서 사용
//type 새로운타입 = 기존의 타입

type stringNumberFunc = (arg0: string, arg1?: number) => void;
let f: stringNumberFunc = function (a: string, b?: number): void {};
let g: stringNumberFunc = function (c: string, d?: number): void {};

//=> 매개변수의 개수나 타입,반환타입이 다른 함수를 선언하는 잘못을 방지