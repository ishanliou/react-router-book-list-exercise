import React from 'react'

class Books extends React.Component {
  render() {
    return (
      <div className="Books">
        <input className="input is-large" type="text" placeholder="Filter The List" />
        <ul className="menu-list">
          <li><a href="#">The Possessed</a></li>
          <li><a href="#">Middlemarch</a></li>
          <li><a href="#">Invisible Man</a></li>
        </ul>
      </div>
    )
  }
}

export default Books