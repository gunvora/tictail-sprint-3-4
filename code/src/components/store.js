import React from "react"
import Products from "./products"
import {Link, withRouter} from "react-router-dom"
import "./store.css"

class Store extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      store: null,
      products: [],
      categories: []
    }
  }

  componentDidMount() {
    fetch("https://api.tictail.com/v1.25/stores/5HSL").then((response) => {
      return response.json()
    }).then((json) => {
      //store info
      this.setState({store: json})
      return fetch("https://api.tictail.com/v1.25/stores/5HSL/products")
    }).then((response) => {
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
        <Link className="sidebar-links" to={`/store/${category.title}`}
        >{category.title}</Link>)
      })
      return (
        <nav className="sidebar">
          <h2>Products</h2>
          {cat}
          <Link className="sidebar-links" to="/store/all-categories">All categories</Link>
        </nav>
          // <div onClick={() => {
          //   this.setState({
          //     filtered: null
          //   })
          // }}>All categories</div>
      )
  }
  // UNSAFE_componentWillReceiveProps(categories)

  render() {
    if (!this.state.store) return null
    return (
      <div className="store">
        <div className="store-section">
        {/* {this.state.store.name} */}
          {this.renderCategories(this.state.categories)}

          <Products
            filtered={this.state.filtered}
            category={this.state.categories}
            products={this.state.products} />
        </div>
      </div>
    )
  }
}

export default withRouter(Store)
