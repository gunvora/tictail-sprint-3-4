import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import "./header.css"
import "./hero.css"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      store: null
    }
  }

  componentDidMount() {
    fetch("https://api.tictail.com/v1.25/stores/5HSL").then((response) => {
      return response.json()
    }).then((json) => {
      //store info
      this.setState({store: json})
    })
  }
  render() {
    if (!this.state.store) return null
    return (
      <div>
        <div className="header">
          <p>Shopping bag: {this.props.cartCount}</p>
          <div className="logo">
            <img src={this.state.store.logotype[0].url} />
          </div>
          <div className="header-menu">
            <div><Link to="/">« Store »</Link></div>
            <div><Link to="/about">« About »</Link></div>
            <div><Link to="/news">« News »</Link></div>
          </div>
        </div>
        <div className="hero">
          <img src={this.state.store.wallpapers.iphone.url} />
        </div>
      </div>
    )
  }
}

export default Header
