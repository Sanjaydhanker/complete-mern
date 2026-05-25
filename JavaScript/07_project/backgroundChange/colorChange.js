const body = document.getElementById("body");
const buttons = document.querySelectorAll(".button");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    // console.log(e.target.id);
    if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "gray") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "orange") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "violet") {
      body.style.backgroundColor = e.target.id;
    }

    // switch (e.target.id) {
    //   case green:
    //     body.style.backgroundColor = "green";
    //     break;
    //   case gray:
    //     body.style.backgroundColor = "gray";
    //     break;
    //   case orange:
    //     body.style.backgroundColor = "orange";
    //     break;
    //   case violet:
    //     body.style.backgroundColor = "violet";
    //     break;

    //   default:
    //     break;
    // }
  });
});
