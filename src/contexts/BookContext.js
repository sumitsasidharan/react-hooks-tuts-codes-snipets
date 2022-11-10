import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

export const useBookContext = () => {
   return useContext(BookContext);
}

const INITIAL_STATE = [
   {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
   {title: 'the way of kings', author: 'brandon sanderson', id: 2},
   {title: 'the final empire', author: 'JK Rowling', id: 3},
   {title: 'the hero of ages', author: 'RR Tokien', id: 4},
]

// const getRandomID = () => {
//    return new Date().getTime()
// }

const BookContextProvider = ({children}) => {
   const [books, dispatch] = useReducer(bookReducer, [], () => {
      const localData = localStorage.getItem('books');
      return localData ? JSON.parse(localData) : []
   });

   useEffect(() => {
      localStorage.setItem('books', JSON.stringify(books));
   }, [books])

   // const addBook = (title, author) => {
   //    setBooks([...books, { title, author, id: getRandomID() }]);
   // }

   // const removeBook = (id) => {
   //    setBooks(prev => {
   //       return prev.filter(book => book.id !== id);
   //    })
   // }

   const context = { books, dispatch };

  return (
     <BookContext.Provider value={context}>{children}</BookContext.Provider>
  );
}

export default BookContextProvider