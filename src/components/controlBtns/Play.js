import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay,faPause } from '@fortawesome/free-solid-svg-icons';

export default function Play({videoRef,isPlaying,setWindBwd,setWindFwd,intervalId,setIsPlaying}) {

    const togglePlay = () => {//play-button-func
        clearInterval(intervalId.current);//stop winding
        setWindBwd(false);
        setWindFwd(false);
    
        if (isPlaying) {//pause video
          videoRef.current.pause();
        } 
        else {
          //play from start if video is at the end  (replay)
          if(videoRef.current.currentTime === videoRef.current.duration){
            videoRef.current.currentTime = 0;
          }
          //play video
          videoRef.current.play();
        };
        //change play-state to opposite onClick
        setIsPlaying(!isPlaying);
    };//end func

  return (
    <button onClick={togglePlay}>
      {isPlaying ?  
      <FontAwesomeIcon icon={faPause} size="2xl" style={{color: 'grey',}} />
      : 
      <FontAwesomeIcon icon={faCirclePlay} size="2xl" style={{color: "green",}} />
      }
    </button>
  )
}
