import React from "react";
import Signup from "./Signup";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
