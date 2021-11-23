"use strict";
exports.__esModule = true;
var header_1 = require("./header");
var activeListeners_1 = require("./activeListeners");
var Q = new header_1.Queue;
$(document).ready((function () {
    (0, activeListeners_1.main)();
}));
