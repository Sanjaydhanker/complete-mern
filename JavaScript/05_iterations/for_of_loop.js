let myArr = [0, 1, 2, 3, 4];

for (const num of myArr) {
  //   console.log(num);
}

const myName = "Sanjay";

for (const name of myName) {
  //   console.log(name);
}

const map = new Map();

map.set("IN", "India");
map.set("FR", "France");
map.set("USA", "United State Of America");
map.set("IN", "India"); //only for unique value

// console.log(map);

for (const [key, value] of map) {
  //   console.log(key + "=" + value);
}

const myObj = {
  userName: "Sam",
  Age: 18,
};

// for (const [key, value] of myObj) {
//   console.log(`${key} :- ${value}`);             //not allow obj
// }
