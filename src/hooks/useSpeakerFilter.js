import { useState } from "react";

function useSpeakerFilter(startingSessions){
    const [showSessions , setShowSessions] = useState( startingSessions) ;

    return {
        showSessions , setShowSessions ,
    }
}

export default useSpeakerFilter ;