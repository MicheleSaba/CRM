import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = this.props.data.site.siteMetadata.title
    const posts = data.allContentfulPost.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div class="row">
          {posts.map(({ node }) => {
            const title = node.title || node.slug
            return (
              <div class="col s12 m12 l4">
                <div key={node.slug} class="card large z-depth-3">
                  <div class="card-image">
                    <img src={`${node.imageUrl}`} class="responsive-img" />
                  </div>
                  <div class="card-content">
                    <h3
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <Link style={{ boxShadow: `none` }} to={node.slug}>
                        {title}
                      </Link>
                    </h3>
                    <p
                      style={{
                        textAlign: "center",
                      }}
                    >
                      {node.subtitle}
                    </p>
                  </div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.description || node.excerpt,
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost {
      edges {
        node {
          title
          subtitle
          author
          slug
          imageUrl
        }
      }
    }
  }
`
