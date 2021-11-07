import React from "react"
import Layout from "../components/layout.js"
import RandomInsallaion from "../components/randominstatllation.js"
import isScaledDevice from "../components/isScaledDevice.js"

export default function RandomInstallationPage() {
    const scaled = isScaledDevice();
    if (typeof window !== `undefined`) {
    return (             
    <Layout isFeatherCursor={false}>
        <div style={{positin:'absolute', top:`${scaled?'20%':'10%'}`}}>
        <RandomInsallaion/> 
        </div>
    </Layout>
                     
        
    ) 
}
else {
    return (<>
    </>)
}
}