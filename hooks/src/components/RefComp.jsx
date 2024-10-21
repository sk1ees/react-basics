import React, { useRef } from "react";

const RefComp = () => {
  const refContext = useRef(0);

  function handleClick() {
    refContext.current = refContext.current + 1;
    console.log(refContext.current);
  }

  return (
    <>
      {" "}
      <button onClick={handleClick}>Click Me</button>
    </>
  );
};

export default RefComp;
