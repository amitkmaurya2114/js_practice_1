let p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Value1")
    },1000)
});

let p2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Value2")
    },2000)
});

let p3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Value3")
    },3000)
});

let promise_all = Promise.all([p1, p2, p3])
promise_all.then((value) => {
    console.log(value)
})






