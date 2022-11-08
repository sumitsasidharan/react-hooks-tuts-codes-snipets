import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
   const [isAuthenticated, setIsAuthenticated] = useState(false);

   const toggleAuth = () => {
      setIsAuthenticated((prev) => !prev);
   };

   const context = {
      toggleAuth,
      isAuthenticated,
   };

   return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
   return useContext(AuthContext);
}

export default AuthContextProvider
