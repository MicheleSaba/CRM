import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Advertise from "../components/advertise"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = this.props.data.site.siteMetadata.title
    const products = data.allContentfulProduct.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Advertise />
        <SEO title="Cedar Rapids & Marion Resale Member Perks" />
        <div
          style={{
            minHeight: "800px",
            // background: `#8852c4`,
          }}
        >
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
                      <p
                        style={{
                          textAlign: "left",
                        }}
                      >
                        <Link style={{ boxShadow: `none` }} to={node.slug}>
                          {title}
                        </Link>
                      </p>

                      <div>
                        <p
                          style={{
                            textAlign: "left",
                            textDecoration: "line-through",
                            display: "inline-block",
                            float: "left",
                            color: "#888",
                            fontSize: "20px",
                          }}
                        >
                          ${node.originalPrice}
                        </p>
                        {node.salePrice === 0 ? (
                          <p
                            style={{
                              textAlign: "left",
                              fontSize: "20px",
                            }}
                          >
                            {" "}
                            &nbsp;&nbsp;Free{" "}
                          </p>
                        ) : (
                          <p
                            style={{
                              textAlign: "left",
                              paddingLeft: "2px",
                              fontSize: "20px",
                            }}
                          >
                            &nbsp;&nbsp;${node.salePrice}
                          </p>
                        )}
                        <p
                          style={{
                            textAlign: "right",
                            paddingLeft: "2px",
                          }}
                        >
                          expires: {node.expires}
                        </p>
                      </div>
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
    allContentfulProduct {
      edges {
        node {
          companyName
          subTitle
          slug
          imageUrl
          aboutCompany {
            id
            aboutCompany
          }
          whatYouGet {
            id
            whatYouGet
          }
          originalPrice
          expires
          startDate
          termsAndConditions {
            id
            termsAndConditions
          }
          phone
          salePrice
          address {
            lon
            lat
          }
          expires
        }
      }
    }
  }
`
