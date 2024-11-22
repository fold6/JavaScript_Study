import { printValue, Valueable } from "./printValue";

printValue(new Valueable<number>(1)); // 1
printValue(new Valueable<boolean>(true)); // true
printValue(new Valueable<string>("hello")); // hello
printValue(new Valueable<number[]>([1, 2, 3])); // [1, 2, 3]
