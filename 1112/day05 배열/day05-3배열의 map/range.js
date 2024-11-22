"use strict";
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
exports.range = void 0;
var range = function (from, to) {
    return from < to ? __spreadArray([from], (0, exports.range)(from + 1, to), true) : [];
};
exports.range = range;
// 1 < 10   [1, 2, 3, 4, .... 10]
//배열선언
