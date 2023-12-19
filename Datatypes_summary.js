// primitive
// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

let str = "Anil"
const number = 20
const isLoggedIn = true
let state = null
let city;
let sym = Symbol('123')
let sym1 = Symbol('123')
console.log(sym == sym1);

console.table([str, number, isLoggedIn, state, city, sym, sym1])

//Non-Primitive (Reference)
// Array, Objects, Functions