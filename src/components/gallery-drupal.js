import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import Footer from "./footer.js"
// import imageCaptionJson from "../resources/images/caption_images.json"

const divFooterStyle = {
  marginLeft: '60%', 
  marginRight:'5%',
  marginBottom:'0', 
  position: 'relative', 
  zIndex: '15',
  minHeight: `${typeof window !== 'undefined'  ? window.innerHeight*0.25 : 300}px` 
}

export default function Gallery ({path, isDescription, images}) {
  console.log(isDescription)
  const galleryContainerDivStyle = {
    position: `absolute`,
          // marginLeft: `5%`,
          width: `${isDescription ? 78 : 100}%`,
          display: `block`,
          marginTop: `-${(Math.random()*1)+1}%`,
          // marginLeft:`${isDescription ? 20  : 0}%`,
          marginRight:`${isDescription ? 10:0}%`,
          left:`${!isDescription?'0':'20%'}`,
          // marginBottom: `${rhythm(0.5)}`,
          zIndex: `-10`
  }

  path = 'images/' + path;
  console.log(path);
  const imageProps = []
  // const displayImages = data.images.nodes.filter(image => image.relativeDirectory  ===  path && image);
  // console.log(displayImages);
  images.length > 0 && images.sort((a, b) => {return 0.5 - Math.random()});
  // console.log(data);
  
  images.forEach(image => {
    imageProps.push({
      title: image.title,
      description: image.description,
        scale: Math.random()*0.2+0.9,
        zIndex: (Math.floor(Math.random()*3)+1)
    });
    
  });
  
  
return (
      <div className = "gallery" style = {galleryContainerDivStyle}>
    {
      images.map((image, index) => 
      
      <div className = 'image-wrapper' key = {image.id} id = {image.id} css = {css`
    display: inline-block; 
    outline: dotted 1px darkgrey;
    outline-offset: ${Math.random()*50}px;
    opacity: ${Math.random()*0.4+0.5};
    position: relative;
    marginLeft: ${Math.random()*5+1}rem; 
    paddingBottom: ${Math.random()*5+1}rem;
    transform: scale(${imageProps[index].scale});
    z-index: ${imageProps[index].zIndex};
    width: ${image.imageData.original.width > image.imageData.original.height* 1.2 ? isDescription ? Math.random()*3+45 : Math.random()*5+35  : isDescription ? Math.random()*3+27 : Math.random()*3+25}%;
    &:hover{
      transform: scale(${image.imageData.original.width > image.imageData.original.height* 1.2 ? (isDescription ? imageProps[index].scale*1.55 : imageProps[index].scale*1.35) : imageProps[index].scale*1.2});
      opacity: 1;
      z-index: 11;
      
    }
    &:hover p{
      background-color: white;
    }
    `}>
    <GatsbyImage className = 'gatsby-image' key = {image.id} image = {getImage(image.imageData) } alt= {imageProps[index].title} loading ="eager"/>
    <div className='caption-image-wrapper' style={{position:'relative', textAlign:'center', width:'90%', height: '20%', top:'85%',bottom:'0%',marginLeft:'5%',marginRight:'5%',zIndex:'4'}}>
    <p style={{color:'black',fontSize:'12px', textAlign:'inherit'}}>{imageProps[index].title}</p>
    <p style={{color:'black', fontSize:'10px', textAlign:'inherit', marginTop:`${rhythm(-1)}`,  marginBottom:'0'}}>{imageProps[index].description}</p>
</div>

     </div>
      )}
        <div style={divFooterStyle}>
        <Footer />
        </div>
      </div>
   
)
}

Gallery.defaultProps = {
  isDescription: true,
}
