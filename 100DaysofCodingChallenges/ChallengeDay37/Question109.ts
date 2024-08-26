// 🚀 Day 37 Challenge: Question 109 : Start Coding! 🚀
// function greetIfMorning() {
//   // Get the current date and time
//   const now = new Date();

//   // Get the current hour (0-23)
//   const currentHour = now.getHours();

//   // Check if the current hour is before 12 PM
//   if (currentHour < 12) {
//     console.log("Good Morning");
//   } else {
//     console.log("Good Afternoon");
//   }
// }

// // Call the function
// greetIfMorning();
const currentTime = new Date();
if (currentTime.getHours() < 12) {
  console.log("Good Morning"); // It's morning if before 12 PM
}
