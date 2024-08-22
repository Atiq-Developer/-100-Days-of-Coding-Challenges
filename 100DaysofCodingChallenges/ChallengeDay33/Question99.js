// 🚀Challenge Day:33 : Question 99 : start coding🚀
// Generates a Date object for the next occurrence of a specific birthday
function getNextBirthday(month, day) {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day); // Months are 0-indexed
    if (birthday < today) {
        // If the birthday this year has already passed, use next year's date
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
// Replace with your birth month and day
const nextBirthday = getNextBirthday(1, 3); // Example: 3 January
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
export {};
// Shows the date of the next birthday.
