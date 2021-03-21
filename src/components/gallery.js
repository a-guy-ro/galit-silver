import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import Footer from "../components/footer.js"
import useWindowWidth from "./useWindowWidth.js"
// import {useDimensions} from "@react-native"

// const window = require('window');

const divFooterStyle = {
  marginLeft: '60%', 
  marginRight:'5%',
  marginBottom:'0', 
  position: 'relative', 
  zIndex: '15', 

}

export default function Gallery ({path}) {
const data = useStaticQuery(graphql`
  query Images {
    images: allFile(filter: {extension: {eq: "jpg"}}) {
      nodes {
        id
        relativeDirectory
        childImageSharp {
          gatsbyImageData(formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, layout: CONSTRAINED, width: 400)
        }
      }
    }
  }
  `)
  const windowWidth = useWindowWidth;

  path = 'images/' + path;
  console.log(path);
  const displayImages = data.images.nodes.filter(image => image.relativeDirectory  ===  path && image);
  console.log(displayImages);
  displayImages.sort((a, b) => {return 0.5 - Math.random()});
  console.log(data);
  const imageProps = []
  displayImages.forEach(element => {
    imageProps.push({
        scale: Math.random()*0.3+0.9,
        zIndex: (Math.floor(Math.random()*3)+1)
    });
  });

  
  
  
return (
      <div className = "gallery" style = {{
          position: `absolute`,
        // marginLeft: `5%`,
        width: `${windowWidth}`,
        display: `block`,
        marginTop: `-${(Math.random()*1)+1}%`,
        zIndex: `-10`
      }}>
    {
      displayImages.map((image, index) => 
      <div key = {image.id} id = {image.id} css = {css`
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
    &: hover {
      transform: scale(${imageProps[index].scale*1.275});
      z-index: 10;
      opacity: 1;
    }
    `}>
    <GatsbyImage key = {image.id} image = {getImage(image.childImageSharp) } alt="" loading ="eager" />
  </div>
      )}
        <div style={divFooterStyle}>
        <Footer />
        </div>
        
      </div>
   
)
}