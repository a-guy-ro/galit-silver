import React from "react"
import Layout from "../components/layout"
import Gallery from "../components/gallery"
import Description from "../components/descirption.js"




export default function TfuTfu() {
  if (typeof document !== 'undefined') {
  let currentPath = document.location.pathname;
    currentPath =  currentPath.slice(1,currentPath.length-1);

    
      return (
          <Layout>
            <Description>
            Ashford \ Patti Smith <br/>
            <br/>
            Deep in the earth your little bones <br/>
            your little hands your little feet<br/>
            in restless repose unfastening loops <br/>
            calling for bread and potato soup<br/>
            a shock of light struck the valve <br/>
            milk of the lamb poured from the side <br/>
            and a terrible mist rose underfoot <br/>
            you were all snow white and I the seventh dwarf <br/>
            prepared to serve you <br/>
            there were wafers enough <br/>
            for every living thing <br/>
            who offered his tongue <br/>
            there were no more cries <br/>
            there was no fasting heart <br/>
            Only the relics of consumption <br/>
            wrapped in the silk of existence <br/>


            <br/>
            Patti Smith’s poem, from her book “Devotion” was borrowed to be the exhibition text for the <br/>
            exhibition “Tfu tfu” in the artist-run space “Obrońców stalingradu” at the city Szczecin, Poland (in the summer of 2019). <br/>
            I was in this city for 5 months, in a student exchange program. <br/> 
            In the beginning of my time there, I would think about how strange it is to be in Poland out of the context of WW2 — <br/>
            as I know that members of my family ran away and fled the country right before the war. <br/>
            My time in this city would turn to investigating the notion of a “made-up” folklore, or a “run-away”physical culture, <br/>
            as I could not trace my family’s background and understanding where exactly they lived, how their lives would have looked like.<br/>
            I thought about what kind of ghostly, absent objects would look like for a folklore tradition that is running away.<br/>
            Making up for unknown and unfound histories and stories. This led to my works exhibited in this exhibition.
            Patti Smith’s poem, “Ashford”, is about visiting Simone Weil’s grave in England. Simone, in resemblance to other members of my family, ran away from the war and never went back to where she came from. 
            <br/>
            (For other reference: 
            <br/><a  style={{color:"white"}} href="https://gagosian.com/quarterly/2018/04/25/devotion/" >https://gagosian.com/quarterly/2018/04/25/devotion/</a>).
        </Description>
            <Gallery path = {currentPath} />
          </Layout>
      )
    } else {
      return null
    }
}
