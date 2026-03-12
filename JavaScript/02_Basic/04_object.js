//Singleton Object

// const myObj = new Object()

// const myObj = {};

// myObj.id = "123";
// myObj.name = "Sanjay";

// console.log(myObj);

const myObj = {};

// myObj.srNo = 1;

// myObj.userInfo = { name: "Sanjay", id: "123", userLoggedIn: false };

// console.log(myObj);

// assign two object into one

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = { obj1, obj2 };

// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = { ...obj1, ...obj2 };

console.log(obj3);
console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));
console.log(obj3.hasOwnProperty("1"));
