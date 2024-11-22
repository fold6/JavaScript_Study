"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var printValue_1 = require("./printValue");
(0, printValue_1.printValue)(new printValue_1.Valueable(1)); // 1
(0, printValue_1.printValue)(new printValue_1.Valueable(true)); // true
(0, printValue_1.printValue)(new printValue_1.Valueable("hello")); // hello
(0, printValue_1.printValue)(new printValue_1.Valueable([1, 2, 3])); // [1, 2, 3]
