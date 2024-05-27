"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*--------------------Question-44----------------*/
// Method#1
function sandwiches(...ingredients) {
    console.log("Make a sandwice with following ingredients.");
    ingredients.forEach(ingredient => {
        console.log(`- ${ingredient}`);
    });
}
sandwiches("Chapli Kebab", "Mint Chutney", "Tomato", "Onion", "Cucumber", "Yogurt Sauce");
console.log("Your sandwich is Ready");
// Method#2
function make_sandwich(...items) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}
make_sandwich("Chapli Kebab", "Mint Chutney", "Tomato", "Onion", "Cucumber", "Yogurt Sauce");
console.log("Your sandwich is Ready");
