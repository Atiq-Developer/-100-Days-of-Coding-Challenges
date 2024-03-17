/*------------------------------------------Question17------------------------------------*/
let shrinking_Guest : string[] = ["Atiq","Noman","Awais","bilal","kamran","Ali", "Usama"];
console.log("Unfortunately,we are inviting 0nly two guests due to not arriving our new guest");

for (let i = shrinking_Guest.length - 1; i >= 2; i--){
    let notinvited_guest = shrinking_Guest.pop();
    console.log(`Sorry ${notinvited_guest},you are not invited for dinner party.`);
}

shrinking_Guest.forEach(availableguest=>{
    console.log(`Dear ${availableguest}, you are still iniviting for dinner party.`);
})

shrinking_Guest.splice(0,shrinking_Guest.length);
console.log(shrinking_Guest);



