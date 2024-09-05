import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-zinc-900 flex items-center justify-center">
        <div className="w-1/2 h-auto p-5 pb-12 bg-zinc-800 rounded-xl">
          <h1 className="text-3xl text-white text-center mt-12">Login Form</h1>
          <form
            action=""
            className="flex text-white  flex-col gap-7 rounded-lg mt-12 w-3/4 mx-auto bg-zinc-800 "
          >
            <input
              type="email"
              className="p-3 mx-5 bg-zinc-700 outline-none rounded-lg"
              placeholder="Enter your email..."
            />
            <input
              type="password"
              className="p-3 mx-5 bg-zinc-700 outline-none rounded-lg"
              placeholder="Enter your password..."
            />
            <input
              type="submit"
              className="px-5 py-2 text-white bg-blue-500 mx-5 rounded-lg cursor-pointer"
              value="Submit your Data"
            />
          </form>
          <h1 className="text-center text-white mt-7">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 ">
              Sign up
            </Link>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Login;
