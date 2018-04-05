import React from "react"
import Products from "./products"
import Sidebar from "./sidebar.js"
import "./app.css"

class App extends React.Component {
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

  render() {
    if (!this.state.store) return null
    console.log(this.state)
    return (
      <div className="container">
        {this.state.store.name}
        <Products
          products={this.state.products} />
      </div>
    )
  }

}

export default App
