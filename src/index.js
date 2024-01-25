import React from "react";
import ReactDOM from "react-dom/client";
import "./general.css";
import "./classBased.css";
import "./functionBased.css";
import AppFunctionBased from "./AppFunctionBased.js";
import AppClassBased from "./AppClassBased.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppClassBased />
    <AppFunctionBased />
  </React.StrictMode>
);
