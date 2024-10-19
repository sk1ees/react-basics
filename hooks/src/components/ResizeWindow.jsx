import React, { useEffect, useState } from "react";

const ResizeWindow = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleSize = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleSize);
  }, []);

  return (
    <>
      <h1> Width : {width}px</h1>
      <h1> Height : {height}px</h1>
    </>
  );
};

export default ResizeWindow;
