import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="navbar-fixed">
    <nav style={{ backgroundColor: "#fff" }}>
      <div class="nav-wrapper">
        <p
          className="brand-logo"
          style={{
            fontSize: "14px",
          }}
        >
          <Link
            to="/"
            style={{
              color: "#333",
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </p>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Cedar Rapids & Marion Resale`,
}

export default Header
