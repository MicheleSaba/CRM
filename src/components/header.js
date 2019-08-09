import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import dove from "../images/dove-solid.svg"

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
            <a href="sass.html">About</a>
          </li>
          <li>
            <a href="badges.html">Contact</a>
          </li>
          <li>
            <a href="collapsible.html">Group</a>
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
  siteTitle: ``,
}

export default Header
