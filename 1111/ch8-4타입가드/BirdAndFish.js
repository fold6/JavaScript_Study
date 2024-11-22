"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fish = exports.Bird = void 0;
//타입 가드는 조건문 안에서 타입 범위를 한정시켜줄 수 있는 방법
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log("I'm flying.");
    };
    return Bird;
}());
exports.Bird = Bird;
var Fish = /** @class */ (function () {
    function Fish() {
    }
    Fish.prototype.swim = function () {
        console.log("I'm swimming.");
    };
    return Fish;
}());
exports.Fish = Fish;
