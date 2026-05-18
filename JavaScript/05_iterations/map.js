const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//  num.map((value) => {
//   let addTen = value + 10;
//   console.log(addTen);
// });

// const newNums = num.map((num) => num + 10);

const newNums = num
  .map((num) => num + 10)
  .map((num) => num * 5)
  .filter((num) => num > 70);

console.log(newNums);
