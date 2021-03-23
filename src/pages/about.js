import React from "react"
import Layout from "../components/layout"
import HomeVideo from "../components/homevideo.js"
import { rhythm } from "../utils/typography"

export default function about() {
    return (
        <Layout sizeOffset = {4}>
            <HomeVideo opacity = {0.95} />
            <div style = {{width: '50%',marginLeft:'3%',marginRight:'10%', position: 'absolute', marginTop: `${rhythm(1.5)}`,backgroundColor:'black',opacity:'65%'}}>
      <p style={{width: '90%',marginLeft:'5%',marginRight:'5%', fontSize:'16px',color:'white'}}>
        <br/>
        Galit Silver<br/>
        silvergalit@gmail.com<br/>
        ID: 311224265<br/>
        Phone: +972 542203813<br/>
        Birthdate: 11/11/1993<br/>
        www.galitsilver.com<br/>
        @galit.amalia<br/>
        <br/>
        Exhibitions <br/>
        2020 - “Relation\Relay” Graduate exhibition, “Hamidrasha” Facility.<br/>
        2019 - “Tfu Tfu” solo exhibition. “Obrońców Stalingradu” Gallery, Sczcecin, Poland.<br/>
        2018 - “Contemporary House (Second edition)” Group Exhibition, Co-Curator. Abandoned house-an artist run space, Tel-Aviv.<br/>
        2018 - “The Common Denominator” Group Exhibition,“Hayarkon 19” Gallery, Tel Aviv.<br/>
        2017 - “Contemporary House” Group Exhibition, Abandoned house-an artist run space, Tel-Aviv.<br/>
        Residency <br/>
        2017 - Szczekociny art students residency, Poland<br/>
        <br/>
        Education<br/>
        2014-2015 - “Parsons New-School” New York. Various courses.<br/>
        2016-2020 - “HaMidrasha, Beit Berl” Fine Arts Degree with a Teachers Diploma. B.ed.F.AAwards and Grants<br/>
        2020 - AICF Graduate Exhibition award <br/>
        2021 Edmond de Rothschild Foundation - Development of young artist grant <br/>
        <br/>
      </p>
      </div>
      
        </Layout>
    )
}