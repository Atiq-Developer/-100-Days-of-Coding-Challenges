// 🚀Coding Chalenge Day 24🚀
// function letKeyword() {
//   const num = 1;
//   for (num = 1; num <= 5; num++) {
//     console.log(num);
//   }
// }
// // console.log(num) not show the result because let  is a blocke scoped keyword
// letKeyword();
// Using `let` for a variable that can be reassigned
let age = 25;
age = 26; // Works fine because `let` allows reassignment
console.log(age); // Shows 26

// Trying to reassign a `const`-declared variable
const name = "Alice";
try {
  name = "Bob"; // This line will cause an error
} catch (error) {
  console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown
}
// This example illustrates that `const` prevents changing the variable once it's set.
