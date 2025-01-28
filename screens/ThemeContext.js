import React, { createContext, useState, useContext } from 'react';
import { StatusBar } from 'react-native';

// Create Theme Context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const theme = {
    backgroundColor: darkMode ? '#121212' : '#ffffff',
    textColor: darkMode ? '#ffffff' : '#000000',
    statusBarStyle: darkMode ? 'light-content' : 'dark-content',
  };

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, theme }}>
      <StatusBar barStyle={theme.statusBarStyle} />
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
