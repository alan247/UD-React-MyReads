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
    for(const shelfName of shelves) {
      if(this.state[shelfName].includes(book)) {
        const newShelf = this.state[shelfName].filter((item) => book !== item)
        this.setState(
          {[shelfName]: newShelf },
          () => {BooksAPI.update(book, shelf)
            .then(r => console.log('Updated', r))}
        )
      }
    }

    if(shelf !== 'none') {
      this.setState({
        [shelf]: [...this.state[shelf], book]
      })
    }
  }


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <LibraryPage
            library={this.state}
            onSetShelf={this.setShelf}
          />
        )}/>

        <Route exact path="/search" render={() => (
          <SearchPage
            library={this.state}
            onSetShelf={this.setShelf}
          />
        )}/>
      </div>
    )
  }
}


export default BooksApp
