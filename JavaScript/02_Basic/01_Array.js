// Array

const fruitList = [];
// fruitList.push("Banana", "Apple", "Mango");
// console.log(fruitList);
// fruitList.pop();
// console.log(fruitList);

const myArray = [0, 1, 2, 3, 4, 5];

// myArray.push(6); //to add
// myArray.push(7); //to add
// myArray.pop(); //remove last value

// myArray.unshift(9); //add value at first
// myArray.shift();
// console.log(myArray.includes(5));
// console.log(myArray.indexOf(5));

const newArray = myArray.join();

// console.log(myArray);
// console.log(typeof newArray);

console.log("A", myArray);

const newArr1 = myArray.slice(0, 2);

console.log(newArr1);
console.log("B", myArray);

const newArr2 = myArray.splice(0, 2);

console.log(newArr2);
console.log("C", myArray);
