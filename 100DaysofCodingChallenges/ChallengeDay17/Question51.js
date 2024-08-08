//Calculating the area of rectangle by arrow funtion
//This method is hardcoded
const ractangle_Area = () => {
    let length = 2;
    let width = 4;
    // Area of rectangular formula is A= l*w
    let Area = length * width;
    return Area;
};
let totalArea = ractangle_Area();
console.log(`This is Hardcoded arrowfunction ${totalArea}`);
//Original faction or simople function declaration
function calculatearea(width, lenght) {
    return width * lenght;
}
//Refracting into arrowFuntion
const calculateareaRect = (width, length) => width * length;
console.log(`This is parameter arrowfuntion answer ${calculateareaRect(6, 7)}`);
export {};
