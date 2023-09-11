import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//all parent and root node have h-full class for responsive
//it insert in index.css too that is better (bot not tailwind)
//Both is OK

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
