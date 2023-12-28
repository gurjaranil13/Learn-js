// singleton


//objects literals

const mySym = Symbol("key1")

const myDetail = {
    name: "Anil",
    state: "Rajasthan",
    age: 25,
    "Full name": "Anil Gurjar",
    email: "anil@goscoodel.com",
    isLoggedIn: false,
    [mySym]: "key2",
    Last_login: ['monday', 'tuesday'],

}
// console.log(myDetail.email);
// console.log(myDetail["email"]);
// console.log(myDetail["Full name"]);
// console.log(typeof mySym);

myDetail.email = "anil@google.com"
// Object.freeze(myDetail) // now object is freeze and I can not change its values
myDetail.email = "anil@scoodel.com"
myDetail.age = 20

// console.log(myDetail)

myDetail.greeting = function(){
    console.log(`hello ${this.name}`)
}

console.log(myDetail.greeting())
// console.log(myDetail.greeting())