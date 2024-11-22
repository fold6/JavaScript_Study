"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var printPerson = function (_a) {
    var name = _a.name, age = _a.age;
    console.log("name: ".concat(name, ", age: ").concat(age));
}; //({ name, age }: Person)함수의매개변수를 비구조 할당 적용
printPerson({ name: "Jack", age: 10 }); // name: Jack, age: 10
