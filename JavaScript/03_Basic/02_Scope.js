//block scope

var a = 100;
let b = 200;
const c = 300;
if (true) {
  var a = 10;
  let b = 20;
  const c = 30;

  //   console.log("Inner:", a);
  //   console.log("Inner:", b);
  //   console.log("Inner:", c);
}

// console.log(a);
// console.log(b);
// console.log(c);

function first() {
  const name = "sanjay";
  function second() {
    const age = 20;
    console.log(name);
  }
  //   console.log(age); //age is not defined because age is a child

  //   second();
}

// first();

if (true) {
  const username = "sanjay";
  if (username === "sanjay") {
    const age = 20;
    // console.log(`my name is ${username} and my age is ${age}`);
  }
  // console.log(age);        //because of blcoks
}
// console.log(username);      //because of blocks

console.log(addOne(3));

function addOne(num) {
  return num + 1;
}

//  addTwo(7)   //not acceptable
const addTwo = function (num1) {
  return num1 + 2;
};
