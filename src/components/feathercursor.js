import React,{useState, useEffect,useRef} from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export default function FeatherCursor ({sizeOffset, children}) {
   const cursorStyle = {
       width: '30px',
       height: '30px',
       position: 'relative',
       pointerEvents: 'none',
       top:'-50%',
       left:'-50%'
   }

   const frameStyle = {
    position: 'absolute', 
    zIndex: '-4', 
    display: 'block', 
    width:`100%`,
    height: `${typeof window !== 'undefined' ? window.height : 'auto'}`, 
    top: '0', 
    left:'0', 
    bottom: '0', 
    right: '0'
   }

   const cursorImagesQuery = useStaticQuery (graphql`
   query cursorImages {
    images: allFile(filter: {relativeDirectory: {eq: "images/feathercursor"}}) {
      nodes {
        id
        relativeDirectory
        childImageSharp {
          gatsbyImageData(
            formats: [AUTO, WEBP, AVIF]
            placeholder: TRACED_SVG
            layout: FULL_WIDTH
            width: 100
          )
          original {
            width
            height
          }
        }
        name
      }
    }
  }
  
`  
  )
  const cursorGatsbyImage = useRef(null);
  let middleIndex, leftIndex, rightIndex, downIndex,currentIndex;
    const cursorImages = cursorImagesQuery.images.nodes.map(image => getImage(image));
    cursorImagesQuery.images.nodes.map((image,index)=> {
      switch(image.name) {
        case 'straight':
        middleIndex = index;
        break;
        case 'down':
        downIndex = index;
        break;
        case 'turninLeft':
        leftIndex = index;
        break;
        case 'turninRight':
        rightIndex = index;
      }
    })
  const [imageIndex, setImageIndex] = useState (0);
  // const [currentImage, setCurrentImage] =useState (()=>cursorImages[imageIndex]);
  

  const cursorMovement = (e) => {
    let mouseCursorDiv = document.querySelector(".cursor");
           if (mouseCursorDiv != null && cursorImages != null)  {
           e.movementY > 3 ? currentIndex = downIndex :
           e.movementX < -3 ? currentIndex = rightIndex :
           e.movementX > 3 ? currentIndex = leftIndex :
           currentIndex = middleIndex;
           let currentImageWidth = cursorImagesQuery.images.nodes[currentIndex].childImageSharp.original.width/sizeOffset;
           let currentImageHeight = cursorImagesQuery.images.nodes[currentIndex].childImageSharp.original.height/sizeOffset;
           if (currentIndex === downIndex) {
            mouseCursorDiv.style.top = (e.clientY + window.scrollY +currentImageHeight/15  -  currentImageHeight)+ "px";       
           } else {
        mouseCursorDiv.style.top = (e.clientY + window.scrollY +currentImageHeight/15)+ "px";
    }
        mouseCursorDiv.style.left = (e.clientX +window.scrollX - currentImageWidth/2.5) + "px";
        mouseCursorDiv.style.width = currentImageWidth +"px";
        setImageIndex(currentIndex);
        
        } 
} 

useEffect(() => {
    let isMounted = true;
    let frameCursorDiv =  document.querySelector(".cursorDiv");
    frameCursorDiv.addEventListener('mousemove',e=> cursorMovement(e));
    !isMounted && frameCursorDiv.removeEventListener('mousemove', e=> cursorMovement(e));
    return () => {
        frameCursorDiv.removeEventListener('mousemove',e=> cursorMovement(e));
        isMounted = !isMounted;
    }
}, [])



if (typeof window === 'undefined') {
  return (
  <span>
    {children}
  </span>
  )
}
  else {
    return (
        
      <div className="cursorDiv" role = 'none' style = {frameStyle}>
          {cursorImages !==  null &&
      <div className = "cursor" style = {cursorStyle}>
          {cursorImages.map((image,index) => index === imageIndex &&
          <GatsbyImage className = "cursorImage" key = {index} image = {image} alt = ""loading ='eager' ></GatsbyImage>
          )}
       </div>
      }
       {children}
       </div>
      
  )
  }

 

    
}

FeatherCursor.defaultProps = {
    sizeOffset: '6',
}

