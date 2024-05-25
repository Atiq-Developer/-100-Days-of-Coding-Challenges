/*----------------------Question 30---------------------*/
let usernames = ["admin", "staff", "Principle", "H.O.D", "Dean"];
usernames.forEach(username => {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});
export {};
