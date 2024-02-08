// Say Hi
const sayHi = function (name) {
  console.log(`Hi ${name}`);
};
// Say Bye
const sayBye = function (name) {
  console.log(`Bye ${name}`);
};
// YELL HOW ARE YOU
const yellHowAreYou = (name) => console.log(`HOW ARE YOU ${name.toUpperCase()}`);

const listOfNames = ["Victoria", "Joseph", "Trevor", "Daniel"];

const doSomethingToEveryone = function (listOfNames, doSomething) {
  for (const name of listOfNames) {
    doSomething(name);
  }
};

// sayHi is THE callback of doSomethingToEveryone
doSomethingToEveryone(listOfNames, sayHi);

// sayBye is THE callback of doSomethingToEveryone
doSomethingToEveryone(listOfNames, sayBye);

// yellHowAreYou is THE callback of doSomethingToEveryone
doSomethingToEveryone(listOfNames, yellHowAreYou);

// doSomethingToEveryone
// Higher Order Function (HOF)
// A function that needs another function to work

// Callback
// Relationship status between a function and a higher order function

// Anonymous functions
(function (name) {
  console.log(`Hi ${name}`);
});

doSomethingToEveryone(listOfNames, function (name) {
  console.log(`Hi ${name}`);
});

doSomethingToEveryone(listOfNames, (name) => console.log(`Hi ${name}`));

// const addTwoNumbers = function (a, b) {
//   console.log(a + b);
// };

// const num1 = 5
// const num2 = 10

// addTwoNumbers(num1, num2)
// addTwoNumbers([1,2,3])
