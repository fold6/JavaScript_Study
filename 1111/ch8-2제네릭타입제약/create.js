"use strict";
//new 타입제약
/*
팩토리 함수는 new 연산자를 사용해 객체를 생성하는 기능을 하는 함수
팩토리 함수는 객체를 생성하는 방법이 지나치게 복잡할때 이를 단순하게 하려는 목적으로 사용
       const create = <T>(type:T):T => new type()
export const create = <T>(type: { new (...args): T }, ...args): T => new type(...args)
->타입스크립트의 컴파일러는 타입의 타입을 허용하지 않으므로 이렇게 구성해야 한다

*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
var create = function (type) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return new (type.bind.apply(type, __spreadArray([void 0], args, false)))();
};
exports.create = create;
