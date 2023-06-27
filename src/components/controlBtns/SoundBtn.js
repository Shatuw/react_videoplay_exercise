import React,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute } from '@fortawesome/free-solid-svg-icons';

export default function SoundBtn({videoRef}) {
const [muted,setMuted] = useState(false);

    const toggleSound = () => {// mute or unmute sound
        if (muted){
            videoRef.current.muted = false;
        }
        else{
            videoRef.current.muted = true;
        }
        setMuted(!muted);
    };//end func

  return (
    <button onClick={toggleSound}>
        {muted ?
        <FontAwesomeIcon icon={faVolumeMute} size="2xl" style={{color: "orange", }} />
        :
        <FontAwesomeIcon icon={faVolumeMute} size="2xl" style={{color: "grey", }} />
        }
    </button>
  )
}
