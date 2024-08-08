// making flexible Objects
function creatingFlexibleObjects(
  key1: string,
  key2: string,
  Value1: string,
  Value2: string
) {
  let dynamicallyObject: any = {};
  // Setting up a section in the list with a changeable name
  dynamicallyObject[key1] = Value1;
  dynamicallyObject[key2] = Value2;
  return dynamicallyObject;
}
// Example usage:
let userPreferredKey1 = "username";
let userPreferredKey2 = "email";

let userPreferrance = creatingFlexibleObjects(
  userPreferredKey1,
  userPreferredKey2,
  "Hafiz M Atiq",
  "ABC123@gmail.com"
);
console.log(userPreferrance);
