//DEFINE A FUNCTION THAT ACCEPT MULTIPLE HOBBIES AS A FUNCTION
function multipleHobies(...hobies) {
    hobies.forEach((hobby) => {
        console.log(`I Enjoy ${hobby}`);
    });
}
multipleHobies("Cricket", "Gardeninng", "Coding", "Watching");
export {};
