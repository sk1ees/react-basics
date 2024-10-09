import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Form from "./Form.jsx";
import TwoWay from "./TwoWay.jsx";
import Card from "./Card.jsx";
import AxiosTest from "./AxiosTest.jsx";
import UserContext from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContext>
      <AxiosTest />
    </UserContext>

    {/* <App /> */}
    {/* <Form /> */}
    {/* <TwoWay /> */}
    {/* <Card /> */}
  </StrictMode>
);
