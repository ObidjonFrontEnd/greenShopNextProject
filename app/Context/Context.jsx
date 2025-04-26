'use client';

import { createContext, useContext, useEffect, useState } from 'react';


const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isOpenAuth, setIsOpenAuth] = useState(false); 
  const [error , setError] = useState(null); 
  const [isToken , setIstoken] = useState(false)
  useEffect(()=>{
    const token = JSON.parse(localStorage.getItem('token'))||null
    if(token){
      setIstoken(true)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ isOpenAuth, setIsOpenAuth  , error , setError , isToken , setIstoken}}>
      {children}
    </ThemeContext.Provider>
  );
}


export const useTheme = () => useContext(ThemeContext);
