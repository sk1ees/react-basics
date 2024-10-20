import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const ThemeContext = createContext();

const name = "light";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ThemeContext.Provider value={name}>
    <App />
  </ThemeContext.Provider>
  // </StrictMode>,
);
export { ThemeContext };
