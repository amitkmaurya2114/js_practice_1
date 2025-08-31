function greet(name, callback){
    console.log("Hello, " + name );
    callback();
}

function goodMorning(){
    console.log("Good Morning!")
}

greet("Amit",goodMorning)