import React, { Component } from 'react'
import PropTypes from 'prop-types'


class BookItem extends Component {
  static propTypes = {
    imageLinks: PropTypes.object,
    onSetShelf: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired
  }

  render() {
		const setShelf = this.props.onSetShelf
		const book = this.props.book
		const shelf = this.props.shelf
		const searchPage = this.props.searchPage

    return(
			<div className="book">
	      <div className="book-top">
	        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})` }}></div>
	        <div className="book-shelf-changer">
	          <select
							onChange={() => {
								setShelf(book, this.select.value)
							}}
							ref={select => this.select = select}
							value={ shelf }
	          >
	            <option value="none" disabled={ (!searchPage) ? true : false }>Move to...</option>
	            <option value="currentlyReading">Currently Reading</option>
	            <option value="wantToRead">Want to Read</option>
	            <option value="read">Read</option>
	            { !searchPage &&
    						<option value="none">Remove</option>
    					}
	          </select>
	        </div>
	      </div>
	      <div className="book-title">{book.title}</div>
	      <div className="book-authors">{book.authors}</div>
	    </div>
    )
  }
}

export default BookItem

