import React from "react"
import "./footer.css"

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div><a href="https://m.facebook.com/LNCYIP/" target="_blank">Facebook</a></div>
        <div><a href="https://www.instagram.com/lncyip/" target="_blank">Instagram</a></div>
        <div><a href="mailto:teamyellow@technigo.io">Email</a></div>
      </div>
    )
  }
}

export default Footer
