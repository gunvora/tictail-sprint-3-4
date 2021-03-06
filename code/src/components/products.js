import React from "react"
import Product from "./product"
import "./products.css"

class Products extends React.Component {
  render() {
    const products = this.props.products.filter((product) => {
      if (!this.props.filtered) return true
      if (this.props.filtered === product.categories[0].title) return true
      return false
    }).map((product) => {
      return <Product product={product} />
    })
    return (
      <div className="products">
        {products}
      </div>
    )
  }
}

export default Products
