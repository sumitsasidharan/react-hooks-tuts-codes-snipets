import React, { Component } from 'react';
import { useBookContext } from '../../contexts/BookContext';
import { useThemeContext } from '../../contexts/ThemeContext';

const BookList = () => {
   const { isLightTheme, light, dark } = useThemeContext();
   const { books } = useBookContext();

   const theme = isLightTheme ? light : dark;

   return (
      <div
         className="book-list"
         style={{ color: theme.textColor, background: theme.bg }}>
         <ul>
            {books.map((book) => {
               return (
                  <li key={book.id} style={{ background: theme.ui }}>
                     {book.title}
                  </li>
               );
            })}
         </ul>
      </div>
   );
};

export default BookList;
