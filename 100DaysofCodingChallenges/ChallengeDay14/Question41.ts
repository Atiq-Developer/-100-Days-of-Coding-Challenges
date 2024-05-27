/*--------------------Question-41--------------------------*/
let magicians : string[] = ["Wilson","Shin","Ricky"]
function show_magician(magicians:string[]){
    magicians.forEach(magician => {
        console.log(`${magician}, One of the great magican in history`);
    })
} 
show_magician(magicians)