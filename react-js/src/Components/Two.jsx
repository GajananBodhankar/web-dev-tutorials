import React from "react";
import { CustomUseContext } from "../Context/CustomContext";

function Two() {
  const { count, setCount, name } = CustomUseContext();

  return (
    <div>
      I am Two component and my count is {count} and my name is {name}
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </div>
  );
}

export default Two;
