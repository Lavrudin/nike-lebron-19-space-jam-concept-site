import React from "react";
import ReactDOM from "react-dom/client";
import Home from "../src/Pages/Home";
import Header from "./components/Header";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>
);
