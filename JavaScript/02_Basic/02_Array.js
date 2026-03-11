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
