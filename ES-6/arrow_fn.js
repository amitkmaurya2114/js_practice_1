myFunction = (a, b) => a * b;
let result = myFunction(4, 5);
console.log(result);


// This will not work
let myFunction1 = (x, y) => { x * y } ;
console.log(myFunction1(3, 4))

// This will not work
let myFunction2 = (x, y) => return x * y ;
console.log(myFunction2(6, 7))


// Only this will work
let myFunction3 = (x, y) => { return x * y };
console.log(myFunction3(8, 9))







