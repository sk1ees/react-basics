import React, { createContext, useContext, useState } from "react";
import Child1 from "./components/Child1";
import "./App.css";
const ThemeContext = createContext();
const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div
      className="container"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Child1 />
      </ThemeContext.Provider>
    </div>
  );
};
export { ThemeContext };
export default App;
