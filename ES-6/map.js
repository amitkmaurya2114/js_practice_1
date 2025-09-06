/* A Map is an object that stores key-value pairs, similar to objects, but with differences:

1. Keys can be of any data type (objects, functions, primitive values), unlike plain objects where keys are strings.
2. Maintains the original insertion order of keys. */

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let fruitsQuantity = fruits.get("apples")

console.log(`Apples: ${fruitsQuantity}`)
