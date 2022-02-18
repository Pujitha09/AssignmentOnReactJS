import React from "react";
import ReactDOM from "react-dom";
import logo from "./liz.jpg";
import Script from "./Script";
import "./styles.css";

ReactDOM.render(
  <div>
    <center>
      <img className="img" src={logo} />
      <Script />
    </center>
  </div>,
  document.getElementById("root")
);
