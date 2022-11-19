import React, {useState} from "react"
import { graphql, StaticQuery } from "gatsby"
// import { rhythm } from "../utils/typography"
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
  // console.log(isHome);
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
          order
        }
        siteMetadata {
          title
          description
        }
      }
    }
  `}
  // {data.site.childrenMenuItems.forEach(menuItem => {
  //   console.log(menuItem.created.type);
  // });}
  render={data => (
    <header style={{position: `relative`, display:'flex',width: '100%', height:'10%',right: '0', left:`${scaledDevice?'-10%':'0'}`,marginBottom:'2.5%'}}>
      <ul style={{ listStyle: `none`, float: `left`, marginLeft: `1rem`, width:'100%',top:'0', left:`${(scaledDevice&&isHome)&&'65%'}`, display:`${!scaledDevice?'inline-block':'inline'}`}}>
    <ListLink to="/" textColour={textColour} scaled={scaledDevice} isFirst = {true} >
      <h3 style={{display:'inherit', fontSize:`${scaledDevice?'16px':'24px'}`}}>{data.site.siteMetadata.title}</h3>
    </ListLink>
    <span css={css`
    display:${scaledDevice ? (isHome ||collapsedState) ? 'inline-block' : 'none' : 'inline-block'};
    width: ${(scaledDevice && isHome)?'100%':'100%'};
    position: ${(scaledDevice && collapsedState) && 'absolute'}
    top:0;
    right: ${!scaledDevice&&'0'};
    left: ${scaledDevice&&'-15%'};
    `}>
      <ul style={{ position:`${!scaledDevice?'absolute':'relative'}`,listStyle: `none`, float: `left`,right:`${!scaledDevice&&'0'}`,left: `${(scaledDevice)?'-5%':'35%'}`, width:'60%', display:'inline-block', top: `${!scaledDevice&&'0%'}`, textAlign:`${((isHome&&scaledDevice)||!scaledDevice)?'right':'left'}`}}>
      {data.site.childrenMenuItems.sort((a,b)=>a.order - b.order).map(menuItem=> <ListLink key={menuItem.slug} scaled = {scaledDevice} textColour = {textColour} to ={menuItem.slug}>{menuItem.title}</ListLink>)}
    {/* </ul>
    <ul style={{ position:`${!scaledDevice?'absolute':'relative'}`,listStyle: `none`, float: `left`,right:`${!scaledDevice&&'0'}`,left: `${(!isHome&&scaledDevice)?'0':scaledDevice?'75%':'40%'}`, width:'50%', display:'inline-block', top: `${!scaledDevice&&'-5%'}`, textAlign:`${((isHome&&scaledDevice)||!scaledDevice)?'right':'left'}`}}> */}
    <ListLink scaled = {scaledDevice} textColur={textColour} to="/diy_installation/"><GiPerspectiveDiceSixFacesRandom  size='1.2em' style={{verticalAlign: 'middle' }}/></ListLink> 
    </ul>
    </span>
    <button style = {{display: `${(scaledDevice&&!isHome)?'block':'none'}`, border:'none', backgroundColor:'transparent', cursor:'pointer', position:'absolute',left:'100%',top: `${scaledDevice&&'-2.5%'}` }} onClick = {()=>handleClick()}>
      <MdMenu size='1.2em' style={{verticalAlign: 'middle', border:'none' }}/>
    </button>
    
    </ul>

    </header>
  )}
    />
      
  </>
  )

}
