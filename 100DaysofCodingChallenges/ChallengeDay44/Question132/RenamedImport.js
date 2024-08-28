"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example: Renaming a named export on import
const NamedExport_1 = require("./NamedExport");
(0, NamedExport_1.greet)(); // Outputs: Hello!
console.log(NamedExport_1.farewell); // Outputs: Goodbye!
