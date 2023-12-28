const marvel_heros = ["superman", "Flash", "Batman"]
const dc_heros = ["Thor", "Ironman", "Spiderman"]

// marvel_heros.push(dc_heros)
//console.log(marvel_heros);
// const new_heros = marvel_heros.concat(dc_heros)
// console.log(new_heros); Push method change into original array but concat method does not change into original

const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, [6, 7, 8]]]
const real_array = another_array.flat(Infinity)
// console.log(real_array);

console.log(Array.isArray("Anil"))
console.log(Array.from("Anil"))
// console.log(Array.isArray("Anil"))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
