import React from 'react'
import { useBookContext } from '../contexts/BookContext'
import BookDetails from './BookDetails';

const BookList = () => {
   const { books } = useBookContext();

  return books.length ? (
   <div className="book-list">
      <ul>
         {books.map(book => {
            return (
               <BookDetails key={book.id} book={book} />
            )
         })}
      </ul>
   </div>
  ) : (
   <div className="empty">No books to read.</div>
  )
}

export default BookList