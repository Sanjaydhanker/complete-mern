// ************* primitive DataType***********

// number, boolean, string, bigint, null, undefined ,symbol

let name = "harsh"; //string
let age = 18; //number
let isUserLoggedIn = true; //boolean
let userId = undefined; //undefined
let passWord = Symbol(123); //symbol
let temp = null; //obj

// console.table([name, age, isUserLoggedIn, userId, passWord, temp]);

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isUserLoggedIn);
// console.log(typeof userId);
// console.log(typeof passWord);
// console.log(typeof temp);

// ************* NonPrimitive DataType(Reference)***********

//Array , Function , Object

let user = {
  name: "Sanjay",
  Age: 21,
}; //object

const myFunction = () => {
  console.log("hello");
};

const hero = ["Shaktiman", "Superman", "Ironman"];

// console.log(typeof user);
// console.log(typeof myFunction);
// console.log(typeof hero);

// ++++++++++++++++++++++++Memory +++++++++++++++++++++

//primitive (stack memory)

let YoutubeName = "Chai or Code";

let newChannel = YoutubeName;

newChannel = "chai or js";

console.log(YoutubeName);
console.log(newChannel);

//Reference type  (heap memory)

let myObj = {
  userName: "Sanjay",
  age: 21,
};

let newObj = myObj;

newObj.userName = "dev";
newObj.age = 20;

console.log(myObj.userName);
console.log(newObj.userName);
