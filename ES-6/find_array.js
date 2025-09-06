// The find() method returns the value of the first array element that passes a test function.



function myFunction(value, index, array) {
  return value > 15;
}

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

console.log(first)