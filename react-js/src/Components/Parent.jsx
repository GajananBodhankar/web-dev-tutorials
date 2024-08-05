import React from "react";
import One from "./One";
import Two from "./Two";
import { CustomUseContext } from "../Context/CustomContext";

function Parent() {
  const { count, setCount } = CustomUseContext();
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <One />
      <Two />
    </div>
  );
}

export default Parent;
