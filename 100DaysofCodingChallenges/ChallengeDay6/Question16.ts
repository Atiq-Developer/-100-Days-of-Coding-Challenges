/*------------------------------Challenge-Day-6--------Question16--------------------------*/
let guests : string[] = ["Noman","bilal","kamran","Ali"];
console.log("Oh Great!we have a big dinner Table.");
//At the beginning we have adding one guest
guests.unshift("Atiq");
//At the middle we also adding guest
guests.splice(guests.length/2,0 ,"Awais")
//At the end  we als0 adding one more guest
guests.push("Usama")

guests.forEach(guest=>{
    console.log(`Dear ${guest},Welcome yo big dinner Table party!`); 
})