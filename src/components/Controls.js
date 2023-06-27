import React, {useState, useRef} from 'react';
import Play from './controlBtns/Play';
import Stop from './controlBtns/Stop';
import Forward from './controlBtns/Forward';
import Backward from './controlBtns/Backward';
import Progress from './controlBtns/Progress';

export default function Controls({videoRef,progress,isPlaying,setIsPlaying}) {
  const intervalId = useRef(null);//keep winding interval in a useRef
  
  // wind-states to check direction (would be better with a second intervalRef, but hey it's already in and works)
  const [windFwd, setWindFwd] = useState(false);
  const [windBwd, setWindBwd] = useState(false);

 return (
    <div>
      <Play 
        videoRef={videoRef} 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        setWindBwd={setWindBwd} 
        setWindFwd={setWindFwd} 
        intervalId={intervalId}
      />
      <Stop 
        videoRef={videoRef} 
        setIsPlaying={setIsPlaying} 
        intervalId={intervalId}
      />
      <Progress progress={progress}/>
      <Backward 
        videoRef={videoRef} 
        intervalId={intervalId}
        windBwd={windBwd}
        windFwd={windFwd}
        setWindBwd={setWindBwd}
        setWindFwd={setWindFwd}
      />
      <Forward 
        videoRef={videoRef} 
        intervalId={intervalId}
        windBwd={windBwd}
        windFwd={windFwd}
        setWindBwd={setWindBwd}
        setWindFwd={setWindFwd}
      />
    </div>
  )
}
