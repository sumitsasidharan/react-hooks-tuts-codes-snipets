import React from 'react'
import { useBookContext } from '../contexts/BookContext'

const BookNavbar = () => {
   const { books } = useBookContext();

  return (
    <div className='navbar'>
      <h1>Ninja Reading List</h1>

      <p>Currently you have {books.length} books to get through...</p>
    </div>
  )
}

export default BookNavbar