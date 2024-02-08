const listOfNumbers = [42, 9001, 1337, 1];

const doubleUpArrow = (number) => number * 2; // return is implicit

const doubleUp = function (number) {
  return number * 2;
};

const tripleNumber = (number) => number * 3;

// Create a new list with the modified numbers

// Make a new structure
// Loop over the numbers
//    modify + append to structure
// Return the new structure

const homemadeMap = (listOfNumbers, callback) => {
  const output = [];

  for (let i = 0; i < listOfNumbers.length; i++) {
    const modifiedNumber = callback(listOfNumbers[i], i, listOfNumbers);
    output.push(modifiedNumber);
  }

  return output;
};

// const result = homemadeMap(listOfNumbers, tripleNumber);
// const result = homemadeMap(listOfNumbers, (number) => number - 1);
// const result = homemadeMap(listOfNumbers, () => 5);

const modifyAndLog = (number, index, array) => {
  console.log(`About to modify the number ${number} at position ${index}`);

  return number + Math.random();
};

// const result = homemadeMap(listOfNumbers, modifyAndLog);
const result = listOfNumbers.map(modifyAndLog);

console.log(result);
