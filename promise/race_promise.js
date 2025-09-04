let p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Value1")
    },5000)
});

let p2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Value2")
        // reject(new Error("Error"))
    },2000)
});

let p3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Value3")
    },3000)
});

let promise_all = Promise.race([p1, p2, p3])
promise_all.then((value) => {
    console.log(value)
})



