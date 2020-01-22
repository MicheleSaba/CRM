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
        {/* <Advertise /> */}
        <SEO title="Cedar Rapids & Marion Resale Member Perks" />
        <div
          style={{
            minHeight: "800px",
            // background: `#8852c4`,
          }}
        >
          <div class="row">
            {posts.map(({ node }) => {
              const title = node.subtitle || node.slug
              return (
                <div class="col s12 m6 l4">
                  <div key={node.slug} class="card ">
                    <div class="card-image">
                      <Link style={{ boxShadow: `none` }} to={node.slug}>
                        <img
                          src={`${node.imageUrl}`}
                          class="responsive-img"
                          alt="something nice"
                        />
                      </Link>
                    </div>
                    <div
                      class="card-content"
                      style={{
                        paddingTop: "5px",
                      }}
                    >
                      <p
                        style={{
                          textAlign: "left",
                          fontSize: "18px",
                        }}
                      >
                        {node.title}
                      </p>
                      <p
                        style={{
                          textAlign: "left",
                        }}
                      >
                        <Link style={{ boxShadow: `none` }} to={node.slug}>
                          {node.subtitle}
                        </Link>
                      </p>

                      <div></div>
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
          slug
          imageUrl
        }
      }
    }
  }
`
