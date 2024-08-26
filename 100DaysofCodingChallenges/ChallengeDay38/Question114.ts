// Challenge Day: 38 : Question114 : start coding
const students = new Map<number, string>();
students.set(62546, "Ali");
students.set(59435, "Hamza");
students.set(88393, "Muneeb");
students.forEach((studentName, StudentID) => {
  console.log(`Student Id : ${StudentID}, Student Name : ${studentName}`);
});
