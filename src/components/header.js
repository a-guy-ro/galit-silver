import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import ListLink from "./listlink.js"

  export default function Header({textColour}) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  return (
    <header style={{position: `relative`}}>
    <Link to="/">
      <h3 style={{display: `inline`}}>{data.site.siteMetadata.title}</h3>
    </Link>
    <ul style={{ listStyle: `none`, float: `right`, marginLeft: `${rhythm(16)}`}}>
      <ListLink textColur={textColour} to="/about/">about</ListLink>
      <ListLink textColur={textColour} to="/relation_relay/">relation/relay</ListLink>
      <ListLink textColur={textColour} to="/tfu_tfu/">tfutfu</ListLink>
      <ListLink textColur={textColour} to="/drawings/">drawings</ListLink>
      <ListLink textColur={textColour} to="/other_works/">other works</ListLink>
      <ListLink textColur={textColour} to="/random_insta/">dice</ListLink>
    </ul>
  </header>
  )

}
