import React from "react"
import Product from "./product"
import { Link } from "react-router-dom"
import "./single-product.css"
import "./app.css"


class BreadCrumbs extends React.Component {

  render() {
    console.log(this.props.product)
    return (
      <div className="main-content">
      <Link to="/">all products</Link>
      <Link to="/category/:category">{this.props.product.categories[0].title}</Link>
      <p>{this.props.product.title}</p>
      </div>
    )
  }
}

export default BreadCrumbs
