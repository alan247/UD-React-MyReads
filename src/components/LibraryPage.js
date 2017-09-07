import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookItem from './BookItem'


class LibraryPage extends Component {
  static propTypes = {
    library: PropTypes.object.isRequired,
    onSetShelf: PropTypes.func.isRequired
  }

  formatTitle = (string) => string.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())

  render() {
    const library = this.props.library
    const shelves = Object.keys(library)
    const setShelf = this.props.onSetShelf

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">

          {shelves.map(shelf => (
            <div key={ shelf } className="bookshelf">

              <h2 className="bookshelf-title">{ this.formatTitle(shelf) }</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                  {library[shelf].map(book => (
                    <li key={book.id}>
                      <BookItem
                        library={ this.props.library }
                        book={ book }
                        shelf={ shelf }
                        onSetShelf={ setShelf }
                      />
                    </li>
                  ))}

                </ol>
              </div>
            </div>





            // <div key={shelf}>
            //   <BookShelf
            //     books={ books[shelf] }
            //     shelfName={ shelf }
            //     onSetShelf={ setShelf }
            //   />
            // </div>
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
