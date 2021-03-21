import React from "react"
import Layout from "../components/layout.js"
import RandomInsallaion from "../components/randominstatllation.js"

export default function RandomInstallationPage() {
    if (typeof window !== `undefined`) {
    return (             
    <Layout textColour='blue' isFeatherCursor={false}>
        <RandomInsallaion/> 
    </Layout>
                     
        
    ) 
}
else {
    return (<>
    </>)
}
}