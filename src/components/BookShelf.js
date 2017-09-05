import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import BookItem from './BookItem'

class BookShelf extends Component {
  render() {
    const books = this.props.books
    const shelfName = this.props.shelfName
    console.log(books)

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
	              	thumbnail={book.imageLinks.thumbnail}
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