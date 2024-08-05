import { createContext, useContext, useState } from "react";

const CreateCustomContext = createContext(null);
//always use "children" as a prop whose type is component
export function WrapContext({ children }) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("gajanan");
  return (
    <CreateCustomContext.Provider value={{ count, setCount, name, setName }}>
      {children}
    </CreateCustomContext.Provider>
  );
}

export function CustomUseContext() {
  const customContext = useContext(CreateCustomContext);
  return customContext;
}
