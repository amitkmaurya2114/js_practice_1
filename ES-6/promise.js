/* A JavaScript Promise is an object representing the completion or failure of an 
 asynchronous operation and its values.*/

const myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise).
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);


// Demo

const demoPromise = new Promise(function(resolve, reject) {
  setTimeout(function() { resolve("Hello World!"); }, 3000);
});

demoPromise.then(function(value) {
  console.log(value);
});