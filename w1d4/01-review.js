// Existential questions!

// Function definition, hoisting

// someFunction();

function someFunction() {
  console.log("Hello!");
}

// someFunction();
// Function expression

const someOtherFunction = function () {
  console.log("Hello again!");
};

// someOtherFunction();

// Arrow function expression

const yetAnotherFunction = () => {
  console.log("CW shows are great I guess");
};

const singleLineFunctions = () => console.log("One statement");

// IIFE
// Immediatly invoked function expression

(function () {
  const bob = "bob";
  console.log("NO NAME HERE!");
})();

(function () {
  const bob = "bob";
  console.log("NO NAME HERE!");
})();

// function someFunction() {
//   console.log("MWAHAHAHAHAHA!");
// }
