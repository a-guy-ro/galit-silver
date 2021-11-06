import React, {useState, useEffect} from "react"
import { useStaticQuery, Link, graphql, StaticQuery } from "gatsby"
import { rhythm } from "../utils/typography"
import ListLink from "./listlink.js"
import {GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import {MdMenu} from "react-icons/md";
import { css } from "@emotion/react";
import isScaledDevice from "./isScaledDevice.js";


 
  export default function Header({textColour, isHome}) {
  const [collapsedState,setCollapsedState] = useState(false);
  const handleClick = () => {
    setCollapsedState(!collapsedState);
    console.log(collapsedState);
  }
  const scaledDevice = isScaledDevice();
  console.log(isHome);
  // useEffect(()=> {
  //   !scaledDevice && setCollapsedState(false);
  // },[scaledDevice])
  return (
    <>
  
    <StaticQuery
    query={graphql`
    query HeadingQuery {
      site {
        childrenMenuItems {
          slug
          title
        }
        siteMetadata {
          title
          description
        }
      }
    }
  `}
  render={data => (
    <header style={{position: `relative`, width: '100%',left:'0',marginBottom:'2.5%'}}>
    <button style = {{display: `${(scaledDevice&&!isHome)?'block':'none'}`, border:'none', backgroundColor:'transparent', cursor:'pointer', position:'absolute', left:'0',marginRight:'2.5%',top:'0'}} onClick = {()=>handleClick()}>
      <MdMenu size='1.2em' style={{verticalAlign: 'middle', border:'none' }}/>
    </button>
    <span css={css`
    display:${scaledDevice ? (isHome ||collapsedState) ? 'inline-block' : 'none' : 'block'};
    width: ${(scaledDevice && isHome)?'40%':'100%'};
    text-align:center;
    `}>
      <ul style={{ listStyle: `none`, float: `left`, marginLeft: `1rem`,left: '0', top:'0', width:'100%'}}>
    <ListLink to="/" textColour={textColour} scaled={scaledDevice} isFirst = {true}>
      <h3 style={{display:'inherit', fontSize:`${scaledDevice?'16px':'24px'}`}}>{data.site.siteMetadata.title}</h3>
    </ListLink>
      {data.site.childrenMenuItems.map(menuItem=> <ListLink key={menuItem.slug} scaled = {scaledDevice} textColour = {textColour} to ={menuItem.slug}>{menuItem.title}</ListLink>)}
    <ListLink scaled = {scaledDevice} textColur={textColour} to="/diy_installation/"><GiPerspectiveDiceSixFacesRandom  size='1.2em' style={{verticalAlign: 'middle' }}/></ListLink> 
    </ul>
    </span>

    </header>
  )}
    />
      
  </>
  )

}
