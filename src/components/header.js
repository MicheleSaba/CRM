import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="navbar-fixed">
    <nav>
      <div class="nav-wrapper">
        <p
          className="brand-logo"
          style={{
            fontSize: "16px",
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
        <ul
          id="nav-mobile"
          class="right hide-on-med-and-down"
          style={{ color: "#333" }}
        >
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/group">Group</a>
          </li>
        </ul>
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
