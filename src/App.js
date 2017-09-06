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

        for(let name of stateNames) {
          stateObj[name] = books.filter((item) => item.shelf === name)
        }

        this.setState(stateObj)
    })
  }




  render() {
    return (

      <div className="app">
        <Route exact path="/" render={() => (
          <LibraryPage
            books={this.state}
          />
        )}/>

        <Route exact path="/search" render={() => (
          <SearchPage
            books={this.state}
          />
        )}/>
      </div>
    )
  }

}

export default BooksApp
