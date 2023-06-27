import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from '@fortawesome/free-solid-svg-icons';

export default function Backward({videoRef,intervalId,windBwd,windFwd,setWindBwd,setWindFwd}) {
    const windBackward = () => {//wind-interval-func (backward)
        if (videoRef.current.currentTime > 1){    
          videoRef.current.currentTime -= 1; // Adjust the value to your desired backward duration
        }
        else{
          clearInterval(intervalId.current);
        };
      };//end func
      
      const zuruck = () => {//backward-button-func
        if (windBwd || windFwd){
          clearInterval(intervalId.current);
          setWindFwd(false);
          setWindBwd(false);
        }
        else{
          clearInterval(intervalId.current);
          intervalId.current = setInterval(windBackward, 200);
          setWindBwd(true);
        };
      };//end func

return (
    <button onClick={zuruck}>
      <FontAwesomeIcon icon={faBackward} size="2xl" style={{color: "brown",}} />
    </button>
  )
}
