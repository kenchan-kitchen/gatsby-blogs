/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social
  const BioWrapper = styled.div`
  text-align:center;
  .bio-avatar {
    display: block;
    border-radius: 50%;
    margin: 0 auto;
  }
  h2 {
      font-size: 18px;
  }
`
const Sns = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 0 15px;
  padding: 0;
  justify-content: center;

  li {
      margin: 0 5px;
  }
  a {
      text-decoration: none;
      display: flex;
      height: 40px;
      justify-content: center;
      align-items: center;
      border: solid 2px;
      font-weight: 700;
      border-radius: 10px;
      color: #fff;
      padding: 0 20px;;
      &.tw {
          background: #04A0F6;
      }
  }
  svg {
      margin-right: 10px;
  }
`
  return (
    <BioWrapper>
      <h2>この記事を書いた人</h2>
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/common/cute-neko.JPG"
        width={100}
        height={100}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <>
        <p>
          <strong>{author.name}</strong>/{author?.summary || null}
          {` `}
        </p>
        <Sns>
          <li>
            <a href={`https://twitter.com/${social?.twitter || ``}`} target="_blank" rel="noopener" className="tw">
            <FontAwesomeIcon icon={faTwitter} />Twitter</a>
          </li>
        </Sns>
        </>
      )}
    </BioWrapper>
  ) 
}

export default Bio
