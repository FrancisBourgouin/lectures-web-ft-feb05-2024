// Coffee !

// Manage errors!
// (╯°□°）╯︵ ┻━┻

// Throw an error
// Catch an error
// Throw Uncaught
// const bob = 1;
// try {
//   // bob = 2;
//   throw new Error("Some error");
// } catch (error) {
//   console.log("Oh no.");
// }

// console.log("hehe");

// Grind coffee beans (async)
//   It may succeed
//   Or not..
const grindCoffee = (amountOfCoffee, nextStep) => {
  console.log(`About to grind ${amountOfCoffee}g of coffee!`);

  setTimeout(() => {
    try {
      const hasFailed = Math.random() > 0.8;
      if (hasFailed) {
        throw new Error("Oh no. There is coffee beans everywhere");
      }
      return nextStep(undefined, "Ouh smells very nice, nice grind with no clumps");
    } catch (error) {
      return nextStep(error.message, undefined);
    }
  }, 2000);
};

// grindCoffee(20, (message) => {
//   console.log(message);
// });

// Boil water (async)
//  It may succeed
//  Or not..

const boilWater = (nextStep) => {
  console.log("About to boil some water");

  setTimeout(() => {
    try {
      const hasFailed = Math.random() > 0.8;
      if (hasFailed) {
        throw new Error("OH MY GOD THERE'S HOT WATER EVERYWHERE");
      }
      return nextStep(undefined, "Water is ready!");
    } catch (error) {
      return nextStep(error.message, undefined);
    }
  }, 2000);
};

// Pour water over the beans (async)
//  It may succeed
//  Or not..
const pourWater = (nextStep) => {
  console.log("About to pour some water on my beans");

  setTimeout(() => {
    try {
      const hasFailed = Math.random() > 0.8;
      if (hasFailed) {
        throw new Error(
          "Awwww it's overflowing, or flowing too fast I don't know anymore"
        );
      }
      return nextStep(undefined, "Coffee is ready! 🎷🎷🎺🎺");
    } catch (error) {
      return nextStep(error.message, undefined);
    }
  }, 2000);
};

// Enjoy the cup (async)
//  It may succeed
//  Or not..

const enjoyCoffee = (nextStep) => {
  console.log("About to drink the best cup ever");

  setTimeout(() => {
    try {
      const hasFailed = Math.random() > 0.8;
      if (hasFailed) {
        throw new Error("COUGH COUGH I just choked :(");
      }
      return nextStep(undefined, "A MA ZING!🔥🔥🔥🔥");
    } catch (error) {
      return nextStep(error.message, undefined);
    }
  }, 2000);
};

grindCoffee(20, (error, message) => {
  if (error) {
    return console.log(":(", error);
  }
  console.log(message);
  boilWater((error, message) => {
    if (error) {
      return console.log(":(", error);
    }
    console.log(message);
    pourWater((error, message) => {
      if (error) {
        return console.log(":(((", error);
      }
      console.log(message);
      enjoyCoffee((error, message) => {
        if (error) {
          return console.log("SO CLOSE YET SO FAR", error);
        }
        console.log(message);
      });
    });
  });
});
