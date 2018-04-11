import React from "react"
import Product from "./product"
import BreadCrumbs from "./bread-crumbs"
import "./single-product.css"
import "./app.css"


class singleProduct extends React.Component {
  state = {}
  componentDidMount() {
    console.log(this.props)
    const productId = this.props.match.params.singleproduct
    fetch(`https://api.tictail.com/v1.25/stores/5HSL/products/${productId}`).then((response) => {
      return response.json()
    }).then((json) => {
      //store info
      this.setState({product: json})
      console.log(json)
    })
  }

  render() {
    if (!this.state.product) return null
    return (
      <div className="main-content">
        <div>
          <BreadCrumbs product={this.state.product} />
        </div>
        <div className="single-product">
          <div className="single-product-images">
            <img src={this.state.product.images[0].url} alt={this.state.product.title + " " + this.state.product.categories[0].title} />
            <img className="single-product-image-small" src={this.state.product.images[1].url} alt={this.state.product.title + " " + this.state.product.categories[0].title} />
            <img className="single-product-image-small" src={this.state.product.images[2].url} alt={this.state.product.title + " " + this.state.product.categories[0].title} />
          </div>
          <div className="single-product-info">
            <h2>{this.state.product.title}</h2>
            <p>{this.state.product.description}</p>
            <h3>{this.state.product.price / 100} Kr</h3>
            <button>Add to bag</button>
          </div>
        </div>
      </div>
    )
  }
}

export default singleProduct
