// 🚀Challenge Day: 36 : Question 106 : start coding🚀
function isLeapYear(year: number) {
  if (year % 4 === 0) {
    if (year % 100 !== 0 || year % 400 === 0) {
      return true; // It's a leap year
    }
  }
  return false; // It's not a leap year
}

// Example usage:
let year = 2024;
console.log(isLeapYear(year)); // Output: true
