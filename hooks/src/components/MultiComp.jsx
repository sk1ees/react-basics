import React, { useEffect, useState } from "react";

const MultiComp = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(1);
  const [double, setDouble] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setTimer((prevtimer) => prevtimer + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    setDouble(timer*timer);
  }, [timer]);

  return (
    <>
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <h1>Timer : {timer}</h1>
      <h1>Double : {double}</h1>
    </>
  );
};

export default MultiComp;
