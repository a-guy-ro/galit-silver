import React from "react"
import Layout from "../components/layout.js"
import RandomInsallaion from "../components/randominstatllation.js"

export default function RandomInstallationPage() {
    if (typeof window !== `undefined`) {
    return (             
    <Layout isFeatherCursor={false}>
        <div style={{positin:'absolute', top:'10%'}}>
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