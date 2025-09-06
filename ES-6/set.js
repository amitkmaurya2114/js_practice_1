/* A Set is an object that stores unique values of any type (primitive values, functions, objects).

A Set can only contain unique values. An attempt to add a duplicate value will be ignored. */

// Create a Set
const letters1 = new Set();

// Add Values to the Set
letters1.add("a");
letters1.add("b");
letters1.add("c");

console.log(letters1)


//Variables
const letters = new Set();

// Create Variables
const a = 1;
const b = 2;
const c = 3;

// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);

console.log(letters);

// Listing the Elements

// Create a Set
const letters2 = new Set(["a","b","c"]);

// List all Elements
let text = "";
for (const x of letters2) {
  text += x;
}
console.log(text)
console.log(typeof letters)
console.log(letters instanceof Set);