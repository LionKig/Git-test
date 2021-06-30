import SpeakerList from './SpeakerList' ;
import { data } from '../../SpeakerData';
import Header from './Header' ;

function Speakers() {
    return (
        <div className = "container-fulid">
            <Header />
            <SpeakerList data = { data } />
        </div>
    ) ;
}

export default Speakers ;