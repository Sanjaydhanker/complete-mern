const buttons = document.querySelectorAll(".button");
const result = document.getElementById("result");

let string = "";

buttons.forEach(function (button) {
  //   console.log(button.innerHTML);
  button.addEventListener("click", function (e) {
    // console.log(e.target.innerHTML);
    result.value = e.target.innerHTML;
    if (e.target.innerHTML === "AC") {
      result.value = "";
    } else if (e.target.innerHTML === "=") {
      string = eval(string);
      result.value = string;
    } else {
      string += e.target.innerHTML;
      result.value = string;
    }
  });
});
