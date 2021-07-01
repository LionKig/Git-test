import { useState } from "react";


function useTheme(startingTheme = "light"){

    const [theme , setTheme ] = useState(startingTheme) ;

    function validationTheme(themeValue){
        if( themeValue === "dark"){
            setTheme ("dark" );
        }else if( themeValue === "light" ){
            setTheme("light") ;
        }
    }

    return {
        theme , setTheme : validationTheme ,
    };
}

export default useTheme ;
