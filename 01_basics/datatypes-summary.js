//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);     /* not same */

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// 1.stack memory(primitive data type) 
let MyYoutubeName = "Hitesh"

let anotherName = MyYoutubeName
console.log(anotherName);    /* output=>Hitesh  */

anotherName = "Chai Aur Code"

console.log(MyYoutubeName);     /* output=>Hitesh  */
console.log(anotherName);       /* output=>Chai Aur Code  */

// here js provide a copy of original data


// 2.Heap memory (Non-primitive data type)

let userOne = {
    name : "Hitesh",
    email: "hitesh@gmail.com"
}

let userTwo = userOne;

userTwo.email = "chai@gmail.com"

console.log(userOne.email);        /* output=> chai@gmail.com */
console.log(userTwo.email);        /* output=> chai@gmail.com  */

// here js provide a reference of real data
