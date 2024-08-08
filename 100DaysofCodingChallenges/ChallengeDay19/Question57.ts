// A list of grades
let grades = [88, 94, 72, 99, 53, 77];

// Calculates the average grade
/* Reduce method in JavaScript is often used to accumulate values from an array into a 
single result, such as a sum, product, or in this case, the average of grades.*/
let averageGrade =
  grades.reduce((total, grade) => total + grade, 0) / grades.length;

// Shows the average grade
console.log(averageGrade);
// First, we add up all the grades. Then, we divide by how many grades there are to get the average.

//Other ways to solve this question is
//By using For loop
let grades_forloop = [88, 94, 72, 99, 53, 77];
let total_FORLOOP = 0;

for (let i = 0; i < grades_forloop.length; i++) {
  total_FORLOOP += grades[i];
}

let averageGrade_forloop = total_FORLOOP / grades_forloop.length;

console.log(averageGrade_forloop);

// By using ForEach METHOD
let grades_forEach = [88, 94, 72, 99, 53, 77];
let total_forEach = 0;

grades.forEach((grade) => {
  total_forEach += grade;
});

let averageGrade_forEach = total_forEach / grades_forEach.length;

console.log(averageGrade_forEach);
