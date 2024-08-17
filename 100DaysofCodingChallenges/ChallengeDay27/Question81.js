// 🚀Challenge Day 27: start coding!🚀
function takingObject(carproperties) {
    for (let propertyandvalues in carproperties) {
        console.log(`${propertyandvalues}: ${carproperties[propertyandvalues]}`);
    }
}
takingObject({ name: "Honda Civic", model: "orial civic", year: "2023" });
export {};
// This function shows every detail about an object
// function logObjectProperties(obj: { [key: string]: any }) {
//   for (let property in obj) {
//     // Loops through each property in the object
//     console.log(`${property}: ${obj[property]}`);
//     // Shows the property name and its value
//   }
// }
// // Using the function with a car object
// logObjectProperties({
//   make: "Toyota",
//   model: "Corolla",
//   year: 2021,
//   color: "blue",
// });
// // It tells us each piece of information stored about the car.
