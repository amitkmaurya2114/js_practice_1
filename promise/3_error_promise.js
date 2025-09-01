const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if (!error){
            resolve({username: "Amit", password: "12345"})
        }
        else
            reject("ERROR: Something went wrong!")
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
})

