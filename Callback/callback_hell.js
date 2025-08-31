function registerUser(user, callback) {
    setTimeout(() => {
        console.log("User registered: ", user);
        callback();
    }, 1000)
}

function createOrder(user, callback) {
    setTimeout(() => {
        console.log("Order created for: ", user);
        callback();
    }, 1000)
}

function processPayment(user, callback) {
    setTimeout(() => {
        console.log("Payment processed for: ", user);
        callback();
    }, 1000)
}

function sendEmail(user, callback) {
    setTimeout(() => {
        console.log("Email sent to: ", user);
        callback();
    }, 1000)
}

function registerUser(user, callback) {
    setTimeout(() => {
        console.log("User registered: ", user);
        callback();
    }, 1000)
}

// Callback Hell

registerUser("Amit", function(){
    createOrder("Amit", function(){
        processPayment("Amit", function(){
            sendEmail("Amit", function(){
                console.log("All task completed!")
            })
        })
    })
})

