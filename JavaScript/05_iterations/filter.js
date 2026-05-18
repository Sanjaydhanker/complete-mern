const coding = ["js", "py", "C++", "html"];

const allitems = coding.forEach((item) => {
  //   console.log(item);
  return item; //foreach not return any value
});
// console.log(allitems);

const item = coding.filter((item) => item == "js");

// console.log(item);

const num = [10, 35, 32, 11, 56, 43, 22];

// const myNum = num.filter((item) => item >= 30);
// console.log(myNum);

// using foreach

const newNum = [];
num.forEach((element) => {
  if (element > 30) {
    newNum.push(element);
  }
});
// console.log(newNum);

const products = [
  {
    id: 1,
    name: "iPhone 15",
    category: "Mobile",
    price: 79999,
    rating: 4.8,
    inStock: true,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    category: "Mobile",
    price: 69999,
    rating: 4.6,
    inStock: false,
  },
  {
    id: 3,
    name: "MacBook Air M3",
    category: "Laptop",
    price: 124999,
    rating: 4.9,
    inStock: true,
  },
  {
    id: 4,
    name: "Dell XPS 13",
    category: "Laptop",
    price: 99999,
    rating: 4.5,
    inStock: true,
  },
  {
    id: 5,
    name: "Boat Rockerz 450",
    category: "Headphones",
    price: 1999,
    rating: 4.1,
    inStock: false,
  },
  {
    id: 6,
    name: "Sony WH-1000XM5",
    category: "Headphones",
    price: 29999,
    rating: 4.9,
    inStock: true,
  },
  {
    id: 7,
    name: "HP Pavilion",
    category: "Laptop",
    price: 64999,
    rating: 4.2,
    inStock: true,
  },
  {
    id: 8,
    name: "Realme Narzo",
    category: "Mobile",
    price: 15999,
    rating: 4.0,
    inStock: true,
  },
  {
    id: 9,
    name: "JBL Flip 6",
    category: "Speaker",
    price: 8999,
    rating: 4.4,
    inStock: false,
  },
  {
    id: 10,
    name: "iPad Air",
    category: "Tablet",
    price: 59999,
    rating: 4.7,
    inStock: true,
  },
];

const userProduct = products.filter(
  (pr) => pr.rating > 4 && pr.category == "Mobile",
);

console.log(userProduct);
