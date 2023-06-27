import React, { useState, useRef } from 'react';
import videoAddress from '../rabbit320.mp4';
import Controls from './Controls';

export default function Video () {
//const sampleVid="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
const videoRef = useRef(null);//html-videoNode-Ref
const [progress, setProgress] = useState(0);//progressBar-state
const [isPlaying, setIsPlaying] = useState(false);

const handleProgress = () => {// progressBar-func onTimeUpdate from video/browser
    const duration = videoRef.current.duration;
    const currentTime = videoRef.current.currentTime;
    const progress = (currentTime / duration) * 100;
    setProgress(progress);
    //if video finished, set play-state to false(for btn-labeling)
    if (videoRef.current.currentTime === videoRef.current.duration){
        setIsPlaying(false);
    };
};// end func
  

    return (
        <div className='player'>
            <video 
                ref={videoRef}
                onTimeUpdate={handleProgress}
            >
                <source src={videoAddress} type="video/mp4" />
            </video>
            <Controls 
                videoRef={videoRef} 
                progress={progress} 
                isPlaying={isPlaying} 
                setIsPlaying={setIsPlaying}
            />
        </div>
    )
}

//export default Video;

