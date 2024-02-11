import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from "../components/img"

const BlogList = ({ data, location }) => {
  const { totalCount, nodes } = data.allMarkdownRemark
  const posts = nodes
  const title = "記事一覧"

  if (posts.length === 0) {
    return (
      <Layout location={location} title={title}>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={title}>
      <Seo title="All posts" />
      <header>
        <h1>{title}</h1>
        <p>現在{totalCount} 記事あります</p>       
      </header>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
             <Link to={post.fields.slug} itemProp="url">
              <Img alt={title} image={post.frontmatter.hero}></Img>
                <small>
                  <time datetime={post.frontmatter.date}>
                    {post.frontmatter.date}
                  </time>
                </small>
                </Link>
                <h2>
                <Link to={post.fields.slug} itemProp="url">
                 <span itemProp="headline">{title}</span>
                </Link>
                </h2>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogList

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields : [frontmatter___date], order:DESC }
      filter:{frontmatter:{pagetype:{eq:"blog"}}}
     ) {
      total Count
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          hero
        }
      }
    }
  }
`
