import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer.js"
import HomeVideo from "../components/homevideo.js"
// import FeatherCursor from "../components/feathercursor.js"


export default function Home() {

  return (
    <Layout sizeOffset = {4} isHome = {true}>
      {/* <FeatherCursor  sizeOffset= {5}/> */}
      <HomeVideo/>
    <Footer/>
</Layout>
  )
}
