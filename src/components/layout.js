import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./materialize.min.css"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            textAlign: "center",
            bottom: "0",
          }}
        >
          © {new Date().getFullYear()}, Cedar Rapids & Marion Resale | Member
          Perks
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
