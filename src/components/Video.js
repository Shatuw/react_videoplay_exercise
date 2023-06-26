import React, { useState, useRef } from 'react';
import videoAddress from '../rabbit320.mp4'


export default function Video () {
//const sampleVid="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
const [windFwd, setWindFwd] = useState(false);
const [windBwd, setWindBwd] = useState(false);
//playing?:
const [isPlaying, setIsPlaying] = useState(false);
const videoRef = useRef(null);

// let intervalFwd;
// let intervalBwd;
const [intervalId, setIntervalId] = useState(null);

// useEffect(() => {
//     return () => {
//         clearInterval(intervalBwd);
//         clearInterval(intervalBwd);
//     }
// },[windFwd,windBwd])

//playbtn-func:
const togglePlay = () => {
    if (isPlaying) {
        videoRef.current.pause();
    } else {
        videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
};
// progressstate:
const [progress, setProgress] = useState(0);

const handleProgress = () => {
    const duration = videoRef.current.duration;
    const currentTime = videoRef.current.currentTime;
    const progress = (currentTime / duration) * 100;
    setProgress(progress);
};

const toggleStop = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false)
    // clearInterval(intervalBwd);
    // clearInterval(intervalFwd);
}
//-------------------------Khatuna------------------
const handleButtonMouseUp = () => {
    clearInterval(intervalId);
    setIntervalId(null);
};
const windBackward = () => {
    if (videoRef.current.currentTime > 1){    
    videoRef.current.currentTime -= 1; // Adjust the value to your desired backward duration
    }
    else{
        clearInterval(intervalId);
    }
};

const windForward = () => {
    if(videoRef.current.currentTime < videoRef.current.duration - 1){
    videoRef.current.currentTime += 1; // Adjust the value to your desired forward duration
    }
    else{
        clearInterval(intervalId);
    }
};

const handleBackwardMouseDown = () => {
    clearInterval(intervalId);
    const id = setInterval(windBackward, 200); // Adjust the interval duration as needed
    setIntervalId(id);
  };
  const handleForwardMouseDown = () => {
    clearInterval(intervalId);
    const id = setInterval(windForward, 200); // Adjust the interval duration as needed
    setIntervalId(id);
  };

  // do it with only 1 event : "onClick" ... dont work ... ';...;'
  const vorw = () => {
    if (windFwd || windBwd){
        console.log('inside if');
        handleButtonMouseUp()
        setWindFwd(false);
        setWindBwd(false);
    }
    else{
        console.log('inside else');
        handleForwardMouseDown()
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
    }
  }
//----interval-functionality (going backward)----
// const windBackward = () => {
//     if (videoRef.current.currentTime <= 1){
//         toggleStop();//defined above (for the stop-button)
//     }
//     else{
//         videoRef.current.currentTime -= 1; //3 in seconds as "3s"
//     }
// };//end----function
// //----interval-functionality (going forward)(same but diffenrent)----
// const windForward = () => {
//     if(videoRef.current.currentTime >= videoRef.current.duration - 1){
//         toggleStop();
//     }
//     else{
//         videoRef.current.currentTime += 1;
//     }
// };//end----function

//----backward-function----
// const mediaBackward = () => {
//     clearInterval(intervalFwd);
       
//     if (windBwd) {
//         clearInterval(intervalBwd);
//         videoRef.current.pause();// let it play again
//         setWindBwd(false);
//     }
//     else{// start winding backwards
//         videoRef.current.pause();
//         setWindBwd(true);
//         intervalBwd = setInterval(windBackward, 500);
//     }
// };//end---function

// // //----foward-function (same but different)----
// const mediaForward = () => {
//     clearInterval(intervalBwd);
//     intervalFwd = setInterval(windForward, 500);

//     if(windFwd){
//         setWindFwd(false);
//         videoRef.current.pause();
//         console.log('iam in if now');
//         clearInterval(intervalFwd);
//         return;
//     }
//     else{
//         videoRef.current.pause();
//         setWindFwd(true);//state
//     }
// };//end-function


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

