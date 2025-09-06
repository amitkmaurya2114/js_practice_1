// for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.

// Looping over an Array

const cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + " ";
}
console.log(text)

// Looping over a String

let language = "Amitk";
let text1 = " ";

for (let x of language) {
    text1 += x + " " ;
}
console.log(text1)

