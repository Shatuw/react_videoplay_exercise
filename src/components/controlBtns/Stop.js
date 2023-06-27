import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStop } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

export default function Stop({videoRef,setIsPlaying,intervalId}) {
   
    const toggleStop = () => {//stop-button-func
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setIsPlaying(false)
        clearInterval(intervalId.current);
    };//end func

  return (
    <button onClick={toggleStop}>
      <FontAwesomeIcon icon={faStop} size="2xl" style={{color: "red",}} />
    </button>
  )
}
