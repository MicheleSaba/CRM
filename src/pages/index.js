import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SecondPage from "./about"
import Contact from "./contact"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = this.props.data.site.siteMetadata.title
    const products = data.allContentfulProduct.edges

    return (
      <div>
        <Layout location={this.props.location} title={siteTitle}>
          {/* <Advertise /> */}
          <SEO title="Cedar Rapids & Marion Resale Member Perks" />
          <div
          // style={{
          //   minHeight: "800px",
          // }}
          >
            <div class="container" style={{ marginTop: "60px" }}>
              <h2>Available Now</h2>
              <div class="row">
                {products.map(({ node }) => {
                  const title = node.subTitle || node.slug
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
                            {node.companyName}
                          </p>
                          <h3
                            style={{
                              textAlign: "left",
                            }}
                          >
                            {" "}
                            {node.subTitle}
                          </h3>
                          <Link to={node.slug} className="btn">
                            Get deal
                          </Link>
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
          </div>
          <SecondPage />
          <Contact />
        </Layout>
      </div>
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
    allContentfulProduct {
      edges {
        node {
          companyName
          slug
          imageUrl
          subTitle
        }
      }
    }
  }
`
