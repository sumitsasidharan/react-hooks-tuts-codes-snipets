import React from 'react';
import BookForm from './components/BookForm.jsx';
import BookList from './components/BookList.jsx';


import BookNavbar from './components/BookNavbar';
import Navbar from './components/themeToggle/Navbar';
import ThemeToggle from './components/themeToggle/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
   return (
      <div className="App">
         <ThemeContextProvider>
            <AuthContextProvider>
               {/* <Navbar /> */}
               <BookContextProvider>
                  <BookNavbar />
                  <BookList />
                  <BookForm />
               </BookContextProvider>
               {/* <ThemeToggle /> */}
            </AuthContextProvider>
         </ThemeContextProvider>
      </div>
   );
}

export default App;
