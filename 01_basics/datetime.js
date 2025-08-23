// Date

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);

let myCreatedDate = new Date(2025, 0, 3)
// console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2025, 0, 3, 5, 3)
// console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());


let newDate = new Date()
// console.log(newDate.getMonth());
// console.log(newDate.getDay());


// Time Difference 

let date1 = new Date("2025-08-20 10:00:00");
let date2 = new Date("2025-08-22 15:30:00");

let diffMs = date2 - date1; // milliseconds

// Calculate parts
let diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
let diffHrs = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let diffMin = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
let diffSec = Math.floor((diffMs % (1000 * 60)) / 1000);

let result = `${diffDays} days ${diffHrs} hours ${diffMin} minutes ${diffSec} seconds`;

console.log(result);

