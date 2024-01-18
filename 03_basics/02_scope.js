var c =20
if (true){
    let a = 1
    const b = 2
    var c = 3
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const myName = 'anil'

    function two(){
        const lastName = 'gurjar'
        console.log(myName)
    }
    // console.log(lastName)
    // two()
}

// one()

if (true){
    const age = 'twenty five'

    if (true){
        const height = '8 feet'
        // console.log(`age is ${age} and height is ${height}`)
    }
    // console.log(height)
}

function addone(num){
    return num + 1
} // if i put console.log(addTwo(5)); before this function it runs.

console.log(addone(5))

const addTwo = function(num1){ //variable can hold function, objects, array. so I can declare function like this and if i put console.log(addTwo(5)); before this function it give error
    return num1 + 2
}
console.log(addTwo(5));