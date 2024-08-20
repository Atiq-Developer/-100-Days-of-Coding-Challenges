// 🚀Challenge Day : 31 : Question 93: start coding🚀
let fruit: string[] = ["Orange", "Banana", "Apple"];
console.log(fruit.indexOf("Orange")); // Outputs the index of "Orange"

// Check if "Orange" is present in the array
let index = fruit.indexOf("Orange");

if (index !== -1) {
  // Replace "Orange" with "Strawberry"
  fruit[index] = "Strawberry";
}

console.log(fruit); // Outputs the modified array
