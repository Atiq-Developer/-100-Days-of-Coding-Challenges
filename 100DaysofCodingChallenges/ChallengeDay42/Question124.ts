//🚀 Day 42 Challenge: Question:124: Start Coding! 🚀
// Defines an object with a name property and a method to return its name
const person = {
  name: "Ali",
  getName: function () {
    return this.name; // Uses 'this' to refer to the object itself and return its 'name' property
  },
};

console.log(person.getName());
