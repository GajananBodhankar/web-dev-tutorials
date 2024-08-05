import { useState } from "react";
import "./App.css";
import Parent from "./Components/Parent";
import { WrapContext } from "./Context/CustomContext";

function App() {
  const [s, c] = useState(1);
  return (
    // <WrapContext>
    //   <Parent />
    // </WrapContext>
    <div>
      hello
      {s ? (
        <>
          <p>hi</p>
          <p>hi</p>
        </>
      ) : null}
    </div>
  );
}

export default App;
