import React,  {useState,useEffect} from "react"
import Vid1 from "../resources/videos/liquid_greens_test_39_twitter_720.mp4"
import Vid2 from "../resources/videos/liquid_greens_test_40_twitter_720.mp4"
import Vid3 from "../resources/videos/liquid_greens_test_41_twitter_720.mp4"
import Vid4 from "../resources/videos/liquid_greens_test_42_twitter_720.mp4"
import useWindowWidth from "./useWindowWidth.js"
const  vids = [];
vids.push(Vid1);
vids.push(Vid2);
vids.push(Vid3);
vids.push(Vid4);
vids.sort((a, b) => {return 0.5 - Math.random()});

export default function HomeVideo ({opacity}) {
const [vidSelector, setVidsSelector] = useState (0);
console.log(vidSelector);
console.log(vids.length);
const [currentVideo,  setCurrentVideo] = useState(vids[vidSelector]);
const vidWidth = useWindowWidth;

const vidStyle = {
    position: 'absolute', 
    zIndex: '-10', 
    top:'0',
    bottom:'0',
    left:'0',
    // marginTop: '-5%', 
    // marginLeft: '-3%', 
    padding: '0',
    width: `${vidWidth}`,
    // minHeight: `${typeof window  !==  'undefined' ?  window.innerHeight : 300}px`,
    height: '100%',
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
    console.log(vidSelector);
    setCurrentVideo(vids[vidSelector]);
    videoPlayer.src = vids[vidSelector];
    videoPlayer.type = 'video/mp4';
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
    <video id='videoPlayer' className  =  'videoPlayer' width = "auto" height = "100%" style={{top:'0',bottom:'0'}} autoPlay autobuffer = 'true' muted > 
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