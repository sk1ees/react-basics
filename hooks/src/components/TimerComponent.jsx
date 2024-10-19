import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const TimerComponent = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevtimer) => prevtimer + 1);
    }, 1000);
    return () => {
      console.log("unmounted!");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <h1> Timer : {timer}</h1>
    </>
  );
};

export default TimerComponent;
