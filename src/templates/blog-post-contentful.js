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
            {product.companyName}
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
            alt="product url"
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
            <h3> About {product.companyName}</h3>
            <hr />
            <p>{product.aboutCompany.aboutCompany}</p>
          </div>
          <div class="row">
            <h3> Terms & Conditions</h3>
            <hr />
            <p>{product.termsAndConditions.termsAndConditions}</p>
          </div>
          <div class="row">
            <h3> What You Get!</h3>
            <hr />
            <p>{product.whatYouGet.whatYouGet}</p>
          </div>
          <p
            style={{
              textAlign: "left",
              textDecoration: "line-through",
              display: "inline-block",
              width: "60px",
              float: "left",
              color: "#888",
            }}
          >
            ${product.originalPrice}
          </p>
          {product.salePrice === 0 ? (
            <p
              style={{
                textAlign: "left",
              }}
            >
              Free
            </p>
          ) : (
            <p
              style={{
                textAlign: "left",
                paddingLeft: "2px",
              }}
            >
              ${product.salePrice}
            </p>
          )}
          <RedeemModal couponCode={product.couponCode} />
          <p>Expires: {product.expires}</p>
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
        author
      }
    }
    contentfulProduct(slug: { eq: $slug }) {
      subTitle
      imageUrl
      companyName
      termsAndConditions {
        id
        termsAndConditions
      }
      whatYouGet {
        id
        whatYouGet
      }
      aboutCompany {
        id
        aboutCompany
      }
      originalPrice
      salePrice
      expires
      startDate
      phone
      address {
        lon
        lat
      }
      couponCode
    }
  }
`
