// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}))

export default function Header() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "#fff", marginBottom: "20px" }}
      >
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="#333333"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography style={{ color: "#333" }}>
            <a href="/">Cedar Rapids & Marion Resale</a>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

// const Header = ({ siteTitle }) => (
//   <header className="navbar-fixed">
//     <nav style={{ backgroundColor: "#fff" }}>
//       <div class="nav-wrapper">
//         <p
//           className="brand-logo"
//           style={{
//             fontSize: "16px",
//             marginLeft: "30px",
//           }}
//         >
//           <Link
//             to="/"
//             style={{
//               color: "#333",
//               textDecoration: `none`,
//             }}
//           >
//             {siteTitle}
//           </Link>
//         </p>
//         <ul
//           id="nav-mobile"
//           class="right hide-on-med-and-down"
//           style={{ color: "#333" }}
//         >
//           <li>
//             <a href="/about">About</a>
//           </li>
//           <li>
//             <a href="/contact">Contact</a>
//           </li>
//           <li>
//             <a href="/group">Group</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: `Cedar Rapids & Marion Resale`,
// }

// export default Header
