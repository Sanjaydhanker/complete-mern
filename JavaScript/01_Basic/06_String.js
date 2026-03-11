const fname = "Sanjay";
const age = 21;

// console.log(fname + age + "Sanjay");    //prefer to dont use this type use vectic

// console.log(`Hello my name is ${fname} and my age is ${age}`);

const myName = new String("sanjay-fc");

// console.log(myName[0]);
// console.log(myName.__proto__);   //to see object

// console.log(myName.length);   //to check length

// console.log(myName.toUpperCase());
// console.log(myName.charAt(2));   // to print char by position

// console.log(myName.indexOf(n))   //to check char position

const newString = myName.substring(0, 6); //slice

// console.log(newString);

const anotherName = myName.slice(0, 4);
// console.log(anotherName);

const trimname = "      sanjay     ";
// console.log(trimname);
// console.log(trimname.trim());      //to cut space

const url = "https://sanjay.com%20dhanker";

console.log(url.replace("%20", "-"));

console.log(url.includes("sanjay"));

console.log(myName.split("-"));
