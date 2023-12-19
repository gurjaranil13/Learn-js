// primitive
// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

let str = "Anil"
const number = 20
const isLoggedIn = true
let state = null
let city;
let sym = Symbol('123')
let sym1 = Symbol('123')
//console.log(sym == sym1);

// console.table([str, number, isLoggedIn, state, city, sym, sym1])

//Non-Primitive (Reference)
// Array, Objects, Functions

let states = ["Raj", "UP", "UK"];

let myProfile = {
    name: "Anil",
    age: 30,
    State : "Rajasthan"
}

//console.log(typeof states)
// console.log(typeof myProfile)

let myfun = function(){
    console.log("Hello world")
}

// myfun()

// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Reference Non primitive)

let name1 = "Anil"

let nameChange = name1
// console.log(nameChange);
nameChange = "Kartik"
// console.log(name1)
// console.log(nameChange)

let prof = {
    email: "anil@google.com",
    pass: 12345
}

let prof1 = prof
prof1.email = "kartik@google.com"

// console.log(prof.email)
// console.log(prof1.email)
