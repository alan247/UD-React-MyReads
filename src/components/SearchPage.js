import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom'
import BookItem from './BookItem'


class SearchPage extends Component {
  static propTypes = {
    books: PropTypes.object.isRequired
  }

  state = {
    query: '',
    searchResults: []
  }

  searchBooks = (query) => {
    if (query !== ''){
      BooksAPI.search(query, 20).then((searchResults) => {
        if (!searchResults.error) {
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
    this.setState({query: query.trim()},
      () => this.searchBooks(this.state.query)
    )
  }



  clearQuery = () => {
    this.setState({ query: '' })
  }

  render() {
    // const books = this.props.books

    return(
              <div className="search-books">
                <div className="search-books-bar">
                  <Link
                    to="/" className="close-search"
                  >Close</Link>
                  <div className="search-books-input-wrapper">
                    {/*
                      NOTES: The search from BooksAPI is limited to a particular set of search terms.
                      You can find these search terms here:
                      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                      you don't find a specific author or title. Every search is limited by search terms.
                    */}

                     {console.log(this.state.searchResults)}
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

export default SearchPage
