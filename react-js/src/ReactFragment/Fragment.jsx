import React, { useState } from "react";

// IN react js fragment is something
// which is used to wrapping multiple elements
// so that the, React Compiler will idenfity it as
// as single parent element
//-------------------------
// If we wrap multiple elements in a fragment
//then in Real DOM, new Node will not be created
// NOTE : Ensure to refersh
function FragmentComponent() {
  const [count, setCount] = useState(1);
  return (
    <div>
      {count ? (
        <>
          {" "}
          <p>I am One</p>
          <p>I am count {count}</p>
        </>
      ) : null}
    </div>
  );
}

export default FragmentComponent;
