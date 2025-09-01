const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Amit", email: "amit@example.com"})
    }, 1000)
})

promiseTwo.then(function(user){
    console.log(user);
})



