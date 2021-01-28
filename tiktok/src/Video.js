import React,{useRef, useState} from 'react';
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({url,channel,description,song,likes,messages,shares}) {
    // false, because the video is not playing intially
    const [playing,setPlaying]=useState(false);
    const videoRef= useRef(null)
     
    const handleVideoPress=()=>{
        // if video is playing
        // stop it...

        // if video is not playing
        // play it...

        // current means the current/active video 

        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }
        else{
            videoRef.current.play();
            setPlaying(true);
        }
    }


    return (
        <div className="video">

           
            <video onClick={handleVideoPress} className="video__player" loop ref={videoRef} src={url}></video>
            {/* <iframe onClick={handleVideoPress} className="video__player" loop ref={videoRef} src={url}></iframe> */}
          

            {/* VideoFooter */}

              <VideoFooter channel={channel} description={description} song={song}/>

            {/* VideoSidebar */}
            <VideoSidebar likes={likes} messages={messages} shares={shares}/>

        </div>
    )
}


export default Video


