// Callbacks vs Promises

// Most cases, promises are the clear winner

// Promise, standard approach that we can use consistently

// [].map()
// [].filter()
// [].forEach()

new Promise((resolve, reject) => {
  //
});

// Async / Await
// Syntax sugar

// const someObj = new Object()
// const someObj = {}

const basicPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("YAY!");
    } else {
      reject("NAY!");
    }
  });
};

const asyncWithPromises = () => {
  return basicPromiseFunction()
    .then((message) => console.log(message))
    .catch((err) => console.log(err));
};

const asyncWithAwait = async () => {
  try {
    const message = await basicPromiseFunction();
    return console.log(message);
  } catch (error) {
    return console.log(error);
  }
};
