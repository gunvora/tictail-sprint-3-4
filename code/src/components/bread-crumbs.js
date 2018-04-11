import React from "react"
import Product from "./product"
import { Link } from "react-router-dom"
import "./single-product.css"
import "./app.css"
import "./bread-crumbs.css"


class BreadCrumbs extends React.Component {

  render() {
    console.log(this.props.product)
    return (
      <div className="bread-crumbs">
      <Link to="/">All products</Link>
      <span>/</span>
      <Link to="/category/:category">{this.props.product.categories[0].title}</Link>
      <span>/</span>
      <p>{this.props.product.title}</p>
      </div>
    )
  }
}

export default BreadCrumbs
