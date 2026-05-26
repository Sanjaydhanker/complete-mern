const val = document.getElementById("value");
const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  //   console.log(button.id);
  button.addEventListener("click", function () {
    let currentVal = Number(val.innerHTML);
    if (button.id === "increase") {
      val.innerHTML = currentVal + 1;
    } else if (button.id === "decrease") {
      val.innerHTML = currentVal - 1;
    }
  });
});
