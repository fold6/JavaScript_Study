"use strict";
//인덱스 제약 조건
//가끔 객체의 일정 속성들만 추려서 좀 더 단순한 객체를 만들어할때가 있다
//pick함수는 네개의 속성을 가징 obj객체에서 name과 age 두속성만 추출해 간단한 형태로 만들려고 함
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = void 0;
var pick = function (obj, keys) {
    return keys
        .map(function (key) {
        var _a;
        return (_a = {}, _a[key] = obj[key], _a);
    })
        .reduce(function (result, value) { return (__assign(__assign({}, result), value)); }, {});
};
exports.pick = pick;
