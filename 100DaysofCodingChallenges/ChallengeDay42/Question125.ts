//🚀 Day 42 Challenge: Question:125: Start Coding! 🚀
// An object with multiple properties and a method that interacts with them using 'this'
const rectangle = {
  length: 4,
  width: 5,
  calculateArea: function () {
    return this.length * this.width; // 'this' accesses 'length' and 'width' properties of the object
  },
};

console.log(rectangle.calculateArea());
