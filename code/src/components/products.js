import React from "react"
import Product from "./product"
import "./products.css"

class Products extends React.Component {
  render() {
    const products = this.props.products.map((product) => {
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
