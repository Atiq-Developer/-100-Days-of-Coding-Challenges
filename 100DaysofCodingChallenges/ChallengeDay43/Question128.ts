//🚀 Day 43 Challenge: Question 128 : Start Coding! 🚀
const multipleparam = (a: number, b: number, c: number) => {
  return a * b * c;
};
let multipleparameter = multipleparam(2, 3, 4);
console.log(multipleparameter);
//Another way with rest parameter
const multiplyParameters = (...numbers: number[]) =>
  numbers.reduce((total, number) => total * number, 1);

console.log(multiplyParameters(2, 3, 4)); // Outputs: 24
// This function uses the rest parameter syntax to take any
