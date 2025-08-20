const name = "Amit"
const repoCount = 50

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);


const gameName = new String('amit-kumar')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.split('-'));



console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = '    Amit     '
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://amit.com/amit%20kumar"
console.log(url.replace('%20', '-'));

console.log(url.includes('amit'))
console.log(url.includes('maurya'))
