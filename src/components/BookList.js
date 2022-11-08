import React, { Component } from 'react';
import { useThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useThemeContext();

  const theme = isLightTheme ? light : dark;

  return (
    <div className="book-list" style={{color: theme.textColor, background: theme.bg}}>
        <ul>
          <li style={{background: theme.ui}}>the way of kings</li>
          <li style={{background: theme.ui}}>the name of the wind</li>
          <li style={{background: theme.ui}}>the final empire</li>
        </ul>
      </div>
  )
}

export default BookList;

