// function myFunc() {
//   console.log(2 + 2);
// }

// myFunc();

// function addTwoNumber(num1, num2) {
//   console.log(num1 + num2);
// }

function addTwoNumber(num1, num2) {
  //   let result = num1 + num2;
  //   return result;

  return num1 + num2;
}

const result = addTwoNumber(1, 2);
// console.log("result:", result);

function loginMessage(userName) {
  if (userName === undefined) {
    console.log("Please enter a username");
  } else return `${userName} just logged in`;
}
// console.log(loginMessage("Sanjay"));

function calculateNumber(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateNumber(10, 20, 30, 50, 100));

const user = {
  userName: "Sanjay",
  userId: "123",
};

function handleObject(anyObj) {
  console.log(`username is ${anyObj.userName} and userId is ${anyObj.userId}`);
}
// handleObject(user);

const myArr = [1000, 200, 300];

function secondValue(value) {
  return value[1];
}

console.log(secondValue(myArr));
