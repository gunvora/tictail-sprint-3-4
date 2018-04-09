import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import "./header.css"

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src="./images/logo_black.jpg" />
        </div>
        <div><Link to="/">Store</Link></div>
        <div><Link to="/about">About Lunacy</Link></div>
        <div><Link to="/news">News</Link></div>
        </div>
    )
  }
}

export default Header
