import React from "react"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import isScaledDevice from "./isScaledDevice.js"


const List = props => (
    <li css= {css` 
    display:inline-block; 
    margin-left: ${rhythm(1/2)};
    text-decoration: none; 
    color: black;
    background-color: white;
   `}>
       {props.children}
    </li>
  )

export default function Footer() {
    const scaled = isScaledDevice();
const divStyle = {
    position: "absolute",
    display:'block',
    left: `${scaled?'-9%':"1%"}`,
    right: "1%",
    bottom: "0",
    textAlign: "center",
    width: "98%",
    color: "black",
    fontSize: "12px",
}
const ulStyle = {
    listStyle: `none`, 
    marginTop: `0.5px`,
    width: '100%',
    left:'0'
    
}
    return (
        <div style = {divStyle}>
            <ul style={ulStyle}>
            <List>silvergalit@gmail.com</List>
            <List>@galit.amalia</List>
            <List>built and designed by guy_ro.</List>
            </ul>
            
        </div>
    )
}