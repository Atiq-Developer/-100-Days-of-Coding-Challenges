//we are making a function which taking two parameter one is string secondone is number
function mixedtype(text: string, age: number): string {
  return text + age;
}
let answer = mixedtype;
console.log(answer("Age :", 30));
