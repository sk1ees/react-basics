import React, { useState } from "react";
import "./style.css";
import Menu from "./menuAPI";
import MenuCard from "./MenuCard";
const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);

  const filterItem = (category) => {
    const updatedList = Menu.filter((item) => {
      return item.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button
            className="btn-group__item"
            onClick={() => filterItem("breakfast")}
          >
            BreakFast
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("lunch")}
          >
            Lunch
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("evening")}
          >
            Evening
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("dinner")}
          >
            Dinner
          </button>
          <button className="btn-group__item" onClick={() => setMenuData(Menu)}>
            All
          </button>
        </div>
      </nav>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
