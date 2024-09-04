import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  function counter() {
    setCount((count) => count + 1);
  }

  useEffect(() => {
    document.title = `Count: ${count}`;
  });

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={counter}>Submit</button>
    </>
  );
};

export default App;
