import React from "react"
import "./product.css"

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <img className="product-image" src={this.props.product.images[0].url} alt={this.props.product.title + " " + this.props.product.categories[0].title} />
        <h2 className="product-title">{this.props.product.title}</h2>
        <h2 className="product-price">{this.props.product.price / 100} kr</h2>
        <button className="buy-button">Add to bag</button>

      </div>
    )
  }
}

export default Product
