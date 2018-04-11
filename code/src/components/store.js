import React from "react"
import Products from "./products"
import { Link } from "react-router-dom"
import "./store.css"

class Store extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      categories: []
    }
  }

  componentDidMount() {
    fetch("https://api.tictail.com/v1.25/stores/5HSL/products")
    .then((response) => {
      return response.json()
    }).then((json) => {
      //products
      this.setState({products: json})
      return fetch("https://api.tictail.com/v1.25/stores/5HSL/categories")
    }).then((response) => {
      return response.json()
    }).then((json) => {
      //categories
      this.setState({categories: json})
    })
  }

  renderCategories = (categories) => {
    const cat = categories.map((category) => {
      return (
        <Link className="sidebar-links" to={`/category/${category.title}`}
        >{category.title}</Link>)
      })
      return (
        <nav className="sidebar">
          <h2>Products</h2>
          {cat}
          <Link className="sidebar-links" to="/">All categories</Link>
        </nav>
      )
  }

  render() {
    const categoryName = this.props.match.params.category
    console.log(categoryName)
    return (
      <div className="store">
        <div className="main-content">
        {/* {this.state.store.name} */}
          {this.renderCategories(this.state.categories)}

          <Products
            filtered={categoryName}
            products={this.state.products} />
        </div>
      </div>
    )
  }
}

export default Store
