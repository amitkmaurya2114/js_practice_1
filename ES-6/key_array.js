// Create an Array Iterator object, containing the keys of the array

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x + " ";
  
}

console.log(text)
