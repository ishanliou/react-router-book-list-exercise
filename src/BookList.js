import React from 'react'
import { Link } from 'react-router-dom'

class Books extends React.Component {

  state = { filter: "" }

  updateFilter(evt) {
    this.setState({
      filter: evt.target.value
    })
  }

  render() {
    const books = this.props.books.filter(b => b.title.toLowerCase().includes(this.state.filter.toLowerCase()))
    return (
      <div className="Books">
        <input className="input is-large" onChange={this.updateFilter.bind(this)} type="text" value={this.state.filter} placeholder="Filter The List" />
        <ul className="menu-list">
          {books.map((b, index) => (
            <li key={index}>
              <Link to={`/books/${b._id}`}>{b.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Books