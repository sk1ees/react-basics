import React, { useRef } from "react";

const ButtonColor = () => {
  const btn = useRef();
  console.log(btn);

  const handleColor = () => {
    btn.current.style.backgroundColor = "red";
    btn.current.style.borderColor = "white";
  };
  return (
    <>
      <button ref={btn}>Increment</button> <br />
      <button onClick={handleColor}>Change the Color</button>
    </>
  );
};

export default ButtonColor;
