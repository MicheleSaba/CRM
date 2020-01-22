import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RedeemModal from "../components/redeemModal"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulPost
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.title} description={post.subtitle} />
        <div
          style={{
            maxWidth: "600px",
            margin: "auto",
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: "20px",
          }}
        >
          <h1
            style={{
              marginTop: 20,
              marginBottom: 0,
              textAlign: "center",
            }}
          >
            {post.title}
          </h1>
          <h2
            style={{
              marginBottom: 0,
              textAlign: "center",
            }}
          >
            {post.subtitle}
          </h2>
          <img
            src={`${post.imageUrl}`}
            alt="post url"
            class="z-depth-5"
            style={{
              marginTop: 20,
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: 20,
              textAlign: "center",
            }}
          />

          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: 20,
            }}
          />

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
                <Link to={previous.slug} rel="prev">
                  ← {previous.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.slug} rel="next">
                  {next.title} →
                </Link>
              )}
            </li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulPost(slug: { eq: $slug }) {
      subtitle
      title
      imageUrl
      slug
      content {
        id
        content
      }
    }
  }
`
