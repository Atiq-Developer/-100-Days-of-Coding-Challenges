/*------------------------------------------Question17------------------------------------*/
var shrinking_Guest = ["Atiq", "Noman", "Awais", "bilal", "kamran", "Ali", "Usama"];
console.log("Unfortunately,we are inviting 0nly two guests due to not arriving our new guest");
for (var i = shrinking_Guest.length - 1; i >= 2; i--) {
    var notinvited_guest = shrinking_Guest.pop();
    console.log("Sorry ".concat(notinvited_guest, ",you are not invited for dinner party."));
}
shrinking_Guest.forEach(function (availableguest) {
    console.log("Dear ".concat(availableguest, ", you are still iniviting for dinner party."));
});
shrinking_Guest.splice(0, shrinking_Guest.length);
console.log(shrinking_Guest);
