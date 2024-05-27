"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*----------------------Question-42-------------------*/
let magicians = ["Wilson", "Shin", "Ricky"];
function show_magician(magicians) {
    magicians.forEach(magician => {
        console.log(`${magician} is a magician`);
    });
}
show_magician(magicians);
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great,";
    }
}
make_great(magicians); // Modifies the original array
show_magician(magicians); // Shows modified names
