const myObj = {
  js: "JavaScript",
  py: "Python",
  cpp: "C++",
};

for (const key in myObj) {
  //   console.log(`${key} :- ${myObj[key]}`);
}

const myHero = ["Shaktiman", "Flash", "Superman"];

for (const key in myHero) {
  console.log(myHero[key]);
}

const map = new Map();

map.set("IN", "India");
map.set("FR", "France"); //no iteration on map
map.set("USA", "United State Of America");
map.set("IN", "India"); //only for unique value
