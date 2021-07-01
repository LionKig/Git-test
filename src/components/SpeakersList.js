import Speaker from "./Speaker";
import ReactPlaceholder from "react-placeholder/lib";
import useRequestSpeakers from "../hook/useRequestSpeakers" ;

function SpeakersList({ showSessions }) {

  const {speakerData , isloading, hasErrored ,error , onFavoriteToggle , } = useRequestSpeakers(2000) ;
 
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
