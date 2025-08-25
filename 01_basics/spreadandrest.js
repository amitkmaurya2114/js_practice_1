// Spread

let arr = [1, 2, 3];
let arr2 = [...arr, 4, 5];

console.log(arr2);


let obj1 = { name: "Amit", age: 25 };
let obj2 = { ...obj1, city: "Delhi" };

console.log(obj2); 


// Rest

function addNumber(a,b,c,...other){
    console.log(other);
    return a+b+c;
}
const result = addNumber(2,3,4,5,6);
// console.log(result)
