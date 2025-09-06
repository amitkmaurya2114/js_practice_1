//  The ... operator spreads an array or iterable into individual elements.

const numbers = [23,55,21,87,56];
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);

console.log(`min = ${minValue}`)
console.log(`max = ${maxValue}`)


// The ... operator can be used to join arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

console.log(arr3)
