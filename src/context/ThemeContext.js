import React , { createContext, useState } from "react" ;
import useTheme from "../hook/useTheme";


export const ThemeContext = createContext() ; 

function ThemeProvider( { children, startingTheme } ){

    const { theme , setTheme } = useTheme( startingTheme ) ;

    return (
        <ThemeContext.Provider value = {
            { setTheme , theme }
          }>
            {children}        
        </ThemeContext.Provider>
    ) ;

}

export {ThemeProvider} ;