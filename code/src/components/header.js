import React from "react"
import "./header.css"

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src="./images/logo_white.jpg" />
        </div>
        <div>STORE</div>
        <div>ABOUT LUNACY</div>
        <div>NEWS</div>
      </div>
    )
  }
}

export default Header
