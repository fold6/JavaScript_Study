"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TypeScript 또는 ES6에서 모듈을 내보낼 때 사용되는 설정. 
// 여기선 `exports.__esModule`을 설정하여 모듈 시스템을 지원함.

var printPerson = function (_a) {
    // printPerson 함수를 선언. 매개변수에 비구조화 할당을 사용하여 
    // `name`과 `age`를 바로 추출함.
    
    var name = _a.name, age = _a.age;
    // `_a` 객체의 `name`과 `age` 속성을 각각의 변수에 할당.
    // `_a`는 함수의 매개변수로 전달된 객체를 의미함.

    console.log("name: ".concat(name, ", age: ").concat(age));
    // 콘솔에 `name`과 `age` 값을 출력. 
    // `concat` 메서드를 사용해 템플릿 문자열을 만들어줌.
}; 

// `printPerson` 함수를 호출하며 객체 `{ name: "Jack", age: 10 }`를 전달.
// 함수는 비구조화 할당으로 `name`에 "Jack"을, `age`에 10을 할당하여 출력함.
printPerson({ name: "Jack", age: 40 }); // name: Jack, age: 10
