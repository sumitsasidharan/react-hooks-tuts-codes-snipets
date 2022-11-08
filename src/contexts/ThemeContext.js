import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

const INITIAL_STATE = {
  isLightTheme: true,
  light: { textColor: "#555", ui: "#ddd", bg: "#eee" },
  dark: { textColor: "#ddd", ui: "#333", bg: "#555" },
};
const ThemeContextProvider = ({ children }) => {
  const [themeProps, setThemeProps] = useState(INITIAL_STATE);

  const toggleTheme = () => {
   setThemeProps(prev => {
      return {
         ...prev,
         isLightTheme: !prev.isLightTheme
      }
   })
  }

  const context = { ...themeProps, toggleTheme };

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export default ThemeContextProvider;
