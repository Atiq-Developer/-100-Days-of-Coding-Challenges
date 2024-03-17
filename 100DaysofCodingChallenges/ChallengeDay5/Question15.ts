/*------------------------------------Challenge Day 5 ---------------------- */
/*--------------------------------Question 15-------------------------------*/

let dinnerParty : string[] = ["Noman", "Umer" , "Shaheer", "Rameel"]

let notAttendingDinner : string = "Rameel"
console.log(`${notAttendingDinner} apologize for not attending the Dinner Party.`);

//Replace Guests
let Replacetheguest  : string = "Bilal"
dinnerParty[dinnerParty.indexOf(notAttendingDinner)] = Replacetheguest

dinnerParty.forEach(dinner =>{
    console.log(`Dear ${dinner},would you like to join me for dinner?`);  
})
