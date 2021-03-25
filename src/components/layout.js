import React from "react"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import Header from "../components/header.js"
import FeatherCursor from "./feathercursor.js"
import SEO from "./seo.js"



export default function Layout({children, sizeOffset, textColour, isFeatherCursor}) {
  
  return (
    <div>
      <SEO/>
    {isFeatherCursor ? 
    <FeatherCursor sizeOffset= {sizeOffset} children = {children}>
    <div
      css={css`
        margin: 0 auto;
        max-width: 100%;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}>
     
    <Header textColour={textColour}/>
    {children}
     </div>
     </FeatherCursor>
    : <><div
    css={css`
      margin: 0 auto;
      max-width: 100%;
      padding: ${rhythm(2)};
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
}
