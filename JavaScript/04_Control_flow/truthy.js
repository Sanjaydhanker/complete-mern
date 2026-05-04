//falsy value

// undefined , null ,"",false,0,-0,BigInt(0n),NaN    other truthy value

//truthy value
//"dhjjdh" , [] ,{},"0","false"," " ,function(){}

const userEmail = [];
if (userEmail) {
  console.log("Got user email");
} else {
  console.log("User not found");
}
if (userEmail.length === 0) {
  console.log("Array is empty");
} else {
  console.log("array not empty");
}

const myObj = {};

if (Object.keys(myObj).length === 0) {
  console.log("Obj is empty");
} else {
  console.log("obj not empty");
}

//nullish colescing operator(??) : null undefined

let value;
// value = 4 ?? 10;
// value = null ?? 10
value = undefined ?? 10;
value = undefined ?? 10 ?? 200;
// console.log(value);

//terniary opretor
//condition ? true : false

const age = 26;

age >= 90 ? console.log("person is old") : console.log("Person is young");
