/*
A safe integer is an integer that can be exactly represented as a double precision number.
The Number.isSafeInteger() method returns true if the argument is a safe integer. 

Safe integers are all integers from -(253 - 1) to +(253 - 1).
This is safe: 9007199254740991. This is not safe: 9007199254740992.
*/

console.log(Number.isSafeInteger(10));   
console.log(Number.isSafeInteger(12345678901234567890)); 

