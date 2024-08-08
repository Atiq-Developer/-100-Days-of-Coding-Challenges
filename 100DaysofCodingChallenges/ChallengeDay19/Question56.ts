// Mix of different Types of List
let Multitypes_List = [2, "Typescript", "Javascript", 2.5, true, false];
//For taking only string type from multipletypes of array we use filter method
let stringArray = Multitypes_List.filter((item) => typeof item === "string");
console.log(stringArray);
