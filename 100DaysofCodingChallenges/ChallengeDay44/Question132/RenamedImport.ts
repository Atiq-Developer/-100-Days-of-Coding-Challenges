// Example: Renaming a named export on import
import {
  greet as greetFunction,
  farewell as goodbyeMessage,
} from "./NamedExport";

greetFunction(); // Outputs: Hello!
console.log(goodbyeMessage); // Outputs: Goodbye!
