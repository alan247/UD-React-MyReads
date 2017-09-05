import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem'

class BookShelf extends Component {
  render() {
    return(
			<div className="bookshelf">
	      <h2 className="bookshelf-title">Currently Reading</h2>
	      <div className="bookshelf-books">
	        <ol className="books-grid">
	          <li>
	            <BookItem />
	          </li>
	        </ol>
	      </div>
	    </div>
   	)
  }
}

export default BookShelf