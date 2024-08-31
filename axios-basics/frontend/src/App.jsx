import React, { useState } from "react";
import Axios from "axios";
import { useEffect } from "react";
const App = () => {
  const [data, setData] = useState("frontend");

  const getData = async () => {
    let response = await Axios.get("http://localhost:8000/home");
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>{data}</div>
     
    </>
  );
};

export default App;
