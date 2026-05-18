const marvalHeros = ["Thor", "IronMan", "Captain America"];
const dcHeros = ["Superman", "Flash", "Batman"];

// marvalHeros.push(dcHeros);

// console.log(marvalHeros);
// console.log(marvalHeros[3][2]);

// =====concat ======
const hero = marvalHeros.concat(dcHeros);
// console.log(hero);

// =========spreate operator=============
const allHeros = [...marvalHeros, ...dcHeros];
// console.log(allHeros);

const anotherArr = [1, 2, 3, [4, 5, [6, 7, 4, [2, 3, 5]], 9]];

const realAnotherArray = anotherArr.flat(Infinity);

console.log(realAnotherArray);

const arr = [10, 20, 30, 40, 33, 44];

let newArr = arr.filter((myArr) => myArr > 30);
console.log(newArr);
