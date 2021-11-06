import React from "react"
import { useStaticQuery, Link, graphql, StaticQuery } from "gatsby"
import { rhythm } from "../utils/typography"
import ListLink from "./listlink.js"
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";



  export default function Header({textColour}) {
 

  return (
    <>
  
    <StaticQuery
    query={graphql`
    query HeadingQuery {
      site {
        childrenMenuItems {
          slug
          title
        }
        siteMetadata {
          title
          description
        }
      }
    }
  `}
  render={data => (
    <header style={{position: `relative`}}>
    <Link to="/">
      <h3 style={{display: `inline`}}>{data.site.siteMetadata.title}</h3>
    </Link>
    <ul style={{ listStyle: `none`, float: `right`, marginLeft: `${rhythm(16)}`}}>
      {data.site.childrenMenuItems.map(menuItem=> <ListLink textColour = {textColour} to ={menuItem.slug}>{menuItem.title}</ListLink>)}
    <ListLink textColur={textColour} to="/diy_installation/"><GiPerspectiveDiceSixFacesRandom  size='1.2em' style={{verticalAlign: 'middle' }}/></ListLink> 
    </ul>
    </header>
  )}
    />
      
  </>
  )

}
