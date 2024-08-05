import React, { useState } from "react";
import DOMImage from "../assets/DOM .png";
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
    <div className="mainContainer">
      <h1>I am header</h1>
      {count ? (
        <>
          {" "}
          <p>I am One</p>
          <p>I am count {count}</p>
        </>
      ) : null}
      <img src={DOMImage} />
    </div>
  );
}

export default FragmentComponent;
