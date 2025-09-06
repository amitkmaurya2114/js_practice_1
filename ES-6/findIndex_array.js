// The findIndex() method returns the index of the first array element that passes a test function.

function myFunction(value, index, array) {
  return value > 18;
}

const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

console.log(first)
