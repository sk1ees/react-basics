import React, { useRef, useState } from "react";

const RefTest = () => {
  const [count, setCount] = useState(0);
  let secondCount = useRef(0);
  const handleClick = () => {
    secondCount.current = secondCount.current + 1;
    console.log(secondCount)
    setCount(count + 1);
  };
  return (
    <>
      <h1>Count : {count}</h1>
      <h1>Count : {secondCount.current}</h1>
      <button onClick={handleClick}>Increment</button>
    </>
  );
};

export default RefTest;
