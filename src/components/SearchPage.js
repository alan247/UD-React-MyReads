import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom'
import BookItem from './BookItem'


class SearchPage extends Component {
  static propTypes = {
    onSetShelf: PropTypes.func.isRequired
  }


  state = {
    query: '',
    searchResults: []
  }


  searchBooks = (query) => {
    const library = this.props.library
    const shelves = Object.keys(library)

    if (query){
      BooksAPI.search(query, 20).then((searchResults) => {
        if (!searchResults.error) {

          // Set current shelf if result book is in library
          for(const item of searchResults) {
            for(const shelf of shelves) {
              for(const book of library[shelf]){
                if(item.id === book.id){
                  item.shelf = shelf
                }
              }
            }
          }
          this.setState({ searchResults })
        } else {
          this.setState({ searchResults: []})
        }
      })
    } else {
      this.setState({ searchResults: []})
    }
  }


  updateQuery = (query) => {
    this.setState({ query },
      () => this.searchBooks(this.state.query)
    )
  }


  render() {
    const setShelf = this.props.onSetShelf

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/" className="close-search"
          >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchResults.map(book => (
              <li key={book.id}>
                <BookItem
                  book={ book }
                  onSetShelf={ setShelf }
                  shelf={ book.shelf }
                  searchPage={ true }
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
      )
  }
}

export default SearchPage
