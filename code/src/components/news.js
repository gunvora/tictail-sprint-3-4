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
        <div className="content-box news">
          <div className="news-section-left">
            <p className="created-date">2017-09-29</p>
            <h2>Mexico Relief collaboration</h2>
            <h3>Mexico City</h3>
            <p>Mexico was hit by a severe earthquake on September 19. The capital Mexico City, and many neighboring
            towns suffered massive damage as hundreds of buildings collapsed, thus trapping many people alive inside.
            The Mexican Red Cross is currently taking care of many of the victims and is need of any type of aid. </p>
            <p>In support of this crisis, some of the music producers in our community have put together a
            compilation with the purpose of donating all proceeds to the Mexican Red Cross. Internationally renowned producers,
            such as Legowelt, Silent Servant, Tevo Howard, Alessandro Adriani and Black Merlin have contributed with amazing music.</p>
            <p>To suppport this incredible effort, we collaborated by designing the art work. For more information about the Mexico Relief project, please visit the Bandcamp page.</p>
            <p><a href="https://mexicorelief.bandcamp.com/">Mexico Relief</a></p>
          </div>
          <div className="news-section-right">
            <img src="./images/mexicorelief.jpg" />
          </div>
        </div>
      </div>
    )
  }
}

export default News
