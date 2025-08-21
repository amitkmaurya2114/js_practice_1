// Singleton===========

// Object.create()

// Object literals=================

const JsUser = {
    name: "Amit",
    "full name": "Amit Kumar",
    age: 18,
    location: "Varanasi",
    email: "amit@xyz.com",
    isLoggedIn: false
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])


JsUser.email = "amit@abcd.com"
// Object.freeze(JsUser)
JsUser.email = "amit@micro.com"

console.log(JsUser.email)
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
