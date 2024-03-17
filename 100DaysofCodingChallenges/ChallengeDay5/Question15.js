/*------------------------------------Challenge Day 5 ---------------------- */
/*--------------------------------Question 15-------------------------------*/
var dinnerParty = ["Noman", "Umer", "Shaheer", "Rameel"];
var notAttendingDinner = "Rameel";
console.log("".concat(notAttendingDinner, " apologize for not attending the Dinner Party."));
//Replace Guests
var Replacetheguest = "Bilal";
dinnerParty[dinnerParty.indexOf(notAttendingDinner)] = Replacetheguest;
dinnerParty.forEach(function (dinner) {
    console.log("Dear ".concat(dinner, ",would you like to join me for dinner?"));
});
