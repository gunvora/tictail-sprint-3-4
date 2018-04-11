import React from "react"
import Product from "./product"
import "./single-product.css"


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
      <div className="single-product">
        {this.state.product.title}
      </div>
    )
  }
}

export default singleProduct
