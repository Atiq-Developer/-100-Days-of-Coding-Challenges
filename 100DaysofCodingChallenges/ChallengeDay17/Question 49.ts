//DEFINE A FUNCTION THAT ACCEPT MULTIPLE HOBBIES AS A FUNCTION
function multipleHobies(...hobies: string[]) {
  hobies.forEach((hobby) => {
    console.log(`I Enjoy ${hobby}`);
  });
}
multipleHobies("Cricket", "Gardeninng", "Coding", "Watching");
