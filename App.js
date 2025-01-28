import React from 'react';
import { ThemeProvider } from './ThemeContext'; // Import your ThemeProvider
import Navigations from './Navigations'; // Your navigations file

export default function App() {
  return (
    <ThemeProvider>
      <Navigations />
    </ThemeProvider>
  );
}
