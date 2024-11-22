"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
(0, fs_1.readFile)("./package.json", function (err, buffer) {
    if (err)
        throw err;
    else {
        var content = buffer.toString();
        console.log(content);
    }
});
