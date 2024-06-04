/*------------------------Question-46---------------------*/
let myLaptop_config = {
    Make: "Dell",
    Model: "inspiron3521",
    year:"2014",
    describe: function(){
        console.log(`My Laptop Name is ${this.Make} ,Model: ${this.Model} and Published on: ${this.year}`);   
    }
}
myLaptop_config.describe()