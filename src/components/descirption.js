import React from "react"
import { rhythm } from "../utils/typography"


const pStyle = {
    marginTop: `${rhythm(1)}`,
    marginBottom: `${rhythm(1)}`,
    fontSize: '14px',
    // position: 'absolute',
    // backgroundColor: 'black',
    color: 'white',
    // opacity: '0.75',
    width:'90%',
    // zIndex: '0',
    marginLeft:'5%',
    marginRigjt:'5%'
}

export default function ({children}) {
    return (
        <div style= {{width:'26%', left:'0',backgroundColor:'black', opacity:'0.6',position:'absolute',marginTop: `${rhythm(3)}`,zIndex:'0'}}>
        <p style = {pStyle}>
            {children}
        </p>
        </div>
    )
}