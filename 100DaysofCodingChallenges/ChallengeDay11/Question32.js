"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*-------------------------Question-32--------------------*/
let username = ["Ali", "Atiq", "arslan", "shahmir"];
let newNames = ["ali", "Usama", "Bilal", "Rafiq", "zia"];
newNames.forEach(update => {
    if (username.some(usernames => usernames.toLowerCase() === update.toLowerCase())) {
        console.log(`${update} will need to enter a new user name`);
    }
    else {
        console.log(`${update} is available..`);
    }
});
