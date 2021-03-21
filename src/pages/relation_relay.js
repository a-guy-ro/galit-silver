import React from "react"
import Layout from "../components/layout"
import Gallery from "../components/gallery"
import Description from "../components/descirption.js"



export default function RelationRelay() {
  if (typeof document !== 'undefined') {
  let currentPath = document.location.pathname;
    currentPath =  currentPath.slice(1,currentPath.length-1);

    
      return (
          <Layout>
            <Description>
          this is a description text.
        </Description>
            <Gallery path = {currentPath} />
          </Layout>
      )
    } else {
      return null
    }
}