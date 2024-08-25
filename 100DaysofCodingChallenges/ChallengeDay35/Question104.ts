// 🚀Challene Day:35 : Question 104 : Start coding🚀
function getRandomHexColor(): string {
  const color =
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0");
  return color; // Returns the random color code
}

console.log(getRandomHexColor());
