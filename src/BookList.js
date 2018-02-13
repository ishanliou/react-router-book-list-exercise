import React from 'react'
import { Link } from 'react-router-dom'

class Books extends React.Component {

  state = {
    filterString: ''
  }

  updateFilter() {
    this.setState({
      filterString: this.refs.filterinput.value
    })
  }

  render() {
    const { filterString } = this.state
    const books = this.props.books.filter((b) => {
      return b.title.toLowerCase().includes(filterString.toLowerCase())
    })

    return (
      <div className="Books">
        <input onChange={this.updateFilter.bind(this)} ref="filterinput" className="input is-large" type="text" placeholder="Filter The List" />
        <ul className="menu-list">
          {books.map((b) => {
            return (
              <li key={b._id}>
                <Link to={`/books/${b._id}`}>{b.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Books