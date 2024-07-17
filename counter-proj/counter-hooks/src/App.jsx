import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addVal = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const removeVal = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      {/* let counter = 0; */}
      <h1>Counter Value: {counter}</h1>
      <p>worked on useEffect-hooks</p>
      <button onClick={addVal}>Increment Value </button>
      <br />
      <br />
      <button onClick={removeVal}>Decrement Value</button>
    </>
  );
}

export default App;
