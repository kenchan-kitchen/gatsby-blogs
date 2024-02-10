import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
// gatsby-plugin-image追加
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  const { cate, tag } = data.markdownRemark.frontmatter//追記
  console.log(cate, tag)//デバッグ

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <GatsbyImage
          image={getImage(eyeCatchImg)}
          alt={post.frontmatter.title}
          key={post.frontmatter.title}
        />
          <p><time datetime={post.frontmatter.date}>{post.frontmatter.date}</time></p>
        </header>
            {/* カテゴリ追加 */}
    <dl>
      <dt>カテゴリ</dt>
      <dd>{cate}</dd>
    </dl>
        {/* タグ追加 */}
        <dl>
      <dt>タグ</dt>
      {tags.map((tag, index) => {
        return <dd key={`tag${index}`}>{tag}</dd>
      })}
    </dl>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
    # ↓追加
    $hero: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    # ↓追加
allFile(
  filter: {
    # ↓ 画像パスが$heroと一緒のファイルを探す
    relativePath: { eq: $hero }
    # ↓ 画像を格納してある場所がimages（gatsby-config.jsで指定した名）
    sourceInstanceName: { eq: "images" }
  }
) {
  edges {
    node {
      relativePath
      childImageSharp {
        gatsbyImageData(
          width: 1000
          formats: [AUTO, WEBP, AVIF]
          placeholder: BLURRED
        )
      }
    }
  }
}
# ↑追加
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        cate
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
