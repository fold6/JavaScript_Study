"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readFilePromise_1 = require("./readFilePromise");
(0, readFilePromise_1.readFilePromise)("./package.json")
    .then(function (content) {
    console.log(content);
    return (0, readFilePromise_1.readFilePromise)("./tsconfig01.json");
})
    .then(function (content) {
    console.log(content);
    return (0, readFilePromise_1.readFilePromise)(".");
})
    .catch(function (err) { return console.log(err.message); })
    .finally(function () {
    console.log("프로그램 종료");
});
