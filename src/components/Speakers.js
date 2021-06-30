import SpeakerList from './SpeakerList' ;
import { data } from '../../SpeakerData';
import Header from './Header' ;
import SpeakerToolBar from './SpeakerToolBar' ;

function Speakers() {
    return (
        <div className = "container-fulid">
            <Header />
            <SpeakerToolBar />
            <SpeakerList data = { data } />
        </div>
    ) ;
}

export default Speakers ;