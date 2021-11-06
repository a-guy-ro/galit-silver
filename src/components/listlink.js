import React from "react"
import { css } from "@emotion/react"
import {Link} from "gatsby"

export  default function ListLink ({to,  children, textColour, scaled, isFirst}) {
    return (
        <li css= {css` 
        display: ${scaled?'block':'inline'};
    margin-left: 1rem;
    margin-right: ${(isFirst&&!scaled)?'45%':'0'};
    top:0;
    text-align:center;
    text-decoration: none; 
    color: ${textColour};
    text-shadow: white 1px;
    font-size: ${scaled&&'12px'};
   `}>
      <Link to={to} style = {{
          color: `${textColour}`,
        //   {textColour},
          // textShadow: 'white 1px',
      }} activeStyle = {{
       color: "darkseagreen",
       textShadow: "white 1px",
       }} >{children}</Link>
    </li>
    )
}

ListLink.defaultProps = {
    textColour: "black",
    isFirsst: false
  }