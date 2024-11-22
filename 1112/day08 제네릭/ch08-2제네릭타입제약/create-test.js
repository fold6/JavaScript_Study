"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = require("./create");
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
[(0, create_1.create)(Date), (0, create_1.create)(Point, 0, 0)].forEach(function (s) {
    console.log(s);
});
