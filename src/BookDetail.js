import React from 'react'

class Book extends React.Component {
  render() {
    return (
      <div className="Book content">
        <div className="columns">
          <div className="column">
            <img alt="The Brothers Karamazov" src="/images/the-brothers-karamazov.jpg" />
          </div>
          <div className="column">
            <h1 className="title is-2">The Brothers Karamazov</h1>
            <h2 className="title is-3">Fyodor Dostoevsky</h2>
            <ul>
              <li>Year: 1880</li>
              <li>Pages: 824</li>
              <li>Language: Russian</li>
              <li>Country: Russia</li>
              <li><a href="#">Wikipedia</a></li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
}

export default Book