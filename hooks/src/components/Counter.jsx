import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(count * 2);
  }, [count]);

  return (
    <div>
      <h1>Count : {count}</h1>
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <h1>Multiple : {total}</h1>
      <br />
    </div>
  );
};

export default Counter;
