import React, { useState } from "react";

const TwoWay = () => {
  const [username, setUsername] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username);
  };
  return (
    <div className="">
      <form
        onSubmit={(e) => {
          submitHandler(e); 
        }}
      >
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="enter your name"
        />
        <input type="submit" value="Submit Now" />
      </form>
    </div>
  );
};

export default TwoWay;
