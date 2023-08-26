import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [changeColor, setChangeColor] = useState(false);

  return (
    <AppContext.Provider value={{ changeColor, setChangeColor }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;