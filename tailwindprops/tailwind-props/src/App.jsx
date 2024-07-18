import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-8">
        Tailwind Test
      </h1>
      <Card nameText="Deep" btnText="Check it Out" />
      <Card nameText="Aniket" btnText="Click Me" />
    </>
  );
} 

export default App;
