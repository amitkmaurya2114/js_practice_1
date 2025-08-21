// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Smith"
tinderUser.loggedIn = false

// console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Amit",
            lastname: "Kumar"
        }
    }
}

// console.log(regularUser)
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstname)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}


// console.log(obj4)



