import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import LibraryPage from './components/LibraryPage'
import SearchPage from './components/SearchPage'


class BooksApp extends Component {

  state = {
      currentlyReading: [],
      wantToRead: [],
      read: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
        const stateObj = {}
        const stateNames = Object.keys(this.state)

        for(const name of stateNames) {
          stateObj[name] = books.filter((item) => item.shelf === name)
        }

        this.setState(stateObj)
    })
  }


  setShelf = (book, shelf) => {
    const shelves = Object.keys(this.state)

    // Remove from current shelf
    for(const shelfItem of shelves) {
      if(this.state[shelfItem].includes(book)) {
        const newShelf = this.state[shelfItem].filter((item) => book !== item)
        this.setState({ [shelfItem]: newShelf })
      }
    }


    // Is it already in the right shelf

    // Remove it from the old shelf (if applicable)



    // Place it in the new shelf
    this.setState({
      [shelf]: [...this.state[shelf], book]
    })

    book.shelf = shelf

  }


  render() {
    return (

      <div className="app">
        <Route exact path="/" render={() => (
          <LibraryPage
            books={this.state}
            onSetShelf={this.setShelf}
          />
        )}/>

        <Route exact path="/search" render={() => (
          <SearchPage
            books={this.state}
            onSetShelf={this.setShelf}
          />
        )}/>
      </div>
    )
  }

}

export default BooksApp
