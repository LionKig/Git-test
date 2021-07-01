import Speaker from "./Speaker";
import { data } from "../../SpeakerData";
import { useState , useEffect } from "react";
import ReactPlaceholder from "react-placeholder/lib";

function SpeakersList({ showSessions }) {

  const [speakersData, setSpeakersData] = useState([]);
  const [isloading , setIsloading ] = useState( true ) ;
  const [error , setError] = useState("") ;
  const [hasErrored , setHasErrored] = useState(false) ;

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve , ms )) ;

  useEffect(() => {
    async function delayFunc(){
      try{
        await delay(2000) ;        
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

  if( hasErrored === true ){
    return (
      <div className = "text-danger">
        ERROR : <b>loading Speaker Delayed {error}</b>
      </div>
    ) ;
  }

 // if( isloading === true ) return <div>LOADING.......</div>

  return (
    <div className="container speakers-list">
      <ReactPlaceholder type = "media" rows = {25} className="speakerslist-placeholder"
       ready={isloading===false}>
        <div className="row">
        
          {speakersData.map(function (speaker) {
            return (
              <Speaker
                key={speaker.id}
                speaker={speaker}
                showSessions={showSessions}
                onFavoriteToggle={() => {
                  onFavoriteToggle(speaker.id);
                }}
              />
            );
          })}        
        </div>
      </ReactPlaceholder>
    </div>
  );
}

export default SpeakersList;
