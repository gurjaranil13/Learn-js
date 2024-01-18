function myDetail(){
    console.log("hello")
}

// myDetail()

function addTwoNumbers(num1, num2){ // parameters
    console.log(num1 + num2)
}

// addTwoNumbers(1, 2) //arguments

function myCart(...num){ //spread operator or rest operator - use to store mult values in function
    return num
}
// console.log(myCart(200, 400, 300))

const skybags = {
    brand: 'skybag',
    quantity: 1
}

function handleObject(anyobject){
    console.log(`name is ${anyobject.brand} and quantity is ${anyobject.quantity}`);
}

// handleObject(skybags) //created a object and pass in this function
// handleObject({
//     brand: 'cello', //we can pass direct object here
//     quantity: 2
// })

const cartPrices = [200,414,588,477]

function getsecondPrice(getarray){
    return getarray[1]
}

// console.log(getsecondPrice(cartPrices))
// console.log(getsecondPrice([200,444,555,888]))

