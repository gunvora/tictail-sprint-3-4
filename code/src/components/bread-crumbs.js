import React from "react"
import Product from "./product"
import { Link } from "react-router-dom"
import "./single-product.css"
import "./app.css"
import "./bread-crumbs.css"


class BreadCrumbs extends React.Component {

  render() {
    return (
      <div className="bread-crumbs">
        <Link className="bread-crumbs-link" to="/">All products</Link>
        <span>/</span>
        <Link className="bread-crumbs-link" to={`/category/${this.props.product.categories[0].title}`}>{this.props.product.categories[0].title}</Link>
        <span>/</span>
        <p>{this.props.product.title}</p>
      </div>
    )
  }
}

export default BreadCrumbs
