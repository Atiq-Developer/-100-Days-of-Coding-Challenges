// 🚀 Day 48 Challenge: Start Coding! 🚀
// Creates a Promise that resolves with "Hello, World!" after 2 seconds
const helloPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello, World!");
    }, 2000);
});
helloPromise.then((message) => console.log(message));
export {};
