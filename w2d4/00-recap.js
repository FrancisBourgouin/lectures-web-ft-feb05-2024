// Existential questions

// Asynchronous code
// Code that will be done eventually, will execute at the end, no matter the time it takes.

// Year 2038 bug

console.log("Before");

setTimeout(() => {
  console.log("Fast timeout!");
}, 0);

console.log("After");

// Consecutive timeouts, one after the other

// Nested Approach => Go more than 3-4 levels, Callback Hell

setTimeout(() => {
  console.log("3...");
  setTimeout(() => {
    console.log("2...");
    setTimeout(() => {
      console.log("1...");
    }, 1000);
  }, 1000);
}, 1000);

// Time increment Approach

setTimeout(() => {
  console.log("3...");
}, 1000);
setTimeout(() => {
  console.log("2...");
}, 2000);
setTimeout(() => {
  console.log("1...");
}, 3000);
