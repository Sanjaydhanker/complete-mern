import { useState } from "react";
import AppName from "./components/AppName";
import Buttons from "./components/Buttons";
import CounterVal from "./components/CounterVal";
import AppContainer from "./components/AppContainer";

function App() {
  const [counterVal, setCounterVal] = useState(0);
  const handleIncreamentBtn = () => {
    setCounterVal(counterVal + 1);
  };
  const handleDecreamentBtn = () => {
    setCounterVal(counterVal - 1);
  };

  return (
    <>
      <AppContainer>
        <AppName />
        <CounterVal counterVal={counterVal} />
        <Buttons
          handleDecreamentBtn={handleDecreamentBtn}
          handleIncreamentBtn={handleIncreamentBtn}
        />
      </AppContainer>
    </>
  );
}

export default App;
