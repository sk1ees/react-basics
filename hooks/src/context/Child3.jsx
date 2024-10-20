import React, { useContext } from "react";
import { ThemeContext } from "../main";
import "../App.css";
const Child3 = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <div className="container">
      Hello {theme}
      <button
        onClick={() => {
          toggleTheme();
        }}
      >
        Change the Theme
      </button>
    </div>
  );
};

export default Child3;
