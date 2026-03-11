//singleton

//object literals

const mySym = Symbol("key1");

const jsUser = {
  name: "sanjay",
  "full name": "Sanjay Dhanker",
  [mySym]: "key1",
  age: 21,
  location: "Noida",
  email: "sanjaydhankergmail.com",
  isLoggedIn: false,
  lastLogin: ["Monday", "Sunday"],
};

// console.log(jsUser.age);
// console.log(jsUser["email"]);
// console.log(typeof jsUser[mySym]);
// console.log(jsUser["full name"]); //square notation

// jsUser.email = "sanjay@gmail.com";

// console.log(jsUser["email"]);
// Object.freeze(jsUser);
// jsUser.email = "sghhjb";

// console.log(jsUser);

jsUser.greeting = function () {
  console.log("hello world");
};

console.log(jsUser.greeting());
