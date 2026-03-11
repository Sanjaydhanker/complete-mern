let myDate = new Date();

console.log(myDate.getDate());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toString());
console.log(myDate.toTimeString());

let todayDate = new Date(2025, 6, 30); // to create my own date

// console.log(todayDate.toDateString());
let myTimeStamp = Date.now();

//  console.log(myTimeStamp);
//  console.log(todayDate.getTime());
//  newDate.toLocaleString('default' , {
//     weekday:"long"
//  })
