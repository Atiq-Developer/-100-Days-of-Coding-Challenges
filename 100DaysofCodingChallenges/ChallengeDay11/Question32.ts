/*-------------------------Question-32--------------------*/
let username : string[] = ["Ali" , "Atiq" , "arslan", "shahmir"]
let newNames : string[] = ["ali", "Usama", "Bilal", "Rafiq" , "zia"]
newNames.forEach(update=>{
    if(username.some(usernames => usernames.toLowerCase() === update.toLowerCase())){
        console.log(`${update} will need to enter a new user name`);
    }
    else{
        console.log(`${update} is available..`);
    }
})
