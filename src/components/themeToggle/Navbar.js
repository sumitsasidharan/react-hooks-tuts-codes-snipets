import React from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import { useThemeContext } from '../../contexts/ThemeContext';

const Navbar = () => {
   const { isLightTheme, light, dark } = useThemeContext();
   const { isAuthenticated, toggleAuth } = useAuthContext();

   const theme = isLightTheme ? light : dark;

   return (
      <nav style={{ background: theme.ui, color: theme.textColor }}>
         <h1>Context App</h1>
         <button onClick={toggleAuth}>
            {isAuthenticated ? 'Log Out' : 'Log In'}
         </button>

         <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
         </ul>
      </nav>
   );
};

export default Navbar;
