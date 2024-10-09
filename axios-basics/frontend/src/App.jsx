import React, { useState } from "react";
import Axios from "axios";

const App = () => {
  const [data, setData] = useState("frontend");

  const getData = async () => {
    let response = await Axios.get("http://localhost:8000/home");
    setData(response.data);
  };

  return (
    <>
      <div>{data}</div>
      <button onClick={getData}>Change</button>
    </>
  );
};

export default App;
