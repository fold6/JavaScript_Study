"use strict";
//메서드체인
//객체의 메서드를 이어서 계속 호출하는 방식의 코드를 작성
//$('#p').css("color","red").slideUp(2000).slideDown(2000)
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    Calculator.prototype.add = function (value) {
        this.value += value;
        return this;
    };
    Calculator.prototype.multiply = function (value) {
        this.value *= value;
        return this;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
