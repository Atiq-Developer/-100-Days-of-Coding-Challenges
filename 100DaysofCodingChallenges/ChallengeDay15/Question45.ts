/*--------------------Question-45--------------------------*/
// Define the function to create a car object
function createCar(make: string, model: string, year: number, options: { [key: string]: any } = {}): { make: string; model: string; year: number; [key: string]: any } {
    // Create the car object with fixed parameters
    const car = { make, model, year, ...options };
    
    return car;
}

// Example usage:
const car1 = createCar('Toyota', 'Camry', 2020, { color: 'Red', engine: 'V6', transmission: 'Automatic', features: ['Bluetooth', 'Backup Camera'] });
const car2 = createCar('Honda', 'Civic', 2022, { color: 'Blue', features: ['Sunroof', 'Heated Seats'] });

console.log(car1);
console.log(car2);
