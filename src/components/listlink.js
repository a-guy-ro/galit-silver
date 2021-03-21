import React from "react"
import { css } from "@emotion/react"
import {Link} from "gatsby"
const liStyle = {
    display: 'inline-block',
    marginRight: '1rem'
}
export  default function ListLink ({to,  children, textColour}) {
    return (
        <li css= {css` 
    display:inline-block; 
    margin-right: 1rem;
    text-decoration: none; 
    color: ${textColour};
    text-shadow: white 1px
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
  }