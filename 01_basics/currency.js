const price = 10000000

console.log(Intl.NumberFormat().format(price));

// Currency Format
console.log("US: ",Intl.NumberFormat('en-US').format(price));
console.log("IN: ",Intl.NumberFormat('en-IN').format(price));


// Currency Format with Symbol
console.log("US: ",Intl.NumberFormat('en-US', {
    style: "currency",
    currency: "USD"
}).format(price));

console.log("IN: ",Intl.NumberFormat('en-IN', {
    style: "currency",
    currency: "INR"
}).format(price));


// Another Method
console.log("US: ",price.toLocaleString('en-US', {
    style: "currency",
    currency: "USD"
}))

console.log("IN: ",price.toLocaleString('en-IN', {
    style: "currency",
    currency: "INR"
}))

