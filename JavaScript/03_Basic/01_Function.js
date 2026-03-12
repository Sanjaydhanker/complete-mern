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
console.log(loginMessage("Sanjay"));
