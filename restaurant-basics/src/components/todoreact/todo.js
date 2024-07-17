import React, { useState } from "react";
import "./style.css";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  //   add the items functions
  const addItem = () => {
    if (!inputData) {
      alert("plz fill the data!");
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, myNewInputData]);
      setInputData("");
    }
  };

  //   delete functions

  const deleteItem = (index) => {
    const updatedItem = items.filter((currElem) => {
      return currElem.id !== index;
    });
    setItems(updatedItem);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todo-logo" srcset="" />
            <figcaption>Add your list here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="enter your list"
              className="form-control"
              value={inputData}
              onChange={(event) => {
                setInputData(event.target.value);
              }}
            />
            <i className="fa fa-solid fa-plus add-btn" onClick={addItem}></i>
          </div>
          {/* show our items  */}

          <div className="showItems">
            {items.map((currElem, index) => {
              return (
                <div className="eachItem" key={currElem.id}>
                  <h3>{currElem.name}</h3>
                  <div className="todo-btn">
                    <i className="far fa-solid fa-edit add-btn"></i>
                    <i
                      className="far fa-solid fa-trash-alt add-btn"
                      onClick={() => {
                        deleteItem(currElem.id);
                      }}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          {/* remove all buttons */}
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove all">
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
