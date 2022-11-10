import React from 'react';
import { useBookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
   const { dispatch } = useBookContext();

   return (
      <li onClick={() => dispatch({ type: 'REMOVE_BOOK', payload: book.id })}>
         <div className="title">{book.title}</div>
         <div className="author">{book.author}</div>
      </li>
   );
};

export default BookDetails;
