// This function creates another function that adds a specific number
//we use higher order or clousre function
function makeAdder(valueToAdd: number): (number: number) => number {
  // The inner function adds valueToAdd to any number you give it
  return function (number: number): number {
    return number + valueToAdd;
  };
}

// Creating a function that adds 5 to any number
let addFive = makeAdder(5);
console.log(addFive(10));
