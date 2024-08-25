// 🚀Challenge Day: 36 : Question 108 : start coding🚀
function areStringsIdentical(string1, string2) {
    // Convert both strings to lowercase and then compare
    if (string1.toLowerCase() === string2.toLowerCase()) {
        return true; // The strings are identical (ignoring case)
    }
    else {
        return false; // The strings are not identical
    }
}
// Example usage:
const result = areStringsIdentical("Hello", "hello");
console.log(result); // Output: true
export {};
