function wait(ms) {
  return new Promise((resolve, reject) => {
    // 1. Validate input
    if (typeof ms !== 'number' || ms < 0) {
      return reject(new Error('Invalid ms value'));
    }

    // 2. Do async work (timer) and then resolve
    setTimeout(() => {
      resolve(`Waited ${ms}ms`);
    }, ms);
  });
}

// Consume
wait(-2000)
  .then(msg => console.log('Success:', msg))
  .catch(err => console.error('Error:', err.message))
  .finally(() => console.log('Cleanup'));


// Promise task
function delay(ms) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve();
  }, ms)
    })
  
}

delay(3000).then(() => console.log('runs after 3 seconds'));