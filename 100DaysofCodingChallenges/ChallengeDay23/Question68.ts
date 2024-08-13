// Multiplying Decimals:
function AcceptingDecimals(num1: number, num2: number) {
  return Math.round(num1 * num2 * 100) / 100;
}
let answer = AcceptingDecimals(6.5, 0.02);
console.log(answer);
