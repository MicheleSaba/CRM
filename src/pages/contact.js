import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import facebook from "../images/facebook-square.svg"
import messenger from "../images/facebook-messenger.svg"
import at from "../images/at-solid.svg"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div
      class="container"
      style={{
        textAlign: "center",
      }}
    >
      <h1>Contact</h1>
      <p>There are a few ways to get in touch!</p>
      <div class="row">
        <div class="col s4 l4">
          <a href="https://www.facebook.com/CRMResale/" target="_blank">
            <img
              src={facebook}
              alt="facebook icon"
              style={{
                maxWidth: "50px",
              }}
            />
          </a>
        </div>
        <div class="col s4 l4">
          <a href="https://m.me/CRMResale">
            <img
              src={messenger}
              alt="messenger icon"
              style={{
                maxWidth: "50px",
              }}
            />
          </a>
        </div>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Contact
