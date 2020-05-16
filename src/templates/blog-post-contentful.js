import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RedeemModal from "../components/redeemModal"

class BlogPostTemplate extends React.Component {
  render() {
    const product = this.props.data.contentfulProduct
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={product.companyName} description={product.subTitle} />
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
            {product.title}
          </h1>
          <h2
            style={{
              marginBottom: 0,
              textAlign: "center",
            }}
          ></h2>
          <img
            src={`${product.imageUrl}`}
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
          <div>
            <h2>{product.subTitle}</h2>
            <div className="row ">
              <p style={{ textAlign: "left" }}>
                {" "}
                <span className="linethrough">${product.originalPrice}</span>$
                {product.salePrice}
              </p>
              <p>{product.startDate} </p>
              <h3>Terms & Conditions</h3>
              <p>{product.termsAndConditions.termsAndConditions}</p>
              <h3>What you get!</h3>
              <p>{product.whatYouGet.whatYouGet}</p>
            </div>
            <div className="row">
              <RedeemModal code={product.couponCode} />
            </div>
          </div>

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
      }
    }
    contentfulProduct(slug: { eq: $slug }) {
      companyName
      slug
      subTitle
      originalPrice
      salePrice
      expires
      startDate
      phone
      couponCode
      imageUrl
      aboutCompany {
        id
        aboutCompany
      }
      whatYouGet {
        id
        whatYouGet
      }
      termsAndConditions {
        id
        termsAndConditions
      }
      address {
        lon
        lat
      }
    }
  }
`
