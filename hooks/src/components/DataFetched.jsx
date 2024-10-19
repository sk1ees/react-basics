import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const DataFetched = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {data.map((item) => {
            return <li>{item.title}</li>;
          })}
        </ul>
      )}
    </>
  );
};

export default DataFetched;
