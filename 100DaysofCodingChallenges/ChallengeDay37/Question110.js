"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 🚀 Day 37 Challenge: Question 110 : Start Coding! 🚀
function assignGrade(score) {
    let grade;
    if (score >= 90) {
        grade = "A";
    }
    else if (score >= 80) {
        grade = "B";
    }
    else if (score >= 70) {
        grade = "C";
    }
    else if (score >= 60) {
        grade = "D";
    }
    else {
        grade = "F";
    }
    return grade;
}
// Example usage:
const studentScore = 85;
const studentGrade = assignGrade(studentScore);
console.log(`The student's grade is: ${studentGrade}`);
