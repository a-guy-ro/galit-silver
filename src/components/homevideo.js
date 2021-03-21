import React,  {useState,useEffect} from "react"
// import videojs from 'video.js';
import Vid1 from "../resources/videos/liquid_greens_test_39.mp4"
import Vid2 from "../resources/videos/liquid_greens_test_40.mp4"
import Vid3 from "../resources/videos/liquid_greens_test_41.mp4"
import Vid4 from "../resources/videos/liquid_greens_test_42.mp4"
import useWindowWidth from "./useWindowWidth.js"
import { useStaticQuery } from "gatsby"

export default function HomeVideo ({opacity}) {
const vids = [];
vids.push(Vid1);
vids.push(Vid2);
vids.push(Vid3);
vids.push(Vid4);
vids.sort((a, b) => {return 0.5 - Math.random()});
const [vidSelector, setVidsSelector] = useState (0);
const vidWidth = useWindowWidth;
// const [vidWidth, setVidWidth] = useState  (window.innerWidth);
const [currentVideo,  setCurrentVideo] = useState(()=>vids[vidSelector]);
const vidStyle = {
    position: 'fixed', 
    zIndex: '-10', 
    marginTop: '-10%', 
    marginLeft: '-10%', 
    padding: '0',
    width: `${vidWidth}`,
    // minHeight: `${window.innerHeight}px`,
    height: '110%',
    opacity: opacity
}
// const updateWindowWidth = () => {
//     setVidWidth(window.innerWidth)
//   }

// useEffect(() => {
//     window.addEventListener('resize', updateWindowWidth)
//     return () => {
//       window.removeEventListener('resize', updateWindowWidth)
//     }
// }, [])

const videoSelector = function () {
    
    var videoPlayer = document.getElementById('videoPlayer');
    vidSelector < vids.length-1 ? setVidsSelector(vidSelector+1) : setVidsSelector (0);
    setCurrentVideo(vids[vidSelector]);
    videoPlayer.src = currentVideo;
    videoPlayer.type = 'video/mp4';
    console.log(`playng video - ${currentVideo}`);
}

return (
    <div style = {vidStyle} >
        {/* {vids != null &&  vids.map((video,index) => index === vidSelector && */}
        {vids !== null  &&
    <video id='videoPlayer' width = "120%" height = "auto" style = {{marginTop:"-5%"}} autoPlay autobuffer = 'true' muted onEnded = {videoSelector}> 
    
       
        <source src = {currentVideo} type = "video/mp4"/>
        
     {/* <source className = "vidSource" src = {vids[vidSelector]} type = "video/mp4"/> */}
    your browser does not support this video.
    </video>
    }
    </div>
)
}

HomeVideo.defaultProps = {
    opacity: '1',
}