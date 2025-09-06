// The Object.assign() method copies properties from one or more source objects to a target object

// Create Target Object
const person1 = {
  firstName: "Amit",
  lastName: "kumar",
  age: 25,
  eyeColor: "black"
};

// Create Source Object
const person2 = {firstName: "Anne",lastName: "Smith"};

// Assign Source to Target   // Object.assign(targetObject, sourceObject)

let final = Object.assign(person1, person2);

console.log(final)
