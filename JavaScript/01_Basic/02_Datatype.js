"use strict"; //treat all code as a newer js

// primitive

let name = "harsh"; //string
let age = 18; //number
let isUserLoggedIn = true; //boolean
let userId = undefined; //undefined
let passWord = Symbol(123); //symbol
let temp = null; //obj

console.table([name, age, isUserLoggedIn, userId, passWord, temp]);

console.log(typeof name);
console.log(typeof age);
console.log(typeof isUserLoggedIn);
console.log(typeof userId);
console.log(typeof passWord);
console.log(typeof temp);

// non primitive

let user = {
  name: "Sanjay",
  Age: 21,
}; //object

const myFunction = () => {
  console.log("hello");
};

const hero = ["Shaktiman", "Superman", "Ironman"];

console.log(typeof user);
console.log(typeof myFunction);
console.log(typeof hero);
