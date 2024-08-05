import { useState } from "react";
import "./App.css";
import Parent from "./Components/Parent";
import { WrapContext } from "./Context/CustomContext";
import FragmentComponent from "./ReactFragment/Fragment";
function App() {
  const [s, c] = useState(1);
  return (
    // For useContext uncomment from line 10  to line 12
    // <WrapContext>
    //   <Parent />
    // </WrapContext>

    // for react fragment uncomment from line 15
    <FragmentComponent />
  );
}

export default App;
