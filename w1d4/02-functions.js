// Why do we want functions?

// Better code organization
// Code reusability
// Easier to mesh code together (legibility)

const listOfNames = ["Eric", "Nofar", "Rylan", "Erin"];

const sayHello = function (listOfNames) {
  for (const name of listOfNames) {
    console.log(`Hello ${name}`);
  }
};

sayHello(listOfNames);

const sayBye = function (listOfNames) {
  for (const name of listOfNames) {
    console.log(`Bye ${name}`);
  }
};

sayBye(listOfNames);

const saySomethingToEveryone = function (listOfNames, isHello) {
  for (const name of listOfNames) {
    if (isHello) {
      console.log(`Hello ${name}`);
    } else {
      console.log(`Bye ${name}`);
    }
  }
};

const saySomethingToEveryoneAgain = function (listOfNames, greeting) {
  for (const name of listOfNames) {
    console.log(`${greeting} ${name}`);
  }
};

saySomethingToEveryoneAgain(listOfNames, "WAZZUP");

const someFunction = function (params) {};

// params can be , string, number, boolean, array, object
// Functions are objects!

const doSomethingFiveTimes = function (doSomething) {
  for (let i = 0; i < 5; i++) {
    doSomething();
  }
};

const sayPouet = () => console.log("Pouet pouet");

doSomethingFiveTimes(sayPouet);
// doSomethingFiveTimes(console.log("Pouet pouet"));

const addTwoNumbers = function (a, b) {
  return a + b;
};

// const result = addTwoNumbers(5, 5);
const result = console.log("Wiggle");

console.log(result);
