import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import Header from "./header.js"
import Hero from "./hero.js"
import Products from "./products"
import singleProduct from "./single-product"
import Store from "./store"
import About from "./about"
import News from "./news"
import Footer from "./footer"
import "./app.css"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Hero />
          <Route exact path="/" component={Store} />
          <Route path="/category/:category" component={Store} />
          <Route exact path="/about" component={About} />
          <Route exact path="/news" component={News} />
          <Route path="/product/:singleproduct" component={singleProduct} />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }

}

export default App
