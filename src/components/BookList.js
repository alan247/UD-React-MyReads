import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'


class BookList extends Component {
  render() {
    const books = this.props.books
    console.log(books)
    const shelves = Object.keys(books)
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>

            {shelves.map(shelf => (
              <div key={shelf}>
                <BookShelf
                  books={books[shelf]}
                />
              </div>
            ))}




          </div>
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

export default BookList
