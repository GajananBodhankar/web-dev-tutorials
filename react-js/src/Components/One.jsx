import React from "react";
import { CustomUseContext } from "../Context/CustomContext";

function One() {
  const { count, setCount } = CustomUseContext();
  return <div>I am One and my count is {count}</div>;
}

export default One;
