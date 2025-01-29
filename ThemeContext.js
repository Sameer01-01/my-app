import React, { createContext, useState, useContext } from 'react';
import { StatusBar } from 'react-native';

// Create Theme Context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [pushNotification, setPushNotification] = useState(false); // Added state for push notifications

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // Determine the background color and text color based on darkMode
  const theme = {
    backgroundColor: darkMode ? '#000000' : '#ffffff', // Dark or light background
    textColor: darkMode ? '#ffffff' : '#000000', // Dark or light text
    statusBarStyle: darkMode ? 'light-content' : 'dark-content', // Status bar style
  };

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, pushNotification, setPushNotification, theme }}>
      <StatusBar barStyle={theme.statusBarStyle} />
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme context
export const useTheme = () => useContext(ThemeContext);
