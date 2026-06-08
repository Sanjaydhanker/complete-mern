import { useState } from "react";
import AppName from "./components/AppName";
import Buttons from "./components/Buttons";
import CounterVal from "./components/CounterVal";
import AppContainer from "./components/AppContainer";
import CounterContextProvider from "./store/CounterContextProvider";

function App() {
  return (
    <>
      <CounterContextProvider>
        <AppContainer>
          <AppName />
          <CounterVal />
          <Buttons />
        </AppContainer>
      </CounterContextProvider>
    </>
  );
}

export default App;
