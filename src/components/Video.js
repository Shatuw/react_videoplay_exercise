import React, { useState, useRef } from 'react';
import videoAddress from '../rabbit320.mp4'


export default function Video () {
//const sampleVid="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
const [windFwd, setWindFwd] = useState(false);
const [windBwd, setWindBwd] = useState(false);

const intervalId = useRef(null);//keep winding interval in a useRef
//playing?:
const [isPlaying, setIsPlaying] = useState(false);

const videoRef = useRef(null);

//playbtn-func:
const togglePlay = () => {
    
    clearInterval(intervalId.current);//stop winding
    setWindBwd(false);
    setWindFwd(false);

    if (isPlaying) {//play or pause
        videoRef.current.pause();
    } else {
        if(videoRef.current.currentTime === videoRef.current.duration){
            videoRef.current.currentTime = 0;
        }
        videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
};
const replay = () => {
    if (videoRef.current.currentTime === videoRef.current.duration){
        setIsPlaying(false);
    }
}
// progressBar-state:
const [progress, setProgress] = useState(0);

const handleProgress = () => {
    const duration = videoRef.current.duration;
    const currentTime = videoRef.current.currentTime;
    const progress = (currentTime / duration) * 100;
    setProgress(progress);
    replay();
};

const toggleStop = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false)
    clearInterval(intervalId.current);
    
}
//......spaghetti on:
const handleButtonMouseUp = () => {
    clearInterval(intervalId.current);
};
const windBackward = () => {
    if (videoRef.current.currentTime > 1){    
    videoRef.current.currentTime -= 1; // Adjust the value to your desired backward duration
    }
    else{
        clearInterval(intervalId.current);
    }
};

const windForward = () => {
    if(videoRef.current.currentTime < videoRef.current.duration - 1){
    videoRef.current.currentTime += 1; // Adjust the value to your desired forward duration
    }
    else{
        clearInterval(intervalId.current);
    }
};

const handleBackwardMouseDown = () => {
    clearInterval(intervalId.current);
    intervalId.current = setInterval(windBackward, 200); // Adjust the interval duration as needed
     
  };
  const handleForwardMouseDown = () => {
    clearInterval(intervalId.current);
    intervalId.current = setInterval(windForward, 200); // Adjust the interval duration as needed
  };

  //onClick-winding backward or forward (4. try: i demand working now!)
  const vorw = () => {
    if (windFwd || windBwd){
        handleButtonMouseUp()
        setWindFwd(false);
        setWindBwd(false);
    }
    else{
        handleForwardMouseDown()
        setWindFwd(true);
    }
  }
  const zuruck = () => {
    if (windBwd || windFwd){
        handleButtonMouseUp()
        setWindFwd(false);
        setWindBwd(false);
    }
    else{
        handleBackwardMouseDown()
        setWindBwd(true);
    }
  }
    return (
        <div>
            <video 
                ref={videoRef}
                width="50%" 
                onTimeUpdate={handleProgress}
            >
                <source src={videoAddress} type="video/mp4" />
            </video>
            <div>
                <button onClick={togglePlay}>
                     {isPlaying ? "Pause" : "Play"}
                </button>
                <button onClick={toggleStop}>Stop</button>
                <progress value={progress} max="100" />
                {/* <button onClick={windBackward}>backward</button>
                <button onClick={windForward}>forward</button> */}
                <button
                onClick={zuruck}
                    // onMouseDown={handleBackwardMouseDown}
                    // onMouseUp={handleButtonMouseUp}
                >
                Backward
                </button>
            <button
            onClick={vorw}
                // onMouseDown={handleForwardMouseDown}
                // onMouseUp={handleButtonMouseUp}
            >
                Forward
            </button>
            </div>
        </div>
    )
}

//export default Video;

