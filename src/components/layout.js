import React from "react"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import Header from "../components/header-drupal.js"
import FeatherCursor from "./feathercursor.js"
import isScaledDevice from "./isScaledDevice.js";
import SEO from "./seo.js"



export default function Layout({children, sizeOffset, textColour, isFeatherCursor, isHome}) {
  const scaledDevice = isScaledDevice();

  return (
    <div>
      <SEO/>
    {isFeatherCursor ? 
    <FeatherCursor sizeOffset= {sizeOffset} children = {children}>
    <div
      css={css`
        margin: 0 auto;
        width: 100%;
        padding: ${rhythm(2)};
        padding-right: ${!scaledDevice&&'0'};
        padding-top: ${rhythm(1.5)};
      `}>
     
    <Header textColour={textColour} isHome={isHome}/>
    {children}
     </div>
     </FeatherCursor>
    : <><div
    css={css`
      margin: 0 auto;
      max-width: 100%;
      padding: ${rhythm(2)};
      padding-right: ${!scaledDevice&&'0'};
      padding-top: ${rhythm(1.5)};
    `}>
  
  <Header textColour={textColour}/>
  {children}
   </div></>}
   </div>
  )
}

Layout.defaultProps = {
  isFeatherCursor: true,
  isHome: false,
}
