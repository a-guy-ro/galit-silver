import React from "react"
import Layout from "../components/layout"
import HomeVideo from "../components/homevideo.js"
import { rhythm } from "../utils/typography"

export default function about() {
    return (
        <Layout sizeOffset = {4}>
            <HomeVideo opacity = {0.5} />
            <div style = {{width: '100%', position: 'relative', marginTop: `${rhythm(2)}`}}>
      <p>
        hello.
      </p>
      </div>
      
        </Layout>
    )
}