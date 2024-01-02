//objects singleton

const tinder = {}

tinder.id = 1
tinder.name = "dating App"

// console.log(tinder);

const myObj = {
    State: "Rajasthan",
    FullName: {
        RealName: {
            firstName: "Anil",
            lastName: "Gurjar"
        }
    }
}

// console.log(myObj)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);
