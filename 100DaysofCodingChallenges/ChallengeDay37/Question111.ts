// 🚀 Day 37 Challenge: Question 111 : Start Coding! 🚀
function AgeCategorize(Age: number) {
  if (Age <= 13) {
    return "Child";
  } else if (Age >= 14 && Age <= 19) {
    return "Teenage";
  } else if (Age >= 20 && Age <= 45) {
    return "Adult";
  } else {
    return "Old";
  }
}

let calculate = AgeCategorize(22);
console.log(calculate); // Output: Adult
