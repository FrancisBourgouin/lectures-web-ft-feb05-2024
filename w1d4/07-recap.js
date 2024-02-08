// Functions!

// Arrow function vs normal expression

const arrowFunction = () => {
  console.log("Hello!");
};
const arrowFunctionOneLine = () => console.log("Hello!");

// Arrow are bad ? When you want to use them as methods (this doesn't work)

// Reusability in functions

const someFunction1 = () => console.log("Not reusable");

// By using params

const someFunction2 = (param) => console.log("More reusable", param);

// By using params

const someFunction3 = (param, callback) => callback("Even more reusable", param);

// Callbacks!

// Modify an element, like we did for map
// Check if valid, like we did for grades
// Perform an action, like we did for sayHi / sayBye

// Separation of concerns

const doSomethingToItemsOfAList = (list, callback) => {
  // What will callback do? I don't know.

  for (const item of list) {
    callback(item);
  }
};

// Object Oriented Programming
// Imperative programming
// Functional programming (FP)

// Everything is a function in => out
// Functions running on servers, that takes data in and output something
