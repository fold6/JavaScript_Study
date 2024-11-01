"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B = void 0;
var B = /** @class */ (function () {
    function B(value) {
        if (value === void 0) { value = 1; }
        this.value = value;
    } //public 외부에서 접근이 가능하게 설정
    B.prototype.method = function () {
        console.log("value: ".concat(this.value));
    };
    return B;
}());
exports.B = B;
//타입스크립트는 클래스 속성 중 함수 표현식을 담은 속성은 function키워드를 생략하는
//단축구문을 지원한다
