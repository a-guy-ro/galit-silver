import React from "react"
import Layout from "../components/layout"
import Gallery from "../components/gallery"
// import Description from "../components/descirption.js"



export default function drawings() {
  
    if (typeof window !== 'undefined') {
  let currentPath = window.location.pathname;
    currentPath =  currentPath.slice(1,currentPath.length-1);
    console.log(currentPath);

   
        return (
            <Layout>
              {/* <Description>
            this is a description text.
          </Description> */}
              <Gallery path = {currentPath} isDescription = {false} />
            </Layout>
        )
      } else {
        return (
          <></>
        )
      }
}
