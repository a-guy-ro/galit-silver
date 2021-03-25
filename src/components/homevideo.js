import React,  {useState,useEffect} from "react"
import Vid1 from "../resources/videos/home_video_1.mp4"
import Vid2 from "../resources/videos/home_video_2.mp4"
import Vid3 from "../resources/videos/home_video_3.mp4"
import Vid4 from "../resources/videos/home_video_4.mp4"
import useWindowWidth from "./useWindowWidth.js"
import useWindowHeight from "./useWindowHeight.js"

const  vids = [];
vids.push(Vid1);
vids.push(Vid2);
vids.push(Vid3);
vids.push(Vid4);


export default function HomeVideo ({opacity}) {
vids.sort((a, b) => {return 0.5 - Math.random()});
const [vidSelector, setVidsSelector] = useState (0);
const [currentVideo,  setCurrentVideo] = useState(vids[vidSelector]);
const windowWidth = useWindowWidth;
const windowHeight = useWindowHeight;

const vidStyle = {
    position: 'fixed', 
    display:'block',
    overflow:'hidden',
    zIndex: '-10', 
    top:'0',
    bottom:'0',
    left:'0',
    padding: '0',
    width: `${windowWidth}`,
    height: `${windowHeight}`,
    opacity: opacity
}


const videoSelector =  () =>{
    vids.sort((a, b) => {return 0.5 - Math.random()});
    var videoPlayer = document.getElementById('videoPlayer');
    if (vidSelector <= vids.length-1) {
        setVidsSelector(vidSelector+1);
    } else {
        setVidsSelector (0);
    } 
    setCurrentVideo(vids[vidSelector]);
    videoPlayer.src = vids[vidSelector];
    videoPlayer.type = "video/mp4";
    videoPlayer.autoPlay = "true";
    videoPlayer.preload = "true";
    console.log(`playng video - ${currentVideo}`);
}

useEffect(()=> {
const vidPlayer = document.querySelector('.videoPlayer');
vidPlayer.addEventListener("ended", ()=>videoSelector());
return ()=> {
    vidPlayer.removeEventListener("ended", ()=>videoSelector());
}
},[])

return (
    <div style = {vidStyle} >
        {vids !== null  &&
    <video id='videoPlayer' className  =  'videoPlayer' width = "100%" height = "auto" style={{top:'0',bottom:'0'}} autoPlay preload = 'auto' muted > 
        <source src = {currentVideo} type = "video/mp4"/>
    your browser does not support this video.
    </video>
    }
    </div>
)
}

HomeVideo.defaultProps = {
    opacity: '1',
}