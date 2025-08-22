function sayMyName(){
    console.log("A");
    console.log("M");
    console.log("I");
    console.log("T");
}
// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumber(2,4)
// addTwoNumber(2, "4")
// addTwoNumber(2, "a")
// addTwoNumber(2, null)

function addTwoNumber(number1, number2){
    let result = number1 + number2
    return result
}
const result = addTwoNumber(4, 5)
console.log("Result:", result);


// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Amit"))



function loginUserMessage(username){
    if(username === undefined){
        console.log("Please Enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Amit"))





