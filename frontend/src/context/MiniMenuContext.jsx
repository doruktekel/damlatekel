import { createContext, useState } from "react";

export const MiniContext = createContext();

export const MiniProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <MiniContext.Provider value={{ show, setShow }}>
      {children}
    </MiniContext.Provider>
  );
};
