import React from 'react';
import { useThemeContext } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
   const { toggleTheme } = useThemeContext();

   return <button onClick={toggleTheme}>Toggle theme</button>;
};

export default ThemeToggle;
