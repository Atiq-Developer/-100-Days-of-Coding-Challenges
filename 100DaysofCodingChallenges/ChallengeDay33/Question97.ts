// 🚀Challenge Day:33 : Question 97 : start coding🚀
function getdateinString(): string {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  return `${day}-${month}-${year}`;
}
console.log(getdateinString());
