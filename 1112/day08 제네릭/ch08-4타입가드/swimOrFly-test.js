"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BirdAndFish_1 = require("./BirdAndFish");
var swimOrFly_1 = require("./swimOrFly");
[new BirdAndFish_1.Bird(), new BirdAndFish_1.Fish()].forEach(swimOrFly_1.swimOrFly); // I'm flying. I'm swimming.
