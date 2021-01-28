import { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";
import axios from "./axios.js";

function App() {

  const [videos,setVideos]=useState([]);

  useEffect(()=>{
    async function fetchPosts(){
      const response=await axios.get("/v2/posts");
      setVideos(response.data);
      // console.log(response);
       //  console.log(response.data);   //response.data is equal to videos because we are wrote under setVideos
      return response;
    }
     fetchPosts();
  },[]);

  // console.log(videos);  

    return (
    // BEM naming convention
    <div className="app">
      <div className="app__videos">

        {/* For every single Video return me a Video component with the following props */}
        {
          // videos.map((video/ele)=>{
    
          // })

          // insted of above, we can directly destructure the document keys(response data) otherwise we have to write video/ele.url,video.channel....
             videos.map(({url,channel,description,song,likes,messages,shares},ind)=>(
               <Video key={ind} url={url} channel={channel} description={description} song={song} likes={likes} messages={messages} shares={shares}/>
             ))

        }
        
        {/* <Video url={"Videos/video_1.mp4"} channel={"akulalalithesh"} description={"WOW EPIC MERN STACK CLONE"} song={"99 problems but REACT aint one"} likes={111} messages={222} shares={333}/>
        <Video />
        <Video url={"Videos/video_2.mp4"} channel={"akulalalithesh"} description={"WOW EPIC MERN STACK CLONE"} song={"99 problems but REACT aint one"} likes={432} messages={897} shares={345}/>
        <Video /> */}
        {/* <Video url={"https://demovideofwebsite.s3.amazonaws.com/Intro+music+10+seconds.mp4"} channel={"akulalalithesh"} description={"WOW EPIC MERN STACK CLONE"} song={"99 problems but REACT aint one"} likes={131} messages={250} shares={833}/>
        <Video />

        <Video url={"https://demovideofwebsite.s3.amazonaws.com/All+over+in+10+seconds.mp4"} channel={"akulalalithesh"} description={"Nature Lover"} song={"Echo Beach"} likes={111} messages={222} shares={333}/>
        <Video /> */}
      </div>

      {/* app container */}
      {/* videos */}
      {/* video */}
      {/* video */}
      {/* video */}
      {/* video */}
      {/* video */}
    </div>
  );
}

export default App;
