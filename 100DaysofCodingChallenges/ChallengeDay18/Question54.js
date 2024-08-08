// making flexible Objects
function creatingFlexibleObjects(key1, key2, Value1, Value2) {
    let dynamicallyObject = {};
    // Setting up a section in the list with a changeable name
    dynamicallyObject[key1] = Value1;
    dynamicallyObject[key2] = Value2;
    return dynamicallyObject;
}
// Example usage:
let userPreferredKey1 = "username";
let userPreferredKey2 = "email";
let userPreferrance = creatingFlexibleObjects(userPreferredKey1, userPreferredKey2, "Hafiz M Atiq", "ABC123@gmail.com");
console.log(userPreferrance);
export {};
