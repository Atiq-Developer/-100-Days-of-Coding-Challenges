"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Start");
setTimeout(() => {
    console.log("Callback executed"); // This gets queued to be executed by the event loop
}, 0);
console.log("End");
