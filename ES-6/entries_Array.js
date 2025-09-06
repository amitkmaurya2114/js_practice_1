// Create an Array Iterator, and then iterate over the key/value pairs

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  console.log(x)
}

