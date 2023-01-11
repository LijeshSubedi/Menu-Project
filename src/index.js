import React from "react";
import { MenuProvider } from "./files/MenuContext";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MenuProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MenuProvider>
);
