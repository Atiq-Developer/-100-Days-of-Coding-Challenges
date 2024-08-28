// 🚀 Day 47 Challenge: Question141:  Start Coding! 🚀
// Example use of the 'await' reserved word in asynchronous TypeScript
async function fetchData(): Promise<void> {
  try {
    // Assuming fetchSomething returns a Promise of some data
    const data = await fetchSomething();
    console.log(data);
    // The 'await' keyword pauses the execution until the Promise settles, and then resumes with the resolved value.
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
  }
}

// A mock function to simulate an asynchronous operation
function fetchSomething(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fetched data");
    }, 2000);
  });
}

fetchData();

console.log(
  "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
);
