import React from "react";

const Form = () => {
  const work = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="">
      <form
        onSubmit={(e) => {
          work(e);
        }}
      >
        <input type="text" placeholder="enter your name" />
        <input type="submit" value="Submit Now" />
      </form>
    </div>
  );
};

export default Form;
