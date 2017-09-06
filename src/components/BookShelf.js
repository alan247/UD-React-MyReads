import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
		shelfName: PropTypes.string.isRequired
  }

  render() {
		const formatTitle = (string) => string.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())

    const books = this.props.books
    const shelfName = formatTitle(this.props.shelfName)

    return(
			<div className="bookshelf">
	      <h2 className="bookshelf-title">{shelfName}</h2>
	      <div className="bookshelf-books">
	        <ol className="books-grid">

						{books.map(book => (
	            <li key={book.id}>
	              <BookItem
	              	title={book.title}
	              	authors={book.authors}
	              	imageLinks={book.imageLinks}
	              />
	            </li>
	          ))}


	        </ol>
	      </div>
	    </div>
   	)
  }
}

export default BookShelf