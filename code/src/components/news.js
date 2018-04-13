import React from "react"
import "./news.css"
import "./app.css"

class News extends React.Component {
  render() {
    return (
      <div className="main-content">
        <h1>News</h1>
        <div className="content-box news">
          <div className="news-section-left">
            <p className="created-date">2018-04-12</p>
            <h2>28 April</h2>
            <h3>Release party</h3>
            <p>About Lunacy blah blah blah blah blah blah</p>
            <a href="">Lorem</a>
          </div>
          <div className="news-section-right">
            <img src="./images/lunacy-news-img-1.png" />
            <img src="./images/lunacy-news-img-2.png" />
          </div>
        </div>
      </div>
    )
  }
}

export default News
