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
            <br/>
            Relation-Relay \ 2020 <br/>
            <br/>
            Thick are the connections, firm are the separations <br/>
            Between two-bodies.<br/>
            A tension, created between the merging tothe forever disconnected<br/>
            <br/>
            Ceramics, Be’er Sheba clay, Porcelain, Raw silk, Upholstery fabric, stuffing material, Latex, Plaster, cast bronze, Remains of furniture.<br/>
            Exhibited in “Hamidrasha” Academy of art, graduate exhibition of the 2020 class.<br/>
        </Description>
            <Gallery path = {currentPath}/>
          </Layout>
      )
    } else {
      return null
    }
}