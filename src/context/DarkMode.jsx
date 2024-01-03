import React, { createContext, useContext, useState } from 'react';

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const contextValues = {
    darkMode,
    toggleDarkMode,
  };

  return <DarkModeContext.Provider value={contextValues}>{children}</DarkModeContext.Provider>;
};


