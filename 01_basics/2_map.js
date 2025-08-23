let user = new Map();

// Add Values
user.set("name", "Amit");
user.set(1, "number as key");
user.set(true, "boolean as key");

console.log(user.get("name"));
console.log(user.get(1));  

// check if keys exist

console.log(user.has(true));

// Delete a key
// console.log(user.delete(1));
console.log(user);

// Size of map

console.log(user.size);


// iteration over map
let fruitsMap = new Map([
  ['apple', 500],
  ['banana', 350],
  ['pears',  50]
]);

// iterate over keys (vegetables)
for (let fruits of fruitsMap.keys()) {
  console.log(fruits);
}

// iterate over values (amounts)
for (let amount of fruitsMap.values()) {
  console.log(amount); 
}

// iterate over [key, value] entries
for (let entry of fruitsMap) { // the same as of recipeMap.entries()
  console.log(entry); 
}

// Object.entries: Map from Object
let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);
console.log(prices.orange);


// Object.fromEntries: Object from Map
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries()); 

console.log(obj.orange);

