export const mergeObjects = <T, U>(a: T, b: U): T & U => ({ ...a, ...b });

//합집합 타입: 'or' 또는 '|'기호로 다양한 타입을 연결해서 만든 타입을 말함
/*
type NumberorString = Number | string;
let ns: NumberorString = 1;
ns = 'hello'
*/
//교집합 타입: 'and' 또는 '&' 기호로 다양한 타입을 연결해서 만드는 타입
