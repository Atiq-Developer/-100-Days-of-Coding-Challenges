// 🚀 Day 45 Challenge: Question:135 :Start Coding! 🚀
// Reusing the person object from Question 133
const person = {
    name: "Alice",
    age: 30,
    city: "Wonderland",
};
// Converts the object into a JSON string with indentation
const jsonString = JSON.stringify(person, null, 2); // The '2' specifies the number of spaces to use as white space
console.log(jsonString);
export {};
