/*----------------------Question-42-------------------*/
let magicians : string[] = ["Wilson","Shin","Ricky"]
function show_magician(magicians:string[]){
    magicians.forEach(magician => {
        console.log(`${magician} is a magician`);
    })
} 
show_magician(magicians)
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great,";
    }
}

make_great(magicians); // Modifies the original array
show_magician(magicians); // Shows modified names