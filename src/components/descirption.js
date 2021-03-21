import React from "react"
import { rhythm } from "../utils/typography"


const pStyle = {
    marginTop: `${rhythm(3)}`,
    fontSize: '14px',
    position: 'absolute',
    backgroundColor: 'black',
    color: 'white',
    opacity: '0.75',
    width:'25%',
    zIndex: '0'
}

export default function ({children}) {
    return (
        <div style= {{width:'25%'}}>
        <p style = {pStyle}>
            {children}
        </p>
        </div>
    )
}