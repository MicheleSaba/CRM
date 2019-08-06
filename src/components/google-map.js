import React, { Component } from "react"
import GoogleMapReact from "google-map-react"
// const dotenv = require("dotenv")

// if (process.env.NODE_ENV !== "production") {
//   dotenv.config()
// }



class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  }

  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBhRa_qbT6mT5If6FeO2ElTOeGOxGxLXhk" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    )
  }
}

export default GoogleMap
