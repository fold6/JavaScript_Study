"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = void 0;
var A = /** @class */ (function () {
    function A() {
        var _this = this;
        this.value = 1;
        this.method = function () {
            console.log("value: ".concat(_this.value));
        };
    }
    return A;
}());
exports.A = A;
//[function함수와 this키워드]
//타입스크립의 function 키워드로 만드는 function이란 클래스의 인스턴스, 즉
//함수 객체라고 했습니다
//객체지향언어에서는 인스턴스는 this키워드를 사용할 수 있습니다
//function키워드에서는 this 키워드를 사용하나 화살표 함수에서 사용할 수 없다
//[메서드란?]
//타입스크립트에서는 메서드는 function으로 만든 함수 표현식
