let set = new Set();

// Add values
set.add(1);
set.add(2);
set.add(2); // duplicate ignored
set.add("Hello");
set.add({ name: "Amit" });

// Check size
console.log(set.size); 

// Check if value exists
console.log(set.has(1)); 

// Delete a value
set.delete(2);

// Iterate through Set
for (let value of set) {
  console.log(value);
}


// Practice Map and Set
function unique(arr) {
  return Array.from(new Set(arr));
}

let values = [
  "Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) );




