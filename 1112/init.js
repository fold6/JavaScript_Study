"use strict";
//일등함수는 프로그래밍 언어가 제공하는 기능
//일능함수기능을 제공하는 언어에서 함수는 '함수표현식'이라는 일종의 값
//따라서 변수에 담을 수 있다
//이 말은 함수 표현식을 매개변수로 받을 수 있다는 것을 의미
//이처럼 매개변수 형태로 동작하는 함수를 콜백함수라고 한다
//const f = (callback: () => void): void => callback()
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
var init = function (callback) {
    console.log('default initialization finished.');
    callback();
    console.log('all initialization finished.');
};
exports.init = init;
