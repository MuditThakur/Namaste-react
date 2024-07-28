import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

//React element
  const heading = React.createElement("h1",{id:"heading"},"This is rendered code");
  const root = ReactDOM.createRoot(document.getElementById("root"));

  const jsxScript = <h1>This is rendered using jsx </h1>

  root.render(heading) 
  root.render(jsxScript   )