/*-----------------Question-37------------------------*/
function make_shirt(size: string = "Medium", message: string = "Coding Demands Logic") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt(); // Default large and message
make_shirt("Large"); // Default message, medium size
make_shirt("small", "Dive into Coding"); // Custom message, small size