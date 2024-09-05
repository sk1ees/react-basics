import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleData = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register", { name, email, password })
      .then((response) => {
        navigate("/login");
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="w-full min-h-screen bg-zinc-900 flex items-center justify-center">
        <div className="w-1/2 h-auto p-5 pb-12 bg-zinc-800 rounded-xl">
          <h1 className="text-3xl text-white text-center mt-12">
            Registration Form
          </h1>
          <form
            onSubmit={handleData}
            method="post"
            className="flex text-white  flex-col gap-7 rounded-lg mt-12 w-3/4 mx-auto bg-zinc-800 "
          >
            <input
              type="text"
              className="p-3 mx-5 bg-zinc-700 outline-none rounded-lg"
              placeholder="Enter your name..."
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="email"
              className="p-3 mx-5 bg-zinc-700 outline-none rounded-lg"
              placeholder="Enter your email..."
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              className="p-3 mx-5 bg-zinc-700 outline-none rounded-lg"
              placeholder="Enter your password..."
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="submit"
              className="px-5 py-2 text-white bg-blue-500 mx-5 rounded-lg cursor-pointer"
              value="Submit your Data"
            />
          </form>
          <h1 className="text-center text-white mt-7">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 ">
              Sign in
            </Link>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Signup;
