/*------------------------------------Challenge Day 5 ---------------------- */
/*--------------------------------Question 14-------------------------------*/
var Dinner = ["Noman", "Umer", "Shaheer", "Rameel"];
//  for(let dinner of Dinner){
//     console.log(`Hello ${dinner}.You are invited for today dinner party`);
//  }
/*Another way is that */
Dinner.forEach(function (dinner) {
    console.log("Hello ".concat(dinner, ".You are invited for today dinner party"));
});
