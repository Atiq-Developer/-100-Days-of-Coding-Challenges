// 🚀Challenge Day: 36 : Question 107 : start coding🚀
function isDivisibleByTwoAndThree(number) {
    if (number % 2 === 0 && number % 3 === 0) {
        return true; // The number is divisible by both 2 and 3
    }
    else {
        return false; // The number is not divisible by both 2 and 3
    }
}
// Example usage:
const result = isDivisibleByTwoAndThree(12);
console.log(result); // Output: true
export {};
