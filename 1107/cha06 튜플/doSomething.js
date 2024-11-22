"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doSomething = void 0;
var doSomething = function () {
    try {
        throw new Error("Some error occurs..."); //에러발생메소드(에러에대한경고메시지)
    }
    catch (e) {
        return [false, e.message];
    }
};
exports.doSomething = doSomething;
//불순함수를 순수함수로 바뀌주는 전형적인 코드 설계
