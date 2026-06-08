import { createContext } from "react";

const CounterContext = createContext({
  counterVal: 0,
  handleIncreamentBtn: () => {},
  handleDecreamentBtn: () => {},
});

export default CounterContext;
