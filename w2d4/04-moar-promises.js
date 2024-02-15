const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 4000);
});

// console.log(promise);

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

// // for(let i = 0; i < promise; i++){
// //  BAD!
// // }

// promise.then((number) => {
//   for (let i = 0; i < number; i++) {
//     console.log(i);
//   }
// });

const listOfPromises = [promise, promise2];

// One fail, we all fail
Promise.all(listOfPromises).then((data) => console.log(data));

// Gives only the fastest
Promise.race(listOfPromises).then((data) => console.log(data));

// Slowest sort ever

const listOfNumbers = [2000, 1, 80, 70, 1000];

const anotherListOfPromises = [];
for (const number of listOfNumbers) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(number);
    }, number);
  });

  anotherListOfPromises.push(promise);
}

Promise.race(anotherListOfPromises).then((data) => console.log(data));
