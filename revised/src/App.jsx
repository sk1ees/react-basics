import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-4xl ">Number : {num}</h1>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setNum(num - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default App;
