import React from 'react';


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
    <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
  )
}
