import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import pin from "../images/pin.png"
class BlogPostTemplate extends React.Component {
  render() {
    const product = this.props.data.contentfulProduct
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={product.companyName} description={product.subTitle} />
        <h1
          style={{
            marginTop: 20,
            marginBottom: 0,
            textAlign: "center",
          }}
        >
          {product.title}
        </h1>
        <h2
          style={{
            marginBottom: 0,
            textAlign: "center",
          }}
        >
          {product.subTitle}
        </h2>
        <img
          src={`${product.imageUrl}`}
          class="z-depth-5"
          style={{
            marginTop: 20,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 20,
            textAlign: "center",
          }}
        />
        <div class="row">
          <img
            src={pin}
            style={{
              width: 30,
            }}
          />
        </div>
        <div class="container"></div>
        <div dangerouslySetInnerHTML={{ __html: product.html }} />
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
                ← {previous.companyName}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.companyName} →
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
    contentfulProduct(slug: { eq: $slug }) {
      subTitle
      imageUrl
      companyName
    }
  }
`
