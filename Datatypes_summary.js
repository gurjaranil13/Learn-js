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

console.log(typeof states)
console.log(typeof myProfile)

let myfun = function(){
    console.log("Hello world")
}

myfun()