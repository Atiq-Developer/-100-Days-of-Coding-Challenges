// 🚀 Day 38 Challenge: Question 113 : Start Coding! 🚀
// Create the function
function checkCanadaCapital(countries) {
    if (countries.has("Canada")) {
        // Check if "Canada" is a key in the Map
        const capital = countries.get("Canada"); // Retrieve the capital of Canada
        console.log(`The capital of Canada is ${capital}`); // Log the capital
    }
    else {
        console.log("Canada is not in the Map."); // Log that Canada is not in the Map
    }
}
// Create a Map and populate it with countries and capitals
const countries = new Map();
countries.set("USA", "Washington, D.C."); // Adds USA to the Map
countries.set("France", "Paris"); // Adds France to the Map
countries.set("Japan", "Tokyo"); // Adds Japan to the Map
countries.set("Canada", "Ottawa");
// Call the function to check for Canada
checkCanadaCapital(countries);
export {};
