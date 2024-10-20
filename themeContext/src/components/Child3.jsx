import React, { useContext } from "react";
import "../App.css";
import { ThemeContext } from "../App";
const Child3 = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleClick = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="insideBox">
      Hello {theme}
      <button
        onClick={() => {
          toggleClick();
          console.log(theme);
        }}
      >
        Change
      </button>
    </div>
  );
};

export default Child3;
