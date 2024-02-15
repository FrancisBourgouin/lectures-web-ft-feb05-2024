const grindCoffee = (amountOfCoffee) => {
  console.log(`About to grind ${amountOfCoffee}g of coffee!`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const hasFailed = Math.random() > 0.2;
        if (hasFailed) {
          throw new Error("Oh no. There is coffee beans everywhere");
        }
        return resolve("Ouh smells very nice, nice grind with no clumps");
      } catch (error) {
        return reject(error.message);
      }
    }, 2000);
  });
};

const boilWater = () => {
  console.log("About to boil some water");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const hasFailed = Math.random() > 0.5;
        if (hasFailed) {
          throw new Error("OH MY GOD THERE'S HOT WATER EVERYWHERE");
        }
        return resolve("Water is ready!");
      } catch (error) {
        return reject(error.message);
      }
    }, 2000);
  });
};

const pourWater = () => {
  console.log("About to pour some water on my beans");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const hasFailed = Math.random() > 0.5;
        if (hasFailed) {
          throw new Error(
            "Awwww it's overflowing, or flowing too fast I don't know anymore"
          );
        }
        return resolve("Coffee is ready! 🎷🎷🎺🎺");
      } catch (error) {
        return reject(error.message);
      }
    }, 2000);
  });
};

const enjoyCoffee = () => {
  console.log("About to drink the best cup ever");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const hasFailed = Math.random() > 0.7;
        if (hasFailed) {
          throw new Error("COUGH COUGH I just choked :(");
        }
        return resolve("A MA ZING!🔥🔥🔥🔥");
      } catch (error) {
        return reject(error.message);
      }
    }, 2000);
  });
};

const report = (message) => console.log(`✅ ${message}`);
const outputError = (message) => console.log(`⛔ ${message}`);

const grindAndReport = () => {
  return grindCoffee(20).then(report);
};

grindAndReport()
  .then(boilWater)
  .then(report)
  .then(pourWater)
  .then(report)
  .then(enjoyCoffee)
  .then(report)
  .catch(outputError)
  .finally(() => console.log("This coffee adventure is now over."));
