import React, {useEffect} from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import Footer from "../components/footer.js"
import imageCaptionJson from "../resources/images/caption_images.json"

const divFooterStyle = {
  marginLeft: '60%', 
  marginRight:'5%',
  marginBottom:'0', 
  position: 'relative', 
  zIndex: '15',
  minHeight: `${typeof window !== 'undefined'  ? window.innerHeight*0.25 : 300}px` 
}

export default function Gallery ({path, isDescription}) {
const data = useStaticQuery(graphql`
  query Images {
    images: allFile(filter: {extension: {eq: "jpg"}}) {
      nodes {
        id
        relativeDirectory
        relativePath
        childImageSharp {
          gatsbyImageData(formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, layout: CONSTRAINED, width: 400)
        }
      }
    }
  }
  `)
  const galleryContainerDivStyle = {
    position: `absolute`,
          // marginLeft: `5%`,
          width: `${isDescription ? 70 : 100}%`,
          display: `block`,
          marginTop: `-${(Math.random()*1)+1}%`,
          marginLeft:`${isDescription ? 20  : 0}%`,
          marginRight:`${isDescription ? 10:0}%`,
          zIndex: `-10`
  }

  path = 'images/' + path;
  console.log(path);
  const imageProps = []
  const displayImages = data.images.nodes.filter(image => image.relativeDirectory  ===  path && image);
  console.log(displayImages);
  displayImages.sort((a, b) => {return 0.5 - Math.random()});
  console.log(data);
  
  displayImages.forEach(image => {
    let currentTitle = '';
    let currentDesc = '';
    imageCaptionJson.map(caption=> {
      
      let currentExhibtion = image.relativeDirectory.split("/")[1]
        let currentFile = image.relativePath.split("/")[2];
        if (caption.exhibition === currentExhibtion && caption["file name (case sensitive)"]  === currentFile) {
          currentTitle = caption.title;
          currentDesc = caption.description;
        }
    })
    imageProps.push({
      title: currentTitle,
      description: currentDesc,
        scale: Math.random()*0.2+0.9,
        zIndex: (Math.floor(Math.random()*3)+1)
    });
    
  });
  
  
return (
      <div className = "gallery" style = {galleryContainerDivStyle}>
    {
      displayImages.map((image, index) => 
      
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
    width: ${Math.random()*5+30}%;
    &:hover{
      transform: scale(${imageProps[index].scale*1.275});
      opacity: 1;
      z-index: 11;
    }
    `}>
    <GatsbyImage className = 'gatsby-image' key = {image.id} image = {getImage(image.childImageSharp) } alt= {imageProps[index].title} loading ="eager"/>
    <div className='caption-image-wrapper' style={{position:'relative', textAlign:'center', width:'90%', height: '20%', top:'85%',bottom:'10%',left:'5%',right:'5%'}}>
    <p style={{color:'black',fontSize:'12px', textAlign:'inherit'}}>{imageProps[index].title}</p>
    <p style={{color:'black', fontSize:'10px', textAlign:'inherit', marginTop:`${rhythm(-1)}`}}>{imageProps[index].description}</p>
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
