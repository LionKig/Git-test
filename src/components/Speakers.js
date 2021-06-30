import SpeakerList from './SpeakerList' ;
import { useState } from "react";
import SpeakerToolbar from './SpeakerToolbar' ;

function Speakers({data , theme , settheme }){

    const [showSessions, setShowSessions] = useState(true) ;

    return ( 
        <>
            <SpeakerToolbar theme = {theme}  settheme = {settheme} 
            showSessions = {showSessions} setShowSessions = {setShowSessions}/>
            <SpeakerList data = { data } showSessions = {showSessions}/>
        </>
    ) ;    
}

export default Speakers ;