// 🚀Challenge Day: 34: Question 101 : start coding🚀
// Without Function
let number = Math.random() * 10;
console.log(Math.ceil(number) + 1);
console.log(Math.floor(number) + 1);
// Generates a random integer between 1 and 10
function getRandomInt() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(getRandomInt()); // Outputs a random integer between 1 and 10
export {};
// This function combines Math.random() with Math.floor() to create a random integer within our range.
