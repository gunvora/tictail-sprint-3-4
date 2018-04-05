import React from "react"
import Products from "./products"
// import Sidebar from "./sidebar.js"
import "./app.css"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      store: null,
      products: [],
      categories: [],
      filtered: null
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
        <div
          onClick={() => {
            this.setState({filtered: category.title})
        }}
        >{category.title}</div>)
      })
      return (
        <div className="sidebar">
          {cat}
          <div onClick={() => {
            this.setState({
              filtered: null
            })
          }}>All categories</div>
        </div>
      )
  }

  render() {
    if (!this.state.store) return null
    console.log(this.state)
    return (
      <div className="container">
        {this.state.store.name}
        <div className="main">
          {this.renderCategories(this.state.categories)}

          {/* <Sidebar
            categories={this.state.categories} /> */}
          <Products
            filtered={this.state.filtered}
            products={this.state.products} />
        </div>
      </div>
    )
  }

}

export default App
