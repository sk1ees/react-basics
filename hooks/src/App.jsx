import React, { useContext } from "react";
import Counter from "./components/Counter";
import TimerComponent from "./components/TimerComponent";
import DataFetched from "./components/DataFetched";
import ResizeWindow from "./components/ResizeWindow";

import MultiComp from "./components/MultiComp";
import Parent from "./context/Parent";
import { ThemeContext } from "./main";
import RefComp from "./components/RefComp";
import StopwatchRef from "./components/StopwatchRef";
import RefTest from "./components/RefTest";
import ButtonColor from "./components/ButtonColor";
import StopWatch from "./components/stopWatch";

const App = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      {/* <div style={{ backgroundColor: theme === "light" ? "white" : "black" }}>
        <Parent />
      </div> */}
      {/* <Counter /> */}
      {/* <TimerComponent /> */}
      {/* <DataFetched /> */}
      {/* <ResizeWindow /> */}
      {/* <TimerTest /> */}
      {/* <ResizeWind /> */}
      {/* <MultiComp /> */}
      {/* <RefComp />
      <StopwatchRef /> */}
      {/* <RefTest /> */}
      {/* <ButtonColor /> */}
      <StopWatch/>
    </>
  );
};

export default App;
