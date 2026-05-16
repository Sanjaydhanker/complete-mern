const password = 25367;

const myNum = new Number(879102);

// console.log(password);
// console.log(myNum);

// ===================math ===================

// console.log(Math);
// console.log(Math.abs(-3)); //negative to positive
// console.log(Math.random()); // generate random number
// console.log(Math.round(3.4));
// console.log(Math.floor(7.9)); //min value
// console.log(Math.ceil(3.1)); //max value

let otp = Math.random() * 1000000;
// console.log(Math.floor(otp));

const min = 1000;
const max = 2000;

const otpNum = Math.floor(Math.random() * (max - min + 1) + min);

console.log(otpNum);
