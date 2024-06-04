/*---------------------Question-47-----------------*/
let myLaptop_config = [
  { 
    make: "Dell", 
    model: "XPS 15",
     year: 2021 
  },
  {
     make: "Apple", 
     model: "MacBook Pro", 
     year: 2020 
  },
  { 
    make: "HP", 
    model: "Spectre x360", 
    year: 2021 
  },
  { 
    make: "Lenovo", 
    model: " ThinkPad X1 Carbon", 
    year: 2023 
  }
];
let [laptop1, laptop2, ...rest] = myLaptop_config;
console.log(laptop1);
console.log(laptop2);
console.log(rest)
