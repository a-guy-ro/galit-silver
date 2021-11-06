import React from "react"
import parse from 'html-react-parser'
import { rhythm } from "../utils/typography"

const disDesktopPlaceHolder = '<p>This is the description text as it will appear on desktop.</p>';
const disMobilePlaceHolder = 'This is the description text as it will appear on mobile.';
const pStyle = {
    marginTop: `${rhythm(1)}`,
    marginBottom: `${rhythm(1)}`,
    fontSize: '14px',
    // position: 'relative',
    // backgroundColor: 'black',
    color: 'white',
    // opacity: '0.75',
    width:'95%',
    // zIndex: '2',
    paddingLeft:`${rhythm(0.25)}`,
    paddingRight:`${rhythm(0.25)}`,
    lineHeightt: '1.2',

    // right:'2.5%'
}

export default function Description ({children}) {
    console.log(children);
    return (
        <>
        {children!=disDesktopPlaceHolder && 
        <div style= {{width:'26%', left:'0',backgroundColor:'black', opacity:'0.6',position:'absolute',marginTop: `${rhythm(3)}`,zIndex:'0'}}>
        <div style = {pStyle}>
            {parse(children)}
        </div>
        </div>
    }
    
    </>
    )
}