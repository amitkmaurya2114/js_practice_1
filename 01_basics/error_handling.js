// // compile time error
// // Syntax Error

// // console.log(1;

// // Run time error
// // reference error

// // console.log(x)


// try{
//     console.log("try block stert here");
//     console.log(x);
//     console.log("try block stert here");
// }

// catch(err){
//     // define karte hai, error ke sath kya karna hai
//     // retry logic  
//     // fallback mechanism 
//     // logging
//     // cuatom error
//     console.log("I AM INSIDE CATCH BLOCK");
//     console.log("Your error is here: ",err);
// }

// finally{
//     console.log("I'll run everytime, as i am finally block");
// }



// lets create custom error

try{
    //reference error
    console.log(x)
}

catch(err){
    throw new Error("First declare the value of x");
}
