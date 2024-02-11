import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Img = ({ image, alt, className }) => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                gatsbyImageData(
                  blurredOptions: { width: 100 }
                  width: 640
                  formats: [AUTO, WEBP, AVIF]
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    `
  )
  // 代替文字
  alt = alt ? alt : ""
  //画像がない場合はダミーをセット
  let imagePath = image ? image : "common/dummy.png"

  // findで条件と同じ画像を探す
  let img = allFile.edges.find(img => img.node.relativePath === imagePath)
  if (img) {
    return (
      <GatsbyImage
        image={getImage(img.node.childImageSharp.gatsbyImageData)}
        alt={alt}
        key={alt}
        className={className}
      />
    )
  } else {
    return ""
  }
}
export default Img
