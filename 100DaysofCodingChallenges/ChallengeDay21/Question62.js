// Making interface
// Filling in the blueprint with an example student1, student2, student3
let student1 = {
    name: "Hafiz M Atiq",
    age: 22,
    Class: "GIAIC Batch 1",
    courses: ["TypesScript", "Javascript", "HTML", "CSS"],
};
let student2 = {
    name: "Bilal",
    age: 24,
    Class: "GIAIC Batch 1",
    courses: ["TypesScript", "Javascript", "HTML", "CSS"],
};
let student3 = {
    name: "Daniyal",
    age: 20,
    Class: "GIAIC Batch 1",
    courses: ["TypesScript", "Javascript", "HTML", "CSS"],
};
// Printing Information of Student 1
console.log(`Information of Student 1: Name: ${student1.name}, Age: ${student1.age}, Class: ${student1.Class}, Courses: ${student1.courses.join(", ")}`);
console.log(`Information of Student 2: Name: ${student2.name}, Age: ${student2.age}, Class: ${student2.Class}, Courses: ${student2.courses.join(", ")}`);
console.log(`Information of Student 3: Name: ${student3.name}, Age: ${student3.age}, Class: ${student3.Class}, Courses: ${student3.courses.join(", ")}`);
export {};
