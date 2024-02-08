// Functions
// Referencing
// Calling

// Referencing
// Structural type (array, object, derivatives)

// const bob = { name: "Bob" };
// bob.name = "robert";

const addTwoNumbers = function (a, b) {
  return a + b;
};

const multiplyTwoNumbers = function (a, b) {
  return a * b;
};
const sumOfTwoNumbers = addTwoNumbers;

// Function calling
addTwoNumbers(5, 6); // 11
sumOfTwoNumbers(5, 6); // 11

const functionThatTakesAFunction = function (functionHere) {
  const result = functionHere(11, 12);
  console.log(result);
};

functionThatTakesAFunction(addTwoNumbers);
functionThatTakesAFunction(multiplyTwoNumbers);
