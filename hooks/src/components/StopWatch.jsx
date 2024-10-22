import React, { useRef, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);
  const buttonRef = useRef();
  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTime((prevtime) => prevtime + 1);
    }, 10);
    buttonRef.current.disabled = true;
  };
  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    buttonRef.current.disabled = false;
  };
  const resetTimer = () => {    
    stopTimer();
    setTime(0);
  };
  return (
    <>
      <h1>{time} seconds</h1>
      <button onClick={startTimer} ref={buttonRef}>
        Start
      </button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </>
  );
};

export default StopWatch;
