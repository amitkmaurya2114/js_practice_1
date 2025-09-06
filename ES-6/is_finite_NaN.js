// The global isFinite() method returns false if the argument is Infinity or NaN

console.log(isFinite(10/0));       
console.log(isFinite(10/1)); 


// The global isNaN() method returns true if the argument is NaN. Otherwise it returns false

console.log(isNaN("Hello"));
console.log(isNaN(34));
