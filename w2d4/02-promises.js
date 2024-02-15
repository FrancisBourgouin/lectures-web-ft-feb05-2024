// Promises!

// Commitment, Assurance of something
// Always in the future, asynchronous

// Pending

// Broken
// Fulfilled
// Finished / Resolved

const enjoyCoffee = (nextStepIfSuccess, nextStepIfFail) => {
  console.log("About to drink the best cup ever");

  setTimeout(() => {
    try {
      const hasFailed = Math.random() > 0.8;
      if (hasFailed) {
        throw new Error("COUGH COUGH I just choked :(");
      }
      return nextStepIfSuccess("A MA ZING!🔥🔥🔥🔥");
    } catch (error) {
      return nextStepIfFail(error.message);
    }
  }, 2000);
};

enjoyCoffee(
  (message) => {
    console.log(message);
  },
  (error) => {
    console.log(error);
  }
);

const promise = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("YAY!");
  } else {
    reject("SAD FACE");
  }
});

promise
  .then((message) => console.log(message))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finished"));
