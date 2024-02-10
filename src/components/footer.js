import * as React from "react"

import { siteMetadata } from "../../gatsby-config"

const Footer = () => {
  return (
    <footer>
      <p>
        <small>(c) 2021 {siteMetadata.title}</small>
      </p>
    </footer>
  )
}
export default Footer