import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import Header from "./header.js"
import Hero from "./hero.js"
import Products from "./products"
import About from "./about"
import Footer from "./footer"
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
        <nav className="sidebar">
          <h2>Products</h2>
          {cat}
          <div onClick={() => {
            this.setState({
              filtered: null
            })
          }}>All categories</div>
        </nav>
      )
  }

  render() {
    if (!this.state.store) return null
    console.log(this.state)
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Hero />
          <div className="store-section">
          {/* {this.state.store.name} */}
            {this.renderCategories(this.state.categories)}

            <Products
              filtered={this.state.filtered}
              products={this.state.products} />
          </div>
          <Route exact path="/about" component={About} />
          {/* <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} /> */}
          <Footer />
        </div>
      </BrowserRouter>
    )
  }

}

export default App
