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
            <h2>Pop-up Store!</h2>
            <h3>Stockholm</h3>
            <p>Join us at <a href="http://www.snickarsrecords.com/">Snickars Records</a>on Saturday the 28th of April.
            We are taking over the store&apos;s DJ booth from 6PM to play our favorite tunes. We&apos;ll also have a
            limited amount of some of our t-shirt designs for sale.</p>
            <ul className="event-address">
              <li>Snickars Records</li>
              <li>Hökens gata 11</li>
              <li>116 46 Stockholm</li>
              <li>08 643 13 44</li>
            </ul>
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
