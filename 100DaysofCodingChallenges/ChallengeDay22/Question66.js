// Make a function that take two value if both are true then its true else false
function checkingbothtrue(bool1, bool2) {
    if (bool1 && bool2) {
        return true;
    }
    else {
        return false;
    }
}
let conditionchecker = checkingbothtrue;
console.log(conditionchecker(true, false));
console.log(conditionchecker(true, true));
export {};