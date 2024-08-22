// 🚀Challenge Day:33 : Question 98 : start coding🚀
function daysUntilYear() {
  const now: any = new Date();
  // get the next year
  const nextYear: any = now.getFullYear() + 1;
  const newYear: any = new Date(`January 1, ${nextYear} 00:00:00`);
  //calculate the date in mili second
  const differenceInTime = newYear - now;

  // Convert the difference from milliseconds to days
  const daysLeft = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

  console.log(`There are ${daysLeft} days left until New Year.`);
}
daysUntilYear();
