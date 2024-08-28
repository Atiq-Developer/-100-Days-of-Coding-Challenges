"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.farewell = exports.greet = void 0;
// Example: Named exports of a function and a variable
function greet() {
    console.log("Hello!");
}
exports.greet = greet;
exports.farewell = "Goodbye!";
