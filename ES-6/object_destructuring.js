const person = {
  firstName: "Amit",
  lastName: "Kumar",
  age: 25,
  eyeColor: "Black"
};

// Destructuring 
let { firstName, age } = person;

console.log(firstName + " " + age)