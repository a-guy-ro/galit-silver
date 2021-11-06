import React from "react"
import Layout from "../components/layout"
import HomeVideo from "../components/homevideo.js"
import { rhythm } from "../utils/typography"
import {graphql} from 'gatsby'
import parse from 'html-react-parser'



const aboutPage = ({data}) => {
    return (
        <Layout sizeOffset = {4}>
            <HomeVideo opacity = {0.9} />
            <div style = {{width: '50%',marginLeft:'3%',marginRight:'10%', position: 'absolute', marginTop: `${rhythm(1.5)}`,backgroundColor:'black',opacity:'65%'}}>
      <div style={{width: '90%',marginLeft:'5%',marginRight:'5%', fontSize:'16px',color:'white'}}>
        {parse(data.nodePage.body.processed)}
      </div>
      </div>
        </Layout>
    )
}

export const query = graphql`
    query($id: String!) {
        nodePage(id: {eq: $id}) {
            id
            title
            body {
            processed
        }
    }
}
    `;

export default aboutPage;

