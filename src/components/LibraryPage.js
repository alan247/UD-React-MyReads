import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'


class LibraryPage extends Component {
  static propTypes = {
    books: PropTypes.object.isRequired,
    onSetShelf: PropTypes.func.isRequired
  }

  render() {
    const books = this.props.books
    const shelves = Object.keys(books)
    const setShelf = this.props.onSetShelf
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map(shelf => (
            <div key={shelf}>
              <BookShelf
                books={ books[shelf] }
                shelfName={ shelf }
                onSetShelf={ setShelf }
              />
            </div>
          ))}
        </div>
        <div className="open-search">
          <Link
            to="/search"
          >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default LibraryPage
