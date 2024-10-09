import React, { useState } from "react";
import Card from "./Card";
import List from "./List";
const Movie = () => {
  const [movieData, setmovieData] = useState(List);
  const filterItem = (items) => {
    const updatedList = List.filter((item) => {
      console.log(item.category.indexOf(items));
      return item.category[item.category.indexOf(items)] === items;
    });
    setmovieData(updatedList);
  };
  return (
    <>
      <div className="nav">
        <button onClick={() => filterItem("action")}>Action</button>
        <button onClick={() => filterItem("horror")}>Horror</button>
        <button onClick={() => filterItem("fantasy")}>Fantasy</button>
        <button onClick={() => setmovieData(List)}>All</button>
      </div>

      <Card movieData={movieData} />
    </>
  );
};

export default Movie;
