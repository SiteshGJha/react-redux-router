import React from "react";
import { render } from "react-dom";

const Index = () => {
  return <div>Hi render index.js</div>;
};

render(<Index />, document.getElementById("app"));
