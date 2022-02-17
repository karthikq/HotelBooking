/** @format */

import React, { useState } from "react";

export const NavContext = React.createContext();

export const NavProvider = ({ children }) => {
  const [navState, setNavState] = useState(false);

  return (
    <NavContext.Provider value={{ value: navState, data: setNavState }}>
      {children}
    </NavContext.Provider>
  );
};
