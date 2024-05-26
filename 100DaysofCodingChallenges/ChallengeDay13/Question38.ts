/*-------------------------Question-38-----------------------*/
function cities(City1:string = "Karachi", City2 :string="Lahore", Country :string= "Pakistan") {
    console.log(`${City1} is capital of Sindh.`);
    console.log(`${City2} is capital of Punjab.`);
    console.log(`${City1} and ${City2} are the cities of ${Country}`);
}
cities();// Default Parameters