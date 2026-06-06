import { useState } from "react";
import AppContainer from "./components/AppContainer";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

function App() {
  const buttons = [
    "C",
    "Del",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    "00",
    ".",
    "=",
  ];

  const [inputVal, setInputVal] = useState("");

  const handleClickButton = (num) => {
    if (num === "Del") {
      const delVal = inputVal.slice(0, -1);
      setInputVal(delVal);
      return;
    }
    if (num === "C") {
      setInputVal("");
      return;
    }
    if (num === "=") {
      setInputVal(eval(inputVal));
      return;
    }
    setInputVal(inputVal + num);
  };

  return (
    <AppContainer>
      <Display inputVal={inputVal} />
      <Buttons buttons={buttons} handleClickButton={handleClickButton} />
    </AppContainer>
  );
}

export default App;
