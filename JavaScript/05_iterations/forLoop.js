//for

for (let index = 0; index <= 10; index++) {
  const element = index;
  if (element === 5) {
    // console.log("5 is best number");
    // return;
  }
  // console.log(element);
}

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    const table = i * j;
    // console.log(table);
  }
}

for (let i = 1; i <= 10; i++) {
  // console.log(`Table Number ${i}`);

  for (let j = 1; j <= 10; j++) {
    // console.log(`inner loop ${j} and outer value ${i}`);
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

const myHero = ["Shaktiman", "Thor", "Flash"];

for (let index = 0; index < myHero.length; index++) {
  const element = myHero[index];
  // console.log(element);
}

//break and continue

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log("5 is a best number");
    // break;
    continue; //print every number skip 5
  }
  console.log(`number start ${i}`);
}
