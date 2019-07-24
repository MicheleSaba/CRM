import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import pin from "../images/pin.png"
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulPost
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.title} description={post.subtitle} />
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
          class="z-depth-5"
          style={{
            marginTop: 20,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 20,
            textAlign: "center",
          }}
        />
        <a
          href="https://www.pinterest.com/pin/create/button/"
          data-pin-do="buttonBookmark"
          data-pin-description={`${post.title}`}
          data-pin-custom="true"
          // data-pin-url={`https://localhost:8000/${post.slug}`}
        >
          <img
            src={pin}
            style={{
              width: 30,
            }}
          />
        </a>
        <p
          style={{
            display: `block`,
            marginBottom: 20,
          }}
        >
          {post.paragraph1.paragraph1}
        </p>
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
      title
      author
      subtitle
      imageUrl
      paragraph1 {
        id
        paragraph1
      }
    }
  }
`
