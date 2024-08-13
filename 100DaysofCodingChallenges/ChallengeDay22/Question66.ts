// Make a function that take two value if both are true then its true else false
function checkingbothtrue(bool1: boolean, bool2: boolean): boolean {
  if (bool1 && bool2) {
    return true;
  } else {
    return false;
  }
  //or return bool1 && bool2
}
let conditionchecker = checkingbothtrue;
console.log(conditionchecker(true, false));
console.log(conditionchecker(true, true));
