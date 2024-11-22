"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFilePromise = void 0;
var fs_1 = require("fs");
var readFilePromise = function (filename) {
    return new Promise(function (resolve, reject) {
        (0, fs_1.readFile)("filename", function (err, buffer) {
            if (err)
                reject(err);
            else
                resolve(buffer.toString());
        });
    });
};
exports.readFilePromise = readFilePromise;
