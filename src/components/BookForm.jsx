import React, { useState } from 'react';
import { useBookContext } from '../contexts/BookContext';

const BookForm = () => {
   const { dispatch } = useBookContext();
   const [title, setTitle] = useState('');
   const [author, setAuthor] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      // addBook(title, author);
      dispatch({ type: 'ADD_BOOK', payload: { title, author } });

      setAuthor('');
      setTitle('');
   }

   return (
      <form onSubmit={handleSubmit}>
         <input
            required
            type="text"
            placeholder="book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
         />

         <input
            required
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
         />
         <input className='submitButton' type="submit" value="add book" />
      </form>
   );
};

export default BookForm;
