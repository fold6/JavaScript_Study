"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swimOrFly = void 0;
var isFlyable_1 = require("./isFlyable");
var isSwimmable_1 = require("./isSwimmable");
var swimOrFly = function (o) {
    if ((0, isSwimmable_1.isSwimmable)(o))
        o.swim();
    else if ((0, isFlyable_1.isFlyable)(o))
        o.fly();
};
exports.swimOrFly = swimOrFly;
//instanceof 특정객체에 클래스 있는지 확인
//각각 instanceof 키워드를 사용한다
