/*Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
 */
function quotient_remainder(divedend, divisor) {
    let quoitent = Math.floor(divedend / divisor);
    let remaider = divedend % divisor;
    return { quoitent, remaider };
}
let answer = quotient_remainder;
console.log(answer(19, 6));
export {};
