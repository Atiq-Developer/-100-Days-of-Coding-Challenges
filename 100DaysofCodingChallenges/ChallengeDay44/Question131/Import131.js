"use strict";
// main.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Export131_1 = __importDefault(require("./Export131"));
// Create an instance of the Person class
const person1 = new Export131_1.default("Hafiz M Atiq", 22);
// Use the instance
console.log(person1.greet());
