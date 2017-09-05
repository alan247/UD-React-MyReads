import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem'

class BookShelf extends Component {
  render() {


  	console.log(this.props.books)
    return(
			<div className="bookshelf">
	      <h2 className="bookshelf-title">Currently Reading</h2>
	      <div className="bookshelf-books">
	        <ol className="books-grid">
	          <li>
	          	console.log(books);
	            <BookItem />
	          </li>
	        </ol>
	      </div>
	    </div>
   	)
  }
}

export default BookShelf