import React from "react"
import Product from "./product"
import BreadCrumbs from "./bread-crumbs"
import "./single-product.css"
import "./app.css"


class singleProduct extends React.Component {
  state = {}
  componentDidMount() {
    const productId = this.props.match.params.singleproduct
    fetch(`https://api.tictail.com/v1.25/stores/5HSL/products/${productId}`).then((response) => {
      return response.json()
    }).then((json) => {
      //store info
      this.setState({product: json, imageUrl: json.images[0].url})
    })
  }

  renderSmallImages = () => {
    return this.state.product.images.map((image) => {
      return <img
        onClick={() => {
          this.setState({imageUrl: image.url})
        }}
        className="single-product-image-small"
        src={image.url}
        alt={this.state.product.title + " " + this.state.product.categories[0].title}
      />
    })
  }

  renderOptions = () => {
    return this.state.product.variations.map((variation) => {
      return <option value={variation.id}>{variation.title}</option>
    })
  }

  handleChange = (event) => {
   this.setState({value: event.target.value});
 }

  render() {
    if (!this.state.product) return null
    return (
      <div className="main-content">
        <div className="bread-crumbs-container">
          <BreadCrumbs product={this.state.product} />
        </div>
        <div className="single-product">
          <div className="single-product-images">
            <img src={this.state.imageUrl} alt={this.state.product.title + " " + this.state.product.categories[0].title} />
            {this.renderSmallImages()}
          </div>
          <div className="single-product-info">
            <h2>{this.state.product.title}</h2>
            <p>{this.state.product.description}</p>
            <select className="select-menu" value={this.state.value} onChange={this.handleChange}>
              {this.renderOptions()}
            </select>
            <h3>{this.state.product.price / 100} Kr</h3>
            <button className="add-to-bag-button">Add to bag</button>
          </div>
        </div>
      </div>
    )
  }
}

export default singleProduct
