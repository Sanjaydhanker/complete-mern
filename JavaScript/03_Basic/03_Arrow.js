const user = {
  username: "Sanjay",
  age: 20,

  welcomeMassage: function () {
    console.log(this.username);
    console.log(this); // for current
  },
};

// user.welcomeMassage()

// console.log(this);

//arrow function

function one() {
  username = "sanjay";
  console.log(this.username);
}
// one()

const two = function () {
  username = "dev";
  console.log(this.username);
};
// two()        // this work in normal function

const arr = () => {
  username = "harsh";
  console.log(this.username);
};

// arr()          //this not work in arrow function

// const addTwoNumber=(num1 , num2)=>{
//       return num1 + num2
// }

// const addTwoNumber=(num1 , num2)=> num1 + num2
// const addTwoNumber=(num1 , num2)=> (num1 + num2)
const addTwoNumber = (num1, num2) => ({ username: "sanjay" });

console.log(addTwoNumber(2, 3));
