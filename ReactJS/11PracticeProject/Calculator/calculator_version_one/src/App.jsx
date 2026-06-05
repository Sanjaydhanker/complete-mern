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

  return (
    <AppContainer>
      <Display />
      <Buttons buttons={buttons} />
    </AppContainer>
  );
}

export default App;
