import { data } from "../../SpeakerData";
import { useState , useEffect } from "react";


function useRequestSpeakers(delayTime=1000){

    const [speakersData, setSpeakersData] = useState([]);
    const [isloading , setIsloading ] = useState( true ) ;
    const [error , setError] = useState("") ;
    const [hasErrored , setHasErrored] = useState(false) ;

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve , ms )) ;

    useEffect(() => {
    async function delayFunc(){
        try{
        await delay(delayTime) ;        
        setIsloading( false ) ;
        setSpeakersData(data) ;
        }catch(e){
        setIsloading( false ) ;
        setError(e) ;
        setHasErrored(true) ;
        }
    }
    delayFunc() ;
    }) ;

    function onFavoriteToggle(id) {
        const speakersRecPrevious = speakersData.find(function (rec) {
            return rec.id === id;
        });
        const speakerRecUpdated = {
            ...speakersRecPrevious,
            favorite: !speakersRecPrevious.favorite,
        };
        const speakersDataNew = speakersData.map(function (rec) {
            return rec.id === id ? speakerRecUpdated : rec;
        });

        setSpeakersData(speakersDataNew);
    }

    return { speakerData , isloading , hasErrored , error , onFavoriteToggle } ;
}

export default useRequestSpeakers ;