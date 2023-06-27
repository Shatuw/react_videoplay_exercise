import React from 'react'

export default function Forward({videoRef,intervalId,windBwd,windFwd,setWindBwd,setWindFwd}) {

    const windForward = () => {//wind-interval-func (forward)
        if(videoRef.current.currentTime < videoRef.current.duration - 1){
          videoRef.current.currentTime += 1; // Adjust the value to your desired forward duration
        }
        else{
          clearInterval(intervalId.current);
        };
      };//end func

  const vorw = () => {//forward-button-func
    if (windFwd || windBwd){
        clearInterval(intervalId.current);
        setWindFwd(false);
        setWindBwd(false);
    }
    else{
        clearInterval(intervalId.current);
        intervalId.current = setInterval(windForward, 200);
        setWindFwd(true);
    };
    };//end func

    return (
    <button onClick={vorw}>Forward</button>
  )
}
